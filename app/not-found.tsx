// app/not-found.tsx
// Page 404 automatiquement utilisée par Next.js quand une route n'existe pas.

import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 clamp(20px,4vw,40px)",
    }}>
      <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// 404</p>
      <h1 className="d" style={{ fontSize: "clamp(64px,10vw,140px)", color: "var(--ink)", marginBottom: 24 }}>
        NOT<br />FOUND.
      </h1>
      <p style={{
        fontFamily: "var(--body)", fontSize: 15, color: "var(--muted)",
        lineHeight: 1.75, fontWeight: 300, maxWidth: 420, marginBottom: 32,
      }}>
        This page doesn't exist. But our sauces do.
      </p>
      <Link href="/">
        <button className="btn btn-orange" style={{ border: "none" }}>
          Back to homepage
        </button>
      </Link>
    </section>
  );
}
