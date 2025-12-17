"use client";
import React, { useState, useEffect } from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

const PrizePoolAnimation = () => {
  const [prizePool, setPrizePool] = useState(0);
  const targetAmount = 4000;
  const duration = 1500; // 1.5 seconds
  const interval = 20; // Update every 20ms

  useEffect(() => {
    const steps = duration / interval;
    const increment = targetAmount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        setPrizePool(targetAmount);
        clearInterval(timer);
      } else {
        setPrizePool(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <MotionHeading 
      fontWeight="bold"
      fontStyle="italic"
      textAlign="center" 
      fontSize={{base: "xl", md: "2xl"}}
      initial={{ opacity: 0, y: 30 }} // Starting state: transparent and 20px down
      animate={{ opacity: 1, y: 5 }} // Ending state: fully visible and in original position
      transition={{ duration: 1 }} // Animation duration
    >
      <Text animation="pulse 1s">
        ${prizePool.toLocaleString()}+ Prize Pool
      </Text>
    </MotionHeading>
  );
};

export default PrizePoolAnimation;
