import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// LandingPage is the public homepage shown for visitors.
// It composes the main landing sections and passes the theme state to the navbar.
const LandingPage = ({ isDarkMode, onToggleTheme }) => {
  return (
    <div className="page-shell">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
