"use client";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Sponsors = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => {
        setIsLoading(false);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
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
