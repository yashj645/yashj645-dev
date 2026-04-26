import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "hsl(220, 13%, 8%)",
          backgroundImage:
            "linear-gradient(to right, hsl(220, 13%, 18%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220, 13%, 18%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top: handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "24px",
            color: "hsl(220, 9%, 55%)",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "hsl(160, 84%, 50%)",
            }}
          />
          yashj645.dev
        </div>

        {/* Middle: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 800,
              color: "hsl(220, 13%, 95%)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "32px",
            }}
          >
            Yash Jain.
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 600,
              color: "hsl(220, 9%, 55%)",
              lineHeight: 1.2,
              maxWidth: "1000px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Senior full-stack engineer building&nbsp;</span>
            <span style={{ color: "hsl(160, 84%, 50%)" }}>
              commerce, tooling, and AI.
            </span>
          </div>
        </div>

        {/* Bottom: accent stripe + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              height: "4px",
              width: "120px",
              background: "hsl(160, 84%, 50%)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "60px",
              fontSize: "24px",
              color: "hsl(220, 13%, 95%)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "40px", fontWeight: 700 }}>6+ yrs</span>
              <span
                style={{
                  fontSize: "18px",
                  color: "hsl(220, 9%, 55%)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                engineering
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "40px", fontWeight: 700 }}>410+</span>
              <span
                style={{
                  fontSize: "18px",
                  color: "hsl(220, 9%, 55%)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                devs reached via OSS
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "40px", fontWeight: 700 }}>67%</span>
              <span
                style={{
                  fontSize: "18px",
                  color: "hsl(220, 9%, 55%)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                POS latency cut
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
