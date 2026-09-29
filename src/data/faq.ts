export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Cada cuánto tiempo debo darle mantenimiento a mi aire acondicionado?',
    answer: 'Se recomienda realizar un mantenimiento preventivo cada 3 a 6 meses, dependiendo del uso y del entorno (por ejemplo, si hay polvo o mascotas en la zona). Esto asegura un rendimiento óptimo y prolonga la vida útil del equipo.',
  },
  {
    id: 'faq-2',
    question: '¿Cuánto tiempo tarda aproximadamente una instalación?',
    answer: 'Una instalación estándar suele tomar entre 2 a 4 horas. Sin embargo, el tiempo puede variar si se requiere obra civil, tuberías de mayor distancia o adaptaciones eléctricas complejas.',
  },
  {
    id: 'faq-3',
    question: '¿Cómo sé de cuántos BTU necesito mi aire acondicionado?',
    answer: 'Depende del tamaño de la habitación, la cantidad de personas, la exposición al sol y los electrodomésticos. Como regla general básica, se calculan entre 600 y 800 BTU por metro cuadrado. Siempre es mejor que un técnico evalúe el área para darle la recomendación exacta.',
  },
  {
    id: 'faq-4',
    question: '¿Ofrecen garantía por los trabajos de reparación e instalación?',
    answer: '¡Sí! Todos nuestros servicios de instalación y reparación cuentan con una garantía por escrito que cubre nuestra mano de obra. Adicionalmente, los equipos nuevos mantienen la garantía directa del fabricante.',
  },
  {
    id: 'faq-5',
    question: '¿En qué zonas o áreas tienen cobertura de servicio?',
    answer: 'Brindamos servicio en todo Costa Rica, enfocándonos principalmente en la Gran Área Metropolitana (GAM). Para zonas rurales o alejadas, consúltenos y coordinaremos los detalles de viáticos.',
  }
];
