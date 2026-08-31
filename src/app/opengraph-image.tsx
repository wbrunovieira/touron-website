import { ImageResponse } from "next/og";
import { business, fullAddress } from "@/lib/business";

export const alt = `${business.name} — auto peças em Petrópolis/RJ`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #02051f 0%, #040957 55%, #0a1180 100%)",
          color: "#eef1ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#ff9d1c,#d94a00)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            DESDE 1974
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#8b93bf" }}>
            {business.instagram.handle}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            Auto Peças Tourón
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#a5aeff" }}>
            A peça certa, sem rodar a cidade.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#b7bee0",
          }}
        >
          <div style={{ display: "flex" }}>{fullAddress}</div>
          <div style={{ display: "flex" }}>{business.phone.display}</div>
        </div>
      </div>
    ),
    size,
  );
}
