
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CrownIcon = () => (
  <svg className="w-8 h-8 text-king-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5.25L12 2.25L9 5.25m6 0l1.125 1.125M15 5.25v2.25M9 5.25v2.25m0 0l-1.125 1.125M3 12.75l2.25-2.25 1.125 1.125L9 9.75l3 3 3-3 2.625 2.625L21 12.75M3 12.75v6.75a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-6.75" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Accueil' },
    { to: '/abonnements', text: 'Abonnements' },
    { to: '/chaines', text: 'Chaînes' },
    { to: '/faq', text: 'FAQ' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact' },
  ];

  const linkClasses = "px-4 py-2 transition-colors duration-300 hover:text-king-gold";
  const activeLinkClasses = "text-king-gold font-semibold";

  return (
    <header className="bg-king-blue/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-king-blue/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CrownIcon />
            <span className="text-2xl font-black text-white tracking-wider">IPTV<span className="text-king-gold">King</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : 'text-king-light'}`}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-king-light focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block px-4 py-2 rounded-md transition-colors duration-300 hover:bg-king-blue ${isActive ? 'bg-king-blue text-king-gold' : 'text-king-light'}`}
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
