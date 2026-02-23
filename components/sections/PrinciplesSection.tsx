// components/sections/PrinciplesSection.tsx
// Panneau "Core principles" style terminal macOS.
// Barre noire en haut avec les 3 dots rouges/jaunes/verts.

import { MapPin, Zap, Shield } from "lucide-react";

const PRINCIPLES = [
  {
    icon: MapPin,
    n: "01",
    title: "Origin-first",
    body: "Every ingredient from the region that invented it. No shortcuts.",
  },
  {
    icon: Zap,
    n: "02",
    title: "Performance-grade",
    body: "50g+ protein per serving. Built around your macros.",
  },
  {
    icon: Shield,
    n: "03",
    title: "Nothing hidden",
    body: "Pure EVOO. Zero sugar. Ingredients you can read in 10 seconds.",
  },
];

const MACOS_DOTS = ["#FF5F57", "#FEBC2E", "#28C840"];

export default function PrinciplesSection() {
  return (
    <section style={{
      padding: "clamp(60px,6vw,80px) clamp(20px,4vw,40px) clamp(80px,8vw,100px)",
      maxWidth: 1400,
      margin: "0 auto",
    }}>
      <div style={{ border: "1.5px solid var(--ink)", borderRadius: 4, overflow: "hidden" }}>

        {/* Barre terminale */}
        <div style={{
          padding: "12px 18px",
          borderBottom: "1px solid var(--faint)",
          background: "var(--ink)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span className="label" style={{ color: "rgba(255,255,255,.35)", fontSize: 8.5 }}>
            // Core principles
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            {MACOS_DOTS.map((c) => (
              <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.8, display: "inline-block" }} />
            ))}
          </div>
        </div>

        {/* Panneaux — grille 3 colonnes desktop, colonne sur mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}>
          {PRINCIPLES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="val-panel">
                {/* En-tête du panel */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{
                    width: 34, height: 34,
                    border: "1.5px solid var(--faint)", borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={14} color="var(--orange)" />
                  </div>
                  <span style={{
                    fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
                    color: "var(--faint)", letterSpacing: ".06em",
                  }}>
                    {v.n}
                  </span>
                </div>
                <p style={{
                  fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 8,
                }}>
                  {v.title}
                </p>
                <p style={{
                  fontFamily: "var(--body)", fontSize: 13,
                  color: "var(--muted)", lineHeight: 1.65, fontWeight: 300,
                }}>
                  {v.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
