import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, AlertTriangle, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';
import { sectors } from '../data/sectors';

export default function Sector() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const sector = sectors.find((s) => s.slug === slug);

  useSeo({
    title: sector ? `${t(sector.titleKey)} — AI Visibility | Cited.` : 'Sector | Cited.',
    description: sector ? t(sector.descKey) : '',
    path: `/sectors/${slug}`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sectors', path: '/sectors' },
      ...(sector ? [{ name: t(sector.titleKey), path: `/sectors/${slug}` }] : []),
    ],
  });

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  const painPoints = [
    t(sector.pain1Key),
    t(sector.pain2Key),
    t(sector.pain3Key),
  ];

  const solutions = [
    t(sector.solution1Key),
    t(sector.solution2Key),
    t(sector.solution3Key),
  ];

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/sectors" className="inline-flex items-center gap-2 text-sm text-[#1d1d1f]/50 hover:text-[#007AFF] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('sectorPage.backToSectors')}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              style={{ background: `${sector.color}15` }}
            >
              <sector.icon className="w-8 h-8" style={{ color: sector.color }} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              {t(sector.titleKey)}
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t(sector.descKey)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="apple-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#007AFF] mb-1">{t(sector.stat1ValueKey)}</p>
              <p className="text-sm text-[#1d1d1f]/50">{t(sector.stat1LabelKey)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#007AFF] mb-1">{t(sector.stat2ValueKey)}</p>
              <p className="text-sm text-[#1d1d1f]/50">{t(sector.stat2LabelKey)}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="apple-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF3B30]/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#FF3B30]" />
                </div>
                <h2 className="text-xl font-bold text-[#1d1d1f]">{t('sectorPage.painPointsTitle')}</h2>
              </div>
              <ul className="space-y-4">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FF3B30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#FF3B30]">{i + 1}</span>
                    </span>
                    <span className="text-[#1d1d1f]/70">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="apple-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#34C759]" />
                </div>
                <h2 className="text-xl font-bold text-[#1d1d1f]">{t('sectorPage.solutionsTitle')}</h2>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#34C759]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#34C759]">{i + 1}</span>
                    </span>
                    <span className="text-[#1d1d1f]/70">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('sectorPage.ctaTitle')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('sectorPage.ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-readiness" className="flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              {t('sectorPage.ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              {t('sectorPage.ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
