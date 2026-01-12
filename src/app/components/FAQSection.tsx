import React from 'react';
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
    },
    {
      question: "How Long is it?",
      answer: "The hackathon will be 36 hours long, from Friday night to Sunday night. This only considers hacking time, not the opening or closing ceremonies."
    }
  ];

  return (
    <div className="flex items-center justify-center px-6 relative z-10">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-xl text-white/70">
            Questions we've been asked in the past
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-[#073623]/30 border border-[#E89A7B]/20 rounded-lg px-6 backdrop-blur-sm ${index === faqs.length - 1 ? '!border-b border-[#E89A7B]/20' : ''}`}
              >
                <AccordionTrigger className="text-left text-white hover:text-[#E89A7B] transition-colors py-4 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center m-16"
          >
            <p className="text-xl text-white/70 mb-12">
              Have more questions? Contact us after registering below
            </p>
            <a
              href="https://luma.com/event/evt-YHqv3fV8bSezehz"
              target="https://luma.com/fbnegd5h"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] text-[#1a3d3a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#E89A7B]/30 transition-shadow cursor-pointer"
              >
                Register for Event
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div >
  );
}
