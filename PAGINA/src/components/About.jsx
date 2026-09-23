import React from 'react'
import imageOne from '../assets/241d38e3-40b0-4b45-9770-657386ab4eae.jpg'
import imageTwo from '../assets/Gemini_Generated_Image_2bktzh2bktzh2bkt.jpg'
import imageThree from '../assets/images (3).jpg'

const About = () => {
  const galleryImages = [
    {
      src: imageOne,
      alt: 'Aire acondicionado interior',
    },
    {
      src: imageTwo,
      alt: 'Unidad condensadora exterior',
    },
    {
      src: imageThree,
      alt: 'Técnico con equipo de climatización',
    },
  ]

  return (
    <section id="nosotros" className="section about">
      <div className="container about-layout">
        <div className="about-panel">
          <span className="eyebrow">Nosotros</span>
          <h3>Más de una década cuidando la climatización de nuestros clientes</h3>
          <p>
            En ClimaCore ayudamos a hogares, negocios y empresas a mantener espacios
            frescos, saludables y funcionales con soluciones de aire acondicionado
            diseñadas para cada necesidad.
          </p>

          <ul className="feature-list">
            <li>Equipo de técnicos certificados y con experiencia comprobada.</li>
            <li>Atención ágil, asesoría honesta y recomendaciones claras.</li>
            <li>Trabajos con garantía y seguimiento postinstalación.</li>
          </ul>
        </div>

        <div className="about-panel">
          <span className="eyebrow">¿Por qué elegirnos?</span>
          <div className="metrics" aria-label="Estadísticas principales">
            <div className="metric">
              <strong>12+</strong>
              <span>Años de experiencia</span>
            </div>
            <div className="metric">
              <strong>100%</strong>
              <span>Garantía en servicios</span>
            </div>
            <div className="metric">
              <strong>24/7</strong>
              <span>Soporte técnico</span>
            </div>
          </div>

          <div className="about-gallery" aria-label="Galería de trabajos">
            {galleryImages.map((image) => (
              <figure key={image.alt} className="about-gallery-item">
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
