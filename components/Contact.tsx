"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 bg-[#0A0A0F]/50 flex items-center justify-center overflow-hidden">
      {/* Subtle animated gradient background for contact */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 tracking-tight">
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Intelligent</span>
          </h2>

          <p className="text-lg text-[#a0a0b0] mb-12 leading-relaxed">
            I&apos;m currently seeking new opportunities as an ML Engineer or Full-Stack Developer.
            Whether you have a question or just want to network — my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nishant73883@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-[0_0_20px_rgba(107,63,160,0.5)] hover:shadow-[0_0_40px_rgba(155,111,208,0.7)] transition-all transform hover:-translate-y-1 w-full sm:w-auto overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <Mail className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Say Hello via Email</span>
            </a>

            <a
              href="https://github.com/nishantQL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-glassBorder bg-glass text-[#E8E8F0] font-semibold text-lg hover:border-glow/50 hover:bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(155,111,208,0.3)] transition-all transform hover:-translate-y-1 w-full sm:w-auto backdrop-blur-md"
            >
              <Github className="w-5 h-5 group-hover:text-glow transition-colors group-hover:scale-110" />
              <span className="group-hover:text-glow transition-colors">Connect on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
