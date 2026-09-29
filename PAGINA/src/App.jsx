import React, { useEffect, useState } from 'react'
import './App.css'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('clima-rivera-multiservicios-theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    )

    localStorage.setItem('clima-rivera-multiservicios-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <PublicRoutes
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((prev) => !prev)}
    />
  )
}

export default App
