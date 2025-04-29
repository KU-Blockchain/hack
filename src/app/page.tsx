import {
  Box,
  HStack,
  Heading,
  Link,
  VStack,
  Button,
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
  description: "A 20-hour hackathon presented by the KU Blockchain Institute",
  keywords: "blockchain, The Midwest Block-a-Thon, hackathon, KU Blockchain Institute, University of Kansas, Web3, programming, technology event",
  openGraph: {
    title: "The Midwest Block-a-Thon",
    description: "A 20-hour hackathon presented by the KU Blockchain Institute",
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
  const pages = ["About", "Schedule", "HackerDoc", "Sponsors"];

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
        <img
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
            <PrizePoolAnimation />
          </Box>

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
                  fontSize={{ base: "lg", md: "xl" }}
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
          {/* <Waitlist /> */}
          <WelcomeDialog />
          {/* <Link
            href="/apply"
            color="dark"
            _hover={{ textDecoration: "none" }}
          >
          <Button
            bgGradient="to-r"
            gradientFrom="orange.100"
            gradientTo="red.100"
            color="dark"
            fontWeight="bold"
            fontStyle="italic"
            _hover={{
              bgGradient: "to-r",
              gradientFrom: "orange.200",
              gradientTo: "red.200",
              borderRadius: "full",
            }}
          >
            APPLY NOW
          </Button>
          </Link> */}
        </VStack>
      </Box>
    </div>
    </>
  );
}
