
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <article className="prose prose-invert max-w-4xl mx-auto prose-p:text-king-light prose-headings:text-white prose-h1:text-king-gold prose-h2:text-king-gold">
          <h1>Politique de Confidentialité</h1>
          <p className="lead">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <p>IPTVKing ("nous", "notre" ou "nos") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web IPTVKing-officiel.fr (le "Site"). Veuillez lire attentivement cette politique de confidentialité.</p>

          <h2>1. Collecte de vos informations</h2>
          <p>Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter sur le Site incluent :</p>
          <ul>
            <li><strong>Données personnelles :</strong> Informations personnellement identifiables, telles que votre nom, votre adresse e-mail, que vous nous fournissez volontairement lorsque vous effectuez un achat ou que vous nous contactez.</li>
            <li><strong>Données de paiement :</strong> Nous ne stockons aucune information financière. Toutes les transactions de paiement sont traitées par nos partenaires de paiement sécurisés.</li>
            <li><strong>Données d'utilisation :</strong> Informations que votre navigateur envoie automatiquement lorsque vous visitez le Site, telles que votre adresse IP, votre type de navigateur, vos heures d'accès et les pages que vous avez consultées.</li>
          </ul>

          <h2>2. Utilisation de vos informations</h2>
          <p>Avoir des informations précises sur vous nous permet de vous offrir une expérience fluide, efficace et personnalisée. Spécifiquement, nous pouvons utiliser les informations collectées vous concernant via le Site pour :</p>
          <ul>
            <li>Créer et gérer votre compte.</li>
            <li>Traiter vos commandes, vos paiements et autres transactions.</li>
            <li>Vous envoyer un e-mail de confirmation.</li>
            <li>Répondre à vos demandes de service client.</li>
            <li>Améliorer l'efficacité et le fonctionnement du Site.</li>
          </ul>

          <h2>3. Divulgation de vos informations</h2>
          <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations avec des fournisseurs tiers, des prestataires de services, des sous-traitants ou des agents qui effectuent des services pour nous ou en notre nom et qui ont besoin d'accéder à ces informations pour effectuer ce travail.</p>

          <h2>4. Sécurité de vos informations</h2>
          <p>Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, sachez que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable.</p>

          <h2>5. Vos droits en vertu du RGPD</h2>
          <p>Si vous êtes résident de l'Espace économique européen (EEE), vous disposez de certains droits en matière de protection des données. IPTVKing vise à prendre des mesures raisonnables pour vous permettre de corriger, de modifier, de supprimer ou de limiter l'utilisation de vos données personnelles.</p>
          <ul>
            <li>Le droit d'accès, de mise à jour ou de suppression des informations que nous avons sur vous.</li>
            <li>Le droit de rectification.</li>
            <li>Le droit d'opposition.</li>
            <li>Le droit à la portabilité des données.</li>
          </ul>
          <p>Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.</p>
          
          <h2>6. Contactez-nous</h2>
          <p>Si vous avez des questions ou des commentaires sur cette politique de confidentialité, veuillez nous contacter à : support@iptvking-officiel.fr</p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
