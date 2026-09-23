import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import PublicRoutes from './PublicRoutes'

describe('PublicRoutes', () => {
  it('renders the landing page on the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PublicRoutes isDarkMode={false} onToggleTheme={vi.fn()} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /climatización profesional para tu hogar o negocio/i,
      })
    ).toBeInTheDocument()
  })

  it('redirects unknown routes to the home page', () => {
    render(
      <MemoryRouter initialEntries={['/ruta-inexistente']}>
        <PublicRoutes isDarkMode={false} onToggleTheme={vi.fn()} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /climatización profesional para tu hogar o negocio/i,
      })
    ).toBeInTheDocument()
  })
})
