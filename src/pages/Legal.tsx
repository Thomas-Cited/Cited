import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useSeo } from '../hooks/use-seo';

export default function Legal() {
  useSeo({
    title: 'Legal Notice | Cited.',
    description: 'Legal information, terms of service, and privacy policy for Cited Agency.',
    path: '/legal',
  });
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
              {t('legal.title')}
            </h1>
            <p className="text-lg text-[#1d1d1f]/50 mb-12">
              {t('legal.intro')}
            </p>
          </motion.div>

          <div className="space-y-10 text-[#1d1d1f]/80 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section1Title')}</h2>
              <div className="apple-card p-6 text-sm space-y-1">
                <p><strong>{t('legal.companyName')}</strong> CITED AGENCY FZ-LLC</p>
                <p><strong>{t('legal.legalStructure')}</strong> {t('legal.legalStructureValue')}</p>
                <p><strong>{t('legal.capital')}</strong> {t('legal.capitalValue')}</p>
                <p><strong>{t('legal.regNumber')}</strong> {t('legal.regNumberValue')}</p>
                <p><strong>{t('legal.licenceNumber')}</strong> {t('legal.licenceNumberValue')}</p>
                <p><strong>{t('legal.regBody')}</strong> {t('legal.regBodyValue')}</p>
                <p><strong>{t('legal.regAddress')}</strong> {t('legal.regAddressValue')}</p>
                <p><strong>{t('legal.pubDirector')}</strong> {t('legal.pubDirectorValue')}</p>
                <p><strong>{t('legal.emailLabel')}</strong> <a href="mailto:contact@citedagency.com" className="text-[#007AFF] hover:underline">contact@citedagency.com</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section2Title')}</h2>
              <div className="apple-card p-6 text-sm space-y-1">
                <p>Cloudflare, Inc.</p>
                <p>101 Townsend Street</p>
                <p>San Francisco, California 94107</p>
                <p>USA</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section3Title')}</h2>
              <p className="mb-3">{t('legal.section3P1')}</p>
              <p>{t('legal.section3P2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section4Title')}</h2>
              <p className="mb-3">{t('legal.section4P1')}</p>
              <p className="mb-3">{t('legal.section4P2')}</p>
              <p className="font-semibold text-[#1d1d1f] mb-2">{t('legal.section4DataTitle')}</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>{t('legal.section4Data1')}</li>
                <li>{t('legal.section4Data2')}</li>
                <li>{t('legal.section4Data3')}</li>
                <li>{t('legal.section4Data4')}</li>
              </ul>
              <p className="mb-3"><strong>{t('legal.section4Retention')}</strong> {t('legal.section4RetentionValue')}</p>
              <p>{t('legal.section4Rights')} <a href="mailto:contact@citedagency.com" className="text-[#007AFF] hover:underline">contact@citedagency.com</a></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section5Title')}</h2>
              <p>{t('legal.section5P1')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section6Title')}</h2>
              <p className="mb-3">{t('legal.section6P1')}</p>
              <p>{t('legal.section6P2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section7Title')}</h2>
              <p>{t('legal.section7P1')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{t('legal.section8Title')}</h2>
              <p>{t('legal.section8P1')}</p>
            </motion.div>

            <p className="text-sm text-[#1d1d1f]/30 pt-8">{t('legal.lastUpdate')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
