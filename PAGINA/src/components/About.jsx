import React from 'react'

const About = () => {
  return (
    <section id="nosotros" className="section about">
      <div className="container about-layout">
        <div className="about-panel">
          <span className="eyebrow">Nosotros</span>
          <h3>Clima Rivera Multiservicios</h3>
          <p>
            Propietario: Abraham Gabriel Rivera Perez. Técnico Especialista en
            Refrigeración. Electromecánica, Fontanería y Multiservicios.
          </p>

          <ul className="feature-list">
            <li>Aire acondicionado</li>
            <li>Electricidad</li>
            <li>Mantenimiento, Electromecánica y Fontanería</li>
          </ul>
        </div>

        <div className="about-panel about-coverage">
          <span className="eyebrow">Cobertura</span>
          <h3>Cobertura nacional</h3>
          <p>
            Servicio en Costa Rica. Solicita tu cotización sin compromiso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
