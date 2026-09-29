import { PhoneCall, Wrench, FileSignature, ThumbsUp } from 'lucide-react';

export function Process() {
  const steps = [
    {
      title: 'Contacto',
      description: 'Escríbenos por WhatsApp o envíanos un mensaje para contarnos tu necesidad.',
      icon: PhoneCall,
    },
    {
      title: 'Visita y Diagnóstico',
      description: 'Un técnico evalúa el espacio o el equipo y determina la mejor solución.',
      icon: Wrench,
    },
    {
      title: 'Cotización',
      description: 'Te enviamos una propuesta clara con el costo exacto sin compromisos ocultos.',
      icon: FileSignature,
    },
    {
      title: 'Trabajo Garantizado',
      description: 'Realizamos la instalación o reparación con los más altos estándares de calidad.',
      icon: ThumbsUp,
    }
  ];

  return (
    <section id="proceso" className="section-padding bg-[var(--bg-main)] relative overflow-hidden">
      <div className="container-center relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo trabajamos?</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            Un proceso simple y transparente para garantizar tu satisfacción desde el primer contacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-secondary)] -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[var(--bg-surface)] border-4 border-[var(--color-secondary)] shadow-lg flex items-center justify-center mb-6 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold flex items-center justify-center border-2 border-white">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[var(--color-text-light)] text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
