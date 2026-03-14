import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function NotifySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="min-h-[70vh] flex items-center justify-center px-6 relative z-10 py-12"
    >
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <img 
              src="/orange-luma-logo.png" 
              alt="Luma Logo" 
              className="w-16 h-16 mx-auto mb-8"
            />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Sign Up Now!
          </h2>
          
          <p className="text-xl text-white/70 mb-12">
            Be the first to know when we launch. Register to receive updates about Midwest Block-a-thon 2026
          </p>

          <a
            href="https://forms.gle/gSNEYntftL298XS29"
            target="_blank"
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
      </div>
    </motion.div>
  );
}