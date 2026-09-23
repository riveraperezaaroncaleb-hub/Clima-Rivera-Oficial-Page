import React from 'react'

const Contact = () => {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Contacto</span>
          <h2>Solicita tu cotización sin compromiso</h2>
          <p>
            Estamos listos para ayudarte a elegir la mejor solución para tu proyecto,
            hogar o negocio.
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
                  <div className="contact-link">+506 6239-5138</div>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>
                </span>
                <div>
                  <strong>Correo</strong>
                  <div className="contact-link">climarivera186@gmail.com</div>
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

          <div className="form-card">
            <h3>Envíanos un mensaje</h3>
            <form action="mailto:climarivera186@gmail.com" method="post" encType="text/plain">
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Nombre</label>
                  <input id="name" name="name" type="text" placeholder="Tu nombre" />
                </div>

                <div className="field">
                  <label htmlFor="email">Correo</label>
                  <input id="email" name="email" type="email" placeholder="tu@correo.com" />
                </div>

                <div className="field">
                  <label htmlFor="phone">Teléfono</label>
                  <input id="phone" name="phone" type="tel" placeholder="(55) 1234 5678" />
                </div>

                <div className="field">
                  <label htmlFor="subject">Asunto</label>
                  <input id="subject" name="subject" type="text" placeholder="Instalación o mantenimiento" />
                </div>

                <div className="field full">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
