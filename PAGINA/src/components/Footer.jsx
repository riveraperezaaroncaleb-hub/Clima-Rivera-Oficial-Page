import React from 'react'
import logoLight from '../assets/logo-light.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand" aria-label="Logo de ClimaCore">
              <img src={logoLight} alt="Logo ClimaCore" className="footer-logo" />
            </div>
            <p className="footer-copy">
              Soluciones profesionales de climatización para hogares, negocios y
              espacios comerciales con atención personalizada.
            </p>
          </div>

          <div>
            <h3>Enlaces rápidos</h3>
            <ul className="footer-links">
              <li><a href="#inicio"><span className="footer-link-icon">›</span>Inicio</a></li>
              <li><a href="#servicios"><span className="footer-link-icon">›</span>Servicios</a></li>
              <li><a href="#nosotros"><span className="footer-link-icon">›</span>Nosotros</a></li>
              <li><a href="#contacto"><span className="footer-link-icon">›</span>Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3>Redes</h3>
            <ul className="footer-social">
              <li>
                <a href="https://www.facebook.com/share/18ztjkNJkY/" target="_blank" rel="noreferrer">
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.7-1.6H17V2.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2V10.8H8v3.2h2.4v8h3.1Z" /></svg>
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/50662395138" target="_blank" rel="noreferrer">
                  <span className="footer-link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.5 11.5 0 0 0 3.8 17.5L2.5 21l3.6-1.1A11.5 11.5 0 1 0 20.5 3.5Zm-6.5 3.4c.3 0 .7.1 1 .3.3.2.8.7.8 1.7 0 1-.8 1.9-1.1 2.1-.2.2-.5.2-.9.2-.2 0-.5 0-.8-.1-.8-.2-1.5-.8-2-1.4-.5-.6-.9-1.4-.9-2.3 0-.3.1-.6.3-.8.2-.2.4-.3.7-.3h.3c.2 0 .5 0 .6.4.2.4.3.6.5 1 .1.2.1.5-.1.7-.1.1-.2.3-.3.4-.1.1-.2.2-.1.5.1.4.7 1.1 1.4 1.7.9.7 1.6 1 1.9 1.2.3.2.5.1.7 0 .3-.2.7-.9 1-.9.2-.1.4-.1.7-.1h.4c.3 0 .5.2.6.3.2.2.3.4.2.7-.1.5-.9 1.1-1.4 1.5-.6.4-1.1.8-1.8.9-.5.1-1 .1-1.6 0-.8-.1-1.5-.5-2.2-1-.8-.6-1.5-1.4-2-2.3-.6-.9-.8-1.8-.7-2.7.1-.7.4-1.3.9-1.7.4-.4.9-.6 1.5-.7h.8Z" /></svg>
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">© 2026 ClimaCore. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}

export default Footer
