import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ScrollSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function ScrollSection({ title, description, icon, index }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center justify-center px-6 relative z-10"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
        >
          <div className="flex-1">
            <motion.div
              className="w-32 h-32 mb-8 text-[#E89A7B] flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {icon}
            </motion.div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#E89A7B]">
              {title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
