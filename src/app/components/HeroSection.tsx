import React from 'react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-8"
      >
        <img 
          src="/transparent-logo-banner.png" 
          alt="Midwest Block-a-thon 2026" 
          className="w-full max-w-3xl h-auto"
        />
      </motion.div>
    </section>
  );
}