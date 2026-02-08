import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function Results() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const results = [
    { icon: TrendingUp, value: 340, suffix: '%', labelKey: 'results.result1Label', descKey: 'results.result1Desc', color: '#007AFF' },
    { icon: Target, value: 23, suffix: '', labelKey: 'results.result2Label', descKey: 'results.result2Desc', color: '#5856D6' },
    { icon: Users, value: 47, suffix: '%', labelKey: 'results.result3Label', descKey: 'results.result3Desc', color: '#AF52DE' },
    { icon: Zap, value: 8, suffix: 'x', labelKey: 'results.result4Label', descKey: 'results.result4Desc', color: '#FF2D55' },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
            {t('results.badge')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            {t('results.title')}
            <br /><span className="gradient-text">{t('results.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="apple-card p-6 text-center"
            >
              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${result.color}12` }}
                >
                  <result.icon className="w-5 h-5" style={{ color: result.color }} />
                </div>
                <div className="text-3xl sm:text-4xl font-semibold mb-1" style={{ color: result.color }}>
                  <Counter end={result.value} suffix={result.suffix} />
                </div>
                <h3 className="text-sm font-medium text-[#1d1d1f] mb-1">{t(result.labelKey)}</h3>
                <p className="text-[#1d1d1f]/40 text-xs">{t(result.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
