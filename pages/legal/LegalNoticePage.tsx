
import React from 'react';

const LegalNoticePage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <article className="prose prose-invert max-w-4xl mx-auto prose-p:text-king-light prose-headings:text-white prose-h1:text-king-gold prose-h2:text-king-gold">
          <h1>Mentions Légales</h1>
          <p className="lead">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site IPTVKing l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

          <h2>Édition du site</h2>
          <p>Le présent site, accessible à l’URL IPTVKing-officiel.fr (le « Site »), est édité par :</p>
          <p>
            KING MEDIA FZ-LLC, société fictive enregistrée à des fins de démonstration, dont le siège social est situé au Business Center, Ras Al Khaimah, Émirats Arabes Unis.
          </p>

          <h2>Hébergement</h2>
          <p>Le Site est hébergé par la société Vercel Inc., située au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis, (contact téléphonique ou email : +1 (951) 383-6898).</p>

          <h2>Directeur de publication</h2>
          <p>Le Directeur de la publication du Site est M. John Doe.</p>

          <h2>Nous contacter</h2>
          <ul>
            <li>Par email : support@iptvking-officiel.fr</li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>Tous les éléments graphiques, la structure et, plus généralement, le contenu du site IPTVKing sont protégés par le droit d'auteur, le droit des marques et le droit des dessins et modèles.</p>
          <p>Toute personne qui recueille ou télécharge du contenu ou des informations diffusées sur le site ne dispose sur ceux-ci que d’un droit d’usage privé, personnel et non transmissible. La reproduction d’une page du site dans un cadre extérieur à IPTVKing ou l’insertion d’une page appartenant à IPTVKing dans la page d’un autre site est interdite.</p>
          
          <h2>Données personnelles</h2>
          <p>Le traitement de vos données à caractère personnel est régi par notre Politique de Confidentialité conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (« RGPD »).</p>
        </article>
      </div>
    </div>
  );
};

export default LegalNoticePage;
