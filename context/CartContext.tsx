"use client";

// ─────────────────────────────────────────────────────────────────────────────
// context/CartContext.tsx
//
// Gestion du panier partagé entre tous les composants.
// "use client" → ce fichier tourne dans le navigateur (pas sur le serveur).
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/products";

// Un item du panier = un produit + une quantité
export type CartItem = Product & { qty: number };

type CartContextType = {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  updateQty: (id: number, delta: number) => void;
  cartQty: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

// ── Provider : enveloppe toute l'app dans layout.tsx ─────────────────────────
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const cartQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, cartOpen, setCartOpen, addToCart, updateQty, cartQty, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ── Hook pratique ─────────────────────────────────────────────────────────────
// Utilise useCart() dans n'importe quel composant pour accéder au panier.
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
