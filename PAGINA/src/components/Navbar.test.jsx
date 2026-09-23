import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the brand and navigation items', () => {
    render(<Navbar isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(screen.getByRole('link', { name: /^Ir al inicio$/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^Inicio$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^Servicios$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^Contacto$/i }).length).toBeGreaterThan(0)
  })

  it('calls the theme toggle handler when the button is clicked', async () => {
    const user = userEvent.setup()
    const onToggleTheme = vi.fn()

    render(<Navbar isDarkMode={false} onToggleTheme={onToggleTheme} />)

    await user.click(screen.getByRole('button', { name: /activar modo oscuro/i }))

    expect(onToggleTheme).toHaveBeenCalledTimes(1)
  })
})
