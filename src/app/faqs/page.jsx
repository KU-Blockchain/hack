import { Box, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

export default function FAQs() {
  const faqs = [
    {
      value: "question1",
      title: "What is the event about?",
      text: "Our event is focused on fostering collaboration and innovation through engaging workshops, networking opportunities, and hands-on projects.",
    },
    {
      value: "question2",
      title: "Who can attend?",
      text: "The event is open to everyone, whether you’re a student, professional, or just curious about the topic.",
    },
    {
      value: "question3",
      title: "How can I register?",
      text: "You can register by clicking on the 'Apply Now' button on our homepage and filling out the required information.",
    },
    {
      value: "question4",
      title: "Is there a fee to participate?",
      text: "No, participation is completely free of charge.",
    },
  ];

  return (
    <div>
    <Navbar />
    <Box maxW="800px" mx="auto" py="8" px="4" textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>  
      {/* Page Heading */}
      <Heading textAlign="center" mb="6" size="xl" letterSpacing="tight">
        Frequently Asked Questions
      </Heading>

      {/* FAQ Accordion */}
      <AccordionRoot multiple defaultValue={["question1"]}>
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} mb={2}>
            <AccordionItemTrigger>
              <Heading size="md" textAlign="left">
                {faq.title}
              </Heading>
            </AccordionItemTrigger>
            <AccordionItemContent mb={2}>
              <Box mt="2" fontSize="md">
                {faq.text}
              </Box>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Box>
    </div>
  );
}
