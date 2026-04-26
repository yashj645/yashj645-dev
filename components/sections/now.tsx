"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const nowItems = [
  {
    title: "Maintaining @yashj645/quip-mcp-server",
    desc: "Adding richer authentication modes and a self-hosted dashboard for team usage analytics.",
  },
  {
    title: "Faro v2",
    desc: "Bringing trip itineraries to iOS via TestFlight and adding an offline-first conflict resolution layer for multi-device sync.",
  },
  {
    title: "Reading",
    desc: "Designing Data-Intensive Applications, the MCP spec, and good taste from rauchg.com.",
  },
];

export function Now() {
  return (
    <section
      id="now"
      className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono">
            03 — Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What I'm building this month.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {nowItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover p-5 rounded-xl border border-border bg-surface"
            >
              <Sparkles size={16} className="text-accent mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
