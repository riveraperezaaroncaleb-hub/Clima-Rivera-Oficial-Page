export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Ramírez',
    role: 'Propietario de Vivienda',
    content: 'Excelente servicio. El técnico llegó puntual, fue muy profesional y dejó el área impecable. Mi aire acondicionado quedó enfriando como el primer día. Recomendado al 100%.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'María Fernández',
    role: 'Gerente de Tienda',
    content: 'Teníamos un problema urgente con el aire de la tienda y nos respondieron rapidísimo. Solucionaron la falla el mismo día y a un precio justo. Excelente atención.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'José Morales',
    role: 'Cliente de Mantenimiento',
    content: 'Contrato a Clima Rivera cada 6 meses para el mantenimiento de mis 3 equipos. Siempre transparentes con lo que se necesita hacer y el trato es muy cordial.',
    rating: 5,
  }
];
