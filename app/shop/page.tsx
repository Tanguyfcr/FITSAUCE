// app/shop/page.tsx
// Page Shop — affiche les 3 produits en grille 3 colonnes.
// Server Component : fetch des produits côté serveur.

import { getAllProducts } from "@/lib/products";
import ShopGrid from "@/components/sections/ShopGrid";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <section style={{
      paddingTop: "clamp(100px,12vw,140px)",
      paddingBottom: "clamp(80px,8vw,96px)",
      padding: "clamp(100px,12vw,140px) clamp(20px,4vw,40px) clamp(80px,8vw,96px)",
      maxWidth: 1400,
      margin: "0 auto",
    }}>
      <div style={{ marginBottom: "clamp(28px,4vw,44px)" }}>
        <p className="label" style={{ color: "var(--orange)", marginBottom: 10 }}>// Full Range</p>
        <h2 className="d" style={{ fontSize: "clamp(48px,7vw,90px)", color: "var(--ink)" }}>
          ALL SAUCES
        </h2>
      </div>
      <ShopGrid products={products} />
    </section>
  );
}
