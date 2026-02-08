import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: t('hero.stat1Value'), label: t('hero.stat1Label'), color: '#007AFF' },
    { value: t('hero.stat2Value'), label: t('hero.stat2Label'), color: '#5856D6' },
    { value: t('hero.stat3Value'), label: t('hero.stat3Label'), color: '#AF52DE' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#f5f5f7] rounded-full"
        >
          <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
          <span className="text-sm text-[#1d1d1f]/70">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight text-[#1d1d1f]"
        >
          {t('hero.title')}<span className="gradient-text">{t('hero.titleHighlight')}</span>{t('hero.titleEnd')}<br />{t('hero.titleEnd2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-[#1d1d1f]/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#geo-score"
            className="group flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-medium rounded-full hover:bg-[#e8e8ed] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            {t('hero.ctaSecondary')}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="apple-card p-6 text-center"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-semibold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm text-[#1d1d1f]/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1d1d1f]/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
