import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Eye, TrendingDown, Users, Search, Settings, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#f5f5f7] rounded-full"
          >
            <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
            <span className="text-sm text-[#1d1d1f]/70">GEO Agency — Generative Engine Optimization</span>
          </motion.div>

          {/* Main Title - PLUS GRAS */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-[#1d1d1f]"
          >
            Get <span className="gradient-text">cited</span> by<br />AI engines.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#1d1d1f]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We optimize your visibility in ChatGPT, Perplexity and Google AI to generate qualified leads without relying on advertising.
          </motion.p>

          {/* CTA Buttons */}
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
              Test your score
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to an expert
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '40%', label: 'AI searches', color: '#007AFF' },
              { value: '200M+', label: 'ChatGPT users', color: '#5856D6' },
              { value: '8x', label: 'Average ROI', color: '#AF52DE' },
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

      {/* Stats Section */}
      <StatsSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Process Section */}
      <ProcessSection />

      {/* Results Section */}
      <ResultsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

function StatsSection() {
  const stats = [
    { icon: Eye, value: '0%', label: 'Current AI visibility', desc: 'Most websites never appear in ChatGPT or Perplexity answers.', color: '#007AFF', negative: true },
    { icon: TrendingDown, value: '30%', label: 'Organic clicks', desc: "Google's AI Overviews drastically reduce clicks to websites.", color: '#FF3B30', negative: true },
    { icon: Users, value: '200M', label: 'ChatGPT users', desc: 'A massive market looking for recommendations. Are you recommended?', color: '#5856D6', negative: false },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Traditional SEO is no longer enough.
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 max-w-2xl mx-auto">
            40% of searches now go through AI. If you don't appear in their answers, you're invisible.
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
  const services = [
    { icon: Search, title: 'GEO Audit', desc: 'Complete analysis of your current visibility in AI engines.', color: '#007AFF', features: ['50+ key queries', 'AI competitive analysis', 'GEO score', 'Roadmap'] },
    { icon: Settings, title: 'Technical Optimization', desc: 'Implementation of structured data for LLMs.', color: '#5856D6', features: ['Schema.org', 'AI-friendly structure', 'E-E-A-T', 'Performance'] },
    { icon: PenTool, title: 'GEO Content', desc: 'Content designed to be cited by AI.', color: '#AF52DE', features: ['Citation-ready articles', 'Optimized FAQs', 'Data & sources', 'Q&A format'] },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm text-[#1d1d1f]/50 mb-4">What we do</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            A proven methodology for the <span className="gradient-text">generative AI era.</span>
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
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: '1', title: 'Audit', desc: 'Analysis of your AI visibility' },
    { num: '2', title: 'Strategy', desc: 'Personalized action plan' },
    { num: '3', title: 'Execution', desc: 'Technical & content optimization' },
    { num: '4', title: 'Measure', desc: 'Tracking & continuous improvement' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">Our process</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            A clear 4-step methodology<br /><span className="gradient-text">for measurable results.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Ligne de connexion */}
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
  const results = [
    { value: '+340%', label: 'Average AI mentions', desc: 'Increase in brand citations' },
    { value: '23', label: 'Key queries covered', desc: 'Strategic search terms' },
    { value: '+47%', label: 'Qualified traffic', desc: 'High-intent visitors' },
    { value: '8x', label: 'Average ROI', desc: 'Return on investment' },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm text-[#1d1d1f]/50 mb-4">Concrete results</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Our clients see their AI visibility<br /><span className="gradient-text">take off within weeks.</span>
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
            Is your brand <span className="gradient-text">invisible to AI?</span>
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 mb-8 max-w-xl mx-auto">
            Discover your GEO Score in 30 seconds. Free, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/geo-score" className="px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              Check my score
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              Book a call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
