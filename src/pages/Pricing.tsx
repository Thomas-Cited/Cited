import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Get started with GEO',
    price: '$2,000',
    period: 'One-shot + $450/mo maintenance',
    icon: Sparkles,
    color: '#007AFF',
    popular: false,
    features: [
      'GEO Audit (5 AI providers, ~90 prompts, 1 language)',
      'Audit report with GEO score + benchmark',
      'Schema.org — 3 blocks',
      '6 GEO-optimized pillar articles (1 language)',
      'Priority recommendations',
      'Monthly monitoring + tracking report',
    ],
  },
  {
    name: 'Growth',
    subtitle: 'Full support package',
    price: '$4,000',
    period: 'One-shot + $600/mo maintenance',
    icon: Zap,
    color: '#5856D6',
    popular: true,
    features: [
      'Extended GEO Audit (~150 prompts, 3 languages)',
      'Full audit report',
      'Schema.org — 3 blocks + site implementation',
      '18 pillar articles (6 per language, 3 languages)',
      'GEO content plan',
      'Monitoring + optimization + monthly report',
    ],
  },
  {
    name: 'Custom',
    subtitle: 'Tailored projects',
    price: '$6,000+',
    period: 'Custom pricing',
    icon: Crown,
    color: '#AF52DE',
    popular: false,
    features: [
      'Multi-site / multi-brand',
      'Volume >20 articles/month',
      'Wikipedia strategy',
      'Team training',
      'GEO press relations',
      'Dedicated consultant',
    ],
  },
];

const faqs = [
  { q: 'What is included in the maintenance?', a: 'Monthly monitoring of your AI visibility, tracking reports, content optimization recommendations, and quarterly strategy reviews.' },
  { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll prorate the difference.' },
  { q: 'How long until I see results?', a: 'Most clients start seeing increased AI mentions within 4-6 weeks, with significant improvements by month 3.' },
  { q: 'Do you offer a guarantee?', a: 'We guarantee a measurable improvement in your GEO score within 90 days or we work for free until you see results.' },
];

export default function Pricing() {
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">Pricing</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              Simple, transparent <span className="gradient-text">pricing.</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core GEO methodology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`apple-card p-8 relative ${plan.popular ? 'ring-2' : ''}`}
                style={{ '--tw-ring-color': plan.color } as React.CSSProperties}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: plan.color }}>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${plan.color}15` }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1d1d1f]">{plan.name}</h2>
                  <p className="text-[#1d1d1f]/50 text-sm">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  <p className="text-sm text-[#1d1d1f]/40 mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${plan.color}15` }}>
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-[#1d1d1f]/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? 'text-white hover:opacity-90' 
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                  style={{ background: plan.popular ? plan.color : undefined }}
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6"
              >
                <h3 className="font-semibold text-[#1d1d1f] mb-2">{faq.q}</h3>
                <p className="text-[#1d1d1f]/60 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Need a custom solution?</h2>
          <p className="text-[#1d1d1f]/50 mb-8">Contact us for enterprise pricing and custom packages.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
            Contact sales
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
