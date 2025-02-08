import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import Schedule from "@/components/Schedule";
import { Metadata } from "next";
import ScrollToTopButton from '@/components/ScrollToTopButton'
import AboutKUBI from '@/components/AboutKUBI'

export const metadata: Metadata = {
  title: "SCHEDULE | The Midwest Block-Thon",
  description: "View the schedule for the Midwest Block-a-Thon.",
  openGraph: {
    title: "SCHEDULE | The Midwest Block-a-Thon",
    description: "View the schedule for the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/schedule",
    type: "website",
  },
};

const SchedulePage = () => {
  return (
    <>
    <div>
      <Loading />
      <AboutKUBI />
      <Navbar />
      <Box
        maxW="800px"
        mx="auto"
        py="3"
        px="4"
        textAlign="center"
        fontSize="xl"
        pt={{ base: "20vh", md: "25vh" }}
      >
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          SCHEDULE
        </Heading>
        <Text>
          Our schedule is subject to change while we finalize our locations and partnerships.
        </Text>
        <Schedule />
      </Box>
      <ScrollToTopButton />
    </div>
    </>
  );
};

export default SchedulePage;
