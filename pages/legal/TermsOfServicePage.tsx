
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <article className="prose prose-invert max-w-4xl mx-auto prose-p:text-king-light prose-headings:text-white prose-h1:text-king-gold prose-h2:text-king-gold">
          <h1>Conditions Générales d'Utilisation</h1>
          <p className="lead">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <h2>1. Accord sur les conditions</h2>
          <p>En accédant au site web IPTVKing-officiel.fr (le "Site"), vous acceptez d'être lié par ces Conditions Générales d'Utilisation ("Conditions"), toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect de toutes les lois locales applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.</p>

          <h2>2. Description du service</h2>
          <p>IPTVKing fournit des abonnements donnant accès à des flux de télévision diffusés par Internet. Nous ne sommes pas responsables du contenu et ne possédons ni n'hébergeons aucun contenu. Nous fournissons simplement un accès à des flux qui sont déjà disponibles sur Internet.</p>

          <h2>3. Utilisation de la licence</h2>
          <p>L'autorisation est accordée de télécharger temporairement une copie du matériel (information ou logiciel) sur le Site pour une visualisation transitoire personnelle et non commerciale uniquement. C'est l'octroi d'une licence, pas un transfert de titre, et sous cette licence, vous ne pouvez pas :</p>
          <ul>
            <li>modifier ou copier le matériel ;</li>
            <li>utiliser le matériel à des fins commerciales, ou pour toute présentation publique (commerciale ou non commerciale) ;</li>
            <li>tenter de décompiler ou de désosser tout logiciel contenu sur le Site ;</li>
            <li>transférer le matériel à une autre personne ou "mettre en miroir" le matériel sur un autre serveur.</li>
          </ul>
          <p>Cette licence prendra fin automatiquement si vous violez l'une de ces restrictions et peut être résiliée par IPTVKing à tout moment.</p>

          <h2>4. Responsabilité de l'utilisateur</h2>
          <p>L'utilisateur est seul responsable de s'assurer qu'il ne viole aucune loi ou droit d'auteur en utilisant notre service. IPTVKing ne peut être tenu pour responsable de la manière dont l'utilisateur final utilise l'abonnement.</p>

          <h2>5. Limitations</h2>
          <p>En aucun cas, IPTVKing ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser le matériel sur le Site, même si IPTVKing ou un représentant autorisé d'IPTVKing a été informé oralement ou par écrit de la possibilité d'un tel dommage.</p>
          
          <h2>6. Modifications des conditions</h2>
          <p>IPTVKing peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.</p>
        </article>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
