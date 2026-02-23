// app/page.tsx
// Homepage FitSauce — Server Component.
// On fetch les produits côté serveur (getAllProducts), puis on passe les données
// aux composants client qui ont besoin d'interactivité (ProductCard, etc.)

import { getAllProducts } from "@/lib/products";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";

// Next.js 14 — cette fonction s'exécute sur le serveur à chaque requête.
// Quand tu connecteras Shopify, getAllProducts() fera un vrai appel API ici.
export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <>
      <HeroSection />
      <Ticker />
      <ProductsSection products={products} />
      <div className="divider" style={{ maxWidth: 1400, margin: "0 auto" }} />
      <ManifestoSection />
      <div className="divider" style={{ maxWidth: 1400, margin: "0 auto" }} />
      <PrinciplesSection />
    </>
  );
}
