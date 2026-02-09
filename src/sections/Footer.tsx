import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { labelKey: 'footer.services', href: '/services' },
    { labelKey: 'footer.pricing', href: '/pricing' },
    { labelKey: 'footer.geoScore', href: '/geo-score' },
    { labelKey: 'footer.schemaAudit', href: '/schema-audit' },
    { labelKey: 'footer.blog', href: '/blog' },
    { labelKey: 'footer.faq', href: '/faq' },
    { labelKey: 'footer.contact', href: '/contact' },
    { labelKey: 'footer.legal', href: '/legal' },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-[#1d1d1f]/8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center hover:scale-102 transition-transform">
            <span className="text-xl font-semibold text-[#1d1d1f]">Cited.</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="text-sm text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-[#1d1d1f]/30"
          >
            {t('footer.rights')}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
