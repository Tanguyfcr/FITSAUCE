"use client";

// components/Nav.tsx
// Barre de navigation fixe en haut. Devient opaque au scroll.
// Contient : logo, liens desktop, bouton panier, menu hamburger mobile.

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Shop",    href: "/shop" },
  { label: "Science", href: "/science" },
  { label: "About",   href: "/about" },
];

export default function Nav() {
  const { cartQty, setCartOpen } = useCart();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // Détecte si l'utilisateur a scrollé
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Nav principale ── */}
      <nav
        className={`nav ${scrolled ? "nav-scrolled" : ""}`}
        style={{ padding: scrolled ? "14px 0" : "24px 0" }}
      >
        <div style={{
          maxWidth: "100%",
          padding: "0 clamp(20px, 4vw, 60px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className="d" style={{ fontSize: 26, color: "var(--ink)", letterSpacing: ".04em" }}>
              FITSAUCE
            </span>
            <span style={{ color: "var(--orange)", fontSize: 26, fontFamily: "var(--display)" }}>.</span>
          </Link>

          {/* Liens desktop */}
          <div className="hide-mob" style={{ display: "flex", gap: 40 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Bouton panier */}
            <button
              onClick={() => setCartOpen(true)}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                border: "1.5px solid var(--ink)", borderRadius: 2,
                padding: "10px 22px", background: "none", cursor: "pointer",
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em",
                textTransform: "uppercase", transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              <ShoppingBag size={14} />
              <span className="hide-mob">Basket</span>
              {cartQty > 0 && (
                <span style={{
                  background: "var(--orange)", color: "#fff",
                  width: 17, height: 17, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 8, fontWeight: 700,
                }}>
                  {cartQty}
                </span>
              )}
            </button>

            {/* Hamburger — mobile uniquement */}
            <button
              className="show-mob"
              onClick={() => setMenuOpen(true)}
              style={{
                border: "1.5px solid var(--ink)", borderRadius: 2,
                padding: "8px 10px", background: "none", cursor: "pointer",
              }}
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Menu mobile plein écran ── */}
      {menuOpen && (
        <div className="mobile-menu">
          {/* En-tête du menu */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <span className="d" style={{ fontSize: 20, color: "#fff", letterSpacing: ".04em" }}>
              FITSAUCE<span style={{ color: "var(--orange)" }}>.</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ border: "1px solid rgba(255,255,255,.15)", borderRadius: 2, padding: 8, background: "none", cursor: "pointer" }}
            >
              <X size={16} color="#fff" />
            </button>
          </div>

          {/* Liens */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--display)", fontSize: 52, letterSpacing: ".03em",
                  color: "rgba(255,255,255,.85)", textDecoration: "none",
                  lineHeight: 1.1, padding: "6px 0",
                  borderBottom: "1px solid rgba(255,255,255,.07)",
                  transition: "color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.85)")}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: 32 }}>
            <p className="label" style={{ color: "rgba(255,255,255,.2)", fontSize: 8 }}>
              Mediterranean Performance Nutrition
            </p>
          </div>
        </div>
      )}
    </>
  );
}
