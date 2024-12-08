"use client";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Schedule from "@/components/Schedule";

const SchedulePage = () => {
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
        py="3"
        px="4"
        textAlign="center"
        fontSize="xl"
        pt={{ base: "20vh", md: "30vh" }}
      >
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          SCHEDULE
        </Heading>
        <Text>
          Our schedule is subject to change while we finalize our locations and partnerships.
        </Text>
        <Schedule />
      </Box>
    </div>
  );
};

export default SchedulePage;
