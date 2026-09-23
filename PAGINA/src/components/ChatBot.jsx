import React, { useState } from 'react'

const quickQuestions = [
  '¿Cuánto cuesta instalar un aire acondicionado?',
  '¿Qué incluye la instalación básica?',
  '¿Qué costos adicionales pueden aplicar?',
  '¿Cómo me dan una cotización?',
]

const getBotReply = (question) => {
  const normalized = question.toLowerCase()

  if (
    (normalized.includes('precio') || normalized.includes('cuesta')) &&
    (normalized.includes('instalar') || normalized.includes('aire') || normalized.includes('acondicionado'))
  ) {
    return 'El precio depende de la capacidad del equipo, la distancia entre unidades, la ubicación y las condiciones del lugar. Como referencia, una instalación básica de un mini-split de 9.000 a 18.000 BTU puede partir aproximadamente de ₡75.000 colones, dependiendo de las condiciones de instalación.'
  }

  if (
    normalized.includes('incluye') ||
    normalized.includes('instalación básica') ||
    normalized.includes('que incluye')
  ) {
    return 'La instalación básica puede incluir: instalación de unidad interna y externa, tubería de cobre, drenaje, base del condensador, cañuela/canaleta y prueba de funcionamiento.'
  }

  if (
    normalized.includes('adicional') ||
    normalized.includes('extra') ||
    normalized.includes('costos')
  ) {
    return 'Los trabajos adicionales, como tubería extra, trabajos eléctricos, bomba de condensado, soportes especiales, perforaciones adicionales o trabajos en altura, pueden tener un costo adicional.'
  }

  if (
    normalized.includes('cotización') ||
    normalized.includes('visita') ||
    normalized.includes('ubicación') ||
    normalized.includes('metros') ||
    normalized.includes('btu')
  ) {
    return 'Para darte una cotización más precisa, indícanos: 1) capacidad del aire (BTU), 2) ubicación, 3) metros entre las unidades, 4) si ya existe instalación eléctrica, y 5) si es una instalación nueva o reemplazo. Con esa información podemos orientarte mejor y, si hace falta, coordinar una visita técnica.'
  }

  if (
    normalized.includes('hola') ||
    normalized.includes('buenas') ||
    normalized.includes('ayuda') ||
    normalized.includes('servicio')
  ) {
    return '¡Hola! Puedo ayudarte con precios, qué incluye la instalación y cómo solicitar una cotización. Pregúntame por la capacidad del equipo, ubicación o si ya existe instalación eléctrica.'
  }

  return 'Puedo ayudarte con precios de instalación, capacidad del equipo, cobros extra y requisitos para cotizar. Si me indicas la capacidad en BTU, ubicación y distancia entre unidades, te doy una mejor orientación.'
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hola, soy el asistente de ClimaCore. Puedo ayudarte con precios, qué incluye la instalación y cómo obtener una cotización.',
    },
  ])

  const addMessage = (text, sender = 'bot') => {
    const id = `${sender}-${Date.now()}-${Math.random().toString(16).slice(2)}`
    setMessages((prev) => [...prev, { id, sender, text }])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmed = input.trim()
    if (!trimmed) {
      return
    }

    addMessage(trimmed, 'user')
    addMessage(getBotReply(trimmed), 'bot')
    setInput('')
  }

  const handleQuickQuestion = (question) => {
    addMessage(question, 'user')
    addMessage(getBotReply(question), 'bot')
  }

  return (
    <div className="chatbot-shell">
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente'}
      >
        <span className="chatbot-toggle-icon" aria-hidden="true">
          💬
        </span>
        <span>{isOpen ? 'Cerrar' : 'Asistente'}</span>
      </button>

      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="Asistente de cotización">
          <div className="chatbot-header">
            <div>
              <strong>ClimaCore</strong>
              <small>Asistente</small>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chatbot"
            >
              ×
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-quick-questions" aria-label="Preguntas rápidas">
            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                className="chatbot-chip"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label htmlFor="chatbot-input" className="sr-only">
              Escribe tu consulta
            </label>
            <input
              id="chatbot-input"
              name="chatbot-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu consulta"
              aria-label="Escribe tu consulta"
            />
            <button type="submit" className="btn btn-primary chatbot-submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBot
