import { services } from '../data/services';

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-[var(--bg-main)]">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            Soluciones integrales para mantener tu ambiente perfecto y tus instalaciones en óptimas condiciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[var(--bg-surface)] rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] card-hover border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
