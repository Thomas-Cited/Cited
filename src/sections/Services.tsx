import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Settings, FileText, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function ServiceCard({ service, isOpen, onToggle, index }: {
  service: { id: string; icon: any; title: string; subtitle: string; color: string; features: string[] };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        className="apple-card overflow-hidden cursor-pointer"
        onClick={onToggle}
        whileHover={{ y: -2 }}
        layout
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-5">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${service.color}12` }}
            >
              <service.icon className="w-6 h-6" style={{ color: service.color }} />
            </motion.div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-[#1d1d1f]">
                  {service.title}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-[#1d1d1f]/50" />
                </motion.div>
              </div>
              <p className="text-[#1d1d1f]/50 mt-2 text-sm">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-6 sm:px-8 pb-8">
                <div className="h-px mb-6 bg-[#1d1d1f]/8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}15` }}
                      >
                        <Check className="w-3 h-3" style={{ color: service.color }} />
                      </div>
                      <span className="text-[#1d1d1f]/70 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openService, setOpenService] = useState<string | null>('audit');

  const services = [
    {
      id: 'audit',
      icon: Search,
      title: t('services.service1Title'),
      subtitle: t('services.service1Subtitle'),
      color: '#007AFF',
      features: [
        t('services.service1Feature1'),
        t('services.service1Feature2'),
        t('services.service1Feature3'),
        t('services.service1Feature4'),
      ],
    },
    {
      id: 'technical',
      icon: Settings,
      title: t('services.service2Title'),
      subtitle: t('services.service2Subtitle'),
      color: '#5856D6',
      features: [
        t('services.service2Feature1'),
        t('services.service2Feature2'),
        t('services.service2Feature3'),
        t('services.service2Feature4'),
      ],
    },
    {
      id: 'content',
      icon: FileText,
      title: t('services.service3Title'),
      subtitle: t('services.service3Subtitle'),
      color: '#AF52DE',
      features: [
        t('services.service3Feature1'),
        t('services.service3Feature2'),
        t('services.service3Feature3'),
        t('services.service3Feature4'),
      ],
    },
  ];

  const handleToggle = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
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
            {t('services.badge')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            {t('services.title')}
            <span className="gradient-text">{t('services.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              onToggle={() => handleToggle(service.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
