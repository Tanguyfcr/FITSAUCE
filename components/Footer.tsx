// components/Footer.tsx

export default function Footer() {
  const links = ["Privacy", "Terms", "Contact", "Stockists"];

  return (
    <footer style={{ background: "var(--ink)", padding: "24px 40px" }}>
      <div
        className="max-page"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span className="d" style={{ fontSize: 18, color: "#fff", letterSpacing: ".04em" }}>
          FITSAUCE<span style={{ color: "var(--orange)" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {links.map((l) => (
            <span key={l} className="label" style={{ cursor: "pointer", color: "rgba(255,255,255,.25)", fontSize: 8.5 }}>
              {l}
            </span>
          ))}
        </div>
        <p className="label" style={{ color: "rgba(255,255,255,.18)", fontSize: 8 }}>
          © 2025 FitSauce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
