import { ImageResponse } from "next/og";

export const alt = "Volkswagen offers in Bhubaneswar: price, EMI and free test drive";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #001e50 0%, #0a2a63 60%, #0090c8 100%)",
          padding: 72,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 999,
              border: "5px solid #ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            VW
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>Volkswagen Bhubaneswar</span>
            <span style={{ fontSize: 20, color: "#8fe3ff", letterSpacing: 2 }}>OFFERS AND BOOKINGS</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Volkswagen offers in Bhubaneswar with the best price of the month
          </span>
          <span style={{ fontSize: 28, color: "#cbd5e1" }}>
            Cash discount, exchange bonus, low EMI and a free home test drive across Odisha
          </span>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Tera", "Taigun", "Virtus", "Tiguan R-Line", "Golf GTI"].map((name) => (
            <span
              key={name}
              style={{
                fontSize: 24,
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.14)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
