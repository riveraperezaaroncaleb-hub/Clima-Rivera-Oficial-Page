import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot, User, ChevronRight } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

const OPTIONS = [
  { id: 'cotizar', text: 'Cotizar un equipo o instalación' },
  { id: 'mantenimiento', text: 'Costos de Mantenimiento' },
  { id: 'garantia', text: 'Garantías y cobertura' },
  { id: 'humano', text: 'Contactar a un humano' },
];

const RESPONSES: Record<string, string> = {
  'cotizar': 'Para cotizar, te invitamos a visitar la sección de "Catálogo". Una visita técnica determinará el precio exacto de instalación según los materiales necesarios. Puedes escribirnos por WhatsApp al 6239-5138 para coordinar.',
  'mantenimiento': 'Recomendamos dar mantenimiento preventivo cada 6 meses (hogares) o 3 meses (comercios). El costo base es muy accesible. ¡Toca el botón de WhatsApp para agendar tu cita!',
  'garantia': 'Nuestras instalaciones cuentan con 1 año de garantía por mano de obra. Además, aplicamos las garantías oficiales de fábrica de cada equipo. Trabajamos con total transparencia.',
  'humano': '¡Será un gusto atenderte personalmente! Puedes llamarnos o enviarnos un WhatsApp al número +506 6239-5138. Te responderemos lo más pronto posible.',
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: '¡Hola! Soy ClimaBot, el asistente virtual de Clima Rivera y Multiservicios. ¿Sobre qué tema deseas consultar hoy?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (optionId: string, optionText: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: optionText };
    setMessages(prev => [...prev, userMsg]);

    // Simulate thinking delay
    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: RESPONSES[optionId] };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Botón flotante para accesibilidad (lectores de pantalla) y visibilidad */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full bg-[#0B5ED7] text-white shadow-xl hover:bg-blue-700 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Abrir asistente virtual ClimaBot"
        aria-expanded={isOpen}
      >
        <MessageSquare className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Ventana de Chat */}
      <div 
        className={`fixed bottom-6 left-6 sm:bottom-6 sm:left-6 w-[calc(100vw-3rem)] sm:w-[350px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 transition-all duration-300 origin-bottom-left flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '80vh' }}
        role="dialog"
        aria-label="Chatbot de atención al cliente"
        aria-modal="true"
      >
        {/* Cabecera */}
        <div className="bg-[#0B5ED7] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-sm">ClimaBot</h3>
              <p className="text-xs text-blue-100">Asistente en línea</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1 hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar ventana del chat"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.sender === 'user' ? 'bg-[#FF7A1A] text-white rounded-br-none shadow-sm' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-600'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Opciones de respuesta (Botones quemados) */}
        <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2 uppercase tracking-wide">Selecciona una opción:</p>
          <div className="flex flex-col gap-2 max-h-[120px] overflow-y-auto pr-1">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleOptionClick(opt.id, opt.text)}
                className="text-left w-full flex items-center justify-between bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-[#0B5ED7] dark:text-blue-300 text-sm py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Preguntar sobre: ${opt.text}`}
              >
                <span>{opt.text}</span>
                <ChevronRight className="w-4 h-4 opacity-50" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
