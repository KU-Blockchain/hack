import { Box, Heading, Text, Link, Stack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
//import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "SPONSORS | The Midwest Block-Thon",
//   description: "Learn about the sponsors of the Midwest Block-a-Thon.",
// };

const Sponsors = () => {

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
          SPONSORS
        </Heading>
        <Text textAlign={"left"}>
          The Midwest Block-a-Thon is made possible by the generous support
          of our sponsors. We are grateful for contributions and commitment to
          fostering innovation in the blockchain space.
          <br></br>
          <br></br>
        </Text>
        <Stack mb={6} align="center" direction="column">
          <Box w="150px" borderRadius="xl" bgGradient="to-r" gradientFrom="#5170ff" gradientTo="#ff66c4" p={4} color="dark">
            <Text textAlign="center" fontWeight="bold">PETA TIER</Text>
          </Box>
          <Box w="150px" borderRadius="xl" bgGradient="to-r" gradientFrom="#0cc0df" gradientTo="#ffde59" p={4} color="dark">
            <Text textAlign="center" fontWeight="bold">TERA TIER</Text>
          </Box>
          <Box w="150px" borderRadius="xl" bgGradient="to-r" gradientFrom="#fff7ad" gradientTo="#ffa9f9" p={4} color="dark">
            <Text textAlign="center" fontWeight="bold">GIGA TIER</Text>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Sponsors;
