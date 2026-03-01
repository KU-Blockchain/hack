import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';

type Track = {
  id: string;
  name: string;
  prize: string;
  description: string;
};

type SponsorTrackGroup = {
  id: string;
  sponsorName: string;
  totalPrize: string;
  tracks: Track[];
};

const SPONSOR_TRACKS: SponsorTrackGroup[] = [
  {
    id: 'general',
    sponsorName: 'General Hackathon Track',
    totalPrize: 'TBD (1st, 2nd, 3rd)',
    tracks: [
      {
        id: 'general-dapp',
        name: 'Open Innovation (General DApp)',
        prize: 'TBD for 1st / 2nd / 3rd',
        description:
          'This is the main hackathon track for any project that does not fit into a specific sponsor challenge. Build the most compelling decentralized application you can—any theme, any vertical—as long as your project meaningfully uses a blockchain. To qualify, your project must include at least one on-chain state change (for example: writing data to a smart contract, minting or updating tokens/NFTs, updating on-chain storage, or executing a transaction that changes state). Frontend-only demos without real on-chain interactions will not be eligible for prizing. Prizes for 1st, 2nd, and 3rd place will be announced soon.',
      },
    ],
  },
  {
    id: 'business',
    sponsorName: 'Business Track',
    totalPrize: 'TBD',
    tracks: [
      {
        id: 'business-case-competition',
        name: 'Business Case Competition',
        prize: 'TBD',
        description:
          'A business-focused case competition track running alongside the hackathon. Teams will receive a real-world case during registration—the earlier you arrive, the earlier you can begin strategizing. Final presentations for this track will take place at 9:00 AM on Sunday, March 8th in the School of Engineering, with mentor support available throughout the event to help you refine your analysis and presentation. Prize structure and full details are still being finalized and will be announced closer to the event, so check back here for updates.',
      },
    ],
  },
  {
    id: 'paypal',
    sponsorName: 'PayPal',
    totalPrize: 'TBD',
    tracks: [
      {
        id: 'paypal-pyusd-agentic-kyc',
        name: 'PYUSD Stablecoin x Agentic Payments x KYC Wallets',
        prize: 'TBD',
        description:
          'PayPal is proud to sponsor the Midwest Block-a-thon, a 36-hour blockchain-focused event hosted by the University of Kansas Blockchain Institute, bringing together developers, students, and innovators from both inside and outside KU to learn, build, and experiment with Web3. This track focuses on real-world use cases for PYUSD as a programmable, low-volatility stablecoin that unlocks instant settlement, automated financial flows, and merchant-friendly payment experiences. We are especially excited about agentic payments, where autonomous smart agents can initiate and manage payments on behalf of users, as well as KYC-enabled wallets and on-chain identity systems that keep users safe while supporting real-world compliance. Strong projects might explore new payment flows, recurring or streaming payments, on-chain invoicing, agent-driven transaction orchestration, or wallet experiences that integrate identity and KYC in a secure, privacy-conscious way. Show us how PYUSD and agentic payments can make Web3 payments feel ready for everyday use cases.',
      },
    ],
  },
  {
    id: 'pinata',
    sponsorName: 'Pinata',
    totalPrize: 'Up to $2,000',
    tracks: [
      {
        id: 'pinata-builder',
        name: 'Pinata Builder Track',
        prize: '$500 per team member (max 4)',
        description:
          'Build something that uses Pinata in a meaningful way—from agentic AI systems to full-stack applications, show what is possible when files are content-addressed. Strong submissions should lean into Pinata to power reliability, transparency, or ownership of user and application data. One winning team will be selected, and each team member (up to 4) will receive $500 for a potential total of $2,000 in prizes.',
      },
    ],
  },
  {
    id: 'ripple',
    sponsorName: 'Ripple',
    totalPrize: '$3,000 (Top 3)',
    tracks: [
      {
        id: 'ripple-xrpl-challenge',
        name: 'XRPL Real-World Impact',
        prize: 'Top 3: $1,500 / $1,000 / $500',
        description:
          "Build an MVP that uses the XRP Ledger's core features to solve a real-world problem. We're especially interested in ideas around DeFi, privacy, and programmability, but any impactful use of XRPL on Testnet or Devnet is welcome. Strong entries might explore flows using stablecoins like RLUSD, experiment with XRPL-native capabilities such as lending and borrowing, smart escrow, multi-purpose tokens, batched transactions, or TokenEscrow, or ship SDKs and tooling that help other developers integrate XRPL into their apps. Payment-focused projects—like microfinance tools, subscription or streaming payment rails, and tokenized real-world assets—are also highly encouraged. To compete, teams should submit a working, testable MVP that is publicly available on GitHub with a clear README explaining how to run and use the project.",
      },
    ],
  },
];

export function TracksSection() {
  return (
    <section className="min-h-screen px-2 py-16 md:px-6 md:py-20 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            Tracks
          </h1>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {SPONSOR_TRACKS.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-black/30"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-4 md:mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#E89A7B]">
                    {group.sponsorName}
                  </h2>
                  <p className="text-sm md:text-base text-white/60 mt-1">
                    Themed challenges sponsored by {group.sponsorName}.
                  </p>
                </div>
                <p className="text-sm md:text-base text-[#F5C4A8]/90 font-semibold">
                  Up to {group.totalPrize} in prizes
                </p>
              </div>

              <Accordion
                type="multiple"
                className="space-y-3"
              >
                {group.tracks.map((track) => (
                  <AccordionItem
                    key={track.id}
                    value={track.id}
                    className="border border-white/10 rounded-xl bg-[#073623]/60 px-4"
                  >
                    <AccordionTrigger className="text-white hover:no-underline py-3">
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                        <span className="text-base md:text-lg font-semibold">
                          {track.name}
                        </span>
                        <span className="text-sm md:text-base text-[#F5C4A8] font-medium">
                          Prize: {track.prize}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-white/70 pt-0 pb-4">
                      {track.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

