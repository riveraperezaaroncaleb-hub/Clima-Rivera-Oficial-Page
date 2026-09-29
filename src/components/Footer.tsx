import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Clima Rivera Logo" className="h-20 w-auto object-contain transition-all" />
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Soluciones integrales de climatización y mantenimiento para tu hogar y negocio en Costa Rica.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/18ztjkNJkY/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/climariveramultiservicios?stkn=OXJtaGF2cGJ3c3lv" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-[var(--color-primary)] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[var(--color-primary)] transition-colors">Servicios</a></li>
              <li><a href="#catalogo" className="hover:text-[var(--color-primary)] transition-colors">Catálogo de Equipos</a></li>
              <li><a href="#proyectos" className="hover:text-[var(--color-primary)] transition-colors">Proyectos</a></li>
              <li><a href="#nosotros" className="hover:text-[var(--color-primary)] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#faq" className="hover:text-[var(--color-primary)] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Instalación de A/C</a></li>
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Mantenimiento Preventivo</a></li>
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Reparación y Diagnóstico</a></li>
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Electricidad y Plomería</a></li>
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Multiservicios del Hogar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span className="text-sm">+506 6239-5138</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span className="text-sm">climarivera186@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Clima Rivera y Multiservicios. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
