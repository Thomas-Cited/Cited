import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Clock, Tag, FileText, Loader2, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState(false);

  const articles = [
    {
      title: t('blog.article1Title'),
      excerpt: t('blog.article1Excerpt'),
      category: t('blog.article1Category'),
      readTime: t('blog.article1ReadTime'),
      date: t('blog.article1Date'),
      featured: true,
    },
    {
      title: t('blog.article2Title'),
      excerpt: t('blog.article2Excerpt'),
      category: t('blog.article2Category'),
      readTime: t('blog.article2ReadTime'),
      date: t('blog.article2Date'),
    },
    {
      title: t('blog.article3Title'),
      excerpt: t('blog.article3Excerpt'),
      category: t('blog.article3Category'),
      readTime: t('blog.article3ReadTime'),
      date: t('blog.article3Date'),
    },
    {
      title: t('blog.article4Title'),
      excerpt: t('blog.article4Excerpt'),
      category: t('blog.article4Category'),
      readTime: t('blog.article4ReadTime'),
      date: t('blog.article4Date'),
    },
    {
      title: t('blog.article5Title'),
      excerpt: t('blog.article5Excerpt'),
      category: t('blog.article5Category'),
      readTime: t('blog.article5ReadTime'),
      date: t('blog.article5Date'),
    },
    {
      title: t('blog.article6Title'),
      excerpt: t('blog.article6Excerpt'),
      category: t('blog.article6Category'),
      readTime: t('blog.article6ReadTime'),
      date: t('blog.article6Date'),
    },
  ];

  const categories = [
    t('blog.catAll'), t('blog.catGeoBasics'), t('blog.catTechnical'),
    t('blog.catImplementation'), t('blog.catCaseStudy'), t('blog.catIndustry'),
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubscribing(true);
    setSubscribeError(false);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Email', newsletterEmail);

      const response = await fetch('https://tally.so/r/jaQaqa', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSubscribed(true);
    } catch {
      setSubscribeError(true);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('blog.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('blog.title')}<span className="gradient-text">{t('blog.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-[#f5f5f7] text-[#1d1d1f]/70 hover:bg-[#e8e8ed]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          {articles.filter(a => a.featured).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="apple-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-[#1d1d1f]/50">{t('blog.featured')}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{article.title}</h2>
                  <p className="text-[#1d1d1f]/60 mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#1d1d1f]/50 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[#007AFF] font-semibold hover:underline">
                    {t('blog.readArticle')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 rounded-2xl h-64 flex items-center justify-center">
                  <FileText className="w-20 h-20 text-[#007AFF]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">{t('blog.latestArticles')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-[#007AFF]" />
                  <span className="text-xs text-[#007AFF] font-medium">{article.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-[#1d1d1f]/60 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[#1d1d1f]/50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('blog.stayUpdated')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('blog.stayUpdatedSubtitle')}</p>
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 bg-[#34C759]/10 rounded-xl">
              <Check className="w-5 h-5 text-[#34C759]" />
              <span className="text-[#34C759] font-medium">{t('blog.subscribed')}</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('blog.emailPlaceholder')}
                  className="flex-1 px-6 py-4 bg-white border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubscribing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('blog.subscribing')}
                    </>
                  ) : (
                    t('blog.subscribe')
                  )}
                </button>
              </form>
              {subscribeError && (
                <p className="mt-4 text-sm text-red-500">{t('blog.subscribeError')}</p>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
