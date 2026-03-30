"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);
type ProjectCategory = "All" | "AI/ML Projects" | "Full-Stack Web Projects";

const categories: ProjectCategory[] = ["All", "AI/ML Projects", "Full-Stack Web Projects"];

const projects = [
  {
    title: "IGNIVIS — AI-Powered Heat Stress Intelligence System",
    description: "An AI intelligence system integrating multiple ML models to analyze and predict heat stress factors in real-time.",
    category: "AI/ML Projects",
    tech: ["FastAPI", "Scikit-learn", "OpenCV", "Gemini API", "Next.js", "PostgreSQL"],
    badges: ["🏆 Featured", "4 ML Models", "<2s Latency"],
    liveDemoUrl: "https://ignivis.vercel.app",
    githubUrl: "https://github.com/nishantQL/ignivis",
  },
  {
    title: "CineMatch — ML Movie Recommendation System",
    description: "A machine learning based recommendation engine suggesting movies based on content-based filtering algorithms.",
    category: "AI/ML Projects",
    tech: ["Python", "FastAPI", "Scikit-learn", "Pandas", "TMDB API", "Next.js"],
    badges: ["5000+ Movies", "<100ms Response"],
    liveDemoUrl: "https://movie-recommender-three-lemon.vercel.app",
    githubUrl: "https://github.com/nishantQL/Movie_recommender",
  },
  {
    title: "Spam Classifier — Full-Stack ML Web App",
    description: "A robust NLP application that classifies SMS and email messages as spam or ham using SVM and TF-IDF.",
    category: "AI/ML Projects",
    tech: ["Python", "FastAPI", "SVM", "TF-IDF", "Next.js", "Tailwind"],
    badges: ["94% Accuracy", "<100ms API"],
    liveDemoUrl: "https://spam-classifier-scx4.vercel.app",
    githubUrl: "https://github.com/nishantQL/spam_classifier",
  },
  {
    title: "GreenCart — Full-Stack Grocery E-Commerce",
    description: "Built a complete grocery shopping platform with product listings, cart management, user authentication, and Stripe payments.",
    category: "Full-Stack Web Projects",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    badges: ["MERN Stack", "Stripe Payments", "Auth"],
    liveDemoUrl: "https://green-cart-z4jl.vercel.app",
    githubUrl: "https://github.com/nishantQL/GreenCart",
  },
  {
    title: "QuickStay — Hotel Booking Platform",
    description: "Built a hotel booking application with room listings, user authentication, payment gateway, and transactional emails.",
    category: "Full-Stack Web Projects",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
    badges: ["MERN Stack", "Email Notifications", "Auth"],
    liveDemoUrl: "https://quick-stay-ruddy.vercel.app",
    githubUrl: "https://github.com/nishantQL/QuickStay",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0A0A0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-syne font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-glow rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 bg-[#0A0A0F]/50 rounded-full border border-glassBorder backdrop-blur-md"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(107,63,160,0.5)]" 
                    : "text-muted hover:text-[#E8E8F0] hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 2xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={project.title}
                className="glass-card rounded-3xl p-8 group relative flex flex-col hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(107,63,160,0.3)] hover:border-glow/50"
              >
                {/* Purple gradient top highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.badges.map((badge) => (
                    <span 
                      key={badge} 
                      className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        badge.includes("🏆") 
                          ? "bg-glow/20 text-glow border border-glow/30" 
                          : "bg-[#0A0A0F]/80 text-[#E8E8F0] border border-glassBorder"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 ml-auto whitespace-nowrap">
                    {project.category.replace(" Projects", "")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-syne text-[#E8E8F0] mb-4 group-hover:text-glow transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded font-mono bg-white/5 text-muted border border-white/5 hover:border-white/10 hover:text-[#E8E8F0] transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto pt-5 border-t border-glassBorder/40">
                  <a 
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-[#E8E8F0] hover:text-glow transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg flex-1 border border-transparent hover:border-glow/30"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-[#E8E8F0] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg flex-1 border border-transparent hover:border-white/20"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
