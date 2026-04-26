"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  { label: "yashj645@gmail.com", href: "mailto:yashj645@gmail.com", icon: Mail },
  { label: "github.com/yashj645", href: "https://github.com/yashj645", icon: Github },
  { label: "linkedin.com/in/yashj645", href: "https://linkedin.com/in/yashj645", icon: Linkedin },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono">
            04 — Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Let's build something
            <br />
            <span className="text-accent">worth shipping.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            I'm open to senior and staff roles in commerce, AI tooling, or
            developer platforms. Remote-first, India-friendly hours.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface text-text hover:border-accent/40 transition-colors"
                >
                  <Icon size={16} className="text-accent" />
                  {l.label}
                  <ArrowUpRight size={14} className="text-muted" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted">
        <span>© {new Date().getFullYear()} Yash Jain.</span>
        <span className="font-mono">
          Built with Next.js · Deployed on Vercel
        </span>
      </footer>
    </section>
  );
}
