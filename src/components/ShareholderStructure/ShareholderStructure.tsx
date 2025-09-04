import React, { useEffect, useState } from 'react'
import { Table, Spin } from 'antd'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import axios from 'axios'

import { Shareholder } from '../../types/shareholder'
import { processShareholderData, getChartColors } from '../../utils/dataProcessor'
import './ShareholderStructure.scss'

ChartJS.register(ArcElement, Tooltip, Legend)

const ShareholderStructure: React.FC = () => {
  const [shareholderData, setShareholderData] = useState<Shareholder[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    loadData()
  }, [])


  const loadData = async () => {
    try {

      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const response = await axios.get("/data.json")
      const responseData = response.data

      const processed_data = processShareholderData(responseData.SBER)
      setShareholderData(processed_data)
    } catch (err) {

      const localData = await import('../../data/data.json')
      const processed_data = processShareholderData(localData.SBER)
      setShareholderData(processed_data)

    } finally {
      setIsLoading(false)
    }
  }

  const tableColumns = [
    {
      title: "Акционер",
      dataIndex: "holder",

      key: "holder",
      className: "holder-column",
    },

    {
      title: "% доля",
      dataIndex: "share_percent",
      key: "share_percent",
      className: "percent-column",
      render: (val: string) => `${parseFloat(val).toFixed(1)} %`,

    },
  ]

  const pieChartData = {

    labels: shareholderData.map(item => item.holder),
    datasets: [
      {
        data: shareholderData.map(item => parseFloat(item.share_percent)),

        backgroundColor: getChartColors(),
        borderWidth: 0,
      },

    ],
  }

  const chartOptions = {
    responsive: true,

    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,

      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed.toFixed(1) + '%'

          }
        }
      }
    },
    cutout: '70%',
  }

  const getCurrentDate = () => {

    const date = new Date()
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')

    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }

  if (isLoading) {

    return (
      <div className="shareholder-structure loading">
        <Spin size="large" />

      </div>
    )
  }

  return (
    <div className="shareholder-structure">

      <div className="shareholder-structure__card">
        <h2 className="shareholder-structure__title">Структура акционеров</h2>
        
        <div className="shareholder-structure__content">

          <div className="shareholder-structure__table-container">
            <Table
              columns={tableColumns}

              dataSource={shareholderData.map((item, idx) => ({ ...item, key: idx }))}
              pagination={false}
              className="shareholder-table"
            />

            <div className="shareholder-structure__date">
              Дата последнего обновления этой структуры: {getCurrentDate()}
            </div>

          </div>
          
          <div className="shareholder-structure__chart-container">
            <div className="shareholder-structure__chart">

              <Doughnut data={pieChartData} options={chartOptions} />
            </div>

            <div className="shareholder-structure__legend">
              {shareholderData.map((item, index) => (

                <div key={index} className="shareholder-structure__legend-item">
                  <span 
                    className="shareholder-structure__legend-dot"

                    style={{ backgroundColor: getChartColors()[index] }}
                  ></span>
                  <span className="shareholder-structure__legend-label">{item.holder}</span>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ShareholderStructure