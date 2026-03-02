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
  description: React.ReactNode;
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
    totalPrize: 'TBD',
    tracks: [
      {
        id: 'general-dapp',
        name: 'Open Innovation (General DApp)',
        prize: 'TBD',
        description: (
          <>
            <p>
              This is the main hackathon track for any project that does not fit into a specific
              sponsor challenge. Build the most compelling decentralized application you can—any
              theme, any vertical—as long as your project meaningfully uses a blockchain.
            </p>
            <p className="mt-2">
              To qualify, your project must include at least one on-chain state change (e.g. writing
              data to a smart contract, minting or updating tokens/NFTs, updating on-chain storage,
              or executing a transaction that changes state). Frontend-only demos without real
              on-chain interactions will not be eligible for prizing.
            </p>
            <div className="mt-3">
              <p className="font-semibold">Prizes (TBD):</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place – TBD</li>
                <li>🥈 2nd place – TBD</li>
                <li>🥉 3rd place – TBD</li>
              </ul>
            </div>
          </>
        ),
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
        description: (
          <>
            <p>
              A business-focused case competition track running alongside the hackathon. Teams will
              work on a real-world case that connects blockchain concepts to strategy, operations,
              and go-to-market thinking.
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>The case is given during registration — the earlier you arrive, the earlier you can start.</li>
              <li>Final presentations at 9:00 AM Sunday, March 8th in the School of Engineering.</li>
              <li>Mentor support available throughout the event.</li>
            </ul>
            <p className="mt-2">
              Prize structure and full details are still being finalized and will be announced closer
              to the event.
            </p>
          </>
        ),
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
        description: (
          <>
            <p>
              PayPal is proud to sponsor the Midwest Block-a-thon, a 36-hour blockchain-focused
              event hosted by the University of Kansas Blockchain Institute, bringing together
              developers, students, and innovators from inside and outside KU to learn, build, and
              experiment with Web3.
            </p>
            <p className="mt-2">
              This track focuses on real-world use cases for PYUSD as a programmable, low-volatility
              stablecoin: instant settlement, automated financial flows, and merchant-friendly
              payments. We are especially excited about agentic payments (autonomous smart agents
              managing payments on behalf of users) and KYC-enabled wallets with on-chain identity.
            </p>
            <div className="mt-2">
              <p className="font-semibold">You might explore:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>New payment flows, recurring or streaming payments, on-chain invoicing.</li>
                <li>Agent-driven transaction orchestration using PYUSD.</li>
                <li>Wallet experiences that integrate KYC and identity in a secure, privacy-conscious way.</li>
              </ul>
            </div>
            <p className="mt-2">Prize amounts TBD — check back for updates.</p>
          </>
        ),
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
        prize: 'Up to $2,000',
        description: (
          <>
            <p>
              Build something that uses Pinata in a meaningful way — from agentic AI systems to
              full-stack applications, show what is possible when files are content-addressed.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Judging focus:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Using Pinata as an integral part of your product or architecture.</li>
                <li>Showcasing reliability, transparency, or ownership of data and user-generated content.</li>
              </ul>
            </div>
            <p className="mt-2">
              One winning team. Each team member (max 4) receives $500 — potential total $2,000.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prizes:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place – $500 per team member (up to 4 people = $2,000)</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: 'ripple',
    sponsorName: 'Ripple',
    totalPrize: '$3,000',
    tracks: [
      {
        id: 'ripple-xrpl-challenge',
        name: 'XRPL Real-World Impact',
        prize: '$3,000 total',
        description: (
          <>
            <p>
              Build an MVP that uses the XRP Ledger&apos;s core features to solve a real-world
              problem. We&apos;re especially interested in DeFi, privacy, and programmability, but
              any impactful use of XRPL on Testnet or Devnet is welcome.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Example directions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Flows using stablecoins like RLUSD.</li>
                <li>XRPL-native capabilities: lending/borrowing, smart escrow, multi-purpose tokens, batched transactions, TokenEscrow.</li>
                <li>SDKs and tooling for other developers to integrate XRPL.</li>
                <li>Payment-focused products: microfinance, subscription rails, tokenized real-world assets.</li>
              </ul>
            </div>
            <p className="mt-2">
              Submit a working, testable MVP publicly available on GitHub with a clear README.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prizes:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place – $1,500</li>
                <li>🥈 2nd place – $1,000</li>
                <li>🥉 3rd place – $500</li>
              </ul>
            </div>
          </>
        ),
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
                    {group.id === 'business' || group.id === 'general'
                      ? 'Non-sponsor track open to all participants.'
                      : `Themed challenges sponsored by ${group.sponsorName}.`}
                  </p>
                </div>
                <p className="text-sm md:text-base text-[#F5C4A8]/90 font-semibold">
                  Total prizes: {group.totalPrize}
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
                      <div className="space-y-2 text-left">
                        {track.description}
                      </div>
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

