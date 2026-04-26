import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const res = await fetch(
      "https://api.npmjs.org/downloads/point/last-month/@yashj645/quip-mcp-server",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ downloads: null }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ downloads: data.downloads ?? null });
  } catch {
    return NextResponse.json({ downloads: null }, { status: 200 });
  }
}
