import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, User, Mail, Globe, DollarSign, Target, Check, Loader2, Calendar, Copy } from 'lucide-react';

const contactMethods = [
  {
    label: 'Email',
    value: 'contact@citedagency.com',
    icon: Mail,
    href: '#',
    copyable: true,
  },
  {
    label: 'Book a call',
    value: 'Schedule a meeting',
    icon: Calendar,
    href: 'https://calendly.com/cited-agency/15min',
    copyable: false,
  },
];

const budgetOptions = [
  'Select...',
  'Starter — $2,000 + $450/mo',
  'Growth — $4,000 + $600/mo',
  'Custom — from $6,000',
];

export default function Contact() {
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
    await navigator.clipboard.writeText('contact@citedagency.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
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

      const response = await fetch('https://tally.so/r/xXaXyJ', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok || response.redirected) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      // Tally redirects on success, which can cause a CORS error
      // If we get here after the fetch, assume success
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
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">Contact</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              Let's talk about your <span className="gradient-text">AI visibility.</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              Get a free consultation and discover how we can help your brand get cited by AI engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                        {emailCopied ? 'Email copied!' : method.value}
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

      {/* Form */}
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
                <h2 className="text-3xl font-bold text-[#1d1d1f] mb-3">Thank you!</h2>
                <p className="text-[#1d1d1f]/60">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">Send us a message</h2>
                <p className="text-[#1d1d1f]/50 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#1d1d1f]/60 mb-2">
                        First name <span className="text-[#007AFF]">*</span>
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
                        Last name <span className="text-[#007AFF]">*</span>
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
                      Professional email <span className="text-[#007AFF]">*</span>
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
                      Website <span className="text-[#007AFF]">*</span>
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
                      Monthly budget
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
                      Your main goal
                    </label>
                    <div className="relative">
                      <Target className="absolute left-4 top-4 w-5 h-5 text-[#1d1d1f]/30" />
                      <textarea
                        name="goal"
                        rows={4}
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] placeholder-[#1d1d1f]/30 focus:ring-2 focus:ring-[#007AFF]/20 transition-all resize-none"
                        placeholder="Tell us about your goals and challenges..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
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
