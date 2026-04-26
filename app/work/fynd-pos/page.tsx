import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "FYND StoreOS POS — Offline-First | Yash Jain",
  description:
    "Engineering a production offline-first PWA POS that cut order processing time by 67%.",
};

export default function FyndPosPage() {
  return (
    <main className="px-6 md:px-12 lg:px-20 py-24 max-w-3xl mx-auto">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-text mb-12"
      >
        <ArrowLeft size={14} /> Back
      </Link>

      <span className="text-xs uppercase tracking-widest text-accent font-mono">
        Case Study · 2024 – present
      </span>
      <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
        FYND StoreOS — Offline-First POS
      </h1>
      <p className="text-xl text-muted mb-10 leading-relaxed">
        A production PWA POS client that drops to zero network requirements
        during a sale and cuts order processing latency from 60s to 20s.
      </p>

      <div className="space-y-6 text-text leading-relaxed">
        <h2 className="text-2xl font-bold mt-10">The problem</h2>
        <p className="text-muted">
          Indian retail floors deal with patchy network conditions — bad WiFi,
          dead zones near the till, and peak-hour LTE congestion. When a POS
          stalls during a sale, the entire queue stalls with it. The original
          POS workflow assumed connectivity at every step, which made
          checkout brittle and slow even when things were online.
        </p>

        <h2 className="text-2xl font-bold mt-10">The approach</h2>
        <p className="text-muted">
          The PWA leans on the full offline-first toolkit: a Service Worker
          for navigation and asset caching, IndexedDB for the offline order
          and cart store, Web Workers for heavy computation off the main
          thread, and the Browser File System API for receipt and invoice
          handoff to native printers.
        </p>
        <p className="text-muted">
          The mental model: the POS is offline by default, and the network is
          a write-behind sync target. Every order is created and confirmed
          locally first, then queued for sync. The cashier never waits on the
          server during a sale.
        </p>

        <h2 className="text-2xl font-bold mt-10">Outcomes</h2>
        <ul className="list-disc list-inside space-y-2 text-muted ml-2">
          <li>
            Average order processing time cut by 67% — from 60s end-to-end to
            20s.
          </li>
          <li>
            Full offline capability: stores can keep selling through
            connectivity drops with no operator intervention.
          </li>
          <li>
            Knock-on improvements: less main-thread jank, faster cold starts,
            and a sync layer that cleanly handles conflict resolution on
            reconnect.
          </li>
        </ul>

        <p className="text-sm text-muted mt-12 pt-6 border-t border-border">
          Code is proprietary. Happy to walk through the offline sync design
          in more detail in an interview.
        </p>
      </div>
    </main>
  );
}
