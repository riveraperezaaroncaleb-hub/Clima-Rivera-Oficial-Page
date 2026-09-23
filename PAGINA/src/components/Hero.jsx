import React from 'react'
import imageMain from '../assets/images.jpg'
import imageSecondary from '../assets/images (1).jpg'
import imageTertiary from '../assets/images (2).jpg'

const Hero = () => {
  return (
    <section id="inicio" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Servicio profesional</span>
          <h1>Climatización profesional para tu hogar o negocio</h1>
          <p>
            Soluciones integrales en aire acondicionado para hogares, oficinas y
            comercios, con atención rápida, instalación segura y mantenimiento que
            mantiene tu ambiente siempre confortable.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              Solicitar cotización
            </a>
            <a className="btn btn-secondary" href="#servicios">
              Ver servicios
            </a>
          </div>

          <ul className="trust-list" aria-label="Beneficios principales">
            <li>Instalación rápida</li>
            <li>Atención personalizada</li>
            <li>Garantía por escrito</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Galería de climatización">
          <div className="hero-card hero-photo-collage">
            <div className="photo-collage photo-main">
              <img src={imageMain} alt="Aire acondicionado instalado en pared" />
            </div>
            <div className="photo-collage photo-secondary">
              <img src={imageSecondary} alt="Unidad exterior de aire acondicionado" />
            </div>
            <div className="photo-collage photo-tertiary">
              <img src={imageTertiary} alt="Técnico revisando sistema de climatización" />
            </div>
            <div className="hero-badge">
              <span className="badge-icon">❄️</span>
              <div className="badge-copy">
                <strong>+2,500</strong>
                <span>instalaciones realizadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
