import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// PrivateRoutes is reserved for authenticated sections.
// The current project has no private flow yet, so it redirects safely.
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<div>Panel privado en desarrollo.</div>}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default PrivateRoutes
