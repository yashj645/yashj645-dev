"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { AnimatedTerminal } from "@/components/ui/animated-terminal";

const stats = [
  { value: "6+", label: "years engineering" },
  { value: "410+", label: "devs reached via OSS" },
  { value: "67%", label: "POS latency cut" },
];

const ctas = [
  { label: "Email", href: "mailto:yashj645@gmail.com", icon: Mail, primary: true },
  { label: "GitHub", href: "https://github.com/yashj645", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yashj645", icon: Linkedin },
  { label: "Resume", href: "/resume.pdf", icon: FileText, download: true },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to senior / staff roles · Remote or India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            Yash Jain.
            <br />
            <span className="text-muted font-bold">
              Full-stack engineer building
            </span>
            <br />
            <span className="text-accent">commerce, tooling, and AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-8 leading-relaxed"
          >
            I architect offline-first commerce platforms, cross-surface
            extension libraries, and developer tooling for AI agents. Currently
            at <span className="text-text font-medium">FYND</span>, shipping POS
            infrastructure for retail at scale.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-text">
                  {s.value}
                </span>
                <span className="text-xs text-muted uppercase tracking-wider mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {ctas.map((cta) => {
              const Icon = cta.icon;
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  download={cta.download}  
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={
                    cta.primary
                      ? "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-medium hover:opacity-90 transition-opacity"
                      : "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface text-text hover:border-accent/40 transition-colors"
                  }
                >
                  <Icon size={16} />
                  {cta.label}
                  {cta.primary && <ArrowRight size={14} />}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </section>
  );
}
