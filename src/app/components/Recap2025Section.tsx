import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Code, Zap } from 'lucide-react';

export function Recap2025Section() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '90+', label: 'Participants' },
    { icon: <Code className="w-8 h-8" />, value: '22', label: 'Projects Submitted' },
    { icon: <Trophy className="w-8 h-8" />, value: '$10,000', label: 'In Prizes' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            2025 Highlights
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Last year's Block-a-thon brought together passionate builders from across the Midwest to create the future of blockchain technology
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-xl p-6 backdrop-blur-sm text-center"
            >
              <div className="text-[#E89A7B] flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#E89A7B] mb-4">Winners & Projects</h3>
            <p className="text-white/70 mb-4">
              From DeFi protocols to NFT marketplaces, our participants built groundbreaking solutions that pushed the boundaries of blockchain technology.
            </p>
            <ul className="space-y-2 text-white/60 mb-6">
              <li>🥇 1st Place: Decentralized identity verification platform</li>
              <li>🥈 2nd Place: Cross-chain liquidity aggregator</li>
              <li>🥉 3rd Place: NFT-based ticketing system</li>
            </ul>
            <a 
            href="https://midwest.devpost.com" 
            className="text-[#E89A7B] text-xl underline"
            target="https://midwest.devpost.com"
            >
              2025 Winners
            </a>
          </div>

          <div className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            <h3 className="text-2xl font-bold text-[#E89A7B] mb-6 text-center">2025 Recap Video</h3>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/cfyqkR7vFYs"
                title="Midwest Block-a-thon 2025 Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
