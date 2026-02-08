import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Eye, TrendingDown, Users, Search, Settings, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#f5f5f7] rounded-full"
          >
            <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
            <span className="text-sm text-[#1d1d1f]/70">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-[#1d1d1f]"
          >
            {t('hero.title')}<span className="gradient-text">{t('hero.titleHighlight')}</span>{t('hero.titleEnd')}<br />{t('hero.titleEnd2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#1d1d1f]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/geo-score"
              className="group flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: t('hero.stat1Value'), label: t('hero.stat1Label'), color: '#007AFF' },
              { value: t('hero.stat2Value'), label: t('hero.stat2Label'), color: '#5856D6' },
              { value: t('hero.stat3Value'), label: t('hero.stat3Label'), color: '#AF52DE' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="apple-card p-6 text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#1d1d1f]/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsSection />
      <ServicesPreview />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
    </>
  );
}

function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Eye, value: t('stats.stat1Value'), label: t('stats.stat1Label'), desc: t('stats.stat1Desc'), color: '#007AFF', negative: true },
    { icon: TrendingDown, value: t('stats.stat2Value'), label: t('stats.stat2Label'), desc: t('stats.stat2Desc'), color: '#FF3B30', negative: true },
    { icon: Users, value: t('stats.stat3Value'), label: t('stats.stat3Label'), desc: t('stats.stat3Desc'), color: '#5856D6', negative: false },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="apple-card p-8"
            >
              <div className="text-5xl font-bold mb-3" style={{ color: stat.color }}>
                {stat.negative && '-'}{stat.value}
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{stat.label}</h3>
              <p className="text-[#1d1d1f]/50 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    { icon: Search, title: t('services.service1Title'), desc: t('services.service1Subtitle'), color: '#007AFF', features: [t('services.service1Feature1'), t('services.service1Feature2'), t('services.service1Feature3'), t('services.service1Feature4')] },
    { icon: Settings, title: t('services.service2Title'), desc: t('services.service2Subtitle'), color: '#5856D6', features: [t('services.service2Feature1'), t('services.service2Feature2'), t('services.service2Feature3'), t('services.service2Feature4')] },
    { icon: PenTool, title: t('services.service3Title'), desc: t('services.service3Subtitle'), color: '#AF52DE', features: [t('services.service3Feature1'), t('services.service3Feature2'), t('services.service3Feature3'), t('services.service3Feature4')] },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('services.badge')}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('services.title')}<span className="gradient-text">{t('services.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="apple-card p-8"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${service.color}15` }}>
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{service.title}</h3>
              <p className="text-[#1d1d1f]/50 text-sm mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#1d1d1f]/60">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-all">
            {t('services.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { num: '1', title: t('process.step1Title'), desc: t('process.step1Desc') },
    { num: '2', title: t('process.step2Title'), desc: t('process.step2Desc') },
    { num: '3', title: t('process.step3Title'), desc: t('process.step3Desc') },
    { num: '4', title: t('process.step4Title'), desc: t('process.step4Desc') },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('process.badge')}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('process.title')}<br /><span className="gradient-text">{t('process.titleHighlight')}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#AF52DE] rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index === 0 ? '#007AFF, #0056CC' :
                      index === 1 ? '#5856D6, #4240B3' :
                      index === 2 ? '#8944AB, #AF52DE' :
                      '#AF52DE, #8944AB'
                    })`
                  }}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">{step.title}</h3>
                <p className="text-sm text-[#1d1d1f]/50">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const { t } = useLanguage();

  const results = [
    { value: '+340%', label: t('results.result1Label'), desc: t('results.result1Desc') },
    { value: '23', label: t('results.result2Label'), desc: t('results.result2Desc') },
    { value: '+47%', label: t('results.result3Label'), desc: t('results.result3Desc') },
    { value: '8x', label: t('results.result4Label'), desc: t('results.result4Desc') },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('results.badge')}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('results.title')}<br /><span className="gradient-text">{t('results.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="apple-card p-6 text-center"
            >
              <div className="text-3xl font-bold text-[#007AFF] mb-1">{result.value}</div>
              <div className="text-sm font-medium text-[#1d1d1f]">{result.label}</div>
              <div className="text-xs text-[#1d1d1f]/40 mt-1">{result.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('cta.title')}<span className="gradient-text">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 mb-8 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/geo-score" className="px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              {t('cta.button')}
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              {t('cta.bookCall')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
