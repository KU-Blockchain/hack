"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { VStack, HStack, Image, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scheduleItems = [
    {
      icon: "/icons/1.png",
      time: "9:30 AM - 10:40 AM",
      title: "Registration Period",
    },
    {
      icon: "/icons/2.png",
      time: "10:00 AM - 10:40 PM",
      title: "Catered Brunch",
    },
    {
      icon: "/icons/3.png",
      time: "10:40 AM - 11:00 AM",
      title: "Opening Ceremony",
    },
    { icon: "/icons/4.png", time: "11:00 AM - 5:00 PM", title: "Hacking" },
    {
      icon: "/icons/5.png",
      time: "5:00 PM - 5:30 PM",
      title: "Break & Judging Period",
    },
    {
      icon: "/icons/6.png",
      time: "5:30 PM - 6:00 PM",
      title: "Closing Ceremony",
    },
    { icon: "/icons/7.png", time: "7:00 PM - 9:00 PM", title: "Happy Hour" },
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
        py="8"
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

        <VStack alignItems="center" spacing={4} align="stretch" p={5}>
          {scheduleItems.map((item, index) => (
            <Card.Root
              color="dark"
              bg="0"
              width={{ base: "90vw", md: "70vw", lg: "40vw" }}
              key={index}
            >
              <Card.Body>
                <HStack gap={5}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    style={{ width: "50px", height: "50px" }}
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
      </Box>
    </div>
  );
};

export default Schedule;
