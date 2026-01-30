import React from 'react';
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

export function SponsorsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            Sponsors
          </h1>
          <p className="text-xl text-white/70">
            Powering innovation in the Blockchain and Web3 Ecosystem
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white/80 text-center mb-12">
            Previous Sponsors
          </h3>
          <div className="relative overflow-hidden">
            {// Gradient overlays for smooth fade effect}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#073623] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#073623] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 items-center py-4"
            >
              {[...Array(3)].map((_, setIndex) => (
                <div
                  key={setIndex}
                  className="flex gap-8 items-center"
                >
                  {[
                    "Sponsor One",
                    "Sponsor Two",
                    "Sponsor Three",
                    "Sponsor Four",
                    "Sponsor Five",
                    "Sponsor Six",
                  ].map((sponsor, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-56 h-36 bg-gradient-to-br from-white/10 to-white/5 border border-[#E89A7B]/30 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/20 relative overflow-hidden group cursor-pointer"
                    >
                      {// Animated gradient background on hover}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E89A7B]/20 to-[#F5C4A8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {// Shine effect}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <span className="text-white/70 group-hover:text-white font-bold text-lg transition-colors duration-300 relative z-10">
                        {sponsor}
                      </span>

                      {// Corner accent}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#E89A7B]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {// Decorative elements}
          <div className="absolute -top-4 left-1/4 w-2 h-2 bg-[#E89A7B]/40 rounded-full animate-pulse" />
          <div
            className="absolute -bottom-4 right-1/3 w-2 h-2 bg-[#F5C4A8]/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-2xl p-12 backdrop-blur-sm text-center"
        >
          <Building2 className="w-20 h-20 mx-auto mb-6 text-[#E89A7B]/50" />
          <h2 className="text-2xl md:text-3xl text-white mb-4">
            Sponsorship Opportunities Available
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Interested in sponsoring Midwest Block-a-thon 2026?
            Join us in supporting the next generation of
            blockchain innovators.
          </p>
          <motion.a
            href="https://forms.gle/HW86qBZVqefoHsax8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] text-[#073623] font-bold rounded-lg hover:shadow-lg hover:shadow-[#E89A7B]/30 transition-shadow"
          >
            Become a Sponsor
          </motion.a>
        </motion.div>

        {/* Placeholder for future sponsor logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-white/40"
        >
          {/* <p>Sponsor logos will be displayed here</p> */}
        </motion.div>
      </div>
    </div>
  );
}