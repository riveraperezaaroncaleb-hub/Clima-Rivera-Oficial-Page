import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation items', () => {
    render(<Navbar isDarkMode={false} onToggleTheme={vi.fn()} />)

    expect(
      screen.getByRole('link', { name: /clima rivera multiservicios, inicio/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /clima rivera multiservicios/i })).toBeInTheDocument()
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

  it('toggles the compact navigation menu', async () => {
    const user = userEvent.setup()
    render(<Navbar isDarkMode={false} onToggleTheme={vi.fn()} />)

    const menuButton = screen.getByRole('button', { name: /abrir menú/i })
    await user.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: /^Servicios$/i }))
    expect(screen.getByRole('button', { name: /abrir menú/i })).toHaveAttribute('aria-expanded', 'false')
  })
})
