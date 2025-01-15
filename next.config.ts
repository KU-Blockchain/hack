import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      's3.us-west-2.amazonaws.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: '/hackerdoc',
        destination: '/hackerdoc/151dd445c69b80098be5f78f9a6b5ae2',
        permanent: true, // Use true for permanent (308) redirect
      },
      {
        source: '/pitch_deck',
        destination: 'https://drive.google.com/file/d/1fa9-AcEG87KAztrUdX1aTKR4lPwEj-gU/view?usp=sharing',
        permanent: false, // Use true for permanent (308) redirect
      },
      {
        source: '/sponsor_info',
        destination: 'https://drive.google.com/file/d/1TaGJjI0_Q1cENsfvbcCBlU3slaYx84fh/view',
        permanent: false, // Use true for permanent (308) redirect
      },
    ];
  },
};

export default nextConfig;
