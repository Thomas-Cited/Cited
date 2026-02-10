import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingDown, Users, Eye, ArrowRight } from 'lucide-react';
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

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Eye,
      value: 0,
      suffix: '%',
      label: t('stats.stat1Label'),
      description: t('stats.stat1Desc'),
      color: '#007AFF',
      negative: true,
    },
    {
      icon: TrendingDown,
      value: 30,
      suffix: '%',
      label: t('stats.stat2Label'),
      description: t('stats.stat2Desc'),
      color: '#FF3B30',
      negative: true,
    },
    {
      icon: Users,
      value: 200,
      suffix: 'M',
      label: t('stats.stat3Label'),
      description: t('stats.stat3Desc'),
      color: '#5856D6',
      negative: false,
    },
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
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-[#1d1d1f]/50 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="apple-card p-8"
            >
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${stat.color}15` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-5xl font-semibold mb-3" style={{ color: stat.color }}>
                  {stat.negative && '-'}
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-medium text-[#1d1d1f] mb-2">{stat.label}</h3>
                <p className="text-[#1d1d1f]/50 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#ai-readiness"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] rounded-full hover:bg-[#e8e8ed] transition-colors font-medium group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('stats.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
