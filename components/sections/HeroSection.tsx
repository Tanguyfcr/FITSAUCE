"use client";

// components/sections/HeroSection.tsx

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
      alignItems: "stretch",
      padding: "0 clamp(20px, 4vw, 40px)",
      paddingTop: "clamp(90px, 12vw, 110px)",
      paddingBottom: "clamp(60px, 8vw, 80px)",
      position: "relative",
      overflow: "hidden",
      minHeight: "70vh",
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

      {/* Grille 2 colonnes — stretch pour que les deux colonnes aient la même hauteur */}
      <div className="max-page" style={{
        position: "relative", zIndex: 1,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "stretch",
      }}>

        {/* ── Colonne GAUCHE — texte principal ── */}
        {/* display:flex + flexDirection:column + justifyContent:space-between
            pousse les boutons vers le bas naturellement */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          <div>
            {/* Status pill */}
            <div className="f1" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(20px,3vw,28px)" }}>
              <span className="blink" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--orange)", display: "inline-block", flexShrink: 0 }} />
              <span className="label" style={{ fontSize: "clamp(8px,1vw,9px)" }}>
                Mediterranean Performance Nutrition — System Online
              </span>
            </div>

            {/* Headline */}
            <h1 className="d f2" style={{
              fontSize: "clamp(48px,7vw,110px)",
              color: "var(--ink)",
              lineHeight: 0.88,
            }}>
              PROTEIN.<br />
              OLIVE OIL.<br />
              <span style={{ color: "var(--orange)" }}>RESULTS.</span>
            </h1>
          </div>

          {/* Description + boutons — poussés en bas par space-between */}
          <div className="f3" style={{
            paddingTop: "clamp(20px,2.5vw,28px)",
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
                  <ArrowRight size={13} color="#fff" />Shop Now
                </button>
              </Link>
              <Link href="/science">
                <button className="btn btn-ghost">Our Science</button>
              </Link>
            </div>
          </div>

        </div>

        {/* ── Colonne DROITE — image/vidéo + stats ── */}
        {/* display:grid avec 2 rangées :
            - 1fr = l'image prend tout l'espace disponible
            - auto = les stats prennent juste ce qu'elles ont besoin */}
        <div style={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          gap: 16,
        }}>

          {/* Espace image/vidéo — s'étire pour remplir la rangée 1fr */}
          <div style={{
            background: "rgba(0,0,0,0.04)",
            borderRadius: 4,
            border: "1px dashed var(--faint)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "150px",
          }}>
            <p className="label" style={{ color: "var(--faint)" }}>Image / Vidéo</p>
          </div>

          {/* Stats + chips — rangée auto, s'aligne naturellement avec les boutons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Stats */}
            <div className="f4" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,auto)",
              paddingTop: 12,
              borderTop: "1px solid var(--faint)",
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
                  {i < 3 && <div className="stat-sep" />}
                </div>
              ))}
            </div>

            {/* Chips sport */}
            <div className="f5" style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <Activity size={12} color="var(--orange)" />
              <p className="label" style={{ fontSize: "clamp(7.5px,0.8vw,8px)" }}>Optimised for:</p>
              {TRAINING_CHIPS.map((t) => (
                <span key={t} className="chip chip-outline" style={{ fontSize: 7.5 }}>{t}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}