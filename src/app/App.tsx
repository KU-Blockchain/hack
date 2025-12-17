import { StarField } from './components/StarField';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { NotifySection } from './components/NotifySection';
import { FAQSection } from './components/FAQSection';
import { Navigation } from './components/Navigation';
import { SponsorsSection } from './components/SponsorsSection';
import { Recap2025Section } from './components/Recap2025Section';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#073623] overflow-x-hidden">
      <StarField />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="relative z-10">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <CountdownSection />
            <NotifySection />
            <div className="text-center px-6 py-12 relative z-10">
              <p className="text-white/50 text-sm">
                © 2026 Midwest Block-a-thon. All rights reserved.
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