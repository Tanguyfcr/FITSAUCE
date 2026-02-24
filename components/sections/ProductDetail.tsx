"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import MacroGrid from "@/components/MacroGrid";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Activity, ArrowLeft } from "lucide-react";

type Props = { product: Product };

export default function ProductDetail({ product: p }: Props) {
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section style={{
      padding: "clamp(100px,12vw,140px) clamp(20px,4vw,40px) clamp(80px,8vw,96px)",
      maxWidth: 1400,
      margin: "0 auto",
    }}>

      {/* Breadcrumb */}
      <Link href="/shop" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em",
          textTransform: "uppercase", color: "var(--muted)",
          display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 40,
        }}>
          <ArrowLeft size={11} /> Back to shop
        </span>
      </Link>

      {/* Layout 2 colonnes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "clamp(32px,5vw,80px)",
        alignItems: "start",
      }}>

        {/* ── Colonne GAUCHE — Galerie ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Photo principale */}
          <div style={{
            borderRadius: 4, overflow: "hidden",
            height: "clamp(300px,45vw,480px)",
            background: "var(--ink)",
          }}>
            <img
              src={p.images[activeImg]}
              alt={p.name}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "opacity .3s ease",
              }}
            />
          </div>

          {/* Miniatures */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {p.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  height: 80, borderRadius: 4, overflow: "hidden",
                  border: activeImg === i ? "2px solid var(--orange)" : "2px solid transparent",
                  cursor: "pointer", transition: "border .2s",
                }}
              >
                <img
                  src={img}
                  alt={`${p.name} ${i + 1}`}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    opacity: activeImg === i ? 1 : 0.6,
                    transition: "opacity .2s",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Colonne DROITE — Infos ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Code + tag */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="label" style={{ color: "var(--muted)" }}>{p.code}</span>
            <span className="chip chip-orange">{p.tag}</span>
          </div>

          {/* Nom */}
          <h1 className="d" style={{ fontSize: "clamp(44px,6vw,80px)", color: "var(--ink)", lineHeight: 0.92 }}>
            {p.name}
          </h1>
          <p className="label" style={{ color: "var(--muted)" }}>{p.sub}</p>

          {/* Prix */}
          <p style={{ fontFamily: "var(--mono)", fontSize: 32, fontWeight: 700, color: "var(--orange)" }}>
            {p.price.toFixed(2)}€
          </p>

          {/* Description */}
          <p style={{
            fontFamily: "var(--body)", fontSize: 15, color: "var(--muted)",
            lineHeight: 1.75, fontWeight: 300,
          }}>
            {p.desc}
          </p>

          {/* Macros */}
          <div style={{ paddingTop: 16, borderTop: "1px solid var(--faint)" }}>
            <p className="label" style={{ marginBottom: 12 }}>Macros / serving</p>
            <MacroGrid macros={p.macros} />
          </div>

          {/* Sport */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Activity size={11} color="var(--orange)" />
            <p className="label" style={{ fontSize: 8 }}>{p.sport}</p>
          </div>

          {/* CTA */}
          <button
            className="btn btn-orange btn-full"
            style={{ border: "none", marginTop: 8 }}
            onClick={() => addToCart(p)}
          >
            <ShoppingBag size={13} color="#fff" />
            Add to Basket — {p.price.toFixed(2)}€
          </button>

        </div>
      </div>
    </section>
  );
}
