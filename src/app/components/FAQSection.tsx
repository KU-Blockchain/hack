import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "What is The Block-a-thon?",
      answer: "The Block-a-thon is a 36-hour hackathon bringing student builders of all levels from across the Midwest together for a weekend of blockchain exploration and innovation. This event is designed to be accessible, engaging, and impactful for participants of all ages and experience levels."
    },
    {
      question: "When and where is the event?",
      answer: "The hackathon kicks off on March 6, 2026. Stay tuned for venue details and more information!"
    },
    {
      question: "Who can participate?",
      answer: "Everyone! Whether you're a seasoned blockchain developer or just getting started, we welcome participants of all skill levels."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and your best ideas! We'll provide food, drinks, and an amazing environment to build in."
    },
    {
      question: "Are there prizes?",
      answer: "Yes! We'll be announcing exciting prizes and sponsor opportunities soon. Sign up to stay updated!"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-16 relative z-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-lg px-6 backdrop-blur-sm"
          >
            <AccordionTrigger className="text-left text-white hover:text-[#E89A7B] transition-colors py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
