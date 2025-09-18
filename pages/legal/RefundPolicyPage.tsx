
import React from 'react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <article className="prose prose-invert max-w-4xl mx-auto prose-p:text-king-light prose-headings:text-white prose-h1:text-king-gold prose-h2:text-king-gold">
          <h1>Politique de Remboursement</h1>
          <p className="lead">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <p>Chez IPTVKing, la satisfaction de nos clients est notre priorité absolue. Nous sommes confiants dans la qualité de notre service, c'est pourquoi nous offrons une garantie de remboursement de 7 jours.</p>

          <h2>Conditions de remboursement</h2>
          <p>Vous pouvez demander un remboursement complet de votre abonnement dans les 7 jours suivant la date de votre achat initial. Pour être éligible à un remboursement, vous devez remplir les conditions suivantes :</p>
          <ul>
            <li>Votre demande de remboursement doit être effectuée dans les 7 jours calendaires suivant votre achat.</li>
            <li>Vous devez nous contacter via notre adresse e-mail de support (support@iptvking-officiel.fr) avec votre numéro de commande et la raison de votre demande de remboursement.</li>
            <li>Le remboursement s'applique uniquement aux nouveaux abonnements. Les renouvellements ne sont pas éligibles au remboursement.</li>
          </ul>

          <h2>Situations non remboursables</h2>
          <p>Veuillez noter que nous ne pourrons pas effectuer de remboursement dans les cas suivants :</p>
          <ul>
            <li>Après l'expiration de la période de 7 jours.</li>
            <li>Si vous avez des difficultés techniques dues à votre configuration (connexion internet lente, appareil non compatible, mauvaise configuration de votre part) que notre support a tenté de résoudre avec vous sans succès. Nous vous encourageons à demander un test gratuit de 24h avant d'acheter pour vérifier la compatibilité.</li>
            <li>Si vous changez simplement d'avis après la période de 7 jours.</li>
            <li>Si vous avez violé nos Conditions Générales d'Utilisation.</li>
          </ul>

          <h2>Processus de remboursement</h2>
          <p>Une fois votre demande reçue et inspectée, nous vous enverrons un e-mail pour vous informer de l'approbation ou du rejet de votre remboursement. Si votre demande est approuvée, votre remboursement sera traité et un crédit sera automatiquement appliqué à votre mode de paiement original, dans un délai de 5 à 10 jours ouvrables.</p>

          <h2>Contact</h2>
          <p>Pour toute question relative à notre politique de remboursement, veuillez nous contacter à support@iptvking-officiel.fr.</p>
        </article>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
