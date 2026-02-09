import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown, ArrowRight, Code, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';

export default function Pricing() {
  useSeo({
    title: 'Pricing — GEO Plans & Schema Audit | Cited.',
    description: 'Transparent pricing for AI visibility. Choose from Starter, Growth, or Enterprise plans. Includes Schema.org audit and GEO optimization.',
    path: '/pricing',
  });
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricingPage.starter'),
      subtitle: t('pricingPage.starterSubtitle'),
      price: t('pricingPage.starterPrice'),
      period: t('pricingPage.starterPeriod'),
      icon: Sparkles,
      color: '#007AFF',
      popular: false,
      features: [
        t('pricingPage.starterFeature1'),
        t('pricingPage.starterFeature2'),
        t('pricingPage.starterFeature3'),
        t('pricingPage.starterFeature4'),
        t('pricingPage.starterFeature5'),
        t('pricingPage.starterFeature6'),
      ],
    },
    {
      name: t('pricingPage.growth'),
      subtitle: t('pricingPage.growthSubtitle'),
      price: t('pricingPage.growthPrice'),
      period: t('pricingPage.growthPeriod'),
      icon: Zap,
      color: '#5856D6',
      popular: true,
      features: [
        t('pricingPage.growthFeature1'),
        t('pricingPage.growthFeature2'),
        t('pricingPage.growthFeature3'),
        t('pricingPage.growthFeature4'),
        t('pricingPage.growthFeature5'),
        t('pricingPage.growthFeature6'),
      ],
    },
    {
      name: t('pricingPage.custom'),
      subtitle: t('pricingPage.customSubtitle'),
      price: t('pricingPage.customPrice'),
      period: t('pricingPage.customPeriod'),
      icon: Crown,
      color: '#AF52DE',
      popular: false,
      features: [
        t('pricingPage.customFeature1'),
        t('pricingPage.customFeature2'),
        t('pricingPage.customFeature3'),
        t('pricingPage.customFeature4'),
        t('pricingPage.customFeature5'),
        t('pricingPage.customFeature6'),
      ],
    },
  ];

  const faqs = [
    { q: t('pricingPage.faq1Q'), a: t('pricingPage.faq1A') },
    { q: t('pricingPage.faq2Q'), a: t('pricingPage.faq2A') },
    { q: t('pricingPage.faq3Q'), a: t('pricingPage.faq3A') },
    { q: t('pricingPage.faq4Q'), a: t('pricingPage.faq4A') },
  ];

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('pricingPage.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('pricingPage.title')}<span className="gradient-text">{t('pricingPage.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('pricingPage.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[#34C759]/10 rounded-2xl border border-[#34C759]/20"
          >
            <Shield className="w-5 h-5 text-[#34C759]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#34C759]">{t('guarantee.title')}</p>
              <p className="text-xs text-[#1d1d1f]/50">{t('guarantee.description')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`apple-card p-8 relative ${plan.popular ? 'ring-2' : ''}`}
                style={{ '--tw-ring-color': plan.color } as React.CSSProperties}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: plan.color }}>
                      {t('pricingPage.mostPopular')}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${plan.color}15` }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1d1d1f]">{plan.name}</h2>
                  <p className="text-[#1d1d1f]/50 text-sm">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  <p className="text-sm text-[#1d1d1f]/40 mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${plan.color}15` }}>
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-[#1d1d1f]/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'text-white hover:opacity-90'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                  style={{ background: plan.popular ? plan.color : undefined }}
                >
                  {t('pricingPage.getStarted')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('pricingPage.schemaTitle')}</h2>
              <p className="text-[#1d1d1f]/50 max-w-2xl mx-auto">{t('pricingPage.schemaSubtitle')}</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: t('pricingPage.schemaEssentials'),
                subtitle: t('pricingPage.schemaEssentialsSubtitle'),
                price: t('pricingPage.schemaEssentialsPrice'),
                color: '#007AFF',
                popular: false,
                features: [
                  t('pricingPage.schemaEssentialsFeature1'),
                  t('pricingPage.schemaEssentialsFeature2'),
                  t('pricingPage.schemaEssentialsFeature3'),
                  t('pricingPage.schemaEssentialsFeature4'),
                ],
              },
              {
                name: t('pricingPage.schemaGrowth'),
                subtitle: t('pricingPage.schemaGrowthSubtitle'),
                price: t('pricingPage.schemaGrowthPrice'),
                color: '#5856D6',
                popular: true,
                features: [
                  t('pricingPage.schemaGrowthFeature1'),
                  t('pricingPage.schemaGrowthFeature2'),
                  t('pricingPage.schemaGrowthFeature3'),
                  t('pricingPage.schemaGrowthFeature4'),
                  t('pricingPage.schemaGrowthFeature5'),
                  t('pricingPage.schemaGrowthFeature6'),
                ],
              },
              {
                name: t('pricingPage.schemaEnterprise'),
                subtitle: t('pricingPage.schemaEnterpriseSubtitle'),
                price: t('pricingPage.schemaEnterprisePrice'),
                color: '#AF52DE',
                popular: false,
                features: [
                  t('pricingPage.schemaEnterpriseFeature1'),
                  t('pricingPage.schemaEnterpriseFeature2'),
                  t('pricingPage.schemaEnterpriseFeature3'),
                  t('pricingPage.schemaEnterpriseFeature4'),
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`apple-card p-6 relative ${plan.popular ? 'ring-2' : ''}`}
                style={{ '--tw-ring-color': plan.color } as React.CSSProperties}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: plan.color }}>
                      {t('pricingPage.schemaMostPopular')}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${plan.color}15` }}
                  >
                    <Code className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">{plan.name}</h3>
                  <p className="text-sm text-[#1d1d1f]/50">{plan.subtitle}</p>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#1d1d1f]/70">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all text-sm ${
                    plan.popular
                      ? 'text-white hover:opacity-90'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                  style={{ background: plan.popular ? plan.color : undefined }}
                >
                  {t('pricingPage.schemaGetStarted')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/pricing"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#007AFF] font-medium hover:underline"
            >
              {t('pricingPage.schemaUpgrade')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-8 text-center">{t('pricingPage.faqTitle')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6"
              >
                <h3 className="font-semibold text-[#1d1d1f] mb-2">{faq.q}</h3>
                <p className="text-[#1d1d1f]/60 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('pricingPage.customSolution')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('pricingPage.customSolutionSubtitle')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
            {t('pricingPage.contactSales')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
