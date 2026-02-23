"use client";

// components/sections/ShopGrid.tsx
// Grille de produits pour la page /shop.
// Client Component car il utilise useCart().

import { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

type Props = { products: Product[] };

export default function ShopGrid({ products }: Props) {
  const { addToCart } = useCart();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 16,
    }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
