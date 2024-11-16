import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const About = () => {
  return (
    <div>
        <Navbar />
        <Box textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>
        <Heading size="2xl" mb={4}>
          About Us
        </Heading>
        <Text>
          Welcome to our event! We aim to create a fantastic experience for all participants.
        </Text>
        </Box>
    </div>
  );
};

export default About;
