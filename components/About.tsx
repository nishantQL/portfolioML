"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "ML/AI", items: ["Scikit-learn", "Random Forest", "SVM", "TF-IDF", "OpenCV", "Gemini API"] },
  { category: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "Express.js", "REST APIs"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Vercel", "Railway", "Render", "Stripe", "Nodemailer"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#0A0A0F]/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-glow rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center h-full justify-center shadow-lg">
              <div className="w-32 h-32 rounded-full mb-6 relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-glow opacity-75 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <div className="absolute inset-1 rounded-full bg-[#0A0A0F] z-10 flex items-center justify-center">
                  <span className="text-4xl font-syne font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#E8E8F0] to-muted">
                    KK
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-syne text-[#E8E8F0] mb-2">Krishan Kant</h3>
              <p className="text-glow font-medium mb-8">Ghaziabad, India</p>
              
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-[#0A0A0F]/50 rounded-2xl p-4 border border-glassBorder hover:border-primary/50 transition-colors shadow-inner">
                  <p className="text-3xl font-bold text-[#E8E8F0] mb-1">5+</p>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Projects</p>
                </div>
                <div className="bg-[#0A0A0F]/50 rounded-2xl p-4 border border-glassBorder hover:border-primary/50 transition-colors shadow-inner">
                  <p className="text-3xl font-bold text-[#E8E8F0] mb-1">1</p>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Hackathon</p>
                </div>
                <div className="col-span-2 bg-[#0A0A0F]/50 rounded-2xl p-4 border border-glassBorder hover:border-primary/50 transition-colors shadow-inner">
                  <p className="text-3xl font-bold text-[#E8E8F0] mb-1">2 Yrs</p>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-syne font-bold mb-4 text-[#E8E8F0]">Who am I?</h3>
              <p className="text-muted leading-relaxed text-lg pb-6 border-b border-glassBorder/50">
                I&apos;m an aspiring <strong className="text-glow font-medium">ML Engineer</strong> & <strong className="text-glow font-medium">Full-Stack Developer</strong> currently pursuing B.Tech in CSE at AKGEC. I specialize in building end-to-end AI systems and scalable web applications — combining machine learning models, computer vision, and robust APIs to solve real-world problems.
              </p>

              <div className="pt-6 space-y-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, sIdx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.05 * sIdx }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-glass to-transparent border border-glassBorder text-[#E8E8F0] hover:border-glow hover:text-white transition-colors cursor-default shadow-sm"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
