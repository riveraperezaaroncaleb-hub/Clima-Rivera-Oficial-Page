import { catalog } from '../data/catalog';

export function Catalog() {
  return (
    <section id="catalogo" className="section-padding bg-[var(--color-secondary)]">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Equipos</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            Contamos con una amplia variedad de aires acondicionados de las mejores marcas. Encuentra el equipo ideal para tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalog.map((product) => (
            <div key={product.id} className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] card-hover flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.brand} - ${product.btu} BTU`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.type}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.brand}</h3>
                  <span className="font-semibold text-[var(--color-primary)]">{product.btu} BTU</span>
                </div>
                <p className="text-[var(--color-text-light)] text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Precio aproximado</span>
                    <span className="text-lg font-bold text-[var(--color-text-dark)]">{product.approxPrice}</span>
                  </div>
                  <a href={`https://wa.me/50662395138?text=${encodeURIComponent(`Hola, me interesa cotizar el equipo ${product.brand} de ${product.btu} BTU.`)}`} target="_blank" rel="noreferrer" className="btn-primary py-2 px-4 text-sm">
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center text-sm text-[var(--color-text-light)] bg-[var(--bg-surface)] p-4 rounded-lg shadow-sm border border-[var(--color-primary)]/10 max-w-3xl mx-auto">
          <strong>Nota importante:</strong> Los precios mostrados son aproximados y están sujetos a una visita técnica previa. El costo no incluye materiales de instalación complejos ni monturas especiales.
        </div>
      </div>
    </section>
  );
}
