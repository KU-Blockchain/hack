import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  HStack,
} from "@chakra-ui/react";
import { Box, Heading, Text, Image, List, Link } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { Metadata } from "next";
import ScrollToTopButton from '@/components/ScrollToTopButton'
import KBFImages from '@/components/KBFImages'
import AboutKUBI from '@/components/AboutKUBI'

export const metadata: Metadata = {
  title: "ABOUT | The Midwest Block-a-Thon",
  description: "Learn more about the Midwest Block-a-Thon",
  openGraph: {
    title: "ABOUT | The Midwest Block-a-Thon",
    description: "Learn more about the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/about",
    type: "website",
  },
};

const About = () => {
  const faqs = [
    {
      value: "question2",
      title: "Who can attend?",
      text: "The event is open to everyone, whether you’re a student, professional, or just curious about blockchain!",
    },
    {
      value: "question3",
      title: "How does the application process work?",
      text: "You can find the application by clicking the 'Apply Now' button on our homepage and filling out your information. We intend to accept most, if not all, applicants! You’ll hear back within two weeks of applying.",
    },
    {
      value: "question4",
      title: "Is there a fee to participate?",
      text: "No, participation is completely free of charge, and meals will be provided.",
    },
    {
      value: "question5",
      title: "Will Mercury be in retrograde or will any other significantly disruptive astrological events be going on during this time?",
      text: "Mercury is slated to be in retrograde March 14 to April 6, but do not fear! We will have outlets, wifi, and anything else your tech might need to ensure no disruptive events occur during your hacking!",
    },
    // {
    //   value: "question6",
    //   title: "What if I don't know anything about blockchain?",
    //   text: "Building is the best way to learn! This event is totally open to those new to blockchain, and we will share a ton of resources with you ahead of time to make sure you know the best ways to start preparing.",
    // },
    {
      value: "question7",
      title: "Will there be places for me to sleep?",
      text: "We will have at least one room as a dedicated quiet, sleeping space. We do recommend that you bring your own sleeping bag if you are planning on sleeping.",
    },
  ];

  return (
    <>
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
        pt={{ base: "25vh", md: "30vh" }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <Image width="70%" align="center" src="/ready_to_build.gif" alt="Ready to Build" />
        </Box>
        <Heading size="4xl" my={6} mx={2} fontWeight="bold" fontStyle="italic">
          ABOUT
        </Heading>
        <Text textAlign={"left"} my={4}>
          The Midwest Block-a-Thon is a 20-hour blockchain-focused hackathon
          hosted at the University of Kansas aimed at fostering innovation and
          collaboration among hackers of all ages in the surrounding region.
          This hackathon plans to bring in{" "}
          <Box as="span" fontWeight="bold">
            200 hackers and community members
          </Box>{" "}
          with hands-on experience in web3 development, mentorship from industry
          experts, and a chance to win big prizes.
        </Text>
        <List.Root textAlign="left" mx={2} my={4}>
          <List.Item my={4}>
            The Block-a-Thon will be hosted at the{" "}
            <Box as="span" fontWeight="bold">
              University of Kansas
            </Box>
            , where hackers will be welcome to stay overnight to hack.
          </List.Item>
          <List.Item my={4}>
            Meals and snacks will be provided throughout the event, and dietary
            restrictions will be accommodated.
          </List.Item>
        </List.Root>

        {/* <KBFImages /> */}
        <HStack justifyContent="center" my={6}>
          <Image
            src="/images/classroom.jpg"
            alt="KBF Still Image"
            minH="150px"
            maxH="300px"
            maxW="40vw"
          />
          <Image
            src="/images/walking.jpg"
            alt="KBF Still Image"
            minH="150px"
            maxH="300px"
            maxW="40vw"
          />
        </HStack>

        {/* Page Heading */}
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          FREQUENTLY ASKED QUESTIONS
        </Heading>

        {/* FAQ Accordion */}
        <AccordionRoot multiple defaultValue={["question1"]}>
          <AccordionItem value="question1" mb={2}>
            <AccordionItemTrigger style={{ cursor: "pointer" }}>
              <Heading textAlign="left">What if I don't know anything about blockchain?</Heading>
            </AccordionItemTrigger>
            <AccordionItemContent fontSize="lg" mb={2}>
              <Box mt="2">
                <Text textAlign="left" color="dark">
                  Building is the best way to learn! This event is totally open to those new to blockchain, 
                  and we will share a ton of resources with you ahead of time to make sure you know the best 
                  ways to start preparing.<br />
                  <br />
                  Please check out a few of our recommended resources <Link href="/hackerdoc/151dd445c69b80098be5f78f9a6b5ae2#178dd445c69b8038aa1ed972fcd1a54e" color="dark">here🔗</Link>!
                </Text>
              </Box>
            </AccordionItemContent>
          </AccordionItem>
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} mb={2}>
              <AccordionItemTrigger style={{ cursor: "pointer" }}>
                <Heading textAlign="left">{faq.title}</Heading>
              </AccordionItemTrigger>
              <AccordionItemContent fontSize="lg" mb={2}>
                <Box mt="2">
                  <Text textAlign="left">{faq.text}</Text>
                </Box>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
        <Text my={6}>
          Other questions? Contact us at{" "}
          <Box as="span" fontWeight="bold">
            <Link color="dark" href="mailto:hack@kublockchain.com">
              hack@kublockchain.com
            </Link>
          </Box>
          .
        </Text>
      </Box>
      <ScrollToTopButton />
    </>
  );
};

export default About;
