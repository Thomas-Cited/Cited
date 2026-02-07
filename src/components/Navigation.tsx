import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'GEO Score', href: '/geo-score' },
  { label: 'Schema Audit', href: '/schema-audit' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    location.pathname === link.href 
                      ? 'text-[#007AFF] font-medium' 
                      : 'text-[#1d1d1f]/70 hover:text-[#1d1d1f]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 text-sm text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors">
                <Globe className="w-4 h-4" />
              </button>

              <a
                href="https://calendly.com/vignaudthomas40/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center px-5 py-2.5 bg-[#007AFF] text-white text-sm font-medium rounded-full hover:bg-[#0056CC] transition-colors"
              >
                Book a call
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 text-left rounded-xl transition-colors text-base ${
                      location.pathname === link.href
                        ? 'bg-[#007AFF]/10 text-[#007AFF] font-medium'
                        : 'text-[#1d1d1f]/80 hover:text-[#1d1d1f] hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://calendly.com/vignaudthomas40/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 bg-[#007AFF] text-white font-medium rounded-xl text-center block"
                >
                  Book a call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
