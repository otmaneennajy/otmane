
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import ChannelsPage from './pages/ChannelsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/blog/BlogListPage';
import BlogArticle1Page from './pages/blog/BlogArticle1Page';
import BlogArticle2Page from './pages/blog/BlogArticle2Page';
import BlogArticle3Page from './pages/blog/BlogArticle3Page';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import RefundPolicyPage from './pages/legal/RefundPolicyPage';
import LegalNoticePage from './pages/legal/LegalNoticePage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abonnements" element={<SubscriptionsPage />} />
            <Route path="/chaines" element={<ChannelsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/installer-iptv-smart-tv" element={<BlogArticle1Page />} />
            <Route path="/blog/avantages-iptvking-2025" element={<BlogArticle2Page />} />
            <Route path="/blog/comparatif-iptvking" element={<BlogArticle3Page />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/conditions-generales-utilisation" element={<TermsOfServicePage />} />
            <Route path="/politique-de-remboursement" element={<RefundPolicyPage />} />
            <Route path="/mentions-legales" element={<LegalNoticePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
