import React from 'react'
import logoDark from '../assets/logo-dark.jpg'
import logoLight from '../assets/logo-light.jpg'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header className="topbar">
      <nav className="nav container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Logo ClimaCore"
            className="brand-logo"
          />
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
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
          <a className="btn btn-primary" href="#contacto">
            Solicitar Cotización
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
