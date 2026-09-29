import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedAC } from './AnimatedAC';

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative pt-[120px] pb-16 lg:pt-[160px] lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E6F4FF] to-white dark:from-gray-900 dark:to-gray-900"
    >
      {/* Subtle dotted pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0A2A5E 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="container-center relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white dark:bg-gray-800 border border-[#0B5ED7]/20 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B5ED7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0B5ED7]"></span>
            </span>
            <span className="text-[#0A2A5E] dark:text-gray-200 font-semibold text-xs tracking-wide uppercase">
              Especialistas en climatización
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="font-bold text-[#0A2A5E] dark:text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}
          >
            Aire acondicionado y <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5ED7] to-[#38bdf8]">
              multiservicios
            </span> para tu hogar o negocio
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-[#4B5563] dark:text-gray-400 mb-8 max-w-[480px]">
            Instalación, mantenimiento y reparación con garantía. Disfruta de un clima perfecto y soluciones integrales con nuestro equipo de técnicos expertos.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <Link 
              to="/contacto" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-[#FF7A1A] hover:bg-[#e66a10] shadow-lg shadow-[#FF7A1A]/20 hover:shadow-[#FF7A1A]/40 transition-all group"
            >
              Cotizar gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/servicios" 
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#0B5ED7] text-[#0B5ED7] dark:text-blue-400 dark:border-blue-500 rounded-xl font-bold hover:bg-[#0B5ED7] hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all"
            >
              Ver servicios
            </Link>
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#1F2937] dark:text-gray-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] dark:text-blue-400" />
              <span>+10 años</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#0B5ED7] dark:text-blue-400" />
              <span>Garantía total</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0B5ED7] dark:text-blue-400" />
              <span>Atención rápida</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Animation */}
        <div className="w-full flex justify-center lg:justify-end">
          <AnimatedAC />
        </div>

      </div>
    </section>
  );
}
