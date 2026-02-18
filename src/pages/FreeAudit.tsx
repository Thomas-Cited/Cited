import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Shield, Eye, TrendingDown, Users, CheckCircle, Mail, Globe, User, Loader2, Check, Sparkles, Zap, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitForm } from '../utils/tally';
import { useSeo } from '../hooks/use-seo';

export default function FreeAudit() {
  useSeo({
    title: 'Free AI Visibility Audit — See Where You Stand | Cited.',
    description: 'Get a free AI visibility audit. We test your brand on ChatGPT, Perplexity, Gemini, Claude & Grok. See exactly where you stand — and what to fix.',
    path: '/free-audit',
    noindex: true,
  });

  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <MinimalHeader />
      <HeroSection t={t} />
      <StatsBar t={t} />
      <WhatYouGet t={t} />
      <AuditForm t={t} />
      <GuaranteeStrip t={t} />
      <MinimalFooter />
    </div>
  );
}

function MinimalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://citedagency.com" className="text-xl font-semibold text-[#1d1d1f]">
          Cited.
        </a>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#34C759]/10 rounded-full text-xs text-[#34C759] font-medium">
          <Shield className="w-3 h-3" />
          100% free — no strings attached
        </span>
      </div>
    </header>
  );
}

function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#007AFF]/10 rounded-full"
        >
          <Sparkles className="w-4 h-4 text-[#007AFF]" />
          <span className="text-sm text-[#007AFF] font-medium">{t('freeAudit.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-[#1d1d1f]"
        >
          {t('freeAudit.title')}<br />
          <span className="gradient-text">{t('freeAudit.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#1d1d1f]/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('freeAudit.subtitle')}
        </motion.p>

        <motion.a
          href="#audit-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
        >
          {t('freeAudit.heroCta')}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

function StatsBar({ t }: { t: (key: string) => string }) {
  const stats = [
    { value: '800M+', label: t('freeAudit.stat1'), color: '#007AFF', icon: Users },
    { value: '40%', label: t('freeAudit.stat2'), color: '#5856D6', icon: Eye },
    { value: '-25%', label: t('freeAudit.stat3'), color: '#FF3B30', icon: TrendingDown },
  ];

  return (
    <section className="py-12 px-6 bg-[#f5f5f7]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${stat.color}15` }}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm text-[#1d1d1f]/50">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet({ t }: { t: (key: string) => string }) {
  const items = [
    { icon: BarChart3, title: t('freeAudit.feature1Title'), desc: t('freeAudit.feature1Desc'), color: '#007AFF' },
    { icon: Eye, title: t('freeAudit.feature2Title'), desc: t('freeAudit.feature2Desc'), color: '#5856D6' },
    { icon: Zap, title: t('freeAudit.feature3Title'), desc: t('freeAudit.feature3Desc'), color: '#AF52DE' },
  ];

  const providers = ['ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Grok'];
  const providerColors: Record<string, string> = {
    ChatGPT: '#10a37f',
    Perplexity: '#20808d',
    Gemini: '#4285f4',
    Claude: '#d97706',
    Grok: '#1d1d1f',
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight"
          >
            {t('freeAudit.whatYouGetTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#1d1d1f]/50"
          >
            {t('freeAudit.whatYouGetSubtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="apple-card p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color}15` }}>
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
              <p className="text-sm text-[#1d1d1f]/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm text-[#1d1d1f]/40">{t('freeAudit.testedOn')}</span>
          {providers.map((provider) => (
            <span
              key={provider}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-[#e8e8ed] text-sm font-medium"
              style={{ color: providerColors[provider] }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: providerColors[provider] }} />
              {provider}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AuditForm({ t }: { t: (key: string) => string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitForm('Free Audit Request', {
        Name: formData.name,
        Email: formData.email,
        Website: formData.website,
        Source: 'free-audit-page',
      });
      setIsSubmitted(true);
    } catch {
      setError(t('freeAudit.formError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="audit-form" className="py-20 px-6 bg-[#f5f5f7]">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">{t('freeAudit.thankYou')}</h2>
              <p className="text-[#1d1d1f]/60">{t('freeAudit.thankYouDesc')}</p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">{t('freeAudit.formTitle')}</h2>
                <p className="text-[#1d1d1f]/50">{t('freeAudit.formSubtitle')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                    {t('freeAudit.formName')} <span className="text-[#007AFF]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                    {t('freeAudit.formEmail')} <span className="text-[#007AFF]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                    {t('freeAudit.formWebsite')} <span className="text-[#007AFF]">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                    <input
                      type="url"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-xl hover:bg-[#0056CC] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('freeAudit.formSending')}
                    </>
                  ) : (
                    <>
                      {t('freeAudit.formCta')}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-center text-sm text-[#FF3B30]">{error}</p>
                )}

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  {[t('freeAudit.trust1'), t('freeAudit.trust2'), t('freeAudit.trust3')].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs text-[#1d1d1f]/40">
                      <CheckCircle className="w-3.5 h-3.5 text-[#34C759]" />
                      {item}
                    </span>
                  ))}
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function GuaranteeStrip({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#34C759]/10 rounded-full text-sm text-[#34C759] font-medium mb-6">
            <Shield className="w-4 h-4" />
            {t('freeAudit.guaranteeBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            {t('freeAudit.guaranteeTitle')}
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 max-w-xl mx-auto mb-8">
            {t('freeAudit.guaranteeDesc')}
          </p>
          <a
            href="#audit-form"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all"
          >
            {t('freeAudit.guaranteeCta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function MinimalFooter() {
  return (
    <footer className="py-8 px-6 border-t border-[#e8e8ed]">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <span className="text-sm text-[#1d1d1f]/40">
          Cited Agency {new Date().getFullYear()}
        </span>
        <a
          href="https://citedagency.com"
          className="text-sm text-[#007AFF] hover:underline"
        >
          citedagency.com
        </a>
      </div>
    </footer>
  );
}
