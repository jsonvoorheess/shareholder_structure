import React from 'react';
import './CompanyInfo.scss';

interface CompanyInfoProps {
  ticker: string;
  name: string;
  sector: string;
  currentPrice: number;
  marketCap: string;
  yearChange: number;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  ticker,
  name,
  sector,
  currentPrice,
  marketCap,
  yearChange,
}) => {
  return (
    <div className="company-info">
      <div className="company-info__header">
        <div className="company-info__logo">
          <div className="company-info__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#FFD700"/>
              <path d="M16 8C16 8 18 10 18 16C18 22 16 24 16 24" stroke="#1A202C" strokeWidth="2"/>
              <path d="M12 10C12 10 14 12 14 16C14 20 12 22 12 22" stroke="#1A202C" strokeWidth="2"/>
              <circle cx="20" cy="16" r="2" fill="#1A202C"/>
            </svg>
          </div>
        </div>
        <div className="company-info__title">
          <h1>{ticker}</h1>
          <p>{name} • {sector}</p>
        </div>
      </div>
      
      <div className="company-info__stats">
        <div className="company-info__stat">
          <span className="company-info__stat-label">Последняя цена</span>
          <span className="company-info__stat-value">{currentPrice.toFixed(2)} ₽</span>
        </div>
        
        <div className="company-info__stat">
          <span className="company-info__stat-label">Капитализация</span>
          <span className="company-info__stat-value">{marketCap}</span>
        </div>
        
        <div className="company-info__stat">
          <span className="company-info__stat-label">Динамика за год</span>
          <span className={`company-info__stat-value ${yearChange < 0 ? 'company-info__stat-value--negative' : 'company-info__stat-value--positive'}`}>
            {yearChange > 0 ? '+' : ''}{yearChange.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;