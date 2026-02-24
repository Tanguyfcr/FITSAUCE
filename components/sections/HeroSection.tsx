"use client";

import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const STATS = [
  { value: "57g",  label: "avg. protein / serving" },
  { value: "0g",   label: "added sugar" },
  { value: "3",    label: "sauces · 3 origins" },
  { value: "100%", label: "pure EVOO" },
];

const TRAINING_CHIPS = ["Running", "Strength", "Hyrox", "Endurance"];

export default function HeroSection() {
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const check = () => setMob(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{
      display: "flex",
      padding: `0 clamp(20px, 4vw, 40px)`,
      paddingTop: mob ? "80px" : "clamp(90px, 12vw, 110px)",
      paddingBottom: mob ? "40px" : "clamp(60px, 8vw, 80px)",
      position: "relative",
      minHeight: mob ? "auto" : "80vh",
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

      <div className="max-page" style={{
        position: "relative", zIndex: 1,
        width: "100%",
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
        gridTemplateRows: mob ? "auto" : "1fr auto",
        columnGap: 60,
        rowGap: mob ? 24 : 0,
      }}>

        {/* 1. Titre */}
        <div style={{
          paddingBottom: mob ? 0 : "clamp(20px, 3vw, 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div className="f1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: mob ? 16 : "clamp(20px,3vw,28px)" }}>
            <span className="blink" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--orange)", display: "inline-block", flexShrink: 0 }} />
            <span className="label" style={{ fontSize: mob ? 8 : "clamp(8px,1vw,9px)" }}>
              Mediterranean Performance Nutrition — System Online
            </span>
          </div>
          <h1 className="d f2" style={{
            fontSize: mob ? "clamp(52px,14vw,80px)" : "clamp(48px,7vw,110px)",
            color: "var(--ink)",
            lineHeight: 0.88,
            margin: 0,
          }}>
            PROTEIN.<br />
            OLIVE OIL.<br />
            <span style={{ color: "var(--orange)" }}>RESULTS.</span>
          </h1>
        </div>

        {/* 2. Image — sur mobile passe sous le titre */}
        <div style={{
          paddingBottom: mob ? 0 : "clamp(20px, 3vw, 40px)",
          order: mob ? 1 : 0,
        }}>
          <img
            src="/images/hero.png"
            alt="FitSauce"
            style={{
              width: "100%",
              height: mob ? "220px" : "100%",
              objectFit: "cover",
              borderRadius: 4,
              display: "block",
            }}
          />
        </div>

        {/* 3. Description + Boutons */}
        <div style={{
          paddingTop: "clamp(20px, 2.5vw, 28px)",
          borderTop: "1px solid var(--faint)",
          order: mob ? 2 : 0,
        }}>
          <p style={{
            fontFamily: "var(--body)",
            fontSize: mob ? 14 : "clamp(14px,1.2vw,15px)",
            color: "var(--muted)", lineHeight: 1.7, fontWeight: 300,
            maxWidth: 420, marginBottom: 20,
          }}>
            High-protein Mediterranean sauces for athletes who track their macros and refuse to eat bland food.
            Real ingredients. Sourced from origin.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/shop">
              <button className="btn btn-orange" style={{ border: "none", padding: mob ? "12px 20px" : "14px 28px" }}>
                <ArrowRight size={13} color="#fff" /> Shop Now
              </button>
            </Link>
            <Link href="/science">
              <button className="btn btn-ghost" style={{ padding: mob ? "11px 18px" : "13px 26px" }}>Our Science</button>
            </Link>
          </div>
        </div>

        {/* 4. Stats + Chips */}
        <div style={{
          paddingTop: "clamp(20px, 2.5vw, 28px)",
          borderTop: "1px solid var(--faint)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          order: mob ? 3 : 0,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,auto)",
            alignItems: "start",
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ display: "contents" }}>
                <div style={{ paddingRight: mob ? 10 : 16, paddingLeft: i === 0 ? 0 : (mob ? 10 : 16) }}>
                  <p className="d" style={{
                    fontSize: mob ? "clamp(18px,5vw,24px)" : "clamp(20px,2vw,28px)",
                    color: i === 0 ? "var(--orange)" : "var(--ink)",
                    lineHeight: 1,
                  }}>
                    {s.value}
                  </p>
                  <p className="label" style={{ marginTop: 4, fontSize: mob ? 7 : "clamp(7px,0.7vw,8px)", lineHeight: 1.4 }}>
                    {s.label}
                  </p>
                </div>
                {i < 3 && <div style={{ width: 1, height: 30, background: "var(--faint)", alignSelf: "center" }} />}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Activity size={12} color="var(--orange)" />
            <p className="label" style={{ fontSize: mob ? 7.5 : "clamp(7.5px,0.8vw,8px)" }}>Optimised for:</p>
            {TRAINING_CHIPS.map((t) => (
              <span key={t} className="chip chip-outline" style={{ fontSize: 7.5 }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
