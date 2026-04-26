"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Line = {
  type: "command" | "output" | "success" | "info";
  text: string;
  delay: number;
};

const sequence: Line[] = [
  { type: "command", text: "$ npm install -g @yashj645/quip-mcp-server", delay: 0 },
  { type: "output", text: "added 1 package in 2.4s", delay: 1500 },
  { type: "command", text: "$ quip-mcp configure --claude-desktop", delay: 2400 },
  { type: "info", text: "→ Detecting Claude Desktop installation...", delay: 3200 },
  { type: "info", text: "→ Writing config to ~/.claude/mcp.json", delay: 3900 },
  { type: "info", text: "→ Validating Quip access token...", delay: 4600 },
  { type: "success", text: "✓ MCP server configured.", delay: 5400 },
  { type: "success", text: "✓ Claude can now read Quip docs and sheets.", delay: 5800 },
  { type: "command", text: "$", delay: 6500 },
];

export function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const run = () => {
      setVisibleCount(0);
      sequence.forEach((line, i) => {
        const t = setTimeout(() => setVisibleCount(i + 1), line.delay);
        timeouts.push(t);
      });
    };

    run();
    // Loop the animation every 10s
    const loop = setInterval(run, 10000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  const lineColor = (type: Line["type"]) => {
    switch (type) {
      case "command":
        return "text-text";
      case "output":
        return "text-muted";
      case "info":
        return "text-blue-400";
      case "success":
        return "text-accent";
    }
  };

  return (
    <div className="rounded-xl border border-border bg-surface shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-muted font-mono">
          ~/dev — quip-mcp-server
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[320px]">
        {sequence.slice(0, visibleCount).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={lineColor(line.type)}
          >
            {line.text}
            {i === visibleCount - 1 && line.type === "command" && (
              <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink align-middle" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
