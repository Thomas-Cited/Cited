import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Check, ArrowRight, Zap, Shield, TrendingUp, Loader2, Search, Globe, FileCode, Calculator, Mail, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { URLS } from '../constants/urls';
import { useSeo } from '../hooks/use-seo';

const COOLDOWN_MS = 30_000;

const schemaTypes = [
  'Organization', 'WebSite', 'WebPage', 'Article', 'Product', 'Service',
  'FAQPage', 'HowTo', 'LocalBusiness', 'Person', 'Event', 'Review',
];

export default function SchemaAudit() {
  useSeo({
    title: 'Free Schema.org Audit — Structured Data Check | Cited.',
    description: 'Analyze your website Schema.org markup for free. Detect missing structured data and improve how AI engines understand your content.',
    path: '/schema-audit',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Schema Audit', path: '/schema-audit' },
    ],
  });
  const { t } = useLanguage();

  const analysisSteps = [
    { id: 'fetching', label: t('schemaAudit.stepFetching'), icon: Globe },
    { id: 'detecting', label: t('schemaAudit.stepDetecting'), icon: Search },
    { id: 'analyzing', label: t('schemaAudit.stepAnalyzing'), icon: FileCode },
    { id: 'calculating', label: t('schemaAudit.stepCalculating'), icon: Calculator },
  ];

  const features = [
    { icon: Code, title: t('schemaAudit.featuresTitle1'), desc: t('schemaAudit.featuresDesc1'), color: '#007AFF' },
    { icon: Shield, title: t('schemaAudit.featuresTitle2'), desc: t('schemaAudit.featuresDesc2'), color: '#34C759' },
    { icon: TrendingUp, title: t('schemaAudit.featuresTitle3'), desc: t('schemaAudit.featuresDesc3'), color: '#FF9500' },
    { icon: Zap, title: t('schemaAudit.featuresTitle4'), desc: t('schemaAudit.featuresDesc4'), color: '#5856D6' },
  ];

  const processSteps = [
    { step: '1', title: t('schemaAudit.processStep1'), desc: t('schemaAudit.processStep1Desc') },
    { step: '2', title: t('schemaAudit.processStep2'), desc: t('schemaAudit.processStep2Desc') },
    { step: '3', title: t('schemaAudit.processStep3'), desc: t('schemaAudit.processStep3Desc') },
    { step: '4', title: t('schemaAudit.processStep4'), desc: t('schemaAudit.processStep4Desc') },
  ];

  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<null | {
    score: number;
    schemasFound: string[];
    issues: { type: string; message: string }[];
  }>(null);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const lastSubmitRef = useRef(0);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < COOLDOWN_MS) {
      setError(t('schemaAudit.cooldown'));
      return;
    }
    lastSubmitRef.current = now;

    setIsAnalyzing(true);
    setResult(null);
    setError(null);
    setCurrentStep(0);

    try {
      const progressInterval = setInterval(() => {
        setCurrentStep(prev => (prev < analysisSteps.length - 1 ? prev + 1 : prev));
      }, 1000);

      const response = await fetch(`${URLS.api.schemaAudit}?url=${encodeURIComponent(url)}`);

      clearInterval(progressInterval);
      setCurrentStep(analysisSteps.length - 1);

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();

      setResult({
        score: data.score,
        schemasFound: data.schemasFound || [],
        issues: data.issues?.map((issue: { type: string; message: string; severity?: string }) => ({
          type: issue.severity === 'high' ? 'missing' : 'warning',
          message: issue.message,
        })) || [],
      });
    } catch {
      setError(t('schemaAudit.error'));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleEmailReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !result) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Email', email);
      formDataToSend.append('URL', url);
      formDataToSend.append('Score', String(result.score));
      formDataToSend.append('Schemas found', result.schemasFound.join(', '));

      await fetch(URLS.tally.schemaReport, {
        method: 'POST',
        body: formDataToSend,
      });
      setEmailSent(true);
    } catch {
      setEmailSent(true);
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('schemaAudit.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('schemaAudit.title')}<span className="gradient-text">{t('schemaAudit.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('schemaAudit.subtitle')}
            </p>
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
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">{t('schemaAudit.analyzeTitle')}</h2>
              <p className="text-[#1d1d1f]/50">{t('schemaAudit.analyzeSubtitle')}</p>
            </div>

            {error ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF3B30]/10 flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-[#FF3B30]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {t('schemaAudit.errorTitle')}
                </h3>
                <p className="text-[#1d1d1f]/50 mb-8">{error}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => { setError(null); handleAnalyze({ preventDefault: () => {} } as React.FormEvent); }}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all"
                  >
                    {t('schemaAudit.retry')}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => { setError(null); setUrl(''); }}
                    className="flex-1 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-xl hover:bg-[#e8e8ed] transition-all"
                  >
                    {t('schemaAudit.startOver')}
                  </button>
                </div>
              </motion.div>
            ) : !result ? (
              <>
                <form onSubmit={handleAnalyze} className="space-y-4">
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={t('schemaAudit.urlPlaceholder')}
                      className="w-full pl-12 pr-4 py-4 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      required
                      disabled={isAnalyzing}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isAnalyzing || !url}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('schemaAudit.analyzing')}
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        {t('schemaAudit.analyze')}
                      </>
                    )}
                  </button>
                </form>

                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 space-y-3"
                  >
                    {analysisSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          index < currentStep ? 'bg-[#34C759]/10' : index === currentStep ? 'bg-[#007AFF]/10' : 'bg-[#f5f5f7]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index < currentStep ? 'bg-[#34C759] text-white' : index === currentStep ? 'bg-[#007AFF] text-white' : 'bg-[#1d1d1f]/10 text-[#1d1d1f]/30'
                        }`}>
                          {index < currentStep ? <Check className="w-4 h-4" /> : index === currentStep ? <Loader2 className="w-4 h-4 animate-spin" /> : <step.icon className="w-4 h-4" />}
                        </div>
                        <span className={`text-sm font-medium ${index <= currentStep ? 'text-[#1d1d1f]' : 'text-[#1d1d1f]/40'}`}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-center mb-6">
                  <div className="text-7xl font-bold mb-2" style={{ color: result.score >= 70 ? '#34C759' : result.score >= 40 ? '#FF9500' : '#FF3B30' }}>
                    {result.score}/100
                  </div>
                  <p className="text-lg text-[#1d1d1f]/60">
                    {result.score >= 70 ? t('schemaAudit.scoreExcellent') : result.score >= 40 ? t('schemaAudit.scoreGood') : t('schemaAudit.scoreNeedsWork')}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">{t('schemaAudit.schemasDetected')} ({result.schemasFound.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.schemasFound.map((schema, index) => (
                      <span key={index} className="px-3 py-1.5 bg-[#34C759]/10 text-[#34C759] text-sm font-medium rounded-full">{schema}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3">{t('schemaAudit.issuesFound')} ({result.issues.length})</h3>
                  <div className="space-y-2">
                    {result.issues.map((issue, index) => (
                      <div key={index} className={`p-3 rounded-lg text-sm ${issue.type === 'missing' ? 'bg-[#FF3B30]/10 text-[#FF3B30]' : 'bg-[#FF9500]/10 text-[#FF9500]'}`}>
                        {issue.message}
                      </div>
                    ))}
                  </div>
                </div>

                {!emailSent ? (
                  <form onSubmit={handleEmailReport} className="space-y-3">
                    <p className="text-sm text-[#1d1d1f]/50 text-center">{t('schemaAudit.emailReportText')}</p>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1d1d1f]/30" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('schemaAudit.emailPlaceholder')} className="w-full pl-10 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-sm text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20" required />
                      </div>
                      <button type="submit" className="px-6 py-3 bg-[#007AFF] text-white text-sm font-semibold rounded-xl hover:bg-[#0056CC] transition-all">
                        {t('schemaAudit.sendReport')}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center p-4 bg-[#34C759]/10 rounded-xl">
                    <Check className="w-6 h-6 text-[#34C759] mx-auto mb-2" />
                    <p className="text-sm text-[#34C759] font-medium">{t('schemaAudit.reportSent')} {email}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all">
                    {t('schemaAudit.bookCall')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button onClick={() => { setResult(null); setUrl(''); setEmail(''); setEmailSent(false); }} className="flex-1 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-xl hover:bg-[#e8e8ed] transition-all">
                    {t('schemaAudit.analyzeAnother')}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="apple-card p-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${feature.color}15` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">{feature.title}</h3>
                <p className="text-[#1d1d1f]/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('schemaAudit.schemaTypesTitle')}</h2>
            <p className="text-[#1d1d1f]/50">{t('schemaAudit.schemaTypesSubtitle')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {schemaTypes.map((type, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="apple-card p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-[#007AFF]" />
                </div>
                <span className="text-sm font-medium text-[#1d1d1f]">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('schemaAudit.processTitle')}</h2>
            <p className="text-[#1d1d1f]/50">{t('schemaAudit.processSubtitle')}</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#AF52DE] rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                  <div className="w-16 h-16 rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${index === 0 ? '#007AFF, #0056CC' : index === 1 ? '#5856D6, #4240B3' : index === 2 ? '#8944AB, #AF52DE' : '#AF52DE, #8944AB'})` }}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#1d1d1f]/50">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('schemaAudit.pricingTitle')}</h2>
            <p className="text-[#1d1d1f]/50 mb-8 max-w-xl mx-auto">{t('schemaAudit.pricingSubtitle')}</p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
            >
              {t('schemaAudit.viewPricing')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">{t('schemaAudit.ctaTitle')}</h2>
          <p className="text-[#1d1d1f]/50 mb-8">{t('schemaAudit.ctaSubtitle')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
            {t('schemaAudit.ctaButton')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
