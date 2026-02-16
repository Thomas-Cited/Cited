import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Settings, FileText, Users, ArrowRight, Check, BookOpen, GraduationCap, Newspaper, Handshake, MessageCircleQuestion } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';
import { useJsonLd } from '../hooks/use-json-ld';

export default function Services() {
  useSeo({
    title: 'Services — AI Visibility Optimization | Cited.',
    description: 'Content optimization, Schema.org markup, AI audits, and strategic consulting to improve your brand\'s visibility across ChatGPT, Perplexity, and Google AI.',
    path: '/services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  });
  const { t } = useLanguage();

  useJsonLd({
    '@type': 'ProfessionalService',
    name: 'AI Visibility Optimization',
    provider: {
      '@type': 'Organization',
      name: 'Cited Agency',
      url: 'https://citedagency.com',
    },
    url: 'https://citedagency.com/services',
    description: 'Content optimization, Schema.org markup, AI audits, and strategic consulting to improve your brand\'s visibility across ChatGPT, Perplexity, and Google AI.',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Visibility Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Readiness Audit',
            description: 'Visibility analysis across 5 AI providers with proprietary scoring.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Optimization',
            description: 'Schema.org implementation, structured data, and E-E-A-T signals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI-Optimized Content',
            description: 'Citation-ready articles, FAQs, and structured Q&A content.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Competitor Intelligence',
            description: 'Track and benchmark competitor AI visibility across providers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Question Discovery',
            description: 'Identify high-value prompts users ask AI about your industry.',
          },
        },
      ],
    },
  });

  const services = [
    {
      icon: Search,
      title: t('servicesPage.service1Title'),
      subtitle: t('servicesPage.service1Subtitle'),
      description: t('servicesPage.service1Desc'),
      color: '#007AFF',
      features: [
        t('servicesPage.service1Feature1'),
        t('servicesPage.service1Feature2'),
        t('servicesPage.service1Feature3'),
        t('servicesPage.service1Feature4'),
        t('servicesPage.service1Feature5'),
        t('servicesPage.service1Feature6'),
      ],
    },
    {
      icon: Settings,
      title: t('servicesPage.service2Title'),
      subtitle: t('servicesPage.service2Subtitle'),
      description: t('servicesPage.service2Desc'),
      color: '#5856D6',
      features: [
        t('servicesPage.service2Feature1'),
        t('servicesPage.service2Feature2'),
        t('servicesPage.service2Feature3'),
        t('servicesPage.service2Feature4'),
        t('servicesPage.service2Feature5'),
        t('servicesPage.service2Feature6'),
        t('servicesPage.service2Feature7'),
      ],
    },
    {
      icon: FileText,
      title: t('servicesPage.service3Title'),
      subtitle: t('servicesPage.service3Subtitle'),
      description: t('servicesPage.service3Desc'),
      color: '#AF52DE',
      features: [
        t('servicesPage.service3Feature1'),
        t('servicesPage.service3Feature2'),
        t('servicesPage.service3Feature3'),
        t('servicesPage.service3Feature4'),
        t('servicesPage.service3Feature5'),
        t('servicesPage.service3Feature6'),
      ],
    },
    {
      icon: Users,
      title: t('servicesPage.service4Title'),
      subtitle: t('servicesPage.service4Subtitle'),
      description: t('servicesPage.service4Desc'),
      color: '#FF9500',
      features: [
        t('servicesPage.service4Feature1'),
        t('servicesPage.service4Feature2'),
        t('servicesPage.service4Feature3'),
        t('servicesPage.service4Feature4'),
        t('servicesPage.service4Feature5'),
        t('servicesPage.service4Feature6'),
      ],
    },
    {
      icon: MessageCircleQuestion,
      title: t('servicesPage.service5Title'),
      subtitle: t('servicesPage.service5Subtitle'),
      description: t('servicesPage.service5Desc'),
      color: '#34C759',
      features: [
        t('servicesPage.service5Feature1'),
        t('servicesPage.service5Feature2'),
        t('servicesPage.service5Feature3'),
        t('servicesPage.service5Feature4'),
        t('servicesPage.service5Feature5'),
        t('servicesPage.service5Feature6'),
      ],
    },
  ];

  const additionalServices = [
    { title: t('servicesPage.additional1Title'), desc: t('servicesPage.additional1Desc'), icon: BookOpen },
    { title: t('servicesPage.additional2Title'), desc: t('servicesPage.additional2Desc'), icon: GraduationCap },
    { title: t('servicesPage.additional3Title'), desc: t('servicesPage.additional3Desc'), icon: Newspaper },
    { title: t('servicesPage.additional4Title'), desc: t('servicesPage.additional4Desc'), icon: Handshake },
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('servicesPage.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('servicesPage.title')}<br /><span className="gradient-text">{t('servicesPage.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('servicesPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="apple-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">{service.title}</h2>
                  <p className="text-lg text-[#1d1d1f]/50 mb-4">{service.subtitle}</p>
                  <p className="text-[#1d1d1f]/70">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f]/50 uppercase tracking-wider mb-4">{t('servicesPage.whatsIncluded')}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${service.color}15` }}>
                          <Check className="w-3 h-3" style={{ color: service.color }} />
                        </div>
                        <span className="text-[#1d1d1f]/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">
              {t('servicesPage.timelineTitle')} <span className="gradient-text">{t('servicesPage.timelineTitleHighlight')}</span>
            </h2>
            <p className="text-[#1d1d1f]/50">{t('servicesPage.timelineSubtitle')}</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#AF52DE]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {([
                { titleKey: 'servicesPage.timeline30Title', durationKey: 'servicesPage.timeline30Duration', items: ['servicesPage.timeline30Item1', 'servicesPage.timeline30Item2', 'servicesPage.timeline30Item3', 'servicesPage.timeline30Item4'], color: '#007AFF' },
                { titleKey: 'servicesPage.timeline60Title', durationKey: 'servicesPage.timeline60Duration', items: ['servicesPage.timeline60Item1', 'servicesPage.timeline60Item2', 'servicesPage.timeline60Item3', 'servicesPage.timeline60Item4'], color: '#5856D6' },
                { titleKey: 'servicesPage.timeline90Title', durationKey: 'servicesPage.timeline90Duration', items: ['servicesPage.timeline90Item1', 'servicesPage.timeline90Item2', 'servicesPage.timeline90Item3', 'servicesPage.timeline90Item4'], color: '#AF52DE' },
              ] as const).map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="hidden md:flex w-4 h-4 rounded-full mx-auto mb-6 ring-4 ring-white" style={{ background: phase.color }} />
                  <div className="apple-card p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>{t(phase.durationKey)}</span>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mt-1 mb-4">{t(phase.titleKey)}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((itemKey, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${phase.color}15` }}>
                            <Check className="w-3 h-3" style={{ color: phase.color }} />
                          </div>
                          <span className="text-sm text-[#1d1d1f]/70">{t(itemKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('servicesPage.additionalTitle')}</h2>
            <p className="text-[#1d1d1f]/50">{t('servicesPage.additionalSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">{item.title}</h3>
                <p className="text-sm text-[#1d1d1f]/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">{t('servicesPage.readyTitle')}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing" className="flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              {t('servicesPage.viewPricing')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              {t('servicesPage.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
