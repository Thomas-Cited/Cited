import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Clock, Tag, FileText, Loader2, Check } from 'lucide-react';

const articles = [
  {
    title: 'What is Generative Engine Optimization (GEO)?',
    excerpt: 'Discover how GEO differs from traditional SEO and why it matters for your business in the AI era.',
    category: 'GEO Basics',
    readTime: '5 min read',
    date: 'Jan 15, 2026',
    featured: true,
  },
  {
    title: 'How ChatGPT Cites Websites: A Technical Deep Dive',
    excerpt: 'Understanding the mechanisms behind AI citation and how to optimize your content for maximum visibility.',
    category: 'Technical',
    readTime: '8 min read',
    date: 'Jan 12, 2026',
  },
  {
    title: 'Schema.org for AI: The Complete Guide',
    excerpt: 'Learn how to implement structured data that helps AI systems understand and cite your content.',
    category: 'Implementation',
    readTime: '12 min read',
    date: 'Jan 8, 2026',
  },
  {
    title: 'Case Study: How We Increased AI Mentions by 340%',
    excerpt: 'A detailed breakdown of our strategy and the results we achieved for a B2B SaaS company.',
    category: 'Case Study',
    readTime: '6 min read',
    date: 'Jan 5, 2026',
  },
  {
    title: 'The Future of Search: AI vs Traditional SEO',
    excerpt: 'Why traditional SEO is no longer enough and how to prepare for the AI-first future.',
    category: 'Industry',
    readTime: '7 min read',
    date: 'Jan 2, 2026',
  },
  {
    title: 'E-E-A-T Optimization for Large Language Models',
    excerpt: 'How to build authority signals that AI systems recognize and trust.',
    category: 'Technical',
    readTime: '10 min read',
    date: 'Dec 28, 2025',
  },
];

const categories = ['All', 'GEO Basics', 'Technical', 'Implementation', 'Case Study', 'Industry'];

export default function Blog() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubscribing(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('source', 'Newsletter');
      formDataToSend.append('email', newsletterEmail);

      const response = await fetch('https://formspree.io/f/mvzqgyjl', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
      if (response.ok) {
        setIsSubscribed(true);
      }
    } catch {
      // Silent fail
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">Blog</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              Insights on <span className="gradient-text">AI visibility.</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              The latest strategies, case studies, and insights on optimizing for generative AI engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
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

      {/* Featured Article */}
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
                    <span className="text-sm text-[#1d1d1f]/50">Featured</span>
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
                    Read article
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

      {/* Articles Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Latest Articles</h2>
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

      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Stay updated</h2>
          <p className="text-[#1d1d1f]/50 mb-8">Get the latest GEO insights delivered to your inbox.</p>
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 bg-[#34C759]/10 rounded-xl">
              <Check className="w-5 h-5 text-[#34C759]" />
              <span className="text-[#34C759] font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
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
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
