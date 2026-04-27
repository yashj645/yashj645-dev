"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-mono">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 max-w-3xl">
            Things I've shipped that I'd happily talk about for an hour.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
