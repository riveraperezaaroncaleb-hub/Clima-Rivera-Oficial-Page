import React from 'react'
import { render, screen } from '@testing-library/react'
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
})
