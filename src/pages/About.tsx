import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { URLS } from '../constants/urls';
import { CONTACT } from '../constants/contact';
import { useSeo } from '../hooks/use-seo';
import { useJsonLd } from '../hooks/use-json-ld';

export default function About() {
  const { t } = useLanguage();

  useSeo({
    title: t('about.seoTitle'),
    description: t('about.seoDescription'),
    path: '/about',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  });

  useJsonLd({
    '@type': 'ProfilePage',
    url: 'https://citedagency.com/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Thomas Vignaud',
      jobTitle: 'Founder',
      url: 'https://citedagency.com/about',
      image: 'https://citedagency.com/thomas-vignaud.png',
      sameAs: ['https://www.linkedin.com/in/thomas-vignaud-447361134/'],
      worksFor: {
        '@type': 'Organization',
        name: 'Cited Agency',
        url: 'https://citedagency.com',
      },
      alumniOf: 'Sup de Pub (Groupe INSEEC)',
    },
  });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">
                {t('about.tagline')}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
              </h1>
              <p className="text-lg text-[#1d1d1f]/60 leading-relaxed mb-4">
                {t('about.intro1')}
              </p>
              <p className="text-lg text-[#1d1d1f]/60 leading-relaxed">
                {t('about.intro2')}
              </p>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/thomas-vignaud-447361134/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2] text-white text-sm font-medium rounded-full hover:bg-[#004182] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f5f7] text-[#1d1d1f] text-sm font-medium rounded-full hover:bg-[#e8e8ed] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {t('about.emailMe')}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/thomas-vignaud.png"
                    alt="Thomas Vignaud — Founder of Cited"
                    width="320"
                    height="320"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-[#1d1d1f]/5">
                  <p className="text-sm font-semibold text-[#1d1d1f]">Thomas Vignaud</p>
                  <p className="text-xs text-[#1d1d1f]/50">Founder @ Cited</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">
              {t('about.storyTitle')}
            </h2>
            <div className="space-y-4 text-[#1d1d1f]/60 leading-relaxed">
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-lg text-[#1d1d1f]/50 mb-8">
              {t('about.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={URLS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-colors"
              >
                {t('about.ctaBook')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/ai-readiness"
                className="flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-medium rounded-full hover:bg-[#e8e8ed] transition-colors"
              >
                {t('about.ctaAudit')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
