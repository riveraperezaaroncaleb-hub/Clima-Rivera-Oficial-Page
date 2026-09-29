import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50662395138"
      target="_blank"
      rel="noreferrer"
      className="fixed z-[999] flex items-center justify-center text-white bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] rounded-full group"
      style={{
        right: '20px',
        bottom: '20px',
        width: '56px',
        height: '56px',
      }}
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      
      <MessageCircle className="w-8 h-8 relative z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white dark:bg-gray-800 text-[#1F2937] dark:text-white text-sm font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        ¡Escríbenos!
      </span>
    </a>
  );
}
