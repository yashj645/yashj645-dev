"use client";

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Redux Toolkit",
      "TailwindCSS",
      "PWA",
      "Service Workers",
      "IndexedDB",
    ],
  },
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo SDK",
      "Reanimated",
      "Zustand",
      "NativeWind",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Kafka",
      "REST APIs",
    ],
  },
  {
    label: "AI / Tooling",
    items: ["Claude API", "Model Context Protocol", "OSS authoring"],
  },
  {
    label: "DevOps",
    items: [
      "Azure Pipelines",
      "GitHub Actions",
      "Docker",
      "AWS (EC2, S3)",
      "CI/CD",
    ],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Left: story */}
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-widest text-accent font-mono">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Six years on the seam between web, mobile, and now AI.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I'm a senior full-stack engineer based in India. I've spent the
              last six years building retail and commerce systems at scale —
              first at <span className="text-text">Quinbay</span> (for{" "}
              <span className="text-text">Blibli.com</span>), then at{" "}
              <span className="text-text">Two Point One</span>, and now at{" "}
              <span className="text-text">FYND</span>, where I work on the
              StoreOS platform powering retail brands across India.
            </p>
            <p>
              I'm happiest at the layer where systems meet — extension
              platforms, offline-first sync, host↔embed communication, and
              lately, MCP tooling that lets AI agents read real-world
              documents.
            </p>
            <p>
              Outside work, I ship side projects — a travel app called Faro
              with four Claude integrations, an open-source MCP server picked
              up by 400+ developers in its first month, and this site.
            </p>
          </div>
        </div>

        {/* Right: skills grid */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="p-5 rounded-xl border border-border bg-surface"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs rounded border border-border bg-bg/50 text-muted font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
