import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPONSORS | The Midwest Block-Thon",
  description: "Learn about the sponsors of the Midwest Block-a-Thon.",
};

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
          The Midwest Block-a-Thon will be made possible by the generous support
          of our sponsors. We are grateful for contributions and commitment to
          fostering innovation in the blockchain space.
          <br></br>
          <br></br>
          If you are interested in sponsoring our hackathon, please contact us
          at{" "}
          <Link color="dark" href="mailto:blockchalk@kublockchain.com">
            BlockChalk@kublockchain.com
          </Link>
          .
        </Text>
      </Box>
    </div>
  );
};

export default Sponsors;
