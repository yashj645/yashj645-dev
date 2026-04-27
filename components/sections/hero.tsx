"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";

const ctas = [
  { label: "Email", href: "mailto:yashj645@gmail.com", icon: Mail, primary: true },
  { label: "GitHub", href: "https://github.com/yashj645", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yashj645", icon: Linkedin },
  { label: "Resume", href: "/Yash-Jain-Resume.pdf", icon: FileText, download: true },
];

const highlights = [
  {
    name: "quip-mcp-server",
    desc: "MCP server letting AI agents read and search Quip docs and sheets. Picked up by 400+ developers in the first month.",
    stat: "410+",
    statLabel: "developers · npm",
    href: "https://www.npmjs.com/package/@yashj645/quip-mcp-server",
  },
  {
    name: "FYND StoreOS — POS",
    desc: "Offline-first point-of-sale platform powering retail brands across India. Rebuilt the sync layer and cut latency significantly.",
    stat: "67%",
    statLabel: "latency reduction",
    href: null,
  },
  {
    name: "Faro",
    desc: "A travel app with trip planning, itinerary management, and four Claude integrations. Currently in TestFlight.",
    stat: null,
    statLabel: null,
    href: null,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
            Yash Jain.
          </h1>

          <div className="space-y-4 text-lg md:text-xl text-muted leading-relaxed mb-10">
            <p>
              I'm a full-stack engineer with 6+ years of experience building web
              and mobile products from idea to production.
            </p>
            <p>
              I work across frontend and backend — currently at{" "}
              <span className="text-text font-medium">FYND</span>, where I build
              commerce and POS systems that have to work reliably at scale. I like
              the problems that sit between systems: keeping things fast,
              offline-capable, and easy to maintain.
            </p>
            <p>
              Outside of work I build things for myself — an MCP server that lets
              AI agents read Quip docs, and{" "}
              <span className="text-text font-medium">Faro</span>, a travel app
              I've been working on with a few Claude integrations baked in.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
          </div>
        </motion.div>

        {/* Right: project highlights */}
        <div className="hidden lg:flex flex-col gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                type: "spring",
                stiffness: 70,
                damping: 18,
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl border border-border bg-surface cursor-default"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-semibold text-text">{item.name}</span>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-text transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-3">{item.desc}</p>
              {item.stat && (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-accent">{item.stat}</span>
                  <span className="text-xs text-muted">{item.statLabel}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
