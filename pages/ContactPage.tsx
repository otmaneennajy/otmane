
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais.");
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Contactez <span className="text-king-gold">IPTVKing</span>
          </h1>
          <p className="mt-6 text-lg text-king-light">
            Notre équipe de support est disponible 24/7 pour répondre à toutes vos questions, vous aider avec l'installation de votre abonnement IPTV King ou demander un test gratuit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-black/30 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-king-gold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-king-light mb-2">Nom</label>
                <input type="text" id="name" name="name" required className="w-full bg-king-blue border border-gray-600 rounded-lg p-3 text-white focus:ring-king-gold focus:border-king-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-king-light mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-king-blue border border-gray-600 rounded-lg p-3 text-white focus:ring-king-gold focus:border-king-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-king-light mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-king-blue border border-gray-600 rounded-lg p-3 text-white focus:ring-king-gold focus:border-king-gold"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-king-gold text-king-blue font-bold py-3 px-6 rounded-lg hover:bg-king-light transition-colors duration-300">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-black/30 p-8 rounded-xl border border-gray-800 flex items-start space-x-6">
              <div className="text-3xl mt-1">📧</div>
              <div>
                <h3 className="text-xl font-bold text-king-gold">Par Email</h3>
                <p className="text-king-light">Pour toute demande générale ou de support.</p>
                <a href="mailto:support@iptvking-officiel.fr" className="text-white font-semibold mt-2 inline-block hover:underline">support@iptvking-officiel.fr</a>
              </div>
            </div>
            <div className="bg-black/30 p-8 rounded-xl border border-gray-800 flex items-start space-x-6">
              <div className="text-3xl mt-1">📱</div>
              <div>
                <h3 className="text-xl font-bold text-king-gold">Par WhatsApp</h3>
                <p className="text-king-light">Pour une assistance rapide et l'activation.</p>
                <a href="#" className="text-white font-semibold mt-2 inline-block hover:underline">+33 7 12 34 56 78</a>
              </div>
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-king-light prose-headings:text-white prose-h2:text-king-gold mt-8">
                <h2>Acheter IPTV King en toute confiance</h2>
                <p>
                    Contacter le support d'IPTV King est simple et rapide. Que vous ayez une question avant d'<strong>acheter IPTV King</strong>, besoin d'aide pour l'<strong>installation IPTV King sur Smart TV</strong>, ou pour obtenir votre <strong>code IPTVKing</strong>, notre équipe est là pour vous. Nous sommes fiers d'être le site <strong>IPTV King officiel</strong> en France, et nous nous engageons à fournir un service client irréprochable.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
