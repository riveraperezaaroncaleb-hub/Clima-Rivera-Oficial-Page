import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { Chatbot } from './components/Chatbot';
import { AccessibilityMenu } from './components/AccessibilityMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-main)] flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <AccessibilityMenu />
      </div>
    </Router>
  );
}

export default App;
