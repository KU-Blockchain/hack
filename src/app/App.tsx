import React from 'react';
import { StarField } from './components/StarField';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { NotifySection } from './components/NotifySection';
import { FAQSection } from './components/FAQSection';
import { Navigation } from './components/Navigation';
import { SponsorsSection } from './components/SponsorsSection';
import { Recap2025Section } from './components/Recap2025Section';
import { useState, useEffect } from 'react';
import { MLHTrustBadge } from './components/MLHTrustBadge';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#073623] overflow-x-hidden">
      <StarField />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <MLHTrustBadge />

      <div className="relative z-10">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <CountdownSection />
            <NotifySection />
            <Footer />
          </>
        )}

        {activeTab === 'faq' && (
          <>
            <FAQSection />
            <Footer />
          </>
        )}

        {activeTab === 'sponsors' && (
          <>
            <SponsorsSection />
            <Footer />
          </>
        )}

        {activeTab === '2025' && (
          <>
            <Recap2025Section />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
