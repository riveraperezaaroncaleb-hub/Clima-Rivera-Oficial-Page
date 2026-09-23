import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

// PublicRoutes defines the routes available to all visitors.
// This keeps the app structure clear and easier to extend later.
const PublicRoutes = ({ isDarkMode, onToggleTheme }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default PublicRoutes
