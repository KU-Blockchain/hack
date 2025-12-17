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
  webpack: (config) => {
    // Exclude scripts folder from webpack compilation
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      include: /src\/scripts/,
      use: 'ignore-loader'
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/hackerdoc',
        destination: '/hackerdoc/151dd445c69b80098be5f78f9a6b5ae2',
        permanent: true, // Use true for permanent (308) redirect
      },
      {
        source: '/maps',
        destination: 'https://www.canva.com/design/DAGg_8ZVSHg/DF-fE5xzN4_OK1wcmiSTng/view?utm_content=DAGg_8ZVSHg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf3ca4380c5',
        permanent: true, // Use true for permanent (308) redirect
      },
      {
        source: '/pitch_deck',
        destination: 'https://drive.google.com/file/d/1wqog13j5fv_aWUAU3U1UMH55U8gzwm_N/view?usp=sharing',
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
