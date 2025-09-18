
import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionCard from '../components/SubscriptionCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';

const HomePage: React.FC = () => {

  const features = [
    { title: "+22,000 Chaînes", description: "Accédez à un bouquet TV complet en 4K/FHD.", icon: "📺" },
    { title: "+100,000 VOD", description: "Films et séries mis à jour régulièrement.", icon: "🎬" },
    { title: "Support 24/7", description: "Une équipe dédiée pour vous aider à tout moment.", icon: "🎧" },
    { title: "Activation Instantanée", description: "Recevez votre code d'abonnement immédiatement.", icon: "⚡️" },
  ];

  const testimonials = [
    { quote: "Le meilleur service IPTV que j'ai testé. L'abonnement IPTVKing premium est stable, rapide et le catalogue VOD est immense. Je recommande vivement IPTV King France !", author: "Marc D.", location: "Paris, France" },
    { quote: "J'étais sceptique, mais les avis sur IPTV King étaient bons. J'ai pris 12 mois et je ne regrette pas. L'installation sur ma Smart TV a été un jeu d'enfant avec leur guide.", author: "Amina K.", location: "Lyon, France" },
    { quote: "Enfin un service IPTV pas cher qui fonctionne ! Le support est super réactif, ils m'ont aidé à installer l'APK IPTV King sur mon boîtier Android en 5 minutes. Qualité d'image impeccable.", author: "Julien R.", location: "Marseille, France" },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(10, 24, 40, 0.8), rgba(10, 24, 40, 1)), url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            L'Expérience <span className="text-king-gold">IPTV Ultime</span> est arrivée.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-king-light max-w-3xl mx-auto">
            Rejoignez des milliers d'utilisateurs satisfaits avec IPTVKing, le leader de l'abonnement IPTV en France pour 2025. Profitez d'une qualité d'image exceptionnelle, d'une stabilité sans faille et d'un support client inégalé.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/abonnements" className="w-full sm:w-auto bg-king-gold text-king-blue font-bold py-4 px-8 rounded-lg hover:bg-king-light transition-colors duration-300 text-lg">
              Voir les Abonnements
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-king-gold text-king-gold font-bold py-4 px-8 rounded-lg hover:bg-king-gold hover:text-king-blue transition-colors duration-300 text-lg">
              Test Gratuit 24h
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 p-8 rounded-xl border border-gray-800 transition-shadow hover:shadow-lg hover:shadow-king-gold/10">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-king-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Choisissez l'Abonnement <span className="text-king-gold">IPTVKing</span> qui vous convient</h2>
            <p className="mt-4 text-king-light">
                Des offres flexibles et un service IPTV pas cher pour un divertissement sans limites. Tous nos plans incluent l'accès complet à nos chaînes et VOD, ainsi que le support premium 24/7.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SubscriptionCard 
                duration="1 Mois"
                price="14.99€"
                features={[
                    "+22,000 Chaînes",
                    "+100,000 VOD",
                    "Qualité 4K / FHD / HD",
                    "Support 24/7",
                    "Anti-coupure"
                ]}
            />
            <SubscriptionCard 
                duration="3 Mois"
                price="29.99€"
                features={[
                    "+22,000 Chaînes",
                    "+100,000 VOD",
                    "Qualité 4K / FHD / HD",
                    "Support 24/7",
                    "Anti-coupure"
                ]}
            />
            <SubscriptionCard 
                duration="12 Mois"
                price="59.99€"
                features={[
                    "+22,000 Chaînes",
                    "+100,000 VOD",
                    "Qualité 4K / FHD / HD",
                    "Support 24/7",
                    "Anti-coupure",
                    "Mises à jour gratuites"
                ]}
                isPopular={true}
            />
            <SubscriptionCard 
                duration="6 Mois"
                price="44.99€"
                features={[
                    "+22,000 Chaînes",
                    "+100,000 VOD",
                    "Qualité 4K / FHD / HD",
                    "Support 24/7",
                    "Anti-coupure"
                ]}
            />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nos Clients <span className="text-king-gold">Nous Adorent</span></h2>
            <p className="mt-4 text-king-light">Découvrez les avis sur IPTV King. La satisfaction de nos clients est notre meilleure publicité. Rejoignez la famille IPTVKing dès aujourd'hui.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* SEO Content Section */}
      <section className="container mx-auto px-6">
        <div className="prose prose-invert max-w-none prose-p:text-king-light prose-headings:text-white prose-h2:text-king-gold">
            <h2>IPTVKing : Votre Fournisseur IPTV de Confiance en France pour 2025</h2>
            <p>
                Dans un marché saturé, choisir le bon service IPTV peut être complexe. C'est là qu'intervient <strong>IPTVKing</strong>. En tant que fournisseur officiel, nous nous engageons à offrir une expérience de streaming inégalée. Notre <strong>abonnement IPTV King</strong> est conçu pour répondre aux besoins des utilisateurs les plus exigeants, que ce soit pour une installation sur <strong>IPTV King Smart TV</strong>, un boîtier <strong>IPTV King Android</strong>, ou même sur <strong>IPTV King iOS</strong>.
            </p>
            <p>
                La force de notre offre réside dans sa richesse et sa stabilité. Avec des milliers de chaînes incluant <strong>IPTV King Bein Sport</strong>, des documentaires, des chaînes de cinéma comme si vous aviez <strong>IPTV King Netflix</strong>, et une bibliothèque VOD colossale, le divertissement est infini. Nous comprenons l'importance d'un service fiable. C'est pourquoi notre infrastructure est optimisée pour garantir une diffusion fluide, sans coupure, faisant de notre offre l'une des plus stables du marché. L'<strong>achat de votre abonnement IPTV King</strong> est simple, sécurisé, et la livraison de votre <strong>code IPTVKing</strong> est instantanée.
            </p>
            <h3>Pourquoi choisir notre abonnement IPTV King Premium ?</h3>
            <p>
                Notre offre <strong>IPTV King premium</strong> se distingue par plusieurs aspects. Premièrement, la qualité d'image. Nous proposons des flux en 4K, FHD et HD pour une immersion totale. Deuxièmement, la compatibilité. L'application <strong>IPTV King APK</strong> est facile à installer sur tous vos appareils Android. Troisièmement, le prix. Nous proposons un service <strong>IPTV King pas cher</strong> sans compromettre la qualité. Finalement, notre support client est notre fierté. Une question sur l'<strong>installation IPTV King</strong> ? Un problème technique ? Nous sommes là 24/7. C'est cette combinaison qui forge les excellents <strong>avis IPTV King</strong> que nous recevons.
            </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
