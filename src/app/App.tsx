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

      {/* MLH Trust Badge */}
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 md:right-24 top-0 z-[10000] block transition-transform duration-200 hover:translate-y-2 hover:scale-110"
        style={{
          maxWidth: "100px",
          minWidth: "80px",
          width: "10%",
        }}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          className="w-full"
        />
      </a>

      <div className="relative z-10">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <CountdownSection />
            <NotifySection />
            <div className="text-center px-6 py-12 relative z-10">
              <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved
              </p>
            </div>
          </>
        )}

        {activeTab === 'faq' && (
          <>
            <div className="pt-20">
              <FAQSection />
            </div>
            <div className="text-center px-6 py-12 relative z-10">
              <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved.
              </p>
            </div>
          </>
        )}

        {activeTab === 'sponsors' && (
          <>
            <SponsorsSection />
            <div className="text-center px-6 py-12 relative z-10">
              <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved.
              </p>
            </div>
          </>
        )}

        {activeTab === '2025' && (
          <>
            <Recap2025Section />
            <div className="text-center px-6 py-12 relative z-10">
              <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
