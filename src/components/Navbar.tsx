import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon, SmartphoneNfc } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center ${isScrolled ? 'shadow-md' : 'backdrop-blur-sm'}`}
            style={{ backgroundColor: isScrolled ? 'var(--bg-main)' : 'color-mix(in srgb, var(--bg-main) 95%, transparent)' }}>
      <div className="container-center w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Clima Rivera Logo" className="h-11 w-auto object-contain transition-all" />
          <span className="font-bold text-lg hidden sm:block tracking-tight" style={{ color: 'var(--text-dark)' }}>
            Clima Rivera y Multiservicios
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link 
                    to={link.href} 
                    className={`text-sm font-medium py-2 block transition-colors ${isActive ? 'text-[#0B5ED7]' : 'hover:text-[#0B5ED7]'}`}
                    style={{ color: isActive ? '#0B5ED7' : 'var(--text-dark)' }}
                  >
                    {link.name}
                  </Link>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0B5ED7] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
            
            {/* SINPE Area */}
            <div className="flex flex-col items-center justify-center px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <SmartphoneNfc className="w-3 h-3 text-[#0B5ED7]" /> SINPE Móvil
              </span>
              <span className="text-sm font-bold text-[#0A2A5E] dark:text-blue-300">6239-5138</span>
            </div>

            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-[#1F2937] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Alternar Modo Oscuro"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="https://wa.me/50662395138" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 bg-[#FF7A1A] hover:bg-[#e66a10] text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={() => setIsDark(!isDark)} 
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-[#1F2937] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Alternar Modo Oscuro"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="p-2 text-[#1F2937] dark:text-gray-200 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-[72px] left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 origin-top ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-4 px-6 gap-2">
          {/* Mobile SINPE */}
          <li className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-2">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <SmartphoneNfc className="w-4 h-4 text-[#0B5ED7]" /> SINPE MÓVIL
            </span>
            <span className="font-bold text-[#0A2A5E] dark:text-blue-300">6239-5138</span>
          </li>

          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className={`block text-base font-medium py-2 ${isActive ? 'text-[#0B5ED7] dark:text-blue-400' : 'text-[#1F2937] dark:text-gray-200 hover:text-[#0B5ED7]'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a 
              href="https://wa.me/50662395138" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#e66a10] text-white py-3 rounded-xl font-semibold shadow-sm w-full"
            >
              <Phone className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
