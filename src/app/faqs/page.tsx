import {
  Box,
  Heading,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  Text,
} from "@chakra-ui/react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "FAQs | The Midwest Block-Thon",
  description: "Frequently asked questions about the Midwest Block-a-Thon.",
  openGraph: {
    title: "FAQs | The Midwest Block-a-Thon",
    description: "Frequently asked questions about the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/faqs",
    type: "website",
  },
};

export default function FAQs() {
  const faqs = [
    {
      value: "question2",
      title: "Who can attend?",
      text: "The event is open to everyone, whether you’re a student, professional, or just curious about blockchain!",
    },
    {
      value: "question3",
      title: "How does the application process work?",
      text: "Once applications open, you'll find them by clicking the 'Apply Now' button on our homepage and filling out the required information. For now, please join our waitlist so you can be the first to know when applications open!",
    },
    {
      value: "question4",
      title: "Is there a fee to participate?",
      text: "No, participation is completely free of charge, and meals will be provided.",
    },
    {
      value: "question5",
      title:
        "Will Mercury be in retrograde or will any other significantly disruptive astrological events be going on during this time?",
      text: "Mercury is slated to be in retrograde March 14 to April 6, but do not fear! We will have outlets, wifi, and anything else your tech might need to ensure no disruptive events occur during your hacking!",
    },
    {
      value: "question6",
      title: "What if I don't know anything about blockchain?",
      text: "Building is the best way to learn! This event is totally open to those new to blockchain, and we will share a ton of resources with you ahead of time to make sure you know the best ways to start preparing.",
    },
    {
      value: "question7",
      title: "Will there be places for me to sleep?",
      text: "We will have at least one room as a dedicated quiet, sleeping space. We do recommend that you bring your own sleeping bag if you are planning on sleeping.",
    },
  ];

  return (
    <>
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
        {/* Page Heading */}
        <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          FREQUENTLY ASKED QUESTIONS
        </Heading>

        {/* FAQ Accordion */}
        <AccordionRoot multiple defaultValue={["question2"]}>
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
      </Box>
    </>
  );
}
