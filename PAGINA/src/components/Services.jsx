import React from 'react'

const services = [
  {
    title: 'Instalación',
    description:
      'Equipos de última generación para casas, oficinas y locales comerciales.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v6M12 15v6M4.5 12h6M13.5 12h6M6.5 6.5l4.2 4.2M13.3 13.3l4.2 4.2M17.5 6.5l-4.2 4.2M10.7 13.3l-4.2 4.2" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: 'Mantenimiento preventivo',
    description:
      'Revisiones periódicas para evitar fallas, mejorar rendimiento y prolongar la vida útil.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: 'Reparación',
    description:
      'Diagnóstico técnico y solución de fallas eléctricas, de flujo y de temperatura.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 16l8-8" />
        <path d="M9 4h6v6" />
        <path d="M6 18H4.5A1.5 1.5 0 0 1 3 16.5V15" />
        <path d="M18 6h1.5A1.5 1.5 0 0 1 21 7.5V9" />
        <path d="M18 18h1.5A1.5 1.5 0 0 0 21 16.5V15" />
        <path d="M6 6H4.5A1.5 1.5 0 0 0 3 7.5V9" />
      </svg>
    ),
  },
  {
    title: 'Limpieza y recarga',
    description:
      'Limpieza integral del sistema y recarga de gas para un funcionamiento eficiente.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 12a5 5 0 0 1 10 0v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4Z" />
        <path d="M12 3v4M9 6h6" />
        <path d="M12 9v6" />
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
          <h2>Soluciones para cada tipo de espacio</h2>
          <p>
            Brindamos atención profesional con soluciones prácticas y sostenibles para
            mantener tu ambiente cómodo durante todo el año.
          </p>
        </header>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
