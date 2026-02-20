import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';
import { useJsonLd } from '../hooks/use-json-ld';
import { getArticleBySlug } from '../data/articles';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { URLS } from '../constants/urls';
import { BASE_URL } from '../constants/seo';
import NotFound from './NotFound';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const article = slug ? getArticleBySlug(slug) : undefined;

  useSeo({
    title: article ? `${t(article.titleKey)} | Cited. Blog` : 'Article Not Found | Cited.',
    description: article ? t(article.excerptKey) : '',
    path: article ? `/blog/${article.slug}` : '/blog',
    ogType: article ? 'article' : undefined,
    articlePublishedTime: article?.dateIso,
    articleModifiedTime: article?.dateModifiedIso,
    articleSection: article ? t(article.categoryKey) : undefined,
    breadcrumbs: article
      ? [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: t(article.titleKey), path: `/blog/${article.slug}` },
        ]
      : undefined,
  });

  useJsonLd(useMemo(() => {
    if (!article) return null;
    const wordCount = article.content[language].split(/\s+/).length;
    return {
      '@type': 'Article',
      headline: t(article.titleKey),
      description: t(article.excerptKey),
      image: `${BASE_URL}/og-image.png`,
      wordCount,
      keywords: article.keywords,
      articleSection: t(article.categoryKey),
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${article.slug}` },
      author: {
        '@type': 'Person',
        name: 'Thomas Vignaud',
        url: `${BASE_URL}/about`,
        sameAs: 'https://www.linkedin.com/in/thomas-vignaud-447361134/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Cited',
        url: BASE_URL,
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.svg` },
      },
      datePublished: article.dateIso,
      dateModified: article.dateModifiedIso,
      url: `${BASE_URL}/blog/${article.slug}`,
    };
  }, [article, t, language]));

  useJsonLd(useMemo(() => {
    if (!article?.faqs || article.faqs.length === 0) return null;
    return {
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    };
  }, [article]));

  if (!article) {
    return <NotFound />;
  }

  const content = article.content[language];
  const htmlContent = useMemo(() => DOMPurify.sanitize(marked.parse(content) as string), [content]);

  return (
    <div className="pt-24">
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#007AFF] hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('blog.backToBlog')}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-sm font-medium rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {t(article.categoryKey)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#1d1d1f]/50">
                <Clock className="w-3.5 h-3.5" />
                {t(article.readTimeKey)}
              </span>
              <time dateTime={article.dateIso} className="inline-flex items-center gap-1.5 text-sm text-[#1d1d1f]/50">
                <Calendar className="w-3.5 h-3.5" />
                {t(article.dateKey)}
              </time>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight leading-tight">
              {t(article.titleKey)}
            </h1>

            <p className="text-sm text-[#1d1d1f]/50 mb-8">
              {t('blog.authorBy')}{' '}
              <a href="/about" rel="author" className="text-[#007AFF] hover:underline">
                Thomas Vignaud
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:text-[#1d1d1f] prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#1d1d1f]/70 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-[#1d1d1f]
              prose-a:text-[#007AFF] prose-a:no-underline hover:prose-a:underline
              prose-ul:text-[#1d1d1f]/70 prose-li:text-[#1d1d1f]/70
              prose-code:text-[#007AFF] prose-code:bg-[#007AFF]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#1d1d1f] prose-pre:rounded-xl prose-pre:overflow-x-auto
              prose-hr:border-[#e8e8ed] prose-hr:my-12
              prose-blockquote:border-l-[#007AFF] prose-blockquote:text-[#1d1d1f]/60"
          >
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 bg-gradient-to-br from-[#007AFF]/5 to-[#5856D6]/5 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
              {t('blog.ctaTitle')}
            </h3>
            <p className="text-[#1d1d1f]/60 mb-6 max-w-lg mx-auto">
              {t('blog.ctaSubtitle')}
            </p>
            <a
              href={URLS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all"
            >
              {t('blog.ctaButton')}
            </a>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
