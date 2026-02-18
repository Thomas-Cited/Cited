import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const columns = [
  {
    titleKey: 'footer.colServices',
    links: [
      { labelKey: 'footer.services', href: '/services' },
      { labelKey: 'footer.pricing', href: '/pricing' },
      { labelKey: 'footer.geoScore', href: '/ai-readiness' },
      { labelKey: 'footer.schemaAudit', href: '/schema-audit' },
      { labelKey: 'footer.sectors', href: '/sectors' },
    ],
  },
  {
    titleKey: 'footer.colResources',
    links: [
      { labelKey: 'footer.blog', href: '/blog' },
      { labelKey: 'footer.faq', href: '/faq' },
      { labelKey: 'footer.about', href: '/about' },
      { labelKey: 'footer.glossary', href: '/glossary' },
    ],
  },
  {
    titleKey: 'footer.colLegal',
    links: [
      { labelKey: 'footer.contact', href: '/contact' },
      { labelKey: 'footer.legal', href: '/legal' },
      { labelKey: 'footer.privacy', href: '/legal#privacy' },
    ],
  },
];

export function Footer() {
  const { t } = useLanguage();

  let linkIndex = 0;

  return (
    <footer className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block hover:scale-102 transition-transform">
              <span className="text-xl font-semibold text-[#1d1d1f]">Cited.</span>
            </Link>
            <p className="mt-3 text-sm text-[#1d1d1f]/40 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.titleKey}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]/40 mb-3">
                {t(col.titleKey)}
              </h4>
              <nav className="flex flex-col gap-2.5">
                {col.links.map((link) => {
                  const i = linkIndex++;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className="text-sm text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1d1d1f]/8 mt-10 pt-6">
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
