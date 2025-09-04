import React, { useState } from 'react'
import './Header.scss'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">

      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-icon">IE</span>
          <span className="header__logo-text">INVESTERA</span>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <button className="header__nav-item">Аналитика и новости</button>

          <div className="header__nav-item header__nav-dropdown">
            Инструменты
            <span className="header__nav-arrow">▼</span>
          </div>
          <button className="header__nav-item">Компании</button>
          <button className="header__nav-item">Дивиденды</button>
          <div className="header__nav-item header__nav-dropdown">
            Продукты
            <span className="header__nav-arrow">▼</span>
          </div>

          <div className="header__nav-item header__nav-dropdown">
            Обучение
            <span className="header__nav-arrow">▼</span>
          </div>
        </nav>

        <div className="header__actions">
          <button className="header__search">

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M19 19L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <button className="header__user">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">

              <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 20C2 16 6 14 10 14C14 14 18 16 18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="header__login">Подписаться</button>

        </div>

        <button className="header__burger" onClick={toggleMobileMenu}>
          <span></span>

          <span></span>
          <span></span>
        </button>

        <div className="header__mobile-menu">
          <span className="header__mobile-text">Выйти</span>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="14" y="3" fill="transparent"/>
            <path d="M3 4H17M3 10H17M3 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>

          </svg>
        </div>


      </div>
    </header>
  )
}

export default Header