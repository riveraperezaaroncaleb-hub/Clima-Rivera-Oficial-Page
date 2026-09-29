import React, { useState } from 'react'
import logoLight from '../assets/logo-light.jpg'
import logoDark from '../assets/logo-dark.jpg'

const quoteUrl =
  'https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Aires y precios', href: '#aires' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <nav className="nav container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Clima Rivera Multiservicios, inicio">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Clima Rivera Multiservicios"
            className="brand-logo"
          />
        </a>
        <div id="primary-navigation" className={`nav-links${isMenuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
          >
            <span className="theme-icon" aria-hidden="true">
              {isDarkMode ? (
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M21 12.8A8.8 8.8 0 0 1 11.2 3a8.8 8.8 0 1 0 9.8 9.8Z" />
                </svg>
              )}
            </span>
          </button>
          <a className="btn btn-primary" href={quoteUrl} target="_blank" rel="noreferrer">
            Cotización sin compromiso
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
