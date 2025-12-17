import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { Bell } from 'lucide-react';

export function NotifySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 1]);

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - in production, this would integrate with a backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

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
            animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut" 
            }}
          >
            <Bell className="w-16 h-16 mx-auto mb-8 text-[#E89A7B]" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Get Notified
          </h2>
          
          <p className="text-xl text-white/70 mb-12">
            Be the first to know when we launch. Enter your email to receive updates about Midwest Block-a-thon 2026.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-[#073623]/50 border border-[#E89A7B]/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E89A7B] transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] text-[#1a3d3a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#E89A7B]/30 transition-shadow"
              >
                Notify Me
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-[#E89A7B]/20 border border-[#E89A7B]/40 rounded-lg"
            >
              <p className="text-[#E89A7B] font-bold">
                ✓ Thanks! We'll keep you updated.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}