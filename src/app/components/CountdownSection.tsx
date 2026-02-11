import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export function CountdownSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 8 PM on March 6, 2026
    const targetDate = new Date('2026-03-06T20:00:00').getTime();

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Calculate immediately on mount
    calculateCountdown();

    // Then update every second
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
          MARCH 6-8
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="flex items-center justify-center px-6 py-10 relative z-10"
      >
        <div className="text-center">
          <div className="grid grid-cols-4 gap-2 md:gap-5 max-w-4xl mx-auto">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#073623]/50 to-[#041f16]/50 backdrop-blur-sm border border-[#E89A7B]/20 rounded-2xl p-4 md:p-8">
                  <div className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-base uppercase tracking-wider text-[#E89A7B]/60">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}