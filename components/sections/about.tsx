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
      "Web Workers",
      "IndexedDB",
    ],
  },
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo SDK",
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
      "Firebase",
      "SQLite",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    label: "AI / Agentic",
    items: [
      "Claude API",
      "Model Context Protocol",
      "Prompt Engineering",
      "RAG Patterns",
      "Edge Functions",
    ],
  },
  {
    label: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Azure Pipelines",
      "GitHub Actions",
      "AWS (EC2, S3)",
    ],
  },
  {
    label: "Observability",
    items: [
      "Sentry",
      "Grafana",
      "OpenTelemetry",
      "GCP Cloud Logging",
      "Jest",
      "Vitest",
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
            5+ years on the seam between web, mobile, and agentic AI.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I'm a full-stack engineer based in India. I've spent 5+ years
              building retail and commerce systems at scale — first at{" "}
              <span className="text-text">Quinbay</span> (for{" "}
              <span className="text-text">Blibli.com</span>), then at{" "}
              <span className="text-text">Two Point One</span>, and now at{" "}
              <span className="text-text">FYND</span>, where I architect
              platform-level infrastructure for the StoreOS ecosystem.
            </p>
            <p>
              I'm happiest at the layer where systems meet — extension
              platforms, offline-first sync, host↔embed communication, and
              agentic AI tooling built on MCP and the Claude API.
            </p>
            <p>
              Outside work, I ship open-source and side projects — an MCP
              server picked up by 410+ developers in its first month, and{" "}
              <span className="text-text">Faro</span>, a travel app with 4
              Claude API integrations running in production.
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
