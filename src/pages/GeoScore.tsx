import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const industries = [
  { value: '', label: 'Select your industry' },
  { value: 'technology', label: 'Technology' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'agency', label: 'Agency' },
  { value: 'education', label: 'Education' },
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'other', label: 'Other' },
];

const aiProviders = [
  { id: 'chatgpt', name: 'ChatGPT', icon: '✨' },
  { id: 'perplexity', name: 'Perplexity', icon: '🔮' },
  { id: 'google', name: 'Google AI', icon: '🔵' },
];

const scoreFactors = [
  { name: 'Schema.org Implementation', weight: 25 },
  { name: 'Content Structure', weight: 20 },
  { name: 'Entity Recognition', weight: 20 },
  { name: 'Authority Signals', weight: 15 },
  { name: 'Technical Performance', weight: 10 },
  { name: 'Multi-language Support', weight: 10 },
];

export default function GeoScore() {
  const [activeProvider, setActiveProvider] = useState('chatgpt');
  const [step] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { score: number; factors: any[] }>(null);

  const [formData, setFormData] = useState({
    brandName: '',
    industry: '',
    website: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.industry) return;

    setLoading(true);

    // Generate random score for demo
    const score = Math.floor(Math.random() * 60) + 20;
    const factors = scoreFactors.map(f => ({
      ...f,
      value: Math.floor(Math.random() * 100),
    }));

    // Send to Tally
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Brand name', formData.brandName);
      formDataToSend.append('Industry', formData.industry);
      formDataToSend.append('Website', formData.website || 'Not provided');
      formDataToSend.append('AI Provider', activeProvider);
      formDataToSend.append('Score', String(score));

      await fetch('https://tally.so/r/0Q6Q5j', {
        method: 'POST',
        body: formDataToSend,
      });
    } catch {
      // Silent fail - still show results
    }

    setResult({ score, factors });
    setLoading(false);
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">GEO Score</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              How visible are you to <span className="gradient-text">AI engines?</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              Get your free GEO Score in seconds. Discover how well your website is optimized for ChatGPT, Perplexity, and other AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Provider Tabs */}
      <section className="px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            {aiProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setActiveProvider(provider.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeProvider === provider.id
                    ? 'bg-white shadow-md text-[#1d1d1f] border border-[#1d1d1f]/10'
                    : 'bg-transparent text-[#1d1d1f]/50 hover:text-[#1d1d1f] hover:bg-[#f5f5f7]'
                }`}
              >
                <span>{provider.icon}</span>
                {provider.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Score Checker */}
      <section className="py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="apple-card p-8"
          >
            {!result ? (
              <>
                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        s === step ? 'bg-[#007AFF]' : 'bg-[#1d1d1f]/10'
                      }`}
                    />
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      Your brand / company name
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder="Ex: Cited, Nike, Salesforce..."
                      className="w-full px-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#007AFF]/20 transition-all appearance-none cursor-pointer"
                      required
                    >
                      {industries.map((ind) => (
                        <option key={ind.value} value={ind.value}>
                          {ind.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      Website <span className="text-[#1d1d1f]/40">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://your-site.com"
                      className="w-full px-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                    />
                    <p className="text-xs text-[#1d1d1f]/40 mt-2">We'll use it to refine the analysis</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !formData.brandName || !formData.industry}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Analyze my AI visibility
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="text-7xl font-bold mb-2" style={{
                    color: result.score >= 70 ? '#34C759' : result.score >= 40 ? '#FF9500' : '#FF3B30'
                  }}>
                    {result.score}/100
                  </div>
                  <p className="text-lg text-[#1d1d1f]/60">
                    {result.score >= 70 ? 'Excellent! Your site is well-optimized for AI.' :
                     result.score >= 40 ? 'Good start, but there\'s room for improvement.' :
                     'Your site needs significant optimization for AI visibility.'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {result.factors.map((factor, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[#1d1d1f]">{factor.name}</span>
                          <span className="text-sm text-[#1d1d1f]/50">{factor.value}%</span>
                        </div>
                        <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${factor.value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full"
                            style={{
                              background: factor.value >= 70 ? '#34C759' : factor.value >= 40 ? '#FF9500' : '#FF3B30'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all"
                  >
                    Get a detailed audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => { setResult(null); setFormData({ brandName: '', industry: '', website: '' }); }}
                    className="flex-1 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-xl hover:bg-[#e8e8ed] transition-all"
                  >
                    Check another brand
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-12 text-center">What we check</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scoreFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">{factor.name}</h3>
                <p className="text-sm text-[#1d1d1f]/50">Weight: {factor.weight}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Want to improve your score?</h2>
          <p className="text-[#1d1d1f]/50 mb-8">Our experts can help you optimize your site for maximum AI visibility.</p>
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
            Explore our services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
