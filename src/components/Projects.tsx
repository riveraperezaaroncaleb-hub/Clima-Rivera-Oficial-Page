import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export function Projects() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // You can point these to the real images located in the root/public directory
  const projects = [
    { id: 1, image: '/ac_residential.jpg', title: 'Instalación Residencial' },
    { id: 2, image: '/ac_commercial.jpg', title: 'Mantenimiento Comercial' },
    { id: 3, image: '/ac_repair.jpg', title: 'Reparación Especializada' },
    { id: 4, image: '/ac_commercial.jpg', title: 'Proyecto Industrial' },
    { id: 5, image: '/ac_repair.jpg', title: 'Limpieza Profunda' },
    { id: 6, image: '/ac_product.jpg', title: 'Instalación en Oficinas' },
  ];

  return (
    <section id="proyectos" className="section-padding bg-[var(--bg-main)]">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos y Trabajos</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            Explora una muestra de nuestros servicios realizados. La calidad y el cuidado por el detalle son nuestra firma.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-xl overflow-hidden cursor-pointer h-64 shadow-md"
              onClick={() => setSelectedImg(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <ZoomIn className="w-10 h-10 mb-2" />
                <span className="font-semibold text-lg">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImg} 
            alt="Vista ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
