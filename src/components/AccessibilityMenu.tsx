import { useState, useEffect } from 'react';
import { Accessibility, Type, Contrast, SunMedium, Link as LinkIcon, RefreshCcw, X } from 'lucide-react';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}%`;
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    let filters = [];
    if (invertColors) filters.push('invert(100%) hue-rotate(180deg)');
    if (highContrast) filters.push('contrast(150%) saturate(120%)');
    
    root.style.filter = filters.length > 0 ? filters.join(' ') : 'none';
  }, [invertColors, highContrast]);

  useEffect(() => {
    if (highlightLinks) {
      document.body.classList.add('accessibility-highlight-links');
    } else {
      document.body.classList.remove('accessibility-highlight-links');
    }
  }, [highlightLinks]);

  const resetAll = () => {
    setTextSize(100);
    setHighContrast(false);
    setInvertColors(false);
    setHighlightLinks(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 left-0 -translate-y-1/2 z-[60] bg-[#1a365d] text-white p-3 rounded-r-xl shadow-xl hover:bg-[#2a4365] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d]"
        aria-label="Abrir menú de accesibilidad"
      >
        <Accessibility className="w-8 h-8" />
      </button>

      {/* Menú de accesibilidad */}
      <div 
        className={`fixed top-1/2 left-16 -translate-y-1/2 z-[60] w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 origin-left ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-label="Menú de opciones de accesibilidad"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
          <h3 className="font-bold text-[#1a365d] dark:text-white flex items-center gap-2">
            <Accessibility className="w-5 h-5" /> Accesibilidad
          </h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Tamaño de texto */}
          <div>
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <Type className="w-4 h-4" /> Tamaño de texto ({textSize}%)
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setTextSize(Math.max(80, textSize - 10))}
                className="flex-1 py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >A-</button>
              <button 
                onClick={() => setTextSize(Math.min(150, textSize + 10))}
                className="flex-1 py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              >A+</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Contraste */}
            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition-colors ${highContrast ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300' : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              <Contrast className="w-6 h-6 mb-1" />
              <span>Contraste</span>
            </button>

            {/* Invertir Colores */}
            <button 
              onClick={() => setInvertColors(!invertColors)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition-colors ${invertColors ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300' : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              <SunMedium className="w-6 h-6 mb-1" />
              <span>Invertir</span>
            </button>

            {/* Resaltar Enlaces */}
            <button 
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`col-span-2 flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition-colors ${highlightLinks ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300' : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              <LinkIcon className="w-6 h-6 mb-1" />
              <span>Resaltar Enlaces</span>
            </button>
          </div>
        </div>

        {/* Reset */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-800">
          <button 
            onClick={resetAll}
            className="w-full flex items-center justify-center gap-2 py-2 text-sm text-red-600 hover:text-red-700 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <RefreshCcw className="w-4 h-4" /> Restablecer ajustes
          </button>
        </div>
      </div>
    </>
  );
}
