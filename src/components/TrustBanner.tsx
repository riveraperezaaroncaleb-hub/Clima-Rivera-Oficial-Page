import { Clock, ShieldCheck, UserCheck, MapPin } from 'lucide-react';

export function TrustBanner() {
  const items = [
    { icon: Clock, text: 'Atención rápida' },
    { icon: ShieldCheck, text: 'Garantía en el trabajo' },
    { icon: UserCheck, text: 'Técnicos capacitados' },
    { icon: MapPin, text: 'Cobertura en tu zona' },
  ];

  return (
    <div className="bg-[var(--color-primary-dark)] py-8 mt-[-20px] relative z-20">
      <div className="container-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-white">
              <item.icon className="w-8 h-8 text-[var(--color-accent)]" />
              <span className="font-semibold text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
