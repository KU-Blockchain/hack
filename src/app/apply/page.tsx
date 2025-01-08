import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import SignIn from "@/components/Application/SignIn";
import ApplicationForm from "@/components/Application/ApplicationForm";
import { Metadata } from "next";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "APPLY | The Midwest Block-Thon",
  description: "Apply to compete at the Midwest Block-a-Thon.",
  openGraph: {
    title: "APPLY | The Midwest Block-a-Thon",
    description: "Apply to compete at the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/apply",
    type: "website",
  },
};

const Application = async () => {
  const session = await getServerSession(OPTIONS);

  return (
    <div>
      <Loading />
      <Navbar />
      <Box
        maxW="800px"
        mx="auto"
        py="8"
        px="4"
        textAlign="center"
        fontSize="xl"
        pt={{ base: "20vh", md: "25vh" }}
      >
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          APPLICATION
        </Heading>
        <Text mb={10} textAlign={"left"}>
          Thank you for your interest in participating at The Midwest Block-a-Thon. 
          We've put together a great weekend including technical workshops, 
          fun mini-events, free food and swag, and a chance to win awesome prizes.
        </Text>
        {session ? (
          <ApplicationForm 
            applicantEmail={session?.user?.email ?? ''} 
            applicantName={session?.user?.name ?? ''} 
          />
        ) : (
          <Box w={{ base: "90%", md: "60%" }} mx="auto" alignContent="center">
          <SignIn />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Application;