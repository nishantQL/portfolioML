"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-glass backdrop-blur-md border-b border-glassBorder py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="text-2xl font-syne font-bold text-[#E8E8F0] tracking-tighter hover:text-glow transition-colors"
        >
          KK.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-glow",
                activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-[#E8E8F0]"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resumexkk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-glow transition-colors shadow-[0_0_15px_rgba(107,63,160,0.4)] hover:shadow-[0_0_25px_rgba(155,111,208,0.6)]"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#E8E8F0]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-glassBorder p-6 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-lg font-medium text-[#E8E8F0] hover:text-glow"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resumexkk.pdf"
              download="Krishan_Kant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-center font-semibold bg-primary text-white"
            >
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
