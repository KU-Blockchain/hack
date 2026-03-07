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
  logo: string; // path in public, e.g. /ku.png
  totalPrize: string;
  tracks: Track[];
};

const SPONSOR_TRACKS: SponsorTrackGroup[] = [
  {
    id: 'general',
    sponsorName: 'General Track',
    logo: '/ku-logo.png',
    totalPrize: '$1,500',
    tracks: [
      {
        id: 'general-dapp',
        name: 'Open Innovation (General DApp)',
        prize: '$1,000',
        description: (
          <>
            <p>
              This is the main hackathon track for any project. Build the most compelling decentralized application you can.
              All projects qualify for prizes as long as your project meaningfully uses a blockchain network or technology.
            </p>
            <p className="mt-2">
              To qualify, your project must include at least one on-chain state change (e.g. writing
              data to a smart contract, minting or updating tokens/NFTs, updating on-chain storage,
              or executing a transaction that changes state). Frontend-only demos without real
              on-chain interactions will not be eligible for prizing.
            </p>
            <div className="mt-3">
              <p className="font-semibold">Prizes:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place - $1,000</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'general-beginner',
        name: 'Best Beginner Track',
        prize: '$500',
        description: (
          <>
            <p>
              This track is for teams with no prior blockchain experience. All members of the team must be first-time attendees of the Midwest Blockathon or any Web3 focused hackathon.
            </p>
            <p className="mt-2">
              To qualify, your project must include at least one on-chain state change (e.g. writing
              data to a smart contract, minting or updating tokens/NFTs, updating on-chain storage,
              or executing a transaction that changes state). Frontend-only demos without real
              on-chain interactions will not be eligible for prizing.
            </p>
            <div className="mt-3">
              <p className="font-semibold">Prizes:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place - $500</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: 'business',
    sponsorName: 'Case Competition',
    logo: '/ku-logo.png',
    totalPrize: '$1,500',
    tracks: [
      {
        id: 'case-competition',
        name: 'Case Competition',
        prize: 'Top 3 teams $500 each',
        description: (
          <>
            <p>
              A business-focused case competition track running alongside the hackathon. Teams will
              work on a real-world case that connects blockchain concepts to strategy, operations,
              and go-to-market thinking.
            </p>
            <p className="mt-2">
              <a
                href="/case-competition.zip"
                download
                className="inline-flex items-center gap-2 text-[#E89A7B] font-semibold underline hover:text-[#F5C4A8]"
              >
                Download case materials (ZIP)
              </a>
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>The case is given during registration — the earlier you arrive, the earlier you can start.</li>
              <li>Final presentations at 9:00 AM Sunday, March 8th in the School of Engineering.</li>
              <li>Mentor support available throughout the event.</li>
            </ul>
            <div className="mt-3">
              <p className="font-semibold">Prizes:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1st place - $500</li>
                <li>🥈 2nd place - $500</li>
                <li>🥉 3rd place - $500</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: 'sui',
    sponsorName: 'SUI',
    logo: '/sui-logo.png',
    totalPrize: '$5,000',
    tracks: [
      {
        id: 'sui-ctf',
        name: 'SUI Capture the Flag',
        prize: '$500 1st place / $120 30th place',
        description: (
          <>
            <p>All track information can be found here and is subject to change:</p>
            <a className="text-blue-500 underline" href="https://docs.google.com/document/d/1m6qi1AgpCvWCJglS8KbFXhRsQo_OCGgyFxbJx56VZtc/edit?tab=t.0" target="_blank" rel="noopener noreferrer">https://docs.google.com/document/d/1m6qi1AgpCvWCJglS8KbFXhRsQo_OCGgyFxbJx56VZtc/edit?tab=t.0</a>
          </>
        ),
      },
    ],
  },
  {
    id: 'ripple',
    sponsorName: 'Ripple',
    logo: '/ripple-logo.png',
    totalPrize: '$3,000',
    tracks: [
      {
        id: 'ripple-xrpl-challenge',
        name: 'XRPL Real-World Impact',
        prize: '$1,500, $1,000, $500',
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
  {
    id: 'pinata',
    sponsorName: 'Pinata',
    logo: '/pinata-logo.png',
    totalPrize: 'Up to $2,000',
    tracks: [
      {
        id: 'pinata-builder',
        name: 'Pinata Builder Track',
        prize: '$500 per winning team member',
        description: (
          <>
            <p>
              Build something that uses Pinata in a meaningful way — from agentic AI systems to
              full-stack applications, show what is possible when files are content-addressed.
            </p>
            <div className="mt-2">
              <p className="font-semibold">OpenClaw for the hackathon:</p>
              <p>
                We have a new OpenClaw product that can be used for the hackathon at:{' '}
                <a className="text-[#E89A7B] underline hover:text-[#F5C4A8]" href="https://agents.pinata.cloud" target="_blank" rel="noopener noreferrer">https://agents.pinata.cloud</a>.
                It&apos;s a one-click deploy hosted OpenClaw instance. It requires a paid plan to use. Use code <span className="font-semibold text-[#E89A7B]">CLAW-BLOCKATHON</span> at checkout to get one month free.
              </p>
            </div>
            <div className="mt-2">
              <p className="font-semibold">Judging focus:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Using Pinata as an integral part of your product or architecture.</li>
                <li>Showcasing reliability, transparency, or ownership of data and user-generated content.</li>
              </ul>
            </div>
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
    id: 'mlh',
    sponsorName: 'MLH',
    logo: '/mlh.png',
    totalPrize: 'Swag and Hardware',
    tracks: [
      {
        id: 'mlh-google-antigravity',
        name: 'Best Hack Built with Google Antigravity',
        prize: 'Google Swag Kits',
        description: (
          <>
            <p>
              Google Antigravity is an agentic development platform, evolving the IDE into the agent-first era.
            </p>
            <p className="mt-2">
              Google Antigravity&apos;s Editor view offers tab autocompletion, natural language code commands, and a configurable, context-aware agent.
            </p>
            <p className="mt-2">
              We want you to leverage Google Antigravity to build your hack this weekend. Enjoy free usage of the latest models through a free for students Google AI Pro plan. Be sure to add a description of how you used Google Antigravity in your project submission for consideration in this prize category.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – Google Swag Kits</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'mlh-gemini',
        name: 'Best Use of Gemini API',
        prize: 'Google Swag Kits',
        description: (
          <>
            <p>
              It&apos;s time to push the boundaries of what&apos;s possible with AI using Google Gemini. Check out the Gemini API to build AI-powered apps that make your friends say WHOA.
            </p>
            <div className="mt-2">
              <p className="font-semibold">What can Gemini do for your hackathon project?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Understand language like a human and build a chatbot that gives personalized advice</li>
                <li>Analyze info like a supercomputer and create an app that summarizes complex research papers</li>
                <li>Generate creative content like code, scripts, music, and more</li>
              </ul>
            </div>
            <p className="mt-2">Think of the possibilities… what will you build with the Google Gemini API this weekend?</p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – Google Swag Kits</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'mlh-elevenlabs',
        name: 'Best Use of ElevenLabs',
        prize: 'Wireless Earbuds',
        description: (
          <>
            <p>
              Deploy natural, human-sounding audio with ElevenLabs. Create realistic, dynamic, and emotionally expressive voices for any project, from interactive AI companions to narrated stories and voice-enabled apps. ElevenLabs will empower you to build rich, immersive experiences without the need for actors or complex audio production, using simply the power of AI.
            </p>
            <p className="mt-2">
              Integrate fully autonomous audio experiences into your hack with ElevenLabs and give your project a voice, along with giving your team the chance to win some wireless earbuds!
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – Wireless Earbuds</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'mlh-solana',
        name: 'Best Use of Solana',
        prize: 'Ledger Nano S Plus',
        description: (
          <>
            <p>
              The world of development is evolving fast and Solana is leading the charge with a network built to handle all of your infrastructure needs. Forget high fees and slow confirmations, it&apos;s time to build applications that are fast, efficient, and scalable.
            </p>
            <p className="mt-2">
              Harness Solana&apos;s core advantages like blazing fast execution and near-zero transaction costs to make your hackathon ideas become real world projects. With Solana, the possibilities are endless.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Example directions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Create a game, social app, or consumer product that relies on instant, high-frequency transactions.</li>
                <li>Design a sophisticated trading, lending, or decentralized exchange (DEX).</li>
                <li>Build a prototype for supply chain, identity, or payments that can handle massive, real-world volume.</li>
              </ul>
            </div>
            <p className="mt-2">Show us how you can innovate with Solana for a chance to win some cool prizes for you and each member of your team!</p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – Ledger Nano S Plus</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'mlh-vultr',
        name: 'Best Use of Vultr',
        prize: 'Portable Screens',
        description: (
          <>
            <p>
              Vultr empowers hackers to bring their high-performance projects to life instantly; providing everything from the speed of one-click deployment and scalable cloud compute, to specialized Vultr Cloud GPUs that can power AI-driven applications. We want you to push the limits of what can be built when infrastructure is no longer the bottleneck!
            </p>
            <p className="mt-2">
              Sign up for a Vultr account today and claim your free cloud credits! Take your next hack to the cloud with Vultr for a chance to win some awesome portable screens for you and your team!
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – Portable Screens</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        id: 'mlh-mongodb',
        name: 'Best Use of MongoDB Atlas',
        prize: 'M5Stack IoT Kit',
        description: (
          <>
            <p>
              MongoDB Atlas takes the leading modern database and makes it accessible in the cloud! Get started with a $50 credit for students or sign up for the Atlas free forever tier (no credit card required). Along with a suite of services and functionalities, you&apos;ll have everything you need to manage all of your data, and you can get a headstart with free resources from MongoDB University!
            </p>
            <p className="mt-2">
              Build a hack using MongoDB Atlas for a chance to win a M5Stack IoT Kit for you and each member of your group.
            </p>
            <div className="mt-2">
              <p className="font-semibold">Prize:</p>
              <ul className="list-none space-y-1">
                <li>🥇 1 winner – M5Stack IoT Kit</li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  },
];

const GENERAL_TRACK_IDS = ['general', 'business'];

function TrackGroupCard({
  group,
}: {
  group: SponsorTrackGroup;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 md:p-8 mx-5 shadow-xl shadow-black/30"
    >
      <div className="flex flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
        <img
          src={group.logo}
          alt={group.sponsorName}
          className="size-15 flex-shrink-0 object-contain rounded-lg bg-white/90 p-2"
        />
        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#E89A7B]">
              {group.sponsorName}
            </h2>
            {group.id === "general" || group.id === "business" ? (
              <p className="hidden md:block text-sm md:text-base text-white/60 mt-1">Non-sponsor track</p>
            ) : (
              <p className="hidden md:block text-sm md:text-base text-white/60 mt-1">Themed challenges sponsored by {group.sponsorName}.</p>
            )}
          </div>
          <p className="text-sm md:text-base text-[#F5C4A8]/90 font-semibold md:flex-shrink-0">
            Total prizes: {group.totalPrize}
          </p>
        </div>
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
  );
}

export function TracksSection() {
  const generalGroups = SPONSOR_TRACKS.filter((g) => GENERAL_TRACK_IDS.includes(g.id));
  const sponsorGroups = SPONSOR_TRACKS.filter((g) => !GENERAL_TRACK_IDS.includes(g.id));

  return (
    <section className="min-h-screen px-2 py-16 md:px-6 md:py-20 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            Tracks
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="p-10 text-xl text-white/70">
            This year we our offering over $10,000 in prizes for our Hackathon, with an additional $1,000 for our Web3 focused case competition!
          </p>
        </motion.div>

        <h2 className="text-lg font-semibold text-white/70 uppercase tracking-wider mb-4 px-5">
          General
        </h2>
        <div className="space-y-4 md:space-y-8 mb-10 md:mb-14">
          {generalGroups.map((group) => (
            <TrackGroupCard key={group.id} group={group} />
          ))}
        </div>

        <h2 className="text-lg font-semibold text-white/70 uppercase tracking-wider mb-4 px-5">
          Sponsors
        </h2>
        <div className="space-y-4 md:space-y-8">
          {sponsorGroups.map((group) => (
            <TrackGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

