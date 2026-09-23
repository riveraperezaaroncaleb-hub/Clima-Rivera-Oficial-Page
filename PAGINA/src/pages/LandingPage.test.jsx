import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  it('renders the public landing page content', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(
      screen.getByRole('heading', {
        name: /climatización profesional para tu hogar o negocio/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('link', {
        name: /solicitar cotización/i,
      }).length
    ).toBeGreaterThan(0)
  })

  it('shows a canned chatbot that answers installation pricing questions', () => {
    render(<LandingPage isDarkMode={false} onToggleTheme={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: /abrir asistente/i }))

    fireEvent.change(screen.getByRole('textbox', { name: /escribe tu consulta/i }), {
      target: { value: '¿Cuánto cuesta instalar un aire acondicionado?' },
    })

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    expect(
      screen.getByText(/aproximadamente de ₡75\.000 colones/i)
    ).toBeInTheDocument()
  })
})
