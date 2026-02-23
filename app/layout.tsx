// app/layout.tsx
// L'enveloppe racine. Tout ce qui est ici s'applique à TOUTES les pages.
// C'est ici qu'on met le CartProvider (panier global) et les métadonnées SEO.

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: "FITSAUCE — Mediterranean Performance Nutrition",
  description: "High-protein Mediterranean sauces for athletes who track their macros. Real ingredients. Sourced from origin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* CartProvider donne accès au panier à toute l'app */}
        <CartProvider>
          <Nav />
          <Cart />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
