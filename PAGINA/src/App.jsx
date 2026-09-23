import React, { useEffect, useState } from 'react'
import './App.css'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('climacore-theme')

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

    localStorage.setItem('climacore-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <PublicRoutes
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((prev) => !prev)}
    />
  )
}

export default App
