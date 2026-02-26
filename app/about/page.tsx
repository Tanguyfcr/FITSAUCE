// app/about/page.tsx

const VALUES = [
  {
    code: "01",
    title: "Origin or nothing",
    body: "We don't use 'Mediterranean-style' ingredients. We use Mediterranean ingredients. Basil from Liguria. Peppers from Catalonia. San Marzano from Campania. If it doesn't come from the right place, it doesn't go in the jar.",
  },
  {
    code: "02",
    title: "Performance is the brief",
    body: "Every recipe decision starts with the macros, not the taste. We work backwards from 50g+ protein per serving and build the flavour around that constraint. The result is food that performs first and tastes extraordinary second.",
  },
  {
    code: "03",
    title: "Labels you can read",
    body: "If you need a chemistry degree to read our ingredients list, we've failed. Every ingredient in every FitSauce product is something you can buy at a market. No E-numbers. No fillers. No exceptions.",
  },
];

const TIMELINE = [
  { year: "2022", event: "Founded in Barcelona after one too many bland post-workout meals." },
  { year: "2023", event: "First batch of High-Protein Pesto sold out in 48 hours at a local Hyrox event." },
  { year: "2024", event: "Launched in 3 countries. 10,000 jars sold. Zero added sugar in every single one." },
  { year: "2025", event: "Full Mediterranean range. DOP-certified ingredients. Still made in small batches." },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "clamp(100px,14vw,160px) clamp(20px,4vw,40px) clamp(60px,8vw,80px)",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}>

        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Orange bar right */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "clamp(3px,0.4vw,4px)", height: "50%", background: "var(--orange)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "end" }}>
          <div>
            <p className="label" style={{ color: "var(--orange)", marginBottom: 24 }}>// Our story</p>
            <h1 className="d" style={{ fontSize: "clamp(64px,9vw,140px)", color: "var(--ink)", lineHeight: 0.88 }}>
              BUILT FOR<br />
              PEOPLE WHO<br />
              <span style={{ color: "var(--orange)" }}>GIVE A DAMN.</span>
            </h1>
          </div>
          <div style={{ paddingBottom: 8 }}>
            <p style={{ fontFamily: "var(--body)", fontSize: "clamp(15px,1.4vw,18px)", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>
              FitSauce started with a simple observation: athletes obsess over every gram of protein in their diet, then drown their food in sauce with zero nutritional value.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: "clamp(15px,1.4vw,18px)", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>
              We built the sauce that should have always existed. Mediterranean flavour. Performance macros. Real ingredients from real places.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: "var(--ink)", padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// Timeline</p>
          <h2 className="d" style={{ fontSize: "clamp(40px,5vw,72px)", color: "#fff", marginBottom: "clamp(48px,6vw,80px)" }}>HOW WE<br />GOT HERE.</h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((t, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                gap: "clamp(20px,4vw,60px)",
                padding: "clamp(24px,3vw,36px) 0",
                borderTop: "1px solid rgba(255,255,255,.08)",
                alignItems: "start",
              }}>
                <span className="d" style={{ fontSize: "clamp(28px,3vw,40px)", color: "var(--orange)", lineHeight: 1 }}>{t.year}</span>
                <p style={{ fontFamily: "var(--body)", fontSize: "clamp(14px,1.2vw,16px)", color: "rgba(255,255,255,.55)", lineHeight: 1.7, fontWeight: 300, paddingTop: 6 }}>{t.event}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }} />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)", maxWidth: 1400, margin: "0 auto" }}>
        <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// What we stand for</p>
        <h2 className="d" style={{ fontSize: "clamp(40px,5vw,72px)", color: "var(--ink)", marginBottom: "clamp(48px,6vw,80px)" }}>THREE RULES.<br />NO EXCEPTIONS.</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 1fr",
              gap: "clamp(20px,4vw,60px)",
              padding: "clamp(28px,4vw,48px) 0",
              borderTop: "1px solid var(--faint)",
              alignItems: "start",
            }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "var(--orange)", letterSpacing: ".06em", paddingTop: 4 }}>{v.code}</span>
              <div>
                <h3 className="d" style={{ fontSize: "clamp(28px,3.5vw,48px)", color: "var(--ink)", marginBottom: 16, lineHeight: 0.95 }}>{v.title.toUpperCase()}</h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: 600 }}>{v.body}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--faint)" }} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--orange)", padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "center" }}>
          <h2 className="d" style={{ fontSize: "clamp(48px,7vw,100px)", color: "#fff", lineHeight: 0.88 }}>
            READY TO<br />EAT BETTER?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <p style={{ fontFamily: "var(--body)", fontSize: 16, color: "rgba(255,255,255,.8)", lineHeight: 1.7, fontWeight: 300 }}>
              Three sauces. Three origins. All the protein you need.
            </p>
            <a href="/shop" style={{ textDecoration: "none" }}>
              <button style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
                fontWeight: 700, padding: "14px 28px", background: "#fff", color: "var(--orange)",
                border: "none", borderRadius: 2, cursor: "pointer",
              }}>
                Shop the range →
              </button>
            </a>
            <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "rgba(255,255,255,.5)" }}>
              Fitsauce SRL · Carrer de la Providència 139, 08024 Barcelona
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}