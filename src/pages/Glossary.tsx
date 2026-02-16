import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';

const TERM_COUNT = 20;

const CATEGORIES = ['All', 'GEO', 'SEO', 'Technical', 'AI'] as const;
type Category = typeof CATEGORIES[number];

const categoryKeyMap: Record<Category, string> = {
  All: 'glossary.catAll',
  GEO: 'glossary.catGeo',
  SEO: 'glossary.catSeo',
  Technical: 'glossary.catTechnical',
  AI: 'glossary.catAi',
};

const categoryColors: Record<string, string> = {
  GEO: '#007AFF',
  SEO: '#5856D6',
  Technical: '#FF9500',
  AI: '#AF52DE',
};

export default function Glossary() {
  useSeo({
    title: 'GEO & SEO Glossary — AI Visibility Terms | Cited.',
    description: 'Complete glossary of GEO, SEO, and AI visibility terms. Understand Generative Engine Optimization, Schema.org, LLMs, and more.',
    path: '/glossary',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
    ],
  });

  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const terms = useMemo(() => {
    const items = [];
    for (let i = 1; i <= TERM_COUNT; i++) {
      items.push({
        term: t(`glossary.term${i}`),
        definition: t(`glossary.def${i}`),
        category: t(`glossary.cat${i}`),
      });
    }
    return items;
  }, [t]);

  const filteredTerms = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return terms.filter((item) => {
      const matchesSearch = query === ''
        || item.term.toLowerCase().includes(query)
        || item.definition.toLowerCase().includes(query);
      const matchesCategory = activeCategory === 'All'
        || item.category === activeCategory
        || item.category === t(categoryKeyMap[activeCategory]);
      return matchesSearch && matchesCategory;
    });
  }, [terms, searchQuery, activeCategory, t]);

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">
              {t('glossary.tagline')}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('glossary.title')}<span className="gradient-text">{t('glossary.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('glossary.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('glossary.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] rounded-xl text-[#1d1d1f] placeholder:text-[#1d1d1f]/30 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#007AFF] text-white'
                      : 'bg-[#f5f5f7] text-[#1d1d1f]/60 hover:text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                >
                  {t(categoryKeyMap[cat])}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredTerms.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#1d1d1f]/50 py-12"
            >
              {t('glossary.noResults')}
            </motion.p>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map((item, index) => {
                const color = categoryColors[item.category] || '#007AFF';
                return (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                    className="apple-card p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                        style={{ background: color }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-[#1d1d1f] text-lg">{item.term}</h3>
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                            style={{ background: `${color}15`, color }}
                          >
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[#1d1d1f]/60 leading-relaxed">{item.definition}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('glossary.ctaTitle')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('glossary.ctaSubtitle')}</p>
          <Link
            to="/ai-readiness"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
          >
            {t('glossary.ctaButton')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
