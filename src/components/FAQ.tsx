import { useState } from 'react';
import { faqs } from '../data/faq';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-[var(--color-secondary)]">
      <div className="container-center max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-[var(--color-text-light)]">
            Aclaramos tus dudas para que tomes la mejor decisión con confianza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-[var(--bg-surface)] rounded-xl shadow-sm border border-[var(--border-color)] overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                >
                  <span className="font-semibold text-left text-lg text-[var(--color-text-dark)] pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  id={`answer-${faq.id}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
