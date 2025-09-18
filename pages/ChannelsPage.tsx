
import React from 'react';

const channels = {
  "Chaînes Françaises": ["TF1", "France 2", "M6", "Canal+", "Arte", "C8", "W9", "TMC", "BFMTV", "CNews"],
  "Sports": ["BeIN Sports", "RMC Sport", "Eurosport", "Canal+ Sport", "Foot+", "Golf Channel", "NBA TV"],
  "Films & Séries": ["OCS", "Ciné+", "Action", "Paramount Channel", "TCM Cinéma", "Netflix*", "Prime Video*", "Disney+*"],
  "Documentaires": ["National Geographic", "Discovery Channel", "Histoire TV", "Ushuaïa TV", "Animaux"],
  "Chaînes Arabes": ["MBC", "Al Jazeera", "Rotana", "ART", "BeIN Sports Arabia"],
  "Chaînes Internationales": ["BBC", "CNN", "Sky News", "ZDF", "RAI", "TVE", "RTP", "Et bien d'autres..."],
};

const ChannelCard: React.FC<{ category: string, list: string[] }> = ({ category, list }) => (
  <div className="bg-black/30 p-8 rounded-xl border border-gray-800 transition-shadow hover:shadow-lg hover:shadow-king-gold/10">
    <h3 className="text-2xl font-bold text-king-gold mb-4">{category}</h3>
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-king-light">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {category.includes("Films") && <p className="text-xs text-gray-500 mt-4">*Accès au contenu VOD de ces plateformes.</p>}
  </div>
);


const ChannelsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Un Monde de Divertissement avec les Chaînes <span className="text-king-gold">IPTVKing</span>
          </h1>
          <p className="mt-6 text-lg text-king-light">
            Avec plus de 22,000 chaînes en direct et 100,000 titres en VOD, notre abonnement IPTV King vous ouvre les portes d'un divertissement illimité. Découvrez un aperçu des bouquets disponibles.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(channels).map(([category, list]) => (
            <ChannelCard key={category} category={category} list={list} />
          ))}
        </div>
        
        <div className="mt-20 prose prose-invert max-w-none prose-p:text-king-light prose-headings:text-white prose-h2:text-king-gold">
            <h2>Des chaînes pour toute la famille avec IPTV King</h2>
            <p>
                L'un des principaux avantages de l'<strong>abonnement IPTVKing</strong> est la diversité de son contenu. Que vous soyez un fan de sport cherchant à regarder les matchs sur <strong>IPTV King Bein Sport</strong>, un cinéphile avide de nouveautés dignes d'<strong>IPTV King Netflix</strong>, ou que vous souhaitiez simplement regarder les chaînes nationales, nous avons tout ce qu'il vous faut. Notre liste de <strong>chaînes IPTV King</strong> est constamment mise à jour pour vous garantir l'accès aux derniers contenus.
            </p>
            <p>
                Notre service est optimisé pour vous offrir la meilleure expérience, que vous utilisiez <strong>IPTV King sur Smart TV</strong>, via l'<strong>APK IPTV King</strong> sur votre boîtier Android, ou sur votre appareil iOS. La qualité est notre priorité, avec des flux disponibles en 4K et FHD pour une clarté d'image à couper le souffle. N'attendez plus, choisissez l'<strong>abonnement IPTV King premium</strong> et plongez dans un univers de divertissement sans fin. IPTV King France est votre partenaire de confiance.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPage;
