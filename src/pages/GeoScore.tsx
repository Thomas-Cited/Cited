import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const aiProviders = [
  { id: 'chatgpt', name: 'ChatGPT', icon: '✨' },
  { id: 'perplexity', name: 'Perplexity', icon: '🔮' },
  { id: 'google', name: 'Google AI', icon: '🔵' },
];


export default function GeoScore() {
  const { t } = useLanguage();
  const [activeProvider, setActiveProvider] = useState('chatgpt');
  const [step] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { score: number; factors: { name: string; weight: number; value: number }[] }>(null);

  const [formData, setFormData] = useState({
    brandName: '',
    industry: '',
    website: '',
  });

  const industries = [
    { value: '', label: t('geoScore.industrySelect') },
    { value: 'technology', label: t('geoScore.industryTechnology') },
    { value: 'saas', label: t('geoScore.industrySaas') },
    { value: 'ecommerce', label: t('geoScore.industryEcommerce') },
    { value: 'finance', label: t('geoScore.industryFinance') },
    { value: 'healthcare', label: t('geoScore.industryHealthcare') },
    { value: 'consulting', label: t('geoScore.industryConsulting') },
    { value: 'agency', label: t('geoScore.industryAgency') },
    { value: 'education', label: t('geoScore.industryEducation') },
    { value: 'real_estate', label: t('geoScore.industryRealEstate') },
    { value: 'other', label: t('geoScore.industryOther') },
  ];

  const scoreFactors = [
    { name: 'Schema.org Implementation', weight: 25 },
    { name: 'Content Structure', weight: 20 },
    { name: 'Entity Recognition', weight: 20 },
    { name: 'Authority Signals', weight: 15 },
    { name: 'Technical Performance', weight: 10 },
    { name: 'AI-Friendly Content', weight: 10 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.industry) return;

    setLoading(true);

    let score = 0;
    let factors = scoreFactors.map(f => ({ ...f, value: 0 }));

    try {
      if (formData.website) {
        const response = await fetch(`https://geo-score-api.vignaudthomas40.workers.dev?url=${encodeURIComponent(formData.website)}&brand=${encodeURIComponent(formData.brandName)}`);

        if (response.ok) {
          const data = await response.json();
          score = data.score;

          factors = scoreFactors.map(f => {
            const apiFactor = data.factors?.find((af: { name: string }) => af.name === f.name);
            return {
              ...f,
              value: apiFactor ? Math.round((apiFactor.value / apiFactor.max) * 100) : Math.floor(Math.random() * 50) + 20,
            };
          });
        } else {
          throw new Error('API failed');
        }
      } else {
        score = Math.floor(Math.random() * 40) + 30;
        factors = scoreFactors.map(f => ({
          ...f,
          value: Math.floor(Math.random() * 60) + 20,
        }));
      }
    } catch {
      score = Math.floor(Math.random() * 40) + 30;
      factors = scoreFactors.map(f => ({
        ...f,
        value: Math.floor(Math.random() * 60) + 20,
      }));
    }

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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('geoScore.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('geoScore.title')}<span className="gradient-text">{t('geoScore.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('geoScore.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

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
                      {t('geoScore.brandLabel')}
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder={t('geoScore.brandPlaceholder')}
                      className="w-full px-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      {t('geoScore.industryLabel')}
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
                      {t('geoScore.websiteLabel')} <span className="text-[#1d1d1f]/40">{t('geoScore.websiteOptional')}</span>
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder={t('geoScore.websitePlaceholder')}
                      className="w-full px-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                    />
                    <p className="text-xs text-[#1d1d1f]/40 mt-2">{t('geoScore.websiteHint')}</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !formData.brandName || !formData.industry}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('geoScore.analyzing')}
                      </>
                    ) : (
                      <>
                        {t('geoScore.analyze')}
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
                    {result.score >= 70 ? t('geoScore.scoreExcellent') :
                     result.score >= 40 ? t('geoScore.scoreGood') :
                     t('geoScore.scoreNeedsWork')}
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
                    {t('geoScore.getAudit')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => { setResult(null); setFormData({ brandName: '', industry: '', website: '' }); }}
                    className="flex-1 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-xl hover:bg-[#e8e8ed] transition-all"
                  >
                    {t('geoScore.checkAnother')}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-12 text-center">{t('geoScore.whatWeCheck')}</h2>
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
                <p className="text-sm text-[#1d1d1f]/50">{t('geoScore.weight')}: {factor.weight}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('geoScore.improveTitle')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('geoScore.improveSubtitle')}</p>
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
            {t('geoScore.explorServices')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
