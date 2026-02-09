import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navLinksData = [
  { labelKey: 'nav.services', href: '/services' },
  { labelKey: 'nav.pricing', href: '/pricing' },
  { labelKey: 'nav.geoScore', href: '/geo-score' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-blur py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:scale-102 transition-transform">
              <span className="text-xl font-semibold text-[#1d1d1f]">Cited.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinksData.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    location.pathname === link.href
                      ? 'text-[#007AFF] font-medium'
                      : 'text-[#1d1d1f]/70 hover:text-[#1d1d1f]'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors rounded-full hover:bg-[#f5f5f7]"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'FR'}</span>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-[#1d1d1f]/10 overflow-hidden min-w-[120px]"
                    >
                      <button
                        onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center gap-2 ${
                          language === 'en' ? 'bg-[#007AFF]/10 text-[#007AFF]' : 'hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span>🇬🇧</span> English
                      </button>
                      <button
                        onClick={() => { setLanguage('fr'); setIsLangMenuOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center gap-2 ${
                          language === 'fr' ? 'bg-[#007AFF]/10 text-[#007AFF]' : 'hover:bg-[#f5f5f7]'
                        }`}
                      >
                        <span>🇫🇷</span> Français
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://calendly.com/vignaudthomas40/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center px-5 py-2.5 bg-[#007AFF] text-white text-sm font-medium rounded-full hover:bg-[#0056CC] transition-colors"
              >
                {t('nav.bookCall')}
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-[#1d1d1f]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden"
          >
            <div className="mx-6 p-4 glass-strong rounded-2xl shadow-2xl">
              <div className="flex flex-col gap-1">
                {navLinksData.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 text-left rounded-xl transition-colors text-base ${
                      location.pathname === link.href
                        ? 'bg-[#007AFF]/10 text-[#007AFF] font-medium'
                        : 'text-[#1d1d1f]/80 hover:text-[#1d1d1f] hover:bg-black/5'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}

                {/* Language Switch in Mobile */}
                <div className="flex gap-2 px-4 py-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === 'en' ? 'bg-[#007AFF] text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === 'fr' ? 'bg-[#007AFF] text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'
                    }`}
                  >
                    🇫🇷 FR
                  </button>
                </div>

                <a
                  href="https://calendly.com/vignaudthomas40/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 bg-[#007AFF] text-white font-medium rounded-xl text-center block"
                >
                  {t('nav.bookCall')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
