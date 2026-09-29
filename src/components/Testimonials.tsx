import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-[var(--color-primary-dark)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-center relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-[var(--color-secondary)]/80 max-w-2xl mx-auto">
            La confianza de quienes nos eligen es nuestro mejor respaldo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-accent)]/40" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-[var(--color-secondary)]/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
