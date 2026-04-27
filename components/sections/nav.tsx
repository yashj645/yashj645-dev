"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold">
          <span className="text-muted">~/</span>yashj645
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:yashj645@gmail.com"
          className="hidden md:inline-flex px-3 py-1.5 rounded-md text-sm border border-border bg-surface hover:border-accent/40 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
