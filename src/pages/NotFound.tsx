import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-4">
            {t('404.title')}
          </h1>
          <p className="text-[#1d1d1f]/50 mb-8">
            {t('404.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#007AFF] text-white font-medium rounded-full hover:bg-[#0056CC] transition-colors"
            >
              <Home className="w-4 h-4" />
              {t('404.home')}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-medium rounded-full hover:bg-[#e8e8ed] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('404.back')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
