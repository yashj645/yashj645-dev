import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "FSI — Fynd StoreOS Interface | Yash Jain",
  description:
    "Architecting a versioned host↔extension communication library for retail POS, adopted across web, Android, and iOS.",
};

export default function FSIPage() {
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
        FSI — Fynd StoreOS Interface
      </h1>
      <p className="text-xl text-muted mb-10 leading-relaxed">
        A versioned host↔extension communication library that powers FYND's
        StoreOS extension ecosystem across web, Android, and iOS.
      </p>

      <div className="space-y-6 text-text leading-relaxed">
        <h2 className="text-2xl font-bold mt-10">The problem</h2>
        <p className="text-muted">
          FYND's StoreOS is a retail POS platform with a growing surface area —
          cash management, customer engagement, configuration, and a long tail
          of in-store workflows. As the host application matured, third-party
          and internal teams needed a way to embed extension apps inside the
          POS without each one re-inventing how it would talk to the host.
        </p>
        <p className="text-muted">
          The constraints were unusual: the same extension had to load inside
          an iframe on the web POS, a WebView on the Android POS, and a
          WKWebView on iOS — three transport surfaces with subtle differences
          in postMessage semantics, lifecycle, and origin enforcement.
        </p>

        <h2 className="text-2xl font-bold mt-10">The design</h2>
        <p className="text-muted">
          FSI is a small, versioned JavaScript library that lives on both
          sides of the boundary. It exposes a typed event API on top of
          postMessage, with explicit versioning baked into the protocol so
          that the host and extension can negotiate capabilities without
          breaking older extensions when the host evolves.
        </p>
        <p className="text-muted">
          State sharing, event emission, and request/response are all modelled
          through a single message envelope. The host picks transport based on
          surface — DOM postMessage on the web, native bridge calls on iOS and
          Android — but the extension code stays identical across all three.
        </p>

        <h2 className="text-2xl font-bold mt-10">Outcomes</h2>
        <ul className="list-disc list-inside space-y-2 text-muted ml-2">
          <li>Adopted by 5+ extensions and the StoreOS Android & iOS apps.</li>
          <li>Three protocol versions (v1, v2, v3) shipped without breaking older extensions.</li>
          <li>
            Removed an entire category of bugs — surface-specific edge cases
            in iframe/WebView messaging — by centralising the transport.
          </li>
          <li>
            Cut new-extension onboarding time meaningfully (from per-team
            transport plumbing to importing a versioned library).
          </li>
        </ul>

        <p className="text-sm text-muted mt-12 pt-6 border-t border-border">
          Code is proprietary. Happy to walk through architecture in more
          detail in an interview.
        </p>
      </div>
    </main>
  );
}
