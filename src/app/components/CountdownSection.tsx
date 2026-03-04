import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

type CountdownPhase = 'pre' | 'hackathon' | 'finished';

type CountdownSectionProps = {
  onPrizesClick?: () => void;
};

// Hacking begins Fri Mar 6 8:00 PM CST; submissions due Sun Mar 8 8:00 AM CST (36h later)
const EVENT_START = new Date('2026-03-06T20:00:00-06:00').getTime();
const SUBMISSION_DEADLINE = new Date('2026-03-08T08:00:00-06:00').getTime();

export function CountdownSection({ onPrizesClick }: CountdownSectionProps) {
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

  const [phase, setPhase] = useState<CountdownPhase>('pre');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();

      if (now < EVENT_START) {
        const distance = EVENT_START - now;
        setPhase('pre');
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        return;
      }

      if (now >= EVENT_START && now < SUBMISSION_DEADLINE) {
        const distance = SUBMISSION_DEADLINE - now;
        setPhase('hackathon');
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        return;
      }

      setPhase('finished');
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
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
        className="flex flex-col items-center justify-center px-6 py-10 relative z-10 gap-6"
      >
        {phase !== 'finished' ? (
          <div className="text-center space-y-4">
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#E89A7B]/70">
              {phase === 'pre' ? 'Hackathon starts in' : 'Hackathon in progress — Submit in'}
            </p>
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
        ) : (
          <div className="text-center max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-[#073623]/60 to-[#041f16]/80 backdrop-blur-sm border border-[#E89A7B]/30 rounded-2xl px-6 py-8 shadow-lg shadow-black/40">
              <p className="text-xl md:text-2xl font-semibold text-[#F5C4A8]">
                Hackathon finished, judging begins.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/80">
                Prizes will be released soon!
              </p>
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          type="button"
          onClick={onPrizesClick}
          className="group mt-4 inline-flex items-center gap-4 rounded-full border border-[#F5C4A8]/80 bg-[#041f16]/90 px-7 py-4 text-sm md:text-base font-semibold text-[#F5C4A8] shadow-xl shadow-black/60 hover:border-[#F5C4A8] hover:bg-[#073623]/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C4A8]/80 cursor-pointer"
        >
          <span className="relative inline-flex items-center">
            <span className="absolute -inset-1 rounded-full bg-[#F5C4A8]/20 blur-md group-hover:bg-[#F5C4A8]/30 transition-colors" />
            <span className="relative bg-gradient-to-r from-[#FCE3D1] via-[#F5C4A8] to-[#E89A7B] bg-clip-text text-transparent text-2xl md:text-3xl font-extrabold tracking-tight">
              $10,000+
            </span>
          </span>
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#F5C4A8]/80 to-transparent group-hover:w-14 transition-all" />
          <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.25em] text-[#F5C4A8]/90">
            in prizes · view tracks
          </span>
        </motion.button>
      </motion.div>
    </>
  );
}