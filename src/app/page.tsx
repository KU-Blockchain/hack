import {
  Box,
  HStack,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Metadata } from "next";
import GifSrc from "@/components/GifSrc";
import Loading from "@/components/Loading";
import AboutKUBI from "@/components/AboutKUBI";
import Waitlist from "@/components/Waitlist";

export const metadata: Metadata = {
  title: "The Midwest Block-a-Thon",
  description: "A 20-hour hackathon presented by the KU Blockchain Institute",
  keywords: "blockchain, The Midwest Block-a-Thon, hackathon, KU Blockchain Institute, University of Kansas, Web3, programming, technology event",
  robots: "index, follow",
  openGraph: {
    title: "The Midwest Block-a-Thon",
    description: "Join the 20-hour hackathon hosted by the KU Blockchain Institute and make an impact on the web3 community.",
    url: "https://hack.kublockchain.com", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // can be "summary", "summary_large_image", or "app"
    site: "@KUBlockchain",
    title: "The Midwest Block-a-Thon",
    description: "A 20-hour hackathon presented by the KU Blockchain Institute",
  },
};

export default function Page() {
  const pages = ["About", "FAQs", "Schedule"];

  return (
    <>
    <div>
      <Loading />
      <Box textAlign="center" fontSize="xl" pt={{ base: "30vh", md: "30vh" }}>
        <AboutKUBI />

        <VStack gap="7">
          <GifSrc />

          <Heading size="2xl" letterSpacing="tight">
            March 29-30, 2025 <br></br> University of Kansas
          </Heading>

          <HStack>
            {pages.map((page, index) => (
              <HStack key={page}>
                {/* Page Name */}
                <Link
                  href={`/${page.toLowerCase()}`}
                  color="dark"
                  _hover={{ textDecoration: "none", color: "gray.500" }}
                  fontWeight="medium"
                  fontSize="xl"
                >
                  {page}
                </Link>

                {/* Vertical Separator */}
                {index < pages.length - 1 && (
                  <Box
                    as="span"
                    height="25px"
                    borderLeft="1px solid"
                    borderColor="dark"
                  />
                )}
              </HStack>
            ))}
          </HStack>
          <Waitlist />
        </VStack>
      </Box>
    </div>
    </>
  );
}
