import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Check URL params for pre-selected service
  useEffect(() => {
    const hash = window.location.hash;
    
    // Support basic hash parsing for pre-selection (e.g. #contacto?servicio=compra&equipo=Hisense)
    if (hash.includes('?')) {
      const qs = hash.split('?')[1];
      const urlParams = new URLSearchParams(qs);
      const srv = urlParams.get('servicio');
      const eq = urlParams.get('equipo');
      
      if (srv) {
        setFormData(prev => ({
          ...prev, 
          servicio: srv === 'compra' ? 'Instalación de Equipo' : 'Otro',
          mensaje: eq ? `Me interesa cotizar el equipo: ${eq}` : ''
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          setStatus('success');
          setFormData({ nombre: '', telefono: '', servicio: '', fecha: '', mensaje: '' });
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    } else {
      // Fallback to WhatsApp if no endpoint is configured
      const waMessage = `Hola, mi nombre es ${formData.nombre}.%0A%0ATeléfono: ${formData.telefono}%0AInterés: ${formData.servicio}%0AFecha preferida: ${formData.fecha}%0A%0AMensaje: ${formData.mensaje}`;
      window.open(`https://wa.me/50662395138?text=${waMessage}`, '_blank');
      setStatus('success');
      setFormData({ nombre: '', telefono: '', servicio: '', fecha: '', mensaje: '' });
    }
    
    // Reset status after a few seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section id="contacto" className="section-padding bg-[var(--bg-main)]">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            ¿Necesitas una cotización o visita técnica? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[var(--bg-surface)] rounded-2xl shadow-xl overflow-hidden border border-[var(--border-color)]">
          {/* Contact Info */}
          <div className="bg-[var(--color-primary-dark)] text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <p className="text-[var(--color-secondary)]/80 mb-8 leading-relaxed">
                Estamos listos para atender cualquier solicitud en su hogar o negocio. Su comodidad es nuestra prioridad.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                    <a href="tel:+50662395138" className="hover:text-[var(--color-accent)] transition-colors block">+506 6239-5138</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Correo Electrónico</h4>
                    <a href="mailto:climarivera186@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">
                      climarivera186@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Horario de Atención</h4>
                    <p className="text-[var(--color-secondary)]/80">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                    <p className="text-[var(--color-secondary)]/80">Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-dark)]">Envíanos un mensaje</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto muy pronto.
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                Hubo un error al enviar el mensaje. Por favor intenta mediante WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Nombre Completo *</label>
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                    placeholder="Ej. 8888 8888"
                  />
                </div>
                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Fecha preferida</label>
                  <input 
                    type="date" 
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Servicio de Interés *</label>
                <select 
                  id="servicio"
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow bg-[var(--bg-main)]"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Instalación de Equipo">Instalación de Aire Acondicionado</option>
                  <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                  <option value="Reparación">Reparación / Diagnóstico</option>
                  <option value="Multiservicios">Multiservicios (Electricidad, Plomería, etc)</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-[var(--color-text-dark)] mb-1">Mensaje o Detalles del Problema *</label>
                <textarea 
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow resize-none"
                  placeholder="Cuéntenos cómo podemos ayudarle..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
