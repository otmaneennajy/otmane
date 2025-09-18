
import React from 'react';
import SubscriptionCard from '../components/SubscriptionCard';

const SubscriptionsPage: React.FC = () => {
  const plans = [
    {
      duration: "1 Mois",
      price: "14.99€",
      features: [
        "Idéal pour tester le service",
        "+22,000 Chaînes internationales",
        "+100,000 Films & Séries (VOD)",
        "Qualité 4K / FHD / HD / SD",
        "Support Client 24/7",
        "Compatible tous appareils",
        "Activation instantanée",
        "Mises à jour incluses"
      ],
      isPopular: false,
    },
    {
      duration: "3 Mois",
      price: "29.99€",
      features: [
        "Excellent rapport qualité-prix",
        "+22,000 Chaînes internationales",
        "+100,000 Films & Séries (VOD)",
        "Qualité 4K / FHD / HD / SD",
        "Support Client 24/7",
        "Compatible tous appareils",
        "Activation instantanée",
        "Mises à jour incluses"
      ],
      isPopular: false,
    },
    {
      duration: "12 Mois",
      price: "59.99€",
      features: [
        "Le meilleur choix, tranquillité assurée",
        "+22,000 Chaînes internationales",
        "+100,000 Films & Séries (VOD)",
        "Qualité 4K / FHD / HD / SD",
        "Support Client 24/7",
        "Compatible tous appareils",
        "Activation instantanée",
        "Mises à jour incluses"
      ],
      isPopular: true,
    },
    {
      duration: "6 Mois",
      price: "44.99€",
      features: [
        "Un engagement équilibré",
        "+22,000 Chaînes internationales",
        "+100,000 Films & Séries (VOD)",
        "Qualité 4K / FHD / HD / SD",
        "Support Client 24/7",
        "Compatible tous appareils",
        "Activation instantanée",
        "Mises à jour incluses"
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="bg-king-blue py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Nos Abonnements <span className="text-king-gold">IPTV King</span>
          </h1>
          <p className="mt-6 text-lg text-king-light">
            Choisissez l'abonnement IPTVKing qui correspond à vos besoins et à votre budget. Chaque offre vous donne un accès illimité à notre catalogue complet de chaînes et VOD. L'achat de votre code IPTVKing est 100% sécurisé et la livraison est instantanée par email.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <SubscriptionCard
              key={index}
              duration={plan.duration}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center text-king-light prose prose-invert max-w-none prose-p:text-king-light prose-headings:text-white prose-h2:text-king-gold">
            <h2>Un abonnement IPTV pas cher et de qualité premium</h2>
            <p>
                Chez IPTVKing, nous croyons que la qualité ne devrait pas être un luxe. C'est pourquoi nous avons conçu des offres d'<strong>abonnement IPTVKing</strong> qui sont à la fois abordables et ultra-performantes. Que vous optiez pour un engagement court ou pour notre offre <strong>IPTV King 2025</strong> de 12 mois, vous bénéficiez de la même qualité de service et du même accès complet.
            </p>
            <p>
                L'<strong>achat IPTV King</strong> est un processus simple. Sélectionnez votre plan, procédez au paiement sécurisé, et recevez votre <strong>code IPTVKing</strong> instantanément. Vous pourrez alors procéder à l'<strong>installation IPTV King</strong> sur votre appareil préféré : Smart TV, Android, iOS, PC, et bien plus. Notre service est pensé pour être le plus universel possible, faisant de IPTV King le choix numéro 1 en France.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
