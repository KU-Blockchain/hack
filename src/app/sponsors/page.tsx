import { Box, Heading, Text, Link, Stack, Image, HStack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Metadata } from "next";
import AboutKUBI from "@/components/AboutKUBI";

export const metadata: Metadata = {
  title: "SPONSORS | The Midwest Block-Thon",
  description: "Learn about the sponsors of the Midwest Block-a-Thon.",
};

const Sponsors = () => {

  return (
    <div>
      <Loading />
      <AboutKUBI />
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
          <HStack justifyContent={"center"} gap={{ base: 10, md: 20 }} my={7}>
            <Link href="https://pinata.cloud/" width="45%" target="_blank" rel="noopener noreferrer"><Image src="/sponsors/pinata.svg" alt=" Pinata sponsor logo" /></Link>
          </HStack>
          <Box w="150px" borderRadius="xl" bgGradient="to-r" gradientFrom="#0cc0df" gradientTo="#ffde59" p={4} color="dark">
            <Text textAlign="center" fontWeight="bold">TERA TIER</Text>
          </Box>
          <HStack justifyContent={"center"} gap={{ base: 10, md: 20 }} my={7}>
          <Link href="https://dabl.club/" width="45%" target="_blank" rel="noopener noreferrer"><Image src="/sponsors/dablclub.svg" alt="Dabl Club sponsor logo" /></Link>
            {/* <Link href="https://www.autonomys.xyz/" width="65%" target="_blank" rel="noopener noreferrer"><Image src="/sponsors/autonomys.png" alt="Autonomys sponsor logo" /></Link> */}
          </HStack>
          <Box w="150px" borderRadius="xl" bgGradient="to-r" gradientFrom="#fff7ad" gradientTo="#ffa9f9" p={4} mt={4} color="dark">
            <Text textAlign="center" fontWeight="bold">GIGA TIER</Text>
          </Box>
          <HStack justifyContent={"center"} gap={{ base: 10, md: 20 }} my={7}>
            <Link href="https://soniclabs.com/" width="35%" target="_blank" rel="noopener noreferrer"><Image src="/sponsors/sonic.png" alt="Sonic sponsor logo" /></Link>
            <Link href="https://ripple.com/company" width="35%" target="_blank" rel="noopener noreferrer"><Image src="/sponsors/ripple.png" alt="Ripple sponsor logo" /></Link>
          </HStack>
        </Stack>
      </Box>
    </div>
  );
};

export default Sponsors;
