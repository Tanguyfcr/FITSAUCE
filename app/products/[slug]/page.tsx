// app/products/[slug]/page.tsx
// Page produit individuelle — URL : /products/high-protein-pesto par exemple.
// Next.js génère cette page dynamiquement selon le [slug] dans l'URL.

import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "@/components/sections/ProductDetail";

// Génère les URL statiques au build (optionnel mais bonne pratique)
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);

  // Si le produit n'existe pas, affiche la page 404
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
