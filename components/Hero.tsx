"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "ML Engineer",
  "Data Scientist",
  "Full-Stack AI Developer",
  "MERN Stack Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(
          currentFullRole.substring(0, currentRole.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-glow/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob [animation-delay:4s]" />
        
        {/* Simple stars/particles via CSS repeating radial gradient */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-glassBorder bg-glass text-sm text-glow mb-4 backdrop-blur-md">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-syne tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Krishan Kant</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-[#E8E8F0] h-[40px] flex items-center justify-center">
            <span className="mr-2">I am a</span>
            <span className="text-glow font-semibold relative">
              {currentRole}
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-glow animate-pulse" />
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            I build intelligent systems and full-stack web apps — from model training to production deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold shadow-[0_0_20px_rgba(107,63,160,0.5)] hover:shadow-[0_0_30px_rgba(155,111,208,0.7)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              View Projects
            </a>
            <a 
              href="/resumexkk.pdf"
              download="Krishan_Kant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all transform hover:-translate-y-1 w-full sm:w-auto backdrop-blur-sm"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badges */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" top="20%" left="15%" delay={0} />
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" top="30%" right="20%" delay={1} className="invert opacity-70" />
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" top="60%" left="25%" delay={2} />
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" top="70%" right="15%" delay={3} />
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" top="45%" left="5%" delay={1.5} />
        <FloatingBadge src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" top="50%" right="10%" delay={2.5} />
      </div>
    </section>
  );
}

function FloatingBadge({ src, top, left, right, delay, className = "" }: { src: string, top: string, left?: string, right?: string, delay: number, className?: string }) {
  // Extract custom invert logic since Next.js SVGs are white/black
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute w-14 h-14 bg-glass border border-glassBorder rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
      style={{ top, left, right }}
    >
      <img src={src} alt="tech badge" className={`w-7 h-7 object-contain ${className}`} />
    </motion.div>
  );
}
