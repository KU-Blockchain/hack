import {
  Box,
  HStack,
  Link,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Metadata } from "next";
import GifSrc from "@/components/GifSrc";
import Loading from "@/components/Loading";
import AboutKUBI from "@/components/AboutKUBI";
import PrizePoolAnimation from "@/components/PrizePoolAnimation";
import WelcomeDialog from "@/components/WelcomeDialog";
//import Waitlist from "@/components/Waitlist";

export const metadata: Metadata = {
  title: "The Midwest Block-a-Thon",
  description: "A hackathon presented by Kansas Blockchain",
  keywords: "blockchain, The Midwest Block-a-Thon, hackathon, KU Blockchain Institute, University of Kansas, Web3, programming, technology event",
  openGraph: {
    title: "The Midwest Block-a-Thon",
    description: "A hackathon presented by Kansas Blockchain",
    url: "https://hack.kublockchain.com",
    type: "website",
    images: [
      {
        url: "https://hack.kublockchain.com/logo.png",
        width: 1200,
        height: 600,
        alt: "The Midwest Block-a-Thon",
      },
    ],
  },
};

export default function Page() {
  const pages = ["About", "Schedule", "Sponsors"];

  return (
    <>
    <div>
      <Loading />
      <Link
        id="mlh-trust-badge"
        _hover={{ transform: "translateY(10px) scale(1.1)" }}
        style={{
          display: "block",
          transition: "transform 0.2s",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "100px",
          top: "0",
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: "100%" }}
        />
      </Link>
      <Box textAlign="center" fontSize="xl" pt={{ base: "30vh", md: "30vh" }}>
        <AboutKUBI />

        <VStack gap="7">
          <Box>
            <GifSrc />
          </Box>

            <Heading size="4xl" letterSpacing="tight">
              Coming Spring 2026!
            </Heading>
            <Heading>
              The University of Kansas
            </Heading>
            
          <WelcomeDialog />
        </VStack>
      </Box>
    </div>
    </>
  );
}
