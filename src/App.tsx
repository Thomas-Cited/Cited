import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { DynamicBackground } from './components/DynamicBackground';
import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { Calendar } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import GeoScore from './pages/GeoScore';
import SchemaAudit from './pages/SchemaAudit';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
      <div className="relative min-h-screen">
        <DynamicBackground />
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/geo-score" element={<GeoScore />} />
            <Route path="/schema-audit" element={<SchemaAudit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating CTA Button */}
        <a
          href="https://calendly.com/vignaudthomas40/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#007AFF] text-white font-medium rounded-full shadow-lg hover:bg-[#0056CC] hover:scale-105 transition-all"
        >
          <Calendar className="w-4 h-4" />
          Book a call
        </a>
      </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
