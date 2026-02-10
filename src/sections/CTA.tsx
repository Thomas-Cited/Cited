import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Target, BarChart3, Lightbulb, Calendar, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CTA() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    { icon: Target, text: t('cta.benefit1') },
    { icon: BarChart3, text: t('cta.benefit2') },
    { icon: Lightbulb, text: t('cta.benefit3') },
    { icon: Calendar, text: t('cta.benefit4') },
    { icon: Wallet, text: t('cta.benefit5') },
  ];

  return (
    <section ref={sectionRef} id="ai-readiness" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative apple-card p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 60%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-6 tracking-tight"
                >
                  {t('cta.title')}
                  <span className="gradient-text">{t('cta.titleHighlight')}</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-[#1d1d1f]/50 mb-8"
                >
                  {t('cta.subtitle')}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="lg:pl-8"
              >
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">
                  {t('cta.callTitle')}
                </h3>
                <p className="text-[#1d1d1f]/50 mb-6">
                  {t('cta.callSubtitle')}
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-[#007AFF]" />
                      </div>
                      <span className="text-[#1d1d1f]/70 text-sm">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-6 pt-6 border-t border-[#1d1d1f]/8"
                >
                  <p className="text-[#1d1d1f]/40 text-sm mb-1">{t('cta.contactDirect')}</p>
                  <a
                    href="mailto:contact@citedagency.com"
                    className="text-[#007AFF] hover:text-[#0056CC] transition-colors font-medium"
                  >
                    contact@citedagency.com
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
