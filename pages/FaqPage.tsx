
import React from 'react';
import FaqItem from '../components/FaqItem';

const FaqPage: React.FC = () => {
  const faqs = [
    {
      question: "Qu'est-ce que l'IPTV ?",
      answer: `L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des chaînes de télévision via une connexion Internet, au lieu des méthodes traditionnelles par satellite ou câble. Avec un abonnement IPTVKing, vous accédez à des milliers de chaînes du monde entier directement sur votre appareil connecté.`
    },
    {
      question: "Sur quels appareils puis-je utiliser mon abonnement IPTV King ?",
      answer: `Notre service IPTV King est compatible avec une large gamme d'appareils :\n- Smart TV (Samsung, LG, Sony, etc.)\n- Boîtiers Android (Nvidia Shield, Xiaomi Mi Box, etc.)\n- Smartphones et tablettes (Android & iOS)\n- Ordinateurs (Windows, Mac, Linux via VLC ou applications dédiées)\n- Appareils Amazon Fire TV Stick\n- MAG Box\nEn résumé, si votre appareil peut se connecter à Internet et installer une application, il est très probablement compatible.`
    },
    {
      question: "Comment se passe l'installation de l'IPTVKing ?",
      answer: `L'installation IPTV King est très simple. Après avoir acheté votre abonnement, vous recevrez un email instantané contenant votre code IPTVKing et des instructions détaillées pour votre appareil. Pour la plupart des appareils, il suffit de télécharger une application IPTV (comme IPTV Smarters, TiviMate, ou notre propre APK IPTV King), d'entrer vos identifiants, et de commencer à regarder.`
    },
    {
      question: "Est-ce que IPTVKing est un service stable ?",
      answer: `Absolument. La stabilité est notre priorité numéro un. Nous utilisons des serveurs de dernière génération situés en Europe pour garantir une diffusion fluide et sans coupure 99.9% du temps. C'est ce qui fait la renommée de notre abonnement IPTV King premium et explique les nombreux avis IPTV King positifs.`
    },
    {
      question: "Quelle est la vitesse Internet recommandée ?",
      answer: `Pour une expérience optimale, nous recommandons une connexion Internet stable d'au moins 15-20 Mbps pour les flux HD et FHD. Pour la 4K, une connexion de 30 Mbps ou plus est préférable. Vous pouvez tester votre vitesse sur des sites comme Speedtest.net.`
    },
    {
      question: "Puis-je utiliser mon abonnement sur plusieurs appareils en même temps ?",
      answer: `Un abonnement standard est valable pour une seule connexion à la fois. Si vous regardez sur votre Smart TV, vous ne pouvez pas regarder en même temps sur votre smartphone. Nous proposons cependant des options multi-connexions à des tarifs préférentiels. Contactez notre support pour en savoir plus.`
    },
    {
      question: "Proposez-vous un test gratuit ?",
      answer: `Oui, nous proposons un test gratuit de 24 heures pour vous permettre de découvrir la qualité de notre service IPTV King officiel. Vous pouvez en faire la demande via notre page de contact.`
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Questions Fréquemment Posées (<span className="text-king-gold">FAQ</span>)
          </h1>
          <p className="mt-6 text-lg text-king-light">
            Vous avez des questions sur notre abonnement IPTV King, l'installation ou la compatibilité ? Trouvez vos réponses ici.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
