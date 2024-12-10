import { Box, Heading, Text, Image, List } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT | The Midwest Block-a-Thon",
  description: "Learn more about the Midwest Block-a-Thon",
  openGraph: {
    title: "ABOUT | The Midwest Block-a-Thon",
    description: "Learn more about the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/about",
    type: "website",
  },
};

const About = () => {
  return (
    <>
      <Loading />
      <Navbar />
      <Box
        maxW="800px"
        mx="auto"
        py="8"
        px="4"
        textAlign="center"
        fontSize="xl"
        pt={{ base: "20vh", md: "30vh" }}
      >
        <Box display="flex" justifyContent="center" mb={4}>
          <Image src="/ready_to_build.gif" alt="Ready to Build" />
        </Box>
        <Heading size="4xl" my={6} mx={2} fontWeight="bold" fontStyle="italic">
          ABOUT
        </Heading>
        <Text textAlign={"left"} mx={2} my={4}>
          The Midwest Block-a-Thon is a 20-hour blockchain-focused hackathon
          hosted at the University of Kansas aimed at fostering innovation and
          collaboration among students of all ages in the surrounding region.
          This hackathon plans to bring in{" "}
          <Box as="span" fontWeight="bold">
            200 hackers and community members
          </Box>{" "}
          with hands-on experience in web3 development, mentorship from industry
          experts, and a chance to win big prizes.
        </Text>
        <List.Root textAlign="left" mx={2} my={4}>
          <List.Item mx={2} my={4}>
            The Block-a-Thon will be hosted at the{" "}
            <Box as="span" fontWeight="bold">
              University of Kansas
            </Box>
            , where hackers will be welcome to stay overnight to hack.
          </List.Item>
          <List.Item mx={2} my={4}>
            Meals and snacks will be provided throughout the event, and dietary
            restrictions will be accommodated.
          </List.Item>
          <List.Item mx={2} my={4}>
            This event is primarily focused on students, but community members
            are welcome to attend as volunteers, mentors, or compete on the{" "}
            <Box as="span" fontWeight="bold">
              community track.
            </Box>
          </List.Item>
        </List.Root>
      </Box>
    </>
  );
};

export default About;
