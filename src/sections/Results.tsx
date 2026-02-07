import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Target, Users, Zap } from 'lucide-react';

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

const results = [
  {
    icon: TrendingUp,
    value: 340,
    suffix: '%',
    label: 'Average AI mentions',
    description: 'Increase in brand citations across AI platforms',
    color: '#007AFF',
  },
  {
    icon: Target,
    value: 23,
    suffix: '',
    label: 'Key queries covered',
    description: 'Strategic search terms optimized for visibility',
    color: '#5856D6',
  },
  {
    icon: Users,
    value: 47,
    suffix: '%',
    label: 'Qualified traffic',
    description: 'Growth in high-intent visitor engagement',
    color: '#AF52DE',
  },
  {
    icon: Zap,
    value: 8,
    suffix: 'x',
    label: 'Average ROI observed',
    description: 'Return on investment multiplier',
    color: '#FF2D55',
  },
];

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
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
            Concrete results
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            Our clients see their AI visibility
            <br /><span className="gradient-text">take off within weeks.</span>
          </h2>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="apple-card p-6 text-center"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${result.color}12` }}
                >
                  <result.icon className="w-5 h-5" style={{ color: result.color }} />
                </div>

                {/* Value */}
                <div 
                  className="text-3xl sm:text-4xl font-semibold mb-1"
                  style={{ color: result.color }}
                >
                  <Counter end={result.value} suffix={result.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-sm font-medium text-[#1d1d1f] mb-1">
                  {result.label}
                </h3>

                {/* Description */}
                <p className="text-[#1d1d1f]/40 text-xs">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
