
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    path: '/blog/installer-iptv-smart-tv',
    title: 'Guide Complet : Comment installer IPTV sur une Smart TV en 2025 ?',
    description: 'Découvrez les étapes simples pour configurer votre abonnement IPTVKing sur n\'importe quelle Smart TV (Samsung, LG...). Un tutoriel détaillé pour une installation réussie.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Tutoriels'
  },
  {
    path: '/blog/avantages-iptvking-2025',
    title: 'Les 5 avantages de l’abonnement IPTVKing en 2025',
    description: 'Pourquoi choisir IPTVKing pour votre divertissement ? Stabilité, catalogue VOD, compatibilité multi-appareils... On vous dit tout sur le meilleur service IPTV en France.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Guides'
  },
  {
    path: '/blog/comparatif-iptvking',
    title: 'Comparatif : IPTVKing vs les autres services IPTV',
    description: 'Comment IPTVKing se positionne-t-il face à la concurrence ? Un comparatif honnête sur la qualité, le prix et le service client pour vous aider à faire le bon choix.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: 'Analyses'
  }
];

const BlogListPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Le Blog d'<span className="text-king-gold">IPTVKing</span>
          </h1>
          <p className="mt-6 text-lg text-king-light">
            Restez informé des dernières actualités, tutoriels et guides sur le monde de l'IPTV. Nos experts partagent leurs conseils pour optimiser votre expérience avec votre abonnement IPTV King.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link to={article.path} key={index} className="group bg-black/30 rounded-xl border border-gray-800 overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-king-gold/20">
              <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-king-gold mb-2">{article.category}</p>
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-king-gold transition-colors flex-grow">{article.title}</h2>
                <p className="text-king-light text-sm">{article.description}</p>
                 <span className="mt-6 text-king-gold font-semibold">Lire la suite &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
