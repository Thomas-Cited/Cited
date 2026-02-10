import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, User, Mail, Globe, DollarSign, Target, Check, Loader2, Calendar, Copy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { URLS } from '../constants/urls';
import { CONTACT } from '../constants/contact';
import { useSeo } from '../hooks/use-seo';

export default function Contact() {
  useSeo({
    title: 'Contact — Get in Touch | Cited.',
    description: 'Ready to boost your AI visibility? Contact Cited to discuss your strategy and get your brand cited by AI engines.',
    path: '/contact',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  });
  const { t } = useLanguage();

  const contactMethods = [
    {
      label: t('contact.email'),
      value: CONTACT.email,
      icon: Mail,
      href: '#',
      copyable: true,
    },
    {
      label: t('contact.bookCall'),
      value: t('contact.scheduleMeeting'),
      icon: Calendar,
      href: URLS.calendly,
      copyable: false,
    },
  ];

  const budgetOptions = [
    t('contact.budgetOption1'),
    t('contact.budgetOption2'),
    t('contact.budgetOption3'),
    t('contact.budgetOption4'),
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    budget: '',
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT.email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('First name', formData.firstName);
      formDataToSend.append('Last name', formData.lastName);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Website', formData.website);
      formDataToSend.append('Budget', formData.budget);
      formDataToSend.append('Goal', formData.goal);

      const response = await fetch(URLS.tally.contact, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok || response.redirected) {
        setIsSubmitted(true);
      } else {
        setError(t('contact.error'));
      }
    } catch {
      // Tally redirects on success, which causes a CORS error.
      // A network error from a redirect is expected success behavior.
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">{t('contact.tagline')}</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              {t('contact.title')}<span className="gradient-text">{t('contact.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {method.copyable ? (
                  <button
                    onClick={copyEmail}
                    className="w-full apple-card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#007AFF]/10 flex items-center justify-center">
                      {emailCopied ? (
                        <Check className="w-6 h-6 text-[#34C759]" />
                      ) : (
                        <method.icon className="w-6 h-6 text-[#007AFF]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1d1d1f]/50">{method.label}</p>
                      <p className="font-semibold text-[#1d1d1f]">
                        {emailCopied ? t('contact.emailCopied') : method.value}
                      </p>
                    </div>
                    <Copy className="w-5 h-5 text-[#1d1d1f]/30" />
                  </button>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#007AFF]/10 flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-[#007AFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#1d1d1f]/50">{method.label}</p>
                      <p className="font-semibold text-[#1d1d1f]">{method.value}</p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-8 md:p-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1d1d1f] mb-3">{t('contact.thankYou')}</h2>
                <p className="text-[#1d1d1f]/60">
                  {t('contact.received')}
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">{t('contact.formTitle')}</h2>
                <p className="text-[#1d1d1f]/50 mb-8">{t('contact.formSubtitle')}</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                        {t('contact.firstName')} <span className="text-[#007AFF]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                        {t('contact.lastName')} <span className="text-[#007AFF]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                      {t('contact.professionalEmail')} <span className="text-[#007AFF]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                      {t('contact.website')} <span className="text-[#007AFF]">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                      <input
                        type="url"
                        name="website"
                        required
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                      {t('contact.budget')}
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1d1f]/30" />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#007AFF]/20 transition-all appearance-none cursor-pointer"
                      >
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={index === 0 ? '' : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                      {t('contact.goal')}
                    </label>
                    <div className="relative">
                      <Target className="absolute left-4 top-4 w-5 h-5 text-[#1d1d1f]/30" />
                      <textarea
                        name="goal"
                        rows={4}
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all resize-none"
                        placeholder={t('contact.goalPlaceholder')}
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
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.send')}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-center text-sm text-[#FF3B30]">{error}</p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
