"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [liveDownloads, setLiveDownloads] = useState<number | null>(null);

  // Pull live npm downloads only for the MCP server card
  useEffect(() => {
    if (project.id !== "quip-mcp-server") return;
    fetch("/api/npm-downloads")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.downloads === "number") setLiveDownloads(d.downloads);
      })
      .catch(() => {});
  }, [project.id]);

  return (
    <article className="card-hover relative h-full p-6 md:p-7 rounded-xl border border-border bg-surface flex flex-col">
      {project.proprietary && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted">
          <Lock size={10} /> Case study
        </div>
      )}

      {/* Title + tagline */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-muted">{project.tagline}</p>
      </div>

      {/* Metric */}
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-accent">
          {project.id === "quip-mcp-server" && liveDownloads !== null
            ? `${liveDownloads}+`
            : project.metric.value}
        </span>
        <span className="text-xs text-muted">
          {project.id === "quip-mcp-server" && liveDownloads !== null
            ? "npm downloads · last 30 days · live"
            : project.metric.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded border border-border bg-bg/50 text-muted font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={
              link.primary
                ? "inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                : "inline-flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
            }
          >
            {link.label}
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </article>
  );
}
