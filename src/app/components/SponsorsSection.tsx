import React from 'react';
import { motion } from "motion/react";
import { Building2 } from "lucide-react";


async function sendEmail(e) {
  e.preventDefault();

  // Stack info into payload
  const payload = {
    user_name: e.target.user_name.value,
    email: e.target.email.value,
    company: e.target.company.value,
    message: e.target.message.value,
  };

  // Send payload to backend
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    // Redirect to success page
    console.log("Email sent successfully");
    window.location.href = "/contact/success";
  } else {
    // Show error message as alert
    alert("Failed to send email, contact charlieedoherty@gmail.com");
  }
}


export function SponsorsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="p-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] bg-clip-text text-transparent">
            Sponsors
          </h1>
          <p className="text-xl text-white/70">
            Powering innovation in the Blockchain and Web3 Ecosystem providing $10K+ in prizes!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative"
        > 
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#073623] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#073623] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 items-center py-4"
            >
              {[...Array(3)].map((_, setIndex) => (
                <div
                  key={setIndex}
                  className="flex gap-8 items-center"
                >
                  {[
                    { name: "KU", src: "/ku.png" },
                    { name: "PayPal", src: "/paypal.png" },
                    { name: "Pinata", src: "/pinata.png" },
                    { name: "Ripple", src: "/ripple.png" },
                    { name: "Sui", src: "/sui.png" },
                    { name: "MLH", src: "/mlh.png" },
                  ].map((sponsor, i) => (
                    <motion.div
                      key={`${setIndex}-${i}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-56 h-36 bg-gradient-to-br from-white/95 to-white/85 border-2 border-white/40 rounded-2xl flex items-center justify-center p-4 shadow-xl shadow-black/30 relative overflow-hidden group cursor-pointer"
                    >
                      {/* Subtle warm tint so blue logos have contrast */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F5C4A8]/5 to-[#E89A7B]/5 rounded-2xl" />

                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E89A7B]/15 to-[#F5C4A8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl" />

                      <img
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain relative z-10 drop-shadow-md"
                      />

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#E89A7B]/15 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 left-1/4 w-2 h-2 bg-[#E89A7B]/40 rounded-full animate-pulse" />
          <div
            className="absolute -bottom-4 right-1/3 w-2 h-2 bg-[#F5C4A8]/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#073623]/30 border border-[#E89A7B]/20 rounded-2xl p-12 backdrop-blur-sm text-center"
        >
          <Building2 className="w-20 h-20 mx-auto mb-6 text-[#E89A7B]/50" />
          <h2 className="text-2xl md:text-3xl text-white mb-4">
            Sponsorship Opportunities Available
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Interested in sponsoring Midwest Block-a-thon 2026?
            Join us in supporting the next generation of
            blockchain innovators.
          </p>

          <form onSubmit={sendEmail} className="flex flex-col gap-2 max-w-2xl mx-auto justify-left">
            <label htmlFor="user_name" className="text-white/80 text-left">Name</label>
            <input required type="text" id="user_name" name="user_name" placeholder="Enter your name" className="w-full p-2 rounded-md border border-[#E89A7B]/20 text-white/60 bg-[#073623]/30 mb-2" />
            <label htmlFor="email" className="text-white/80 text-left">Email</label>
            <input required type="email" id="email" name="email" placeholder="Enter your email" className="w-full p-2 rounded-md border border-[#E89A7B]/20 text-white/60 bg-[#073623]/30 mb-2" />
            <label htmlFor="company" className="text-white/80 text-left">Company</label>
            <input required type="text" id="company" name="company" placeholder="Enter your company" className="w-full p-2 rounded-md border border-[#E89A7B]/20 text-white/60 bg-[#073623]/30 mb-2" />
            <label htmlFor="message" className="text-white/80 text-left">Message</label>
            <textarea required id="message" name="message" placeholder="Enter your message" maxLength={500} className="w-full p-2 rounded-md border border-[#E89A7B]/20 text-white/60 bg-[#073623]/30 mb-2 min-h-32" />

            <button type="submit" className="cursor-pointer w-full px-8 py-4 bg-gradient-to-r from-[#E89A7B] to-[#F5C4A8] text-[#073623] font-bold rounded-lg hover:shadow-lg hover:shadow-[#E89A7B]/30 transition-shadow">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}