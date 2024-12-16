"use client";
import React, { useState, useEffect } from "react";
import { 
  Box, 
  Input, 
  Button, 
  Stack, 
  Text, 
  HStack, 
  VStack, 
  Link,
  Spacer,
  Icon,
  Tag, 
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { FaCircle, FaCircleDot, FaLocationDot, FaRegCalendar, FaClock } from "react-icons/fa6";

const formatDate = (fullDate) => {
  const date = new Date(fullDate);
  const month = date.getMonth() + 1; // Months are 0-based
  const day = date.getDate();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day name
  return `${dayOfWeek}, ${month}/${day}`;
};

const ScheduleViewer = () => {
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const calendarLink = ""; // TODO: ADD INVITE TO BLOCKATHON CALENDAR

  useEffect(() => {
    // Fetch schedule data from API
    const fetchSchedule = async () => {
      const response = await fetch("/api/schedule", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const message = await response.json();
      const data = message.data;

      const categories = [
        { name: "Saturday", color: "#0D9071" },
        { name: "Sunday", color: "#FF730E" },
        { name: "Workshops", color: "#6B8E23" },
        { name: "Office Hours", color: "#E51B5D" },
        { name: "Food", color: "#0089B6" },
        { name: "Special Events", color: "#513ec3" },
      ];

      const categorizedSchedule = categories.map((category) => ({
        ...category,
        items: data.filter((event) =>
          event.tags.some((tag) => tag === category.name)
        ),
      }));

      setSchedule(categorizedSchedule);
      setFilteredSchedule(categorizedSchedule);
    };

    fetchSchedule().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    // Filter schedule based on search query or selected category
    const filtered = schedule.map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        query
          ? item.title.toLowerCase().includes(query.toLowerCase())
          : selectedCategory === -1 || category.name === selectedCategory
      ),
    }));
    setFilteredSchedule(filtered);
  }, [query, selectedCategory, schedule]);

  return (
    <Box p={4}>
      {isLoading ? (
        <VStack mt={20} align="center">
          <Spinner size="lg" color="dark" />
          <Text color="dark">Loading...</Text>
        </VStack>
      ) : (
        <>
        {/* Search Bar */}
        <HStack spacing={4} mb={4}>
          <Input
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button 
            onClick={() => setQuery("")}
            bg="dark"
            color="white"
          >Clear</Button>
          {calendarLink && (
          <Button
            onClick={() => window.open(calendarLink, "_blank")}
            bg="dark"
            color="white"
          >Add All To Calendar</Button>
          )}
        </HStack>

        {/* Category Buttons */}
        <HStack mb={4} wrap="wrap">
          <Button
            onClick={() => setSelectedCategory(-1)}
            colorScheme={selectedCategory === -1 ? "teal" : "gray"}
            bg="0"
            color="dark"
          >
            <b>All Events</b>
          </Button>
          {schedule.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              bg="0"
              color="dark"
              mx={-3}
            >
              {selectedCategory === category.name ? <Icon width="3" mr="-1"><FaCircle color={category.color} /></Icon> : <Icon width="3" mr="-1"><FaCircleDot color={category.color} /></Icon>}
              <b>{category.name}</b>
            </Button>
          ))}
        </HStack>

        {/* Schedule List */}
        <VStack spacing={4} align="stretch">
          {filteredSchedule.map((category) =>
            category.items.length > 0 ? (
              <Box key={category.name} borderWidth="1px" borderRadius="lg" p={4}>
                <Text fontSize="lg" fontWeight="bold" color={category.color}>
                  {category.name}
                </Text>
                <VStack spacing={2} align="stretch" mt={2}>
                  {category.items.map((item, index) => (
                    <DialogRoot key={index} placement="center" motionPreset="slide-in-bottom">
                      <DialogTrigger asChild>
                        <Box
                          p={2}
                          borderWidth="1px"
                          borderRadius="md"
                          _hover={{
                            transform: "scale(1.025)",
                            boxShadow: "md",
                            cursor: "pointer",
                          }}
                          transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                          //onClick={() => handleItemClick(item)}
                        >
                          <Text fontWeight="bold">{item.title}</Text>
                          <Text fontSize="sm">{item.start_time} - {item.end_time}</Text>
                          <Text fontSize="sm">{item.location}</Text>
                        </Box>
                      </DialogTrigger>

                      <DialogContent
                        bgGradient="to-r"
                        gradientFrom="orange.100"
                        gradientTo="red.100"
                        boxShadow="xl"
                        pos="fixed"
                        zIndex="1300"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                      >
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <DialogBody>
                          <HStack>
                            <Box w="45%">
                              <HStack mb={1}>
                                <Icon><FaRegCalendar color="dark" /></Icon>
                                <Text>{formatDate(item.full_date)}</Text>
                              </HStack>
                              <HStack mb={1}>
                                <Icon><FaClock color="dark" /></Icon>
                                <Text>{item.start_time} - {item.end_time}</Text>
                              </HStack>
                              <HStack>
                                <Icon><FaLocationDot color="dark" /></Icon>
                                {item.maps_link ? (
                                  <Text color="dark" as={Link} href={item.maps_link} target="_blank">{item.location}</Text>
                                ) : (
                                  <Text>{item.location}</Text>
                                )}
                              </HStack>
                            </Box>
                            {/* <Text fontWeight="bold">Description:</Text> */}
                            <Box w="55%">
                              <Text>{item.description}</Text>
                            </Box>
                          </HStack>
                        </DialogBody>
                        <DialogFooter>
                          <DialogCloseTrigger asChild>
                            <Button 
                              variant="outline"
                              color="dark"
                              bgGradient="to-r"
                              gradientFrom="orange.100"
                              gradientTo="red.100"
                              _hover={{
                                bgGradient: "to-r",
                                gradientFrom: "orange.200",
                                gradientTo: "red.200",
                              }}
                            >Close</Button>
                          </DialogCloseTrigger>
                          {(item.calendar_link != null) ? (
                            <Button 
                              variant="outline"
                              color="dark"
                              bgGradient="to-r"
                              gradientFrom="orange.100"
                              gradientTo="red.100"
                              _hover={{
                                bgGradient: "to-r",
                                gradientFrom: "orange.200",
                                gradientTo: "red.200",
                              }}
                              onClick={() => window.open(item.calendar_link, "_blank")}
                            >Add Event to Calendar</Button>
                          ) : null}
                        </DialogFooter>
                      </DialogContent>
                    </DialogRoot>
                  ))}
                </VStack>
              </Box>
            ) : null 
          )}
        </VStack>
        </>
      )}
    </Box>
  );
};

export default ScheduleViewer;
