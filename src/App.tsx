import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { DynamicBackground } from './components/DynamicBackground';
import { Navigation } from './components/Navigation';
import { Footer } from './sections/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import Home from './pages/Home';


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
const Glossary = lazy(() => import('./pages/Glossary'));
const Sectors = lazy(() => import('./pages/Sectors'));
const Sector = lazy(() => import('./pages/Sector'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
      <ErrorBoundary>
      <div className="relative min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#007AFF] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
          Skip to content
        </a>
        <DynamicBackground />
        <Navigation />
        <main id="main-content" className="relative z-10">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#007AFF] border-t-transparent rounded-full animate-spin" />
            </div>
          }>
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
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/sectors/:slug" element={<Sector />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
      </ErrorBoundary>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
