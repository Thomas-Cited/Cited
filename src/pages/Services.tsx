import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Settings, FileText, ArrowRight, Check, BookOpen, GraduationCap, Newspaper, Handshake } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'GEO Audit',
    subtitle: 'Complete analysis of your AI visibility',
    description: 'We analyze your current visibility across all major AI engines including ChatGPT, Perplexity, Claude, and Google AI. Our comprehensive audit identifies opportunities and provides a detailed roadmap for improvement.',
    color: '#007AFF',
    features: [
      'Testing on 50+ key queries',
      'AI competitive analysis',
      'Detailed GEO score',
      'Personalized roadmap',
      'Multi-language support',
      'Quarterly updates',
    ],
  },
  {
    icon: Settings,
    title: 'Technical Optimization',
    subtitle: 'Implementation of structured data for LLMs',
    description: 'We implement advanced Schema.org markup and optimize your site structure to make it easily understandable by Large Language Models. This ensures your content is properly indexed and cited by AI systems.',
    color: '#5856D6',
    features: [
      'Advanced Schema.org implementation',
      'AI-friendly content structure',
      'E-E-A-T optimization',
      'Technical performance audit',
      'Knowledge graph integration',
      'Entity optimization',
    ],
  },
  {
    icon: FileText,
    title: 'GEO Content',
    subtitle: 'Content designed to be cited by AI',
    description: 'We create and optimize content specifically designed to be referenced by AI systems. Our content strategy focuses on providing clear, factual, and well-structured information that AI engines love to cite.',
    color: '#AF52DE',
    features: [
      'Citation-ready articles',
      'Optimized FAQs',
      'Data and sources integration',
      'Structured Q&A format',
      'Entity-rich content',
      'Monthly content calendar',
    ],
  },
];

const additionalServices = [
  { title: 'Wikipedia Strategy', desc: 'Build authority through Wikipedia presence', icon: BookOpen },
  { title: 'Team Training', desc: 'Educate your team on GEO best practices', icon: GraduationCap },
  { title: 'GEO Press Relations', desc: 'Get cited in AI-generated news summaries', icon: Newspaper },
  { title: 'Dedicated Consultant', desc: 'Personal GEO expert for your brand', icon: Handshake },
];

export default function Services() {
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
            <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-sm text-[#1d1d1f]/50 mb-4">Our Services</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
              Everything you need<br /><span className="gradient-text">to be cited by AI.</span>
            </h1>
            <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto">
              From audit to execution, we provide end-to-end GEO services to make your brand visible in the generative AI era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="apple-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">{service.title}</h2>
                  <p className="text-lg text-[#1d1d1f]/50 mb-4">{service.subtitle}</p>
                  <p className="text-[#1d1d1f]/70">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1d1d1f]/50 uppercase tracking-wider mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${service.color}15` }}>
                          <Check className="w-3 h-3" style={{ color: service.color }} />
                        </div>
                        <span className="text-[#1d1d1f]/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Additional Services</h2>
            <p className="text-[#1d1d1f]/50">Tailored solutions for enterprise clients</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="apple-card p-6 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">{item.title}</h3>
                <p className="text-sm text-[#1d1d1f]/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pricing" className="flex items-center gap-2 px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056CC] transition-all">
              View pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
