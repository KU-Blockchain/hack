"use client";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { VStack, HStack, Image, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dayOneItems = [
    { 
      icon: "/icons/7.png", 
      time: "4:00 PM - 6:00 PM", 
      title: "Team Formation Happy Hour" 
    },
    {
      icon: "/icons/1.png",
      time: "5:00 PM - 6:30 PM",
      title: "Registration Period",
    },
    {
      icon: "/icons/3.png",
      time: "6:30 PM",
      title: "Opening Ceremony",
    },
    { 
      icon: "/icons/4.png", 
      time: "7:00 PM", 
      title: "Hacking Begins" 
    },
  ];

  const dayTwoItems = [
    {
      icon: "/icons/2.png",
      time: "12:00 AM",
      title: "Late Night Snack",
    },
    {
      icon: "/icons/2.png",
      time: "8:00 AM",
      title: "Catered Breakfast",
    },
    {
      icon: "/icons/2.png",
      time: "12:00 PM",
      title: "Catered Lunch",
    },
    {
      icon: "/icons/5.png",
      time: "3:00 PM - 4:00 PM",
      title: "Break & Judging Period",
    },
    {
      icon: "/icons/6.png",
      time: "4:00 PM",
      title: "Awards + Closing Ceremony",
    },
  ];

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
          We aim to create a fantastic experience for all participants.
        </Text>
      </Box>
      <Stack 
          justify="center" 
          direction={{ base: "column", md : "row" }}
        >
          <VStack alignItems="center" spacing={4} align="stretch" p={5}>
            <Heading size="2xl" fontWeight="bold">
              DAY 1
            </Heading>
            {dayOneItems.map((item, index) => (
              <Card.Root
                color="dark"
                bg="0"
                width={{ base: "90vw", md: "35vw", lg: "29vw" }}
                key={index}
              >
                <Card.Body
                  _hover={{ 
                    borderColor: "transparent",
                    borderWidth: "4px"
                  }}
                >
                  <HStack gap={5}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Box>
                      <Heading color="dark" size="md">
                        {item.title}
                      </Heading>
                      <Text color="dark">{item.time}</Text>
                    </Box>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </VStack>
          <VStack alignItems="center" spacing={4} align="stretch" p={5}>
            <Heading size="2xl" fontWeight="bold">
              DAY 2
            </Heading>
            {dayTwoItems.map((item, index) => (
              <Card.Root
                color="dark"
                bg="0"
                width={{ base: "90vw", md: "35vw", lg: "29vw" }}
                key={index}
              >
                <Card.Body
                  _hover={{ 
                    borderColor: "transparent",
                    borderWidth: "4px"
                  }}
                >
                  <HStack gap={5}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Box>
                      <Heading color="dark" size="md">
                        {item.title}
                      </Heading>
                      <Text color="dark">{item.time}</Text>
                    </Box>
                  </HStack>
                </Card.Body>
              </Card.Root>
            ))}
          </VStack>
        </Stack>
    </div>
  );
};

export default Schedule;
