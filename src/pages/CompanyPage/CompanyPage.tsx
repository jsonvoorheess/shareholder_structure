import React from 'react'

import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo'

import RadarChart from '../../components/RadarChart/RadarChart'
import Tabs from '../../components/Tabs/Tabs'
import ShareholderStructure from '../../components/ShareholderStructure/ShareholderStructure'

import './CompanyPage.scss'

const CompanyPage: React.FC = () => {

  const breadcrumbsData = [
    { label: "Главная", href: "/" },

    { label: "Компании", href: "/companies" },
    { label: "Сбер П" }
  ]

  const radar_chart_data = {

    labels: ["Оценка стоимости", "Рост", "Прошлые\nпоказатели", "Финансовое\nсостояние", "Дивиденды"],
    values: [75, 85, 70, 60, 80]

  }

  const navigationTabs = [
    { key: "info", label: "Информация", content: <ShareholderStructure /> },

    { key: "financial", label: "Финансовые показатели", content: <div>Финансовые показатели</div> },
    { key: "dividends", label: "Дивиденды", content: <div>Дивиденды</div> },

    { key: "analysis", label: "Анализ", content: <div>Анализ</div> },
    { key: "calendar", label: "Календарь", content: <div>Календарь</div> },

    { key: "documents", label: "Документы", content: <div>Документы</div> },
  ]

  return (

    <div className="company-page">
      <Header />
      

      <div className="company-page__hero">
        <div className="company-page__container">

          <Breadcrumbs items={breadcrumbsData} />
          
          <div className="company-page__hero-content">

            <div className="company-page__info-section">
              <CompanyInfo 
                ticker="Сбер П"

                name="SIBN"
                sector="Энергетика"
                currentPrice={239.18}

                marketCap="5373.47 млрд ₽"
                yearChange={-6.8}
              />

            </div>
            
            <div className="company-page__chart-section">

              <RadarChart data={radar_chart_data} />
            </div>

          </div>
        </div>

      </div>
      
      <div className="company-page__content">

        <div className="company-page__container">
          <Tabs items={navigationTabs} defaultActiveKey="info" />

        </div>
      </div>

    </div>
  )
}

export default CompanyPage