import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { DynamicBackground } from './components/DynamicBackground';
import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import Home from './pages/Home';
import './App.css';

const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const GeoScore = lazy(() => import('./pages/GeoScore'));
const SchemaAudit = lazy(() => import('./pages/SchemaAudit'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const FAQ = lazy(() => import('./pages/FAQ'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
      <div className="relative min-h-screen">
        <DynamicBackground />
        <Navigation />
        <main className="relative z-10">
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/ai-readiness" element={<GeoScore />} />
            <Route path="/schema-audit" element={<SchemaAudit />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
