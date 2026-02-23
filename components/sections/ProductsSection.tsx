"use client";

// components/sections/ProductsSection.tsx
// Grille produits de la homepage :
// - Desktop : 1 featured (grande) à gauche + 2 standard empilées à droite
// - Mobile  : colonne simple, 3 cartes standard

import Link from "next/link";
import { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

type Props = { products: Product[] };

export default function ProductsSection({ products }: Props) {
  const { addToCart } = useCart();

  return (
    <section style={{
      padding: "clamp(60px,8vw,96px) clamp(20px,4vw,40px)",
      maxWidth: 1400,
      margin: "0 auto",
    }}>
      {/* En-tête section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "clamp(28px,4vw,44px)",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <p className="label" style={{ color: "var(--orange)", marginBottom: 10 }}>// The Range</p>
          <h2 className="d" style={{ fontSize: "clamp(36px,5vw,60px)", color: "var(--ink)" }}>
            THREE SAUCES.<br />THREE ORIGINS.
          </h2>
        </div>
        <Link href="/shop">
          <button className="btn btn-ghost hide-mob">View all →</button>
        </Link>
      </div>

      {/* Grille asymétrique desktop — colonne unique mobile */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "clamp(1fr,1fr,1fr)",  // overridden by media in CSS
        gap: 16,
      }}>
        {/* On gère le layout via une div wrapper pour les 2 variantes */}
        <DesktopGrid products={products} onAdd={addToCart} />
      </div>

      {/* Bouton "View all" mobile */}
      <Link href="/shop">
        <button className="btn btn-ghost btn-full show-mob" style={{ marginTop: 20 }}>
          View all →
        </button>
      </Link>
    </section>
  );
}

// Layout desktop séparé pour éviter l'imbrication conditionnelle
function DesktopGrid({ products, onAdd }: { products: Product[]; onAdd: (p: Product) => void }) {
  return (
    <>
      {/* Desktop : grille asymétrique */}
      <div
        className="hide-mob"
        style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, alignItems: "start" }}
      >
        <ProductCard product={products[0]} onAdd={onAdd} featured />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {products.slice(1).map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>

      {/* Mobile : colonne simple */}
      <div className="show-mob" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} featured={i === 0} />
        ))}
      </div>
    </>
  );
}
