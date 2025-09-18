
import React from 'react';
import { Link } from 'react-router-dom';

const CrownIcon = () => (
  <svg className="w-10 h-10 text-king-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5.25L12 2.25L9 5.25m6 0l1.125 1.125M15 5.25v2.25M9 5.25v2.25m0 0l-1.125 1.125M3 12.75l2.25-2.25 1.125 1.125L9 9.75l3 3 3-3 2.625 2.625L21 12.75M3 12.75v6.75a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-6.75" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 text-king-light mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
                <CrownIcon />
                <span className="text-3xl font-black text-white tracking-wider">IPTV<span className="text-king-gold">King</span></span>
            </Link>
            <p className="text-sm text-gray-400">Le roi de l'abonnement IPTV en France. Profitez d'une expérience de divertissement premium avec IPTV King, votre fournisseur officiel.</p>
          </div>
          
          <div>
            <h3 className="text-king-gold font-semibold tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/abonnements" className="hover:text-king-gold transition-colors">Abonnements</Link></li>
              <li><Link to="/chaines" className="hover:text-king-gold transition-colors">Nos Chaînes</Link></li>
              <li><Link to="/faq" className="hover:text-king-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-king-gold transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-king-gold font-semibold tracking-wider uppercase mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/politique-de-confidentialite" className="hover:text-king-gold transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/conditions-generales-utilisation" className="hover:text-king-gold transition-colors">Conditions Générales d'Utilisation</Link></li>
              <li><Link to="/politique-de-remboursement" className="hover:text-king-gold transition-colors">Politique de Remboursement</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-king-gold transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-king-gold font-semibold tracking-wider uppercase mb-4">Support</h3>
            <p>Notre équipe est disponible 24/7 pour vous aider.</p>
            <p className="font-semibold mt-2">support@iptvking-officiel.fr</p>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} IPTVKing. Tous droits réservés. Le site IPTV King officiel pour un service IPTV premium.</p>
          <p className="mt-2">Note: Nous ne vendons que des abonnements. L'utilisation du service relève de la responsabilité du client. IPTV King France.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
