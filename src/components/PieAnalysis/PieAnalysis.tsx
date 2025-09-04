import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieAnalysis.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieAnalysisProps {
  data: Array<{
    holder: string;
    share_percent: string;
  }>;
  showTooltip?: boolean;
  interactiveTooltip?: boolean;
}

const PieAnalysis: React.FC<PieAnalysisProps> = ({ 
  data, 
  showTooltip = false,
  interactiveTooltip = false 
}) => {
  const getChartColors = (): string[] => {
    return [
      '#3B82F6',  
      '#EF4444',  
      '#F59E0B',  
      '#10B981',  
      '#8B5CF6',  
      '#EC4899',  
    ];
  };

  const chartData = {
    labels: data.map(item => item.holder),
    datasets: [
      {
        data: data.map(item => parseFloat(item.share_percent)),
        backgroundColor: getChartColors(),
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: showTooltip || interactiveTooltip,
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed.toFixed(1) + '%';
          }
        }
      }
    },
    cutout: '70%',
  };

  return (
    <div className="pie-analysis">
      <div className="pie-analysis__chart-wrapper">
        <div className="pie-analysis__chart">
          <Doughnut data={chartData} options={chartOptions} />
          {showTooltip && !interactiveTooltip && (
            <div className="pie-analysis__tooltip">
              <div className="pie-analysis__tooltip-content">
                <span className="pie-analysis__tooltip-label">Группа ИнтерРАО</span>
                <span className="pie-analysis__tooltip-value">32.56 %</span>
              </div>
            </div>
          )}
        </div>
        <div className="pie-analysis__legend">
          {data.map((item, index) => (
            <div key={index} className="pie-analysis__legend-item">
              <span 
                className="pie-analysis__legend-dot"
                style={{ backgroundColor: getChartColors()[index] }}
              ></span>
              <span className="pie-analysis__legend-label">{item.holder}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieAnalysis;