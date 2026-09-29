import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  it('renders the public landing page content', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(
      screen.getByRole('heading', {
        name: /para toda situación somos tu solución/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('link', {
        name: /solicitar cotización/i,
      }).length
    ).toBeGreaterThan(0)
  })

  it('shows a canned chatbot that directs service questions to WhatsApp', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /abrir asistente/i }))

    fireEvent.change(screen.getByRole('textbox', { name: /escribe tu consulta/i }), {
      target: { value: '¿Qué servicios ofrecen?' },
    })

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    expect(
      screen.getByText(/ofrece aire acondicionado, electricidad, mantenimiento, electromecánica y fontanería/i)
    ).toBeInTheDocument()
  })

  it('shows a direct WhatsApp bubble above the assistant', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    const link = screen.getByRole('link', { name: /escribir por whatsapp/i })

    expect(link).toHaveAttribute(
      'href',
      'https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveClass('chatbot-whatsapp-bubble')
  })

  it('shows national coverage, actionable contact details, and five service quote links', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(screen.getByRole('heading', { name: /cobertura nacional/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+506 6239-5138/i })).toHaveAttribute(
      'href',
      'tel:+50662395138'
    )
    expect(screen.getByRole('link', { name: /climarivera186@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:climarivera186@gmail.com'
    )
    const serviceQuoteLinks = screen.getAllByRole('link', { name: /cotizar .* por whatsapp/i })
    expect(serviceQuoteLinks).toHaveLength(5)
    expect(serviceQuoteLinks[0]).toHaveAttribute(
      'href',
      'https://wa.me/50662395138?text=Hola,%20quisiera%20cotizar%20un%20servicio'
    )
  })

  it('links to air-conditioner prices and offers a separate installation appointment', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Aires y precios' })).toHaveAttribute(
      'href',
      '#aires'
    )
    expect(screen.getAllByRole('article', { name: '' })).toHaveLength(9)
    expect(screen.getByRole('link', { name: 'Agendar cita' })).toHaveAttribute(
      'href',
      'https://wa.me/50662395138?text=Hola,%20quiero%20agendar%20una%20cita'
    )
  })
})
