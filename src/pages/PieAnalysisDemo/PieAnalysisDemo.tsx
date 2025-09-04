import React from 'react';
import PieAnalysis from '../../components/PieAnalysis/PieAnalysis';
import './PieAnalysisDemo.scss';

const PieAnalysisDemo: React.FC = () => {
  const mockData = [
    { holder: 'Группа ИнтерРАО', share_percent: '32.56' },
    { holder: 'Free Float', share_percent: '31.24' },
    { holder: 'Роснефтегаз', share_percent: '27.63' },
    { holder: 'ФСК ЕЭС', share_percent: '8.57' },
  ];

  return (
    <div className="pie-analysis-demo">
      <h1>Pie Analysis Component Demo</h1>
      
      <div className="pie-analysis-demo__grid">
        <div className="pie-analysis-demo__item">
          <h3>Desktop View - Default</h3>
          <div className="pie-analysis-demo__container">
            <PieAnalysis data={mockData} />
          </div>
        </div>

        <div className="pie-analysis-demo__item">
          <h3>Desktop View - With Tooltip</h3>
          <div className="pie-analysis-demo__container">
            <PieAnalysis data={mockData} showTooltip={true} />
          </div>
        </div>

        <div className="pie-analysis-demo__item">
          <h3>Mobile View - Default</h3>
          <div className="pie-analysis-demo__container pie-analysis-demo__container--mobile">
            <PieAnalysis data={mockData} />
          </div>
        </div>

        <div className="pie-analysis-demo__item">
          <h3>Mobile View - With Tooltip</h3>
          <div className="pie-analysis-demo__container pie-analysis-demo__container--mobile">
            <PieAnalysis data={mockData} showTooltip={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieAnalysisDemo;