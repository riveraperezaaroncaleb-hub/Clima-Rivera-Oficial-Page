import { CheckCircle2 } from 'lucide-react';

export function AboutUs() {
  const values = [
    'Compromiso con la calidad y la excelencia',
    'Transparencia total en nuestros diagnósticos',
    'Responsabilidad y puntualidad en cada visita'
  ];

  return (
    <section id="nosotros" className="section-padding bg-[var(--color-secondary)]">
      <div className="container-center">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/ac_repair.jpg" 
                alt="Técnico trabajando" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg hidden md:block border-l-4 border-[var(--color-primary)]">
                <p className="text-4xl font-bold text-[var(--color-primary)] mb-1">10+</p>
                <p className="text-sm font-medium text-[var(--color-text-dark)] uppercase tracking-wider">Años de experiencia</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-[var(--color-primary)] font-semibold text-sm mb-2 uppercase tracking-wider">Conócenos</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-dark)]">
              Clima Rivera y Multiservicios
            </h2>
            <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
              Somos una empresa costarricense dedicada a brindar soluciones de climatización y mantenimiento integral para hogares y comercios. Nuestro objetivo es superar tus expectativas con cada servicio, asegurando un ambiente confortable y seguro para ti y tu familia.
            </p>
            <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
              Contamos con un equipo de profesionales altamente capacitados que garantizan un trabajo limpio, rápido y duradero. Tu tranquilidad es nuestra prioridad.
            </p>
            
            <ul className="space-y-4 w-full">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-3 bg-[var(--bg-surface)] p-3 rounded-lg shadow-sm border border-[var(--border-color)]">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0" />
                  <span className="font-medium text-[var(--color-text-dark)]">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
