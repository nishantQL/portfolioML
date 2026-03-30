"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Hackathon Finalist",
    organization: "SDGI Global University",
    date: "March 2026",
    location: "Ghaziabad, India",
    description: "Reached finalist round, built ML-powered solution under time constraints, cross-functional team collaboration, rapid prototyping and live demo delivery",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#0A0A0F]/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-glow rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative border-l-2 border-glassBorder/40 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 transform -translate-x-[21px] md:-translate-x-[25px] w-10 h-10 rounded-full bg-[#0A0A0F] border-2 border-glassBorder flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(107,63,160,0.8)]" />
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-glow/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(107,63,160,0.2)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-syne text-[#E8E8F0]">{exp.role}</h3>
                    <p className="text-glow font-medium text-sm md:text-base mt-1">{exp.organization}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-white/80 font-mono text-xs uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-md inline-block border border-white/5">
                      {exp.date}
                    </p>
                    <p className="text-muted text-sm mt-2">{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-[#a0a0b0] leading-relaxed mt-4 pt-4 border-t border-glassBorder/30">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
