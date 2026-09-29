export interface Product {
  id: string;
  brand: string;
  btu: number;
  type: string;
  description: string;
  approxPrice: string;
  image: string;
}

export const catalog: Product[] = [
  {
    id: 'prod-1',
    brand: 'Hisense',
    btu: 12000,
    type: 'Inverter',
    description: 'Ideal para habitaciones pequeñas. Alta eficiencia energética y bajo nivel de ruido.',
    approxPrice: '₡250,000',
    image: '/ac_product.jpg',
  },
  {
    id: 'prod-2',
    brand: 'Samsung',
    btu: 18000,
    type: 'Inverter',
    description: 'Perfecto para salas o habitaciones principales. Enfriamiento rápido y control inteligente.',
    approxPrice: '₡380,000',
    image: '/ac_product.jpg',
  },
  {
    id: 'prod-3',
    brand: 'LG',
    btu: 24000,
    type: 'Inverter',
    description: 'Potencia superior para espacios amplios u oficinas. Ahorro energético comprobado.',
    approxPrice: '₡490,000',
    image: '/ac_product.jpg',
  },
  {
    id: 'prod-4',
    brand: 'Midea',
    btu: 12000,
    type: 'Estándar',
    description: 'Solución económica y confiable para climatizar su espacio personal rápidamente.',
    approxPrice: '₡190,000',
    image: '/ac_product.jpg',
  },
  {
    id: 'prod-5',
    brand: 'TCL',
    btu: 18000,
    type: 'Estándar',
    description: 'Excelente relación calidad-precio. Filtro antibacterial y fácil mantenimiento.',
    approxPrice: '₡280,000',
    image: '/ac_product.jpg',
  },
  {
    id: 'prod-6',
    brand: 'Carrier',
    btu: 36000,
    type: 'Inverter',
    description: 'Máximo rendimiento para áreas comerciales o casas grandes. Durabilidad insuperable.',
    approxPrice: '₡850,000',
    image: '/ac1.jpg',
  }
];
