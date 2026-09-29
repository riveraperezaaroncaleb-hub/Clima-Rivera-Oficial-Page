import React from 'react'

const products = [
  {
    type: 'Mini split estándar',
    model: 'Cooltek · 12.000 BTU',
    price: '₡161.900',
    source: 'InstalacionCR',
    sourceUrl: 'https://instalacioncr.com/tienda/aire-acondicionado-cooltek-estandar-12000-btu/',
    image: '/air-cooltek.jpg',
    imageAlt: 'Unidad mini split Cooltek estándar de 12.000 BTU',
    stock: '48 unidades disponibles al consultar',
  },
  {
    type: 'Mini split inverter',
    model: 'Samsung WindFree · 12.000 BTU',
    price: '₡318.990',
    source: 'InstalacionCR',
    sourceUrl: 'https://instalacioncr.com/tienda/aire-acondicionado-samsung-windfree-inverter-12000-btu/',
    image: '/air-samsung.jpg',
    imageAlt: 'Unidad mini split Samsung WindFree inverter de 12.000 BTU',
    stock: 'Agotado al consultar',
  },
  {
    type: 'Aire portátil',
    model: 'Telstar · 14.000 BTU',
    price: '₡217.500',
    source: 'Bienestar Home',
    sourceUrl: 'https://www.bienestarhome.cr/products/2437/aire-acondicionado-portatil-telstar-14000btu',
    image: '/air-portable-telstar.png',
    imageAlt: 'Aire acondicionado portátil Telstar de 14.000 BTU',
    stock: 'Disponible al consultar',
  },
  {
    type: 'Aire de ventana',
    model: 'Midea · 12.000 BTU · importado de EE. UU.',
    price: '₡435.372',
    source: 'TiendaMia',
    sourceUrl: 'https://www.tiendamia.cr/p/amz/b0b3njgskl/midea-12-000-btu-aire-acondicionado-inteligente-con-convertidor-inversor-para',
    image: '/air-window-midea.jpg',
    imageAlt: 'Aire acondicionado Midea para ventana de 12.000 BTU',
    stock: 'En stock; producto importado desde Estados Unidos',
  },
]

const AirConditionerPrices = () => {
  return (
    <section id="aires" className="section air-pricing">
      <div className="container">
        <header className="section-header">
          <span className="eyebrow">Tipos de aire acondicionado</span>
          <h2>Aires y precios de referencia</h2>
          <p>
            Montos publicados por tiendas en línea en Costa Rica. Son referencias
            de equipos, no precios de Clima Rivera; pueden cambiar según stock y
            condiciones de compra.
          </p>
        </header>

        <div className="air-pricing-grid">
          {products.map((product) => (
            <article className="air-price-card" key={product.type}>
              <img
                className="air-price-image"
                src={product.image}
                alt={product.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <h3>{product.type}</h3>
              <p className="air-price-model">{product.model}</p>
              <p className="air-price-label">Precio referencial</p>
              <p className="air-price-value">{product.price}</p>
              <p className="air-price-stock">{product.stock}</p>
              <a
                className="air-price-source"
                href={product.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver precio de referencia en ${product.source}`}
              >
                Fuente: {product.source} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="installation-cta">
          <div>
            <span className="eyebrow">Servicio Clima Rivera</span>
            <h3>Instalación y cita</h3>
            <p>Consulta el precio de instalación y agenda una cita por WhatsApp.</p>
          </div>
          <a
            className="btn btn-primary installation-button"
            href="https://wa.me/50662395138?text=Hola,%20quiero%20agendar%20una%20cita"
            target="_blank"
            rel="noreferrer"
          >
            Agendar cita
          </a>
        </div>

        <p className="air-price-disclaimer">
          Precios consultados el 28 de septiembre de 2026. Confirma disponibilidad
          y condiciones con cada tienda. La instalación de Clima Rivera se cotiza
          por separado.
        </p>
      </div>
    </section>
  )
}

export default AirConditionerPrices