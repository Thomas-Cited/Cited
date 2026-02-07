import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      { q: 'What is Generative Engine Optimization (GEO)?', a: 'GEO is the practice of optimizing your website and content to be visible and cited by AI engines like ChatGPT, Perplexity, Claude, and Google AI. Unlike traditional SEO which focuses on ranking in search results, GEO focuses on being referenced in AI-generated answers.' },
      { q: 'How is GEO different from SEO?', a: 'While SEO focuses on ranking in search engine results pages, GEO focuses on being cited by AI systems. This requires different strategies including structured data implementation, entity optimization, and content structured for AI comprehension.' },
      { q: 'Why do I need GEO?', a: '40% of searches now go through AI systems. If your brand isn\'t visible in AI answers, you\'re missing a massive opportunity to reach potential customers. GEO ensures your business is recommended by AI systems.' },
    ],
  },
  {
    category: 'Services',
    questions: [
      { q: 'What services do you offer?', a: 'We offer three core services: GEO Audit (analysis of your AI visibility), Technical Optimization (Schema.org implementation and site structure), and GEO Content (creating AI-optimized content). We also offer custom enterprise solutions.' },
      { q: 'How long does it take to see results?', a: 'Most clients start seeing increased AI mentions within 4-6 weeks, with significant improvements by month 3. The timeline depends on your starting point and the scope of work.' },
      { q: 'Do you work with all industries?', a: 'We work with B2B companies, e-commerce, SaaS, professional services, and more. Our methodology is adaptable to any industry that relies on organic visibility.' },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      { q: 'How much does GEO optimization cost?', a: 'Our Starter package begins at $2,000 + $450/month maintenance. Growth package is $4,000 + $600/month. We also offer custom enterprise solutions. Contact us for a personalized quote.' },
      { q: 'What\'s included in maintenance?', a: 'Maintenance includes monthly monitoring of your AI visibility, tracking reports, content optimization recommendations, and quarterly strategy reviews to ensure continued improvement.' },
      { q: 'Is there a minimum contract?', a: 'Our initial engagement includes a one-time setup fee plus a 6-month minimum maintenance contract. After that, you can cancel with 30 days notice.' },
    ],
  },
  {
    category: 'Technical',
    questions: [
      { q: 'What is Schema.org and why does it matter?', a: 'Schema.org is a standardized vocabulary for structured data markup. It helps AI systems understand your content\'s context, entities, and relationships, making it more likely to be cited in AI-generated responses.' },
      { q: 'Do I need to change my website?', a: 'Depending on the audit results, we may recommend technical changes to improve AI visibility. These typically involve adding structured data, optimizing content structure, and improving site performance.' },
      { q: 'Will GEO affect my traditional SEO?', a: 'GEO and SEO are complementary. Many GEO optimizations (like Schema.org markup) also benefit traditional SEO. We ensure all changes maintain or improve your existing search rankings.' },
    ],
  },
];

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
  const [activeCategory, setActiveCategory] = useState('General');

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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">FAQ</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              Frequently asked <span className="gradient-text">questions.</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              Everything you need to know about GEO and our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {faqs.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-[#f5f5f7] text-[#1d1d1f]/70 hover:bg-[#e8e8ed]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs
              .find((cat) => cat.category === activeCategory)
              ?.questions.map((item, index) => (
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

      {/* Contact CTA */}
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
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Still have questions?</h2>
            <p className="text-[#1d1d1f]/50 mb-8 max-w-lg mx-auto">
              Can\'t find the answer you\'re looking for? Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
            >
              Contact us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
