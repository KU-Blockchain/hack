import { Box, Heading, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

export default function FAQs() {
  const faqs = [
    {
      value: "question1",
      title: "What is a hackathon?",
      text: "This is Major League Hacking's definition: Hacking refers to inventive problem-solving. Essentially, we like to think of hackathons as invention marathons, where people gather to collaborate on all types of software projects.",
    },
    {
      value: "question2",
      title: "Who can attend?",
      text: "The event is open to everyone, whether you’re a student, professional, or just curious about blockchain!",
    },
    {
      value: "question3",
      title: "How does the application process work?",
      text: "You can apply by clicking on the 'Apply Now' button on our homepage and filling out the required information.",
    },
    {
      value: "question4",
      title: "Is there a fee to participate?",
      text: "No, participation is completely free of charge.",
    },
    {
      value: "question5",
      title: "Will Mercury be in retrograde or will any other significantly destructive astrological events be going on during this time?",
      text: "No, don\'t worry your laptop will work fine. And we will have outlets!",
    },
  ];

  return (
    <div>
    <Navbar />
    <Box maxW="800px" mx="auto" py="8" px="4" textAlign="center" fontSize="xl" pt={{ base: "20vh", md: "30vh" }}>  
      {/* Page Heading */}
      <Heading size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          FREQUENTLY ASKED QUESTIONS
      </Heading>

      {/* FAQ Accordion */}
      <AccordionRoot multiple defaultValue={["question1"]}>
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.value} 
            value={faq.value} 
            mb={2}
          >
            <AccordionItemTrigger
              style={{ cursor: "pointer" }}
            >
              <Heading textAlign="left">
                {faq.title}
              </Heading>
            </AccordionItemTrigger>
            <AccordionItemContent fontSize="lg" mb={2}>
              <Box mt="2">
                <Text>{faq.text}</Text>
              </Box>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Box>
    </div>
  );
}
