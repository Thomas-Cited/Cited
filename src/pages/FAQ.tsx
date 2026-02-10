import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';
import { useJsonLd } from '../hooks/use-json-ld';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="apple-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-[#1d1d1f] pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#1d1d1f]/50" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-[#1d1d1f]/70">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();

  useSeo({
    title: 'FAQ — AI Visibility Questions | Cited.',
    description: 'Answers to common questions about AI visibility, Schema.org, and how Cited helps brands get cited by AI engines.',
    path: '/faq',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ],
  });
  const categories = [
    { key: 'General', label: t('faq.catGeneral') },
    { key: 'Services', label: t('faq.catServices') },
    { key: 'Pricing', label: t('faq.catPricing') },
    { key: 'Technical', label: t('faq.catTechnical') },
  ];
  const [activeCategory, setActiveCategory] = useState('General');

  const faqs: Record<string, { q: string; a: string }[]> = {
    General: [
      { q: t('faq.general1Q'), a: t('faq.general1A') },
      { q: t('faq.general2Q'), a: t('faq.general2A') },
      { q: t('faq.general3Q'), a: t('faq.general3A') },
    ],
    Services: [
      { q: t('faq.services1Q'), a: t('faq.services1A') },
      { q: t('faq.services2Q'), a: t('faq.services2A') },
      { q: t('faq.services3Q'), a: t('faq.services3A') },
    ],
    Pricing: [
      { q: t('faq.pricing1Q'), a: t('faq.pricing1A') },
      { q: t('faq.pricing2Q'), a: t('faq.pricing2A') },
      { q: t('faq.pricing3Q'), a: t('faq.pricing3A') },
    ],
    Technical: [
      { q: t('faq.technical1Q'), a: t('faq.technical1A') },
      { q: t('faq.technical2Q'), a: t('faq.technical2A') },
      { q: t('faq.technical3Q'), a: t('faq.technical3A') },
    ],
  };

  const allFaqItems = useMemo(
    () => Object.values(faqs).flat(),
    [faqs],
  );

  useJsonLd(useMemo(() => ({
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }), [allFaqItems]));

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('faq.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('faq.title')}<span className="gradient-text">{t('faq.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-[#f5f5f7] text-[#1d1d1f]/70 hover:bg-[#e8e8ed]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs[activeCategory]?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FAQItem question={item.q} answer={item.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#007AFF]/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#007AFF]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('faq.stillQuestions')}</h2>
            <p className="text-[#1d1d1f]/50 mb-8 max-w-lg mx-auto">
              {t('faq.stillQuestionsSubtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
            >
              {t('faq.contactUs')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
