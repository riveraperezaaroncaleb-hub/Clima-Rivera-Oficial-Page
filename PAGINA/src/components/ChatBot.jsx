import React, { useRef, useState } from 'react'

const quickQuestions = [
  '¿Qué servicios ofrecen?',
  '¿Cuál es la cobertura?',
  '¿Cómo solicito una cotización?',
]

const getBotReply = (question) => {
  const normalized = question.toLowerCase()

  if (normalized.includes('cobertura') || normalized.includes('zona')) {
    return 'La cobertura es nacional, en Costa Rica.'
  }

  if (normalized.includes('precio') || normalized.includes('cuesta')) {
    return 'Solicita una cotización sin compromiso por WhatsApp para consultar el precio.'
  }

  return 'Clima Rivera Multiservicios ofrece aire acondicionado, electricidad, mantenimiento, electromecánica y fontanería. Para consultar detalles y solicitar una cotización sin compromiso, escríbenos por WhatsApp.'
}

const ChatBot = () => {
  const whatsappLink =
    'https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio'
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const messageId = useRef(0)
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hola, soy el asistente de Clima Rivera Multiservicios. Puedo orientarte sobre servicios y cobertura nacional.',
    },
  ])

  const addMessage = (text, sender = 'bot') => {
    const id = `${sender}-${messageId.current++}`
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
      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="Asistente de cotización">
          <div className="chatbot-header">
            <div>
              <strong>Clima Rivera Multiservicios</strong>
              <small>Asistente</small>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chatbot"
            >
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
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

      <div className="chatbot-actions">
        <a
          className="chatbot-whatsapp-bubble"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribir por WhatsApp"
          title="Escribir por WhatsApp"
        >
          <span className="chatbot-whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M20.5 3.5A11.5 11.5 0 0 0 3.8 17.5L2.5 21l3.6-1.1A11.5 11.5 0 1 0 20.5 3.5Zm-6.5 3.4c.3 0 .7.1 1 .3.3.2.8.7.8 1.7 0 1-.8 1.9-1.1 2.1-.2.2-.5.2-.9.2-.2 0-.5 0-.8-.1-.8-.2-1.5-.8-2-1.4-.5-.6-.9-1.4-.9-2.3 0-.3.1-.6.3-.8.2-.2.4-.3.7-.3h.3c.2 0 .5 0 .6.4.2.4.3.6.5 1 .1.2.1.5-.1.7-.1.1-.2.3-.3.4-.1.1-.2.3-.1.5.1.4.7 1.1 1.4 1.7.9.7 1.6 1 1.9 1.2.3.1.5.1.7 0 .3-.2.7-.9 1-.9.2-.1.4-.1.7-.1h.4c.3 0 .5.2.6.3.2.2.3.4.2.7-.1.5-.9 1.1-1.4 1.5-.6.4-1.1.8-1.8.9-.5.1-1 .1-1.6 0-.8-.1-1.5-.5-2.2-1-.8-.6-1.5-1.4-2-2.3-.6-.9-.8-1.8-.7-2.7.1-.7.4-1.3.9-1.7.4-.4.9-.6 1.5-.7h.8Z" />
            </svg>
          </span>
        </a>

        <button
          type="button"
          className="chatbot-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente'}
          title={isOpen ? 'Cerrar asistente' : 'Abrir asistente'}
        >
          <span className="chatbot-toggle-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M7 17.5 3.5 20V6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 17H7Z" />
              <path d="M8 9.5h8M8 12.5h6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ChatBot
