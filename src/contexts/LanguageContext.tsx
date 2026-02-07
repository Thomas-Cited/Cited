import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.geoScore': 'GEO Score',
    'nav.schemaAudit': 'Schema Audit',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Book a call',

    // Hero
    'hero.tagline': 'GEO Agency',
    'hero.title': 'Get cited by',
    'hero.titleHighlight': 'AI engines.',
    'hero.subtitle': 'We help brands become the trusted source that ChatGPT, Perplexity, and other AI systems cite and recommend.',
    'hero.cta': 'Get your GEO Score',
    'hero.ctaSecondary': 'Learn more',

    // Contact
    'contact.tagline': 'Contact',
    'contact.title': "Let's talk about your",
    'contact.titleHighlight': 'AI visibility.',
    'contact.subtitle': 'Get a free consultation and discover how we can help your brand get cited by AI engines.',
    'contact.email': 'Email',
    'contact.bookCall': 'Book a call',
    'contact.scheduleMeeting': 'Schedule a meeting',
    'contact.formTitle': 'Send us a message',
    'contact.formSubtitle': "Fill out the form below and we'll get back to you shortly.",
    'contact.firstName': 'First name',
    'contact.lastName': 'Last name',
    'contact.professionalEmail': 'Professional email',
    'contact.website': 'Website',
    'contact.budget': 'Monthly budget',
    'contact.goal': 'Your main goal',
    'contact.goalPlaceholder': 'Tell us about your goals and challenges...',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.thankYou': 'Thank you!',
    'contact.received': "We've received your message and will get back to you within 24 hours.",

    // GEO Score
    'geoScore.tagline': 'GEO Score',
    'geoScore.title': 'How visible are you to',
    'geoScore.titleHighlight': 'AI engines?',
    'geoScore.subtitle': 'Get your free GEO Score in seconds. Discover how well your website is optimized for ChatGPT, Perplexity, and other AI systems.',
    'geoScore.brandLabel': 'Your brand / company name',
    'geoScore.industryLabel': 'Industry',
    'geoScore.websiteLabel': 'Website',
    'geoScore.websiteOptional': '(optional)',
    'geoScore.websiteHint': "We'll use it to refine the analysis",
    'geoScore.analyze': 'Analyze my AI visibility',
    'geoScore.analyzing': 'Analyzing...',
    'geoScore.getAudit': 'Get a detailed audit',
    'geoScore.checkAnother': 'Check another brand',

    // Schema Audit
    'schemaAudit.tagline': 'Schema Audit',
    'schemaAudit.title': 'Make your content',
    'schemaAudit.titleHighlight': 'understandable by AI.',
    'schemaAudit.subtitle': 'Schema.org markup is the foundation of AI visibility. We audit, implement, and optimize structured data to help AI engines understand and cite your content.',
    'schemaAudit.analyzeTitle': 'Analyze your Schema.org',
    'schemaAudit.analyzeSubtitle': 'Enter your URL to get a free schema audit',
    'schemaAudit.analyze': 'Analyze Schema.org',
    'schemaAudit.analyzing': 'Analyzing...',

    // Footer
    'footer.rights': '© 2026 Cited. All rights reserved.',

    // 404
    '404.title': 'Page not found',
    '404.subtitle': "The page you're looking for doesn't exist or has been moved.",
    '404.home': 'Go home',
    '404.back': 'Go back',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.geoScore': 'Score GEO',
    'nav.schemaAudit': 'Audit Schema',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Réserver un appel',

    // Hero
    'hero.tagline': 'Agence GEO',
    'hero.title': 'Soyez cité par les',
    'hero.titleHighlight': 'moteurs IA.',
    'hero.subtitle': 'Nous aidons les marques à devenir la source de confiance que ChatGPT, Perplexity et les autres systèmes IA citent et recommandent.',
    'hero.cta': 'Obtenir votre Score GEO',
    'hero.ctaSecondary': 'En savoir plus',

    // Contact
    'contact.tagline': 'Contact',
    'contact.title': 'Parlons de votre',
    'contact.titleHighlight': 'visibilité IA.',
    'contact.subtitle': 'Obtenez une consultation gratuite et découvrez comment nous pouvons aider votre marque à être citée par les moteurs IA.',
    'contact.email': 'Email',
    'contact.bookCall': 'Réserver un appel',
    'contact.scheduleMeeting': 'Planifier un rendez-vous',
    'contact.formTitle': 'Envoyez-nous un message',
    'contact.formSubtitle': 'Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.',
    'contact.firstName': 'Prénom',
    'contact.lastName': 'Nom',
    'contact.professionalEmail': 'Email professionnel',
    'contact.website': 'Site web',
    'contact.budget': 'Budget mensuel',
    'contact.goal': 'Votre objectif principal',
    'contact.goalPlaceholder': 'Parlez-nous de vos objectifs et défis...',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.thankYou': 'Merci !',
    'contact.received': 'Nous avons bien reçu votre message et vous répondrons sous 24 heures.',

    // GEO Score
    'geoScore.tagline': 'Score GEO',
    'geoScore.title': 'Quelle est votre visibilité sur les',
    'geoScore.titleHighlight': 'moteurs IA ?',
    'geoScore.subtitle': 'Obtenez votre Score GEO gratuit en quelques secondes. Découvrez si votre site est optimisé pour ChatGPT, Perplexity et les autres systèmes IA.',
    'geoScore.brandLabel': 'Nom de votre marque / entreprise',
    'geoScore.industryLabel': 'Secteur',
    'geoScore.websiteLabel': 'Site web',
    'geoScore.websiteOptional': '(optionnel)',
    'geoScore.websiteHint': 'Nous l\'utiliserons pour affiner l\'analyse',
    'geoScore.analyze': 'Analyser ma visibilité IA',
    'geoScore.analyzing': 'Analyse en cours...',
    'geoScore.getAudit': 'Obtenir un audit détaillé',
    'geoScore.checkAnother': 'Analyser une autre marque',

    // Schema Audit
    'schemaAudit.tagline': 'Audit Schema',
    'schemaAudit.title': 'Rendez votre contenu',
    'schemaAudit.titleHighlight': 'compréhensible par l\'IA.',
    'schemaAudit.subtitle': 'Le balisage Schema.org est la base de la visibilité IA. Nous auditons, implémentons et optimisons les données structurées pour aider les moteurs IA à comprendre et citer votre contenu.',
    'schemaAudit.analyzeTitle': 'Analysez votre Schema.org',
    'schemaAudit.analyzeSubtitle': 'Entrez votre URL pour obtenir un audit schema gratuit',
    'schemaAudit.analyze': 'Analyser Schema.org',
    'schemaAudit.analyzing': 'Analyse en cours...',

    // Footer
    'footer.rights': '© 2026 Cited. Tous droits réservés.',

    // 404
    '404.title': 'Page non trouvée',
    '404.subtitle': 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    '404.home': 'Retour à l\'accueil',
    '404.back': 'Retour',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
