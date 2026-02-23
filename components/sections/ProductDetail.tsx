"use client";

// components/sections/ProductDetail.tsx
// Affichage complet d'un produit individuel.

import { Product } from "@/lib/products";
import MacroGrid from "@/components/MacroGrid";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Activity, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = { product: Product };

export default function ProductDetail({ product: p }: Props) {
  const { addToCart } = useCart();

  return (
    <section style={{
      paddingTop: "clamp(100px,12vw,140px)",
      padding: "clamp(100px,12vw,140px) clamp(20px,4vw,40px) clamp(80px,8vw,96px)",
      maxWidth: 1400,
      margin: "0 auto",
    }}>
      {/* Breadcrumb */}
      <Link href="/shop" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em",
          textTransform: "uppercase", color: "var(--muted)",
          display: "flex", alignItems: "center", gap: 6, marginBottom: 36,
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

        {/* Image */}
        <div style={{
          borderRadius: 4, overflow: "hidden",
          height: "clamp(300px,50vw,520px)",
          background: "var(--ink)",
        }}>
          <img
            src={p.img}
            alt={p.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: "brightness(.5) saturate(.7)",
            }}
          />
        </div>

        {/* Infos */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Code + tag */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="label" style={{ color: "var(--muted)" }}>{p.code}</span>
            <span className="chip chip-orange">{p.tag}</span>
          </div>

          {/* Nom */}
          <h1 className="d" style={{ fontSize: "clamp(44px,6vw,80px)", color: "var(--ink)" }}>
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
