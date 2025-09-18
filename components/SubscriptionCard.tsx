
import React from 'react';

interface SubscriptionCardProps {
  duration: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ duration, price, features, isPopular = false }) => {
  return (
    <div className={`border-2 rounded-xl p-8 flex flex-col h-full relative overflow-hidden transition-transform duration-300 hover:scale-105 ${isPopular ? 'border-king-gold bg-king-blue' : 'border-gray-700 bg-black/30'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-king-gold text-king-blue px-8 py-1 text-sm font-bold uppercase tracking-wider" style={{ transform: 'rotate(45deg) translate(30%, -50%)', transformOrigin: 'center' }}>
          Populaire
        </div>
      )}
      <h3 className="text-2xl font-bold text-white">{duration}</h3>
      <p className="text-5xl font-black text-king-gold my-6">{price}<span className="text-lg text-king-light font-medium">/total</span></p>
      <ul className="space-y-4 text-king-light flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-king-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 py-3 px-6 bg-king-gold text-king-blue font-bold rounded-lg hover:bg-king-light transition-colors duration-300">
        S'abonner Maintenant
      </button>
    </div>
  );
};

export default SubscriptionCard;
