import { ImageResponse } from "next/og";

export const alt = "Caledon Station Homes — Investor Guide, Caledon, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #0B1526 0%, #14213D 58%, #1B3358 100%)",
          padding: "64px",
          color: "#F7F5F1",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C98A3B",
            marginBottom: 16,
          }}
        >
          Pre-construction investment · Caledon, Ontario
        </div>
        <div style={{ fontSize: 58, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Caledon Station Homes — Investor Guide
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#C98A3B",
          }}
        />
        <div style={{ marginTop: 24, fontSize: 26, maxWidth: 860, color: "#EFEBE3" }}>
          4,042 planned homes at The Gore Road & King Street. ROI framework, assignment status,
          and Peel Region comparisons.
        </div>
      </div>
    ),
    { ...size },
  );
}
