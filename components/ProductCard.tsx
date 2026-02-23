"use client";

// components/ProductCard.tsx

import { useState } from "react";
import { Plus, ShoppingBag, Activity } from "lucide-react";
import { Product } from "@/lib/products";
import MacroGrid from "./MacroGrid";

type Props = {
  product: Product;
  onAdd: (p: Product) => void;
  featured?: boolean;
};

export default function ProductCard({ product: p, onAdd, featured = false }: Props) {
  const [hov, setHov] = useState(false);

  if (featured) {
    return (
      <div className="card-featured">
        <div
          style={{ position: "relative", height: "clamp(260px, 40vw, 360px)", overflow: "hidden", background: "var(--ink)" }}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: hov ? "brightness(.55) saturate(.8)" : "brightness(.35) saturate(.5)",
              transform: hov ? "scale(1.04)" : "scale(1)",
              transition: "all .7s ease",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 35%,rgba(10,10,10,.88) 100%)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="chip chip-orange">{p.tag}</span>
            <span className="label" style={{ color: "rgba(255,255,255,.35)", fontSize: 7.5 }}>{p.code}</span>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
            <p className="label" style={{ color: "rgba(255,255,255,.38)", marginBottom: 4 }}>{p.sub}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <h3 className="d" style={{ fontSize: "clamp(32px,5vw,42px)", color: "#fff" }}>{p.name}</h3>
              <span style={{ fontFamily: "var(--mono)", fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, color: "var(--orange)" }}>
                {p.price.toFixed(2)}€
              </span>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px 20px 24px", background: "var(--ink)", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.65, fontWeight: 300 }}>{p.desc}</p>
          <MacroGrid macros={p.macros} dark />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Activity size={10} color="var(--orange)" />
            <p className="label" style={{ fontSize: 7.5, color: "rgba(255,255,255,.28)" }}>{p.sport}</p>
          </div>
          <button className="btn btn-orange btn-full" onClick={() => onAdd(p)} style={{ border: "none" }}>
            <Plus size={12} color="#fff" />Add to Basket
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "relative", height: 190, overflow: "hidden", background: "#111" }}>
        <img
          src={p.img}
          alt={p.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: hov ? "brightness(.65) saturate(.85)" : "brightness(.45) saturate(.55)",
            transform: hov ? "scale(1.05)" : "scale(1)",
            transition: "all .65s ease",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 28%,rgba(0,0,0,.65) 100%)" }} />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span className="chip" style={{ background: "rgba(0,0,0,.6)", backdropFilter: "blur(6px)", color: "rgba(255,255,255,.75)", border: "1px solid rgba(255,255,255,.15)" }}>
            {p.tag}
          </span>
        </div>
        <div style={{ position: "absolute", bottom: 12, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p className="label" style={{ color: "rgba(255,255,255,.32)", fontSize: 7, marginBottom: 2 }}>{p.sub}</p>
            <h3 className="d" style={{ fontSize: 26, color: "#fff", lineHeight: 1 }}>{p.name}</h3>
          </div>
          <span style={{ fontFamily: "var(--mono)", fontSize: 16, fontWeight: 700, color: "var(--orange)" }}>
            {p.price.toFixed(2)}€
          </span>
        </div>
      </div>
      <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 11 }}>
        <p style={{ fontFamily: "var(--body)", fontSize: 12.5, color: "var(--muted)", lineHeight: 1.6, fontWeight: 300, flex: 1 }}>{p.desc}</p>
        <div style={{ paddingTop: 12, borderTop: "1px solid var(--faint)" }}>
          <MacroGrid macros={p.macros} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Activity size={10} color="var(--orange)" />
          <p className="label" style={{ fontSize: 7.5 }}>{p.sport}</p>
        </div>
        <button className="btn btn-dark btn-full" onClick={() => onAdd(p)}>
          <ShoppingBag size={12} color="#fff" />Add to Basket
        </button>
      </div>
    </div>
  );
}
