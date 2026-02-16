import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';
import { sectors } from '../data/sectors';

export default function Sectors() {
  useSeo({
    title: 'Sectors — AI Visibility by Industry | Cited.',
    description: 'Discover how Cited optimizes AI visibility for SaaS, Real Estate, Healthcare, Fintech, E-commerce, and Consulting brands.',
    path: '/sectors',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sectors', path: '/sectors' },
    ],
  });
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('sectorsPage.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('sectorsPage.title')}<br /><span className="gradient-text">{t('sectorsPage.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('sectorsPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/sectors/${sector.slug}`}
                  className="block apple-card p-6 hover:shadow-lg transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${sector.color}15` }}
                  >
                    <sector.icon className="w-6 h-6" style={{ color: sector.color }} />
                  </div>
                  <h2 className="text-xl font-bold text-[#1d1d1f] mb-2">{t(sector.titleKey)}</h2>
                  <p className="text-sm text-[#1d1d1f]/50 mb-4">{t(sector.subtitleKey)}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#007AFF] group-hover:gap-2 transition-all">
                    {t('sectorsPage.learnMore')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('sectorsPage.ctaTitle')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('sectorsPage.ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-readiness" className="flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              {t('sectorsPage.ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              {t('sectorsPage.ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
