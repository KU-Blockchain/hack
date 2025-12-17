import { motion } from "motion/react";
import { useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({
  activeTab,
  onTabChange,
}: NavigationProps) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "faq", label: "FAQ" },
    { id: "sponsors", label: "Sponsor Us" },
    { id: "2025", label: "2025" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#073623]/80 backdrop-blur-md border-b border-[#E89A7B]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center gap-2 md:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-4 md:px-6 py-2 transition-colors ${
                activeTab === tab.id
                  ? "text-[#E89A7B]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E89A7B]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}