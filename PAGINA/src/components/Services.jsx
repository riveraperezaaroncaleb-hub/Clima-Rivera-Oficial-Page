import React from 'react'

const whatsappLink =
  'https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio'

const services = [
  {
    title: 'Aire acondicionado',
    description:
      'Instalación, mantenimiento preventivo, reparación y diagnóstico, limpieza y recarga de gas.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="9" rx="2" />
        <path d="M6 8h12M7 16v2m5-2v3m5-3v2" />
      </svg>
    ),
  },
  {
    title: 'Electricidad',
    description: 'Consulta el alcance de este servicio por WhatsApp.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m13.5 2-9 12h7l-.5 8 9-12h-7l.5-8Z" />
      </svg>
    ),
  },
  {
    title: 'Mantenimiento',
    description: 'Consulta el alcance de este servicio por WhatsApp.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5a4 4 0 0 0-5.3-5.3l2.4 2.4-2.8 2.8-2.4-2.4a4 4 0 0 0 5.3 5.3l8 8-3.2 3.2-8-8" />
        <path d="m4 20 5-5m1 5 4-4" />
      </svg>
    ),
  },
  {
    title: 'Electromecánica',
    description: 'Consulta el alcance de este servicio por WhatsApp.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m10 2-.5 2.2a8 8 0 0 0-1.8.8L5.8 4l-2 2 1 1.9a8 8 0 0 0-.8 1.8L2 10v4l2.2.5a8 8 0 0 0 .8 1.8L4 18.2l2 2 1.9-1a8 8 0 0 0 1.8.8L10 22h4l.5-2.2a8 8 0 0 0 1.8-.8l1.9 1 2-2-1-1.9a8 8 0 0 0 .8-1.8L22 14v-4l-2.2-.5a8 8 0 0 0-.8-1.8L20 5.8l-2-2-1.9 1a8 8 0 0 0-1.8-.8L14 2Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Fontanería',
    description: 'Consulta el alcance de este servicio por WhatsApp.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v6a5 5 0 0 0 10 0V6M5 3h4m6 0h4M12 14v2" />
        <path d="M12 16c-1.8 2-2.5 3-2.5 4a2.5 2.5 0 0 0 5 0c0-1-.7-2-2.5-4Z" />
      </svg>
    ),
  },
]

const Services = () => {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Soluciones para cada necesidad</h2>
          <p>
            Aire acondicionado, electricidad, mantenimiento y más. Para toda
            situación somos tu solución.
          </p>
          <p className="service-note">Cotizaciones sin compromiso</p>
        </header>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                className="service-quote"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Cotizar ${service.title} por WhatsApp`}
              >
                Cotizar por WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
