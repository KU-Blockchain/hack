import {
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Metadata } from "next";
import GifSrc from "@/components/GifSrc";
import Loading from "@/components/Loading";
import AboutKUBI from "@/components/AboutKUBI";
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

  return (
    <>
      <div>
        <Loading />
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


          </VStack>
        </Box>
      </div>
    </>
  );
}
