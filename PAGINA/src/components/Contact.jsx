import React from 'react'

const Contact = () => {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Contacto</span>
          <h2>Solicita tu cotización sin compromiso</h2>
          <p>
            Contáctanos por teléfono, WhatsApp o correo para solicitar una cotización.
          </p>
        </header>

        <div className="contact-layout">
          <aside className="contact-card" aria-label="Datos de contacto">
            <h3>Hablemos</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.3A19.5 19.5 0 0 1 3.3 9.8 2 2 0 0 1 5.3 7.6h3a2 2 0 0 1 2 1.7l.4 2.1a2 2 0 0 1-.6 1.8L8.8 14a16 16 0 0 0 7.2 7.2l1.8-1.3a2 2 0 0 1 1.8-.6l2.1.4a2 2 0 0 1 1.7 2Z" /></svg>
                </span>
                <div>
                  <strong>Teléfono</strong>
                  <a className="contact-link" href="tel:+50662395138">+506 6239-5138</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>
                </span>
                <div>
                  <strong>Correo</strong>
                  <a className="contact-link" href="mailto:climarivera186@gmail.com">climarivera186@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 21s-6.7-5.3-9.4-9.1A6.1 6.1 0 0 1 12 4.5a6.1 6.1 0 0 1 9.4 7.4C18.7 15.7 12 21 12 21Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                </span>
                <div>
                  <strong>Facebook</strong>
                  <a className="contact-link" href="https://www.facebook.com/share/18ztjkNJkY/" target="_blank" rel="noreferrer">
                    Ver perfil
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
