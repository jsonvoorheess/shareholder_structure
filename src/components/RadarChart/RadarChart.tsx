import React from 'react'
import { Radar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,

  LineElement,
  Filler,
  Tooltip,
  Legend

} from 'chart.js'
import './RadarChart.scss'


ChartJS.register(
  RadialLinearScale,

  PointElement,
  LineElement,
  Filler,

  Tooltip,
  Legend
)

const RadarChart = ({ data }: { data: { labels: string[], values: number[] } }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Оценка стоимости',
        data: data.values,
        backgroundColor: '#00800099',
        borderColor: '#008000',
        borderWidth: 2,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#4FD1C5',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed.r;
          }
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(227, 225, 225, 1)',
        },
        grid: {
          color: 'rgb(240, 236, 236)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12,
            weight: '500',
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    // <div className="radar-chart">
    <>
    {/* <h3 className="radar-chart__title">Оценка стоимости</h3> */}
      <div className="radar-chart__container">
        <Radar data={chartData} options={options} />
      </div>
    </>
    // </div>
  );
};

export default RadarChart;