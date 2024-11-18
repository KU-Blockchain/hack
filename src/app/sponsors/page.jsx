import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Sponsors = () => {
  return (
    <div>
        <Navbar />
        <Box maxW="800px" mx="auto" py="8" px="4" textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          SPONSORS
        </Heading>
        <Text>
          The Midwest Block-a-Thon will be made possible by the generous support of our sponsors. 
          We are grateful for contributions and commitment to fostering innovation in the blockchain space.
          <br></br><br></br>
          If you are interested in sponsoring our hackathon, please contact us at <Link color="dark" href="mailto:blockchalk@kublockchain.com">BlockChalk@kublockchain.com</Link>.
        </Text> 
        </Box>
    </div>
  );
};

export default Sponsors;
