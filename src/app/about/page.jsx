import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const About = () => {
  return (
    <div>
        <Navbar />
        <Box maxW="800px" mx="auto" py="8" px="4" textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          ABOUT
        </Heading>
        <Text>
          The Midwest Block-a-Thon is a 6-hour blockchain-focused hackathon hosted at the University of Kansas aimed at fostering 
          innovation and collaboration among students of all ages in the surrounding region. This hackathon hopes to provide over 
          300 hackers with hands-on experience in web3 development, mentorship from industry experts, and a chance to win big prizes.
        </Text>
        </Box>
    </div>
  );
};

export default About;
