import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Jain — Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer specializing in offline-first commerce platforms, cross-surface extension tooling, and applied AI engineering.",
  metadataBase: new URL("https://yashj645-dev.vercel.app"),
  openGraph: {
    title: "Yash Jain — Senior Full-Stack Engineer",
    description:
      "Offline-first commerce platforms · Cross-surface extension tooling · Applied AI engineering.",
    url: "https://yashj645-dev.vercel.app",
    siteName: "Yash Jain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Jain — Senior Full-Stack Engineer",
    description:
      "Offline-first commerce platforms · Cross-surface extension tooling · Applied AI engineering.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
