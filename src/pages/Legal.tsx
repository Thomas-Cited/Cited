import { motion } from 'framer-motion';

export default function Legal() {
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
              Mentions légales
            </h1>
            <p className="text-lg text-[#1d1d1f]/50 mb-12">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN).
            </p>
          </motion.div>

          <div className="space-y-10 text-[#1d1d1f]/80 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">1. Site Publisher</h2>
              <div className="apple-card p-6 text-sm space-y-1">
                <p><strong>Company Name:</strong> CITED AGENCY FZ-LLC</p>
                <p><strong>Legal Structure:</strong> Free Zone Limited Liability Company (FZ-LLC)</p>
                <p><strong>Capital:</strong> AED 100,000</p>
                <p><strong>Registration Number:</strong> 0000004082782</p>
                <p><strong>Licence Number:</strong> 47029300</p>
                <p><strong>Regulatory Body:</strong> Ras Al Khaimah Economic Zone Authority (RAKEZ)</p>
                <p><strong>Registered Address:</strong> FDRK9297, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates</p>
                <p><strong>Publication Director:</strong> Thomas Vignaud, Manager</p>
                <p><strong>Email:</strong> <a href="mailto:contact@citedagency.com" className="text-[#007AFF] hover:underline">contact@citedagency.com</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">2. Hosting Provider</h2>
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
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">3. Propriété intellectuelle</h2>
              <p className="mb-3">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">4. Protection des données personnelles</h2>
              <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
              <p className="mb-3">Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.</p>
              <p className="font-semibold text-[#1d1d1f] mb-2">Données collectées :</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>URL du site web</li>
                <li>Message et informations sur votre projet</li>
              </ul>
              <p className="mb-3"><strong>Durée de conservation :</strong> Les données sont conservées pendant 3 ans à compter du dernier contact.</p>
              <p>Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@citedagency.com" className="text-[#007AFF] hover:underline">contact@citedagency.com</a></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">5. Cookies</h2>
              <p>Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être déposés.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">6. Limitation de responsabilité</h2>
              <p className="mb-3">Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
              <p>Cited. ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site, résultant de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">7. Liens hypertextes</h2>
              <p>Ce site peut contenir des liens hypertextes vers d'autres sites. Cited. n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">8. Droit applicable</h2>
              <p>Tout litige en relation avec l'utilisation du site citedagency.com est soumis au droit français. L'utilisateur reconnaît la compétence exclusive des tribunaux français.</p>
            </motion.div>

            <p className="text-sm text-[#1d1d1f]/30 pt-8">Dernière mise à jour : Janvier 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
