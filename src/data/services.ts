import { Wrench, Shield, Zap, Home } from 'lucide-react';
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const services: Service[] = [
  {
    id: 'instalacion',
    title: 'Instalación de Aire Acondicionado',
    description: 'Instalamos equipos de todas las marcas con estándares de calidad para garantizar su máxima eficiencia y vida útil.',
    icon: Home,
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza profunda, revisión de presiones y componentes para evitar fallas costosas y asegurar aire limpio.',
    icon: Shield,
  },
  {
    id: 'reparacion',
    title: 'Reparación y Diagnóstico',
    description: 'Detección precisa de fallas y reparación garantizada de equipos que no enfrían, hacen ruido o presentan errores.',
    icon: Wrench,
  },
  {
    id: 'multiservicios',
    title: 'Multiservicios del Hogar',
    description: 'Soluciones integrales: electricidad básica, plomería y otros arreglos menores para mantener tu propiedad impecable.',
    icon: Zap,
  }
];
