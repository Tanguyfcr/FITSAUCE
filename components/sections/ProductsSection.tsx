"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

type Props = { products: Product[] };

export default function ProductsSection({ products }: Props) {
  const { addToCart } = useCart();

  return (
    <section style={{ padding: "clamp(60px,8vw,96px) clamp(20px,4vw,40px)", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(28px,4vw,44px)", flexWrap: "wrap", gap: 16 }}>
        <div>
          <p className="label" style={{ color: "var(--orange)", marginBottom: 10 }}>// The Range</p>
          <h2 className="d" style={{ fontSize: "clamp(36px,5vw,60px)", color: "var(--ink)" }}>
            THREE SAUCES.<br />THREE ORIGINS.
          </h2>
        </div>
        <Link href="/shop">
          <button className="btn btn-ghost">View all →</button>
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} featured={false} />
        ))}
      </div>
    </section>
  );
}