import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    id: 'starter',
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
      'Maintenance: monthly monitoring + tracking report',
    ],
  },
  {
    id: 'growth',
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
      'Maintenance: monitoring + content optimization + monthly report',
    ],
  },
  {
    id: 'custom',
    name: 'Custom',
    subtitle: 'Tailored projects',
    price: '$6,000+',
    period: 'Custom',
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

function PricingCard({ plan, isOpen, onToggle, index }: { 
  plan: typeof plans[0]; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
        >
          <div 
            className="px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ background: plan.color }}
          >
            Popular
          </div>
        </motion.div>
      )}

      <motion.div
        className={`apple-card overflow-hidden cursor-pointer h-full ${
          plan.popular ? 'ring-2' : ''
        }`}
        style={{ 
          '--tw-ring-color': plan.color,
        } as React.CSSProperties}
        onClick={onToggle}
        whileHover={{ y: -4 }}
        layout
      >
        {/* Header */}
        <div className="p-6">
          {/* Icon & Name */}
          <div className="flex items-center gap-3 mb-5">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${plan.color}12` }}
            >
              <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">{plan.name}</h3>
              <p className="text-[#1d1d1f]/50 text-xs">{plan.subtitle}</p>
            </div>
          </div>

          {/* Price */}
          <div className="mb-5">
            <div className="flex items-baseline gap-1">
              <span 
                className="text-3xl font-semibold"
                style={{ color: plan.color }}
              >
                {plan.price}
              </span>
            </div>
            <p className="text-[#1d1d1f]/40 text-xs mt-1">{plan.period}</p>
          </div>

          {/* Toggle Button */}
          <div className="flex items-center justify-between text-sm text-[#1d1d1f]/50">
            <span>{isOpen ? 'Hide details' : 'View details'}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Expandable Features */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="px-6 pb-6">
                <div className="h-px mb-5 bg-[#1d1d1f]/8" />
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}12` }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-[#1d1d1f]/60 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full mt-5 py-3 rounded-xl font-medium text-sm text-white transition-all duration-200"
                  style={{ background: plan.color }}
                  whileHover={{ scale: 1.02, opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openPlan, setOpenPlan] = useState<string | null>('growth');

  const handleToggle = (id: string) => {
    setOpenPlan(openPlan === id ? null : id);
  };

  return (
    <section 
      ref={sectionRef} 
      id="pricing" 
      className="relative py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4"
          >
            Our plans
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            Packages tailored to your{' '}
            <span className="gradient-text">needs and budget.</span>
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isOpen={openPlan === plan.id}
              onToggle={() => handleToggle(plan.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
