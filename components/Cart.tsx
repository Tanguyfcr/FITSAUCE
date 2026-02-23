"use client";

// components/Cart.tsx
// Drawer panier qui glisse depuis la droite. S'ouvre via useCart().setCartOpen.

import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";

export default function Cart() {
  const { cart, cartOpen, setCartOpen, updateQty, cartQty, cartTotal } = useCart();

  if (!cartOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "rgba(10,10,10,.5)", backdropFilter: "blur(4px)",
        }}
        onClick={() => setCartOpen(false)}
      />

      {/* Panneau du panier */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        width: "clamp(320px, 100%, 400px)",
        background: "#fff", borderLeft: "1px solid var(--faint)",
        display: "flex", flexDirection: "column",
        padding: "32px",
        overflowY: "auto",
      }}>

        {/* En-tête */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <p className="label" style={{ marginBottom: 5 }}>
              {cartQty} {cartQty === 1 ? "item" : "items"}
            </p>
            <h2 className="d" style={{ fontSize: 32, color: "var(--ink)" }}>YOUR BASKET</h2>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            style={{ border: "1px solid var(--faint)", borderRadius: 2, padding: 7, background: "none", cursor: "pointer" }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Contenu */}
        <div style={{ flex: 1 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 60 }}>
              <p className="d" style={{ fontSize: 28, color: "var(--faint)" }}>EMPTY</p>
              <p className="label" style={{ marginTop: 8 }}>Add a sauce to begin</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-row" style={{ display: "flex", gap: 12 }}>
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: 60, height: 60, objectFit: "cover",
                    borderRadius: 2, filter: "brightness(.85)", flexShrink: 0,
                  }}
                />
                {/* Infos */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
                    color: "var(--ink)", marginBottom: 2,
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    {item.name}
                  </p>
                  <p className="label" style={{ fontSize: 7.5 }}>{item.sub}</p>

                  {/* Quantité + prix */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                    {/* Stepper */}
                    <div style={{ display: "flex", border: "1px solid var(--faint)", borderRadius: 2, overflow: "hidden" }}>
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        style={{ padding: "5px 12px", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--muted)", lineHeight: 1 }}
                      >−</button>
                      <span style={{
                        padding: "5px 14px", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 600,
                        borderLeft: "1px solid var(--faint)", borderRight: "1px solid var(--faint)",
                      }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        style={{ padding: "5px 12px", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--muted)", lineHeight: 1 }}
                      >+</button>
                    </div>
                    {/* Prix ligne */}
                    <span style={{ fontFamily: "var(--mono)", fontSize: 14, fontWeight: 700, color: "var(--orange)" }}>
                      {(item.price * item.qty).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer du panier — visible seulement si items */}
        {cart.length > 0 && (
          <div style={{ paddingTop: 20, borderTop: "1px solid var(--faint)", marginTop: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <span className="label">Total</span>
              <span className="d" style={{ fontSize: 36, color: "var(--ink)" }}>{cartTotal.toFixed(2)}€</span>
            </div>
            <button className="btn btn-orange btn-full" style={{ border: "none" }}>
              Proceed to Checkout
            </button>
            <p className="label" style={{ textAlign: "center", marginTop: 10 }}>Free shipping over 40€</p>
          </div>
        )}
      </div>
    </div>
  );
}
