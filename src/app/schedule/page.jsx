"use client";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import { 
  VStack, 
  HStack, 
  //Image, 
  Card 
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Schedule = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dayOneItems = [
    { 
      icon: "/icons/7.png", 
      time: "1:00 PM - 3:00 PM", 
      title: "Team Formation Social" 
    },
    { 
      icon: "/icons/7.png", 
      time: "3:00 PM - 5:00 PM", 
      title: "Sponsor EXPO and Workshops" 
    },
    {
      icon: "/icons/1.png",
      time: "3:00 PM - 5:15 PM",
      title: "Registration Period",
    },
    {
      icon: "/icons/3.png",
      time: "5:30 PM",
      title: "Opening Ceremony",
    },
    { 
      icon: "/icons/4.png", 
      time: "6:00 PM", 
      title: "Hacking Begins" 
    },
    { 
      icon: "/icons/4.png", 
      time: "11:00 PM", 
      title: "Mini-Event" 
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
      time: "6:00 AM",
      title: "Zen Morning Yoga",
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
      icon: "/icons/2.png",
      time: "2:00 PM",
      title: "Project Submission Hard Deadline",
    },
    {
      icon: "/icons/5.png",
      time: "2:00 PM - 3:00 PM",
      title: "Live Demos with Sponsor Tracks",
    },
    {
      icon: "/icons/6.png",
      time: "3:30 PM",
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
          Our schedule is subject to change while we finalize our locations and partnerships.
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
                cursor="default"
                color="dark"
                bg="0"
                //width={{ base: "90vw", md: "35vw", lg: "29vw" }}
                width={{ base: "85vw", md: "40vw", lg: "25vw" }}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "md",
                }}
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                key={index}
              >
                <Card.Body>
                  <HStack gap={5} alignSelf="center">
                    {/* <Image
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "60px", height: "60px" }}
                    /> */}
                    <Box>
                      <Heading textAlign="center" color="dark" size="md">
                        {item.title}
                      </Heading>
                      <Text textAlign="center" color="dark">{item.time}</Text>
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
                cursor="default"
                color="dark"
                bg="0"
                //width={{ base: "90vw", md: "35vw", lg: "29vw" }}
                width={{ base: "85vw", md: "40vw", lg: "25vw" }}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "md",
                }}
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                key={index}
              >
                <Card.Body>
                  <HStack gap={5} alignSelf="center">
                    {/* <Image
                      src={item.icon}
                      alt={item.title}
                      style={{ width: "60px", height: "60px" }}
                    /> */}
                    <Box>
                      <Heading textAlign="center" color="dark" size="md">
                        {item.title}
                      </Heading>
                      <Text textAlign="center" color="dark">{item.time}</Text>
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
