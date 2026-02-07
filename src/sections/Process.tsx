import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Audit',
    description: 'Analysis of your current AI visibility',
    color: '#007AFF',
  },
  {
    number: '2',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Personalized action plan',
    color: '#5856D6',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Execution',
    description: 'Technical and content optimization',
    color: '#AF52DE',
  },
  {
    number: '4',
    icon: BarChart3,
    title: 'Measure',
    description: 'Tracking and continuous improvement',
    color: '#FF2D55',
  },
];

export function Process() {
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
            Our process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            A clear 4-step methodology
            <br /><span className="gradient-text">for measurable results.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full origin-left bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#FF2D55]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  className="text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-6">
                    {/* Circle */}
                    <div 
                      className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white shadow-lg"
                      style={{ 
                        boxShadow: `0 4px 20px ${step.color}20`
                      }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>

                    {/* Number Badge */}
                    <div 
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                      style={{ background: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#1d1d1f]/50 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#geo-score"
            className="inline-flex items-center px-8 py-4 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Check your score
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
