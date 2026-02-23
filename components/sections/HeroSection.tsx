"use client";

import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

const STATS = [
  { value: "57g",  label: "avg. protein / serving" },
  { value: "0g",   label: "added sugar" },
  { value: "3",    label: "sauces · 3 origins" },
  { value: "100%", label: "pure EVOO" },
];

const TRAINING_CHIPS = ["Running", "Strength", "Hyrox", "Endurance"];

export default function HeroSection() {
  return (
    <section style={{
      display: "flex",
      padding: "0 clamp(20px, 4vw, 40px)",
      paddingTop: "clamp(90px, 12vw, 110px)",
      paddingBottom: "clamp(60px, 8vw, 80px)",
      position: "relative",
      minHeight: "80vh",
    }}>

      {/* Grille de fond */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Barre orange verticale coin haut droite */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "clamp(3px,0.4vw,4px)",
        height: "clamp(25vh,30vh,35vh)",
        background: "var(--orange)",
      }} />

      {/* GRILLE GLOBALE 2x2 */}
      <div className="max-page" style={{
        position: "relative", zIndex: 1,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr auto",
        columnGap: 60,
      }}>

        {/* 1. HAUT GAUCHE : Titre */}
        <div style={{ paddingBottom: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="f1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(20px,3vw,28px)" }}>
            <span className="blink" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
            <span className="label" style={{ fontSize: "clamp(8px,1vw,9px)" }}>
              Mediterranean Performance Nutrition — System Online
            </span>
          </div>
          <h1 className="d f2" style={{
            fontSize: "clamp(48px,7vw,110px)",
            color: "var(--ink)",
            lineHeight: 0.88,
            margin: 0
          }}>
            PROTEIN.<br />
            OLIVE OIL.<br />
            <span style={{ color: "var(--orange)" }}>RESULTS.</span>
          </h1>
        </div>

        {/* 2. HAUT DROITE : Image */}
        <div style={{ paddingBottom: "clamp(20px, 3vw, 40px)" }}>
          <img
            src="/images/hero.png"
            alt="FitSauce"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
              minHeight: "200px",
              display: "block",
            }}
          />
        </div>

        {/* 3. BAS GAUCHE : Description + Boutons */}
        <div style={{
          paddingTop: "clamp(20px, 2.5vw, 28px)",
          borderTop: "1px solid var(--faint)",
        }}>
          <p style={{
            fontFamily: "var(--body)", fontSize: "clamp(14px,1.2vw,15px)",
            color: "var(--muted)", lineHeight: 1.7, fontWeight: 300, maxWidth: 420,
            marginBottom: 24,
          }}>
            High-protein Mediterranean sauces for athletes who track their macros and refuse to eat bland food.
            Real ingredients. Sourced from origin.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/shop">
              <button className="btn btn-orange" style={{ border: "none" }}>
                <ArrowRight size={13} style={{ marginRight: 8 }} /> Shop Now
              </button>
            </Link>
            <Link href="/science">
              <button className="btn btn-ghost">Our Science</button>
            </Link>
          </div>
        </div>

        {/* 4. BAS DROITE : Stats + Chips */}
        <div style={{
          paddingTop: "clamp(20px, 2.5vw, 28px)",
          borderTop: "1px solid var(--faint)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,auto)",
            alignItems: "start",
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ display: "contents" }}>
                <div style={{ paddingRight: 16, paddingLeft: i === 0 ? 0 : 16 }}>
                  <p className="d" style={{ fontSize: "clamp(20px,2vw,28px)", color: i === 0 ? "var(--orange)" : "var(--ink)", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p className="label" style={{ marginTop: 4, fontSize: "clamp(7px,0.7vw,8px)", lineHeight: 1.4 }}>
                    {s.label}
                  </p>
                </div>
                {i < 3 && <div style={{ width: 1, height: 30, background: "var(--faint)", alignSelf: "center" }} />}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Activity size={12} color="var(--orange)" />
            <p className="label" style={{ fontSize: "clamp(7.5px,0.8vw,8px)" }}>Optimised for:</p>
            {TRAINING_CHIPS.map((t) => (
              <span key={t} className="chip chip-outline" style={{ fontSize: 7.5 }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}