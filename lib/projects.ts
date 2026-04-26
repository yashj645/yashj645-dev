export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metric: { value: string; label: string };
  tech: string[];
  links: { label: string; href: string; primary?: boolean }[];
  proprietary?: boolean;
};

export const projects: Project[] = [
  {
    id: "quip-mcp-server",
    title: "Quip MCP Server",
    tagline: "Open-source MCP server bridging Claude apps and Quip docs",
    description:
      "Published an MCP server on npm enabling Claude Desktop and Claude Code to read Quip documents and spreadsheets directly. Ships with a one-command cross-platform installer (bash + PowerShell) supporting stdio, HTTP team-sharing, and S3 storage modes.",
    metric: { value: "410+", label: "npm downloads · month one" },
    tech: ["Node.js", "TypeScript", "Model Context Protocol", "npm"],
    links: [
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/@yashj645/quip-mcp-server",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/yashj645/quip-mcp-server",
      },
    ],
  },
  {
    id: "fsi",
    title: "FSI — Fynd StoreOS Interface",
    tagline: "Versioned host↔extension communication library",
    description:
      "Architected a versioned JavaScript library using the postMessage API enabling FYND's StoreOS host to emit events and share state with iframe/WebView-embedded extension apps. Adopted by 5+ extensions and the StoreOS Android & iOS applications across v1, v2, v3.",
    metric: { value: "5+", label: "extensions · 3 platforms" },
    tech: ["JavaScript", "postMessage API", "iframe / WebView", "Versioning"],
    links: [{ label: "Read case study", href: "/work/fsi", primary: true }],
    proprietary: true,
  },
  {
    id: "faro",
    title: "Faro — AI Travel Bucket List",
    tagline: "Offline-first React Native app with 4 Claude AI integrations",
    description:
      "A full-stack offline-first travel app built on React Native + Supabase with four Claude AI integrations: place enrichment, similar destinations, natural-language filtering, and personalised recommendations. Google Maps with animated pins, trip itineraries, and bidirectional multi-device sync. Ships as a working Android APK with JWT-protected Edge Functions keeping all keys server-side.",
    metric: { value: "4", label: "Claude integrations · APK live" },
    tech: ["React Native", "Expo SDK 54", "TypeScript", "Supabase", "Claude AI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yashj645/faro",
        primary: true,
      },
    ],
  },
  {
    id: "fynd-pos",
    title: "FYND StoreOS — Offline-First POS",
    tagline: "Production PWA cutting order processing time by 67%",
    description:
      "Engineered a production offline-first PWA POS client using React, Service Workers, Web Workers, IndexedDB, and the Browser File System API. Delivered full offline capability and reduced average order processing time from 60s to 20s.",
    metric: { value: "67%", label: "latency reduction · 60s → 20s" },
    tech: ["React", "Service Workers", "IndexedDB", "PWA", "Web Workers"],
    links: [
      { label: "Read case study", href: "/work/fynd-pos", primary: true },
    ],
    proprietary: true,
  },
];
