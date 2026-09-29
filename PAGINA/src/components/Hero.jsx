import React from 'react'
import imageMain from '../assets/images.jpg'
import imageSecondary from '../assets/images (1).jpg'
import imageTertiary from '../assets/images (2).jpg'

const Hero = () => {
  return (
    <section id="inicio" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Clima Rivera Multiservicios</span>
          <h1>Para toda situación somos tu solución</h1>
          <p>
            Electromecánica, Fontanería y Multiservicios. Aire acondicionado,
            electricidad, mantenimiento y más.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización sin compromiso
            </a>
            <a className="btn btn-secondary" href="#servicios">
              Ver servicios
            </a>
          </div>

          <p className="hero-coverage">Cobertura nacional · Costa Rica</p>
        </div>

        <div className="hero-visual" aria-label="Galería de climatización">
          <div className="hero-card hero-photo-collage">
            <div className="photo-collage photo-main">
              <img src={imageMain} alt="Equipo de aire acondicionado" />
            </div>
            <div className="photo-collage photo-secondary">
              <img src={imageSecondary} alt="Equipo exterior de aire acondicionado" />
            </div>
            <div className="photo-collage photo-tertiary">
              <img src={imageTertiary} alt="Equipo de climatización" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
