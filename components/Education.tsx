"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech CSE",
    institution: "Ajay Kumar Garg Engineering College",
    duration: "Aug 2024 – Aug 2028",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate PCM",
    institution: "Jaypee Vidya Mandir",
    duration: "May 2023 – Jul 2024",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#0A0A0F]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold mb-4">
            Education <span className="text-primary">& Background</span>
          </h2>
          <div className="w-20 h-1 bg-glow rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(107,63,160,0.3)] hover:border-glow/40 group overflow-hidden relative"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0A0A0F]/50 border border-glassBorder flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors shadow-inner">
                  <edu.icon className="w-8 h-8 text-primary group-hover:text-glow transition-colors" />
                </div>
                
                <div className="flex-1">
                  <div className="text-white/80 font-mono text-xs uppercase tracking-widest bg-white/10 py-1 px-3 rounded-md inline-block border border-white/5 mb-3">
                    {edu.duration}
                  </div>
                  <h3 className="text-2xl font-bold font-syne text-[#E8E8F0] mb-2">{edu.degree}</h3>
                  <p className="text-[#a0a0b0] text-lg font-medium">{edu.institution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
