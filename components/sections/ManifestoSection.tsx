// components/sections/ManifestoSection.tsx
// Section "Why FitSauce" : colonne gauche headline orange, colonne droite 3 valeurs.

const VALUES = [
  {
    n: "01",
    title: "Origin-first sourcing",
    body: "Basil from Liguria. Peppers from Catalonia. San Marzano from Campania. The real thing, not a supermarket approximation.",
  },
  {
    n: "02",
    title: "Performance-grade macros",
    body: "50g+ protein per serving. Every jar is macro-tracked and designed to fit your daily targets without guessing.",
  },
  {
    n: "03",
    title: "Zero compromise",
    body: "100% EVOO. No added sugar. No preservatives. If you can't pronounce it, it's not in here.",
  },
];

export default function ManifestoSection() {
  return (
    <section style={{
      padding: "clamp(60px,8vw,100px) clamp(20px,4vw,40px)",
      maxWidth: 1400,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "clamp(40px,6vw,80px)",
      alignItems: "center",
    }}>

      {/* Colonne gauche : headline */}
      <div>
        <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// Why FitSauce</p>
        <h2 className="d" style={{
          fontSize: "clamp(40px,5.5vw,70px)",
          color: "var(--ink)",
          marginBottom: "clamp(16px,2vw,24px)",
        }}>
          MADE FOR<br />PEOPLE WHO<br />TRACK<br />
          <span style={{ color: "var(--orange)" }}>EVERYTHING.</span>
        </h2>
        <p style={{
          fontFamily: "var(--body)", fontSize: 14,
          color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: 380,
        }}>
          You count your macros. You log your zones. You know the difference between 57g and 62g of protein.
          Your sauce should be as precise as your training.
        </p>
      </div>

      {/* Colonne droite : valeurs */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {VALUES.map((v, i) => (
          <div
            key={i}
            style={{
              display: "flex", gap: 20, padding: "22px 0",
              borderBottom: i < 2 ? "1px solid var(--faint)" : "none",
            }}
          >
            <span style={{
              fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700,
              color: "var(--orange)", letterSpacing: ".06em", flexShrink: 0, paddingTop: 2,
            }}>
              {v.n}
            </span>
            <div>
              <p style={{
                fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 700,
                letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 6,
              }}>
                {v.title}
              </p>
              <p style={{
                fontFamily: "var(--body)", fontSize: 13,
                color: "var(--muted)", lineHeight: 1.65, fontWeight: 300,
              }}>
                {v.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
