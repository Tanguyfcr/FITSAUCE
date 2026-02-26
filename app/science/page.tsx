// app/science/page.tsx

const SCIENCE_PILLARS = [
  {
    code: "01",
    title: "Anabolic Window",
    subtitle: "0–30 minutes post-training",
    body: "The 30-minute window after intense training is when your muscle protein synthesis rate peaks. Delivering 40–60g of high-quality protein during this window accelerates recovery by up to 3x compared to delayed intake. Every FitSauce product is engineered to hit this window hard.",
    stat: "3×",
    statLabel: "faster recovery",
  },
  {
    code: "02",
    title: "Protein Quality Score",
    subtitle: "DIAAS rating above 1.0",
    body: "Not all protein is created equal. We use whey protein isolate with a DIAAS score above 1.0 — the gold standard for protein digestibility and amino acid completeness. This means your body actually absorbs and uses what's on the label.",
    stat: "1.1",
    statLabel: "DIAAS score",
  },
  {
    code: "03",
    title: "Glycaemic Engineering",
    subtitle: "Zero sugar. Low glycaemic load.",
    body: "Insulin spikes post-workout compete with growth hormone. Our formulations are engineered to deliver maximum protein density with a glycaemic load under 5 — keeping your hormonal environment anabolic without the crash.",
    stat: "<5",
    statLabel: "glycaemic load",
  },
  {
    code: "04",
    title: "Mediterranean Fat Profile",
    subtitle: "Oleic acid · Omega-3 ratio",
    body: "EVOO isn't just flavour. Cold-pressed extra virgin olive oil delivers oleocanthal — a natural anti-inflammatory compound — alongside a healthy oleic acid to omega-6 ratio that supports joint recovery and reduces systemic inflammation.",
    stat: "73%",
    statLabel: "monounsaturated fat",
  },
];

const RESEARCH_REFS = [
  { title: "Protein timing and muscle protein synthesis", journal: "Journal of the International Society of Sports Nutrition", year: "2013" },
  { title: "DIAAS: a new method for measuring protein quality", journal: "FAO Technical Report", year: "2011" },
  { title: "Oleocanthal as a natural anti-inflammatory", journal: "Nature — Chemical Biology", year: "2005" },
  { title: "Post-exercise glycaemic response and anabolism", journal: "American Journal of Clinical Nutrition", year: "2017" },
];

export default function SciencePage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "clamp(100px,14vw,160px) clamp(20px,4vw,40px) clamp(60px,8vw,80px)",
        position: "relative",
        overflow: "hidden",
        background: "var(--ink)",
        maxWidth: "100%",
      }}>

        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Orange accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "clamp(3px,0.4vw,4px)", height: "40%", background: "var(--orange)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", width: "100%" }}>
          <p className="label" style={{ color: "var(--orange)", marginBottom: 24 }}>// The Science</p>
          <h1 className="d" style={{ fontSize: "clamp(64px,10vw,160px)", color: "#fff", lineHeight: 0.88, marginBottom: 40 }}>
            FOOD IS<br />
            TECHNOLOGY.<br />
            <span style={{ color: "var(--orange)" }}>TREAT IT<br />LIKE ONE.</span>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40, maxWidth: 800, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,.1)" }}>
            {[
              { v: "62g", l: "Max protein / serving" },
              { v: "0g",  l: "Added sugar" },
              { v: "1.1", l: "DIAAS protein score" },
              { v: "3×",  l: "Faster recovery" },
            ].map((s, i) => (
              <div key={i}>
                <p className="d" style={{ fontSize: "clamp(36px,4vw,52px)", color: i === 0 ? "var(--orange)" : "#fff", lineHeight: 1 }}>{s.v}</p>
                <p className="label" style={{ color: "rgba(255,255,255,.35)", marginTop: 6 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE PILLARS ── */}
      <section style={{ padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)", maxWidth: 1400, margin: "0 auto" }}>
        <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// Four pillars</p>
        <h2 className="d" style={{ fontSize: "clamp(40px,5vw,72px)", color: "var(--ink)", marginBottom: "clamp(48px,6vw,80px)" }}>
          THE FORMULA.
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {SCIENCE_PILLARS.map((p, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "clamp(20px,4vw,60px)",
              padding: "clamp(28px,4vw,48px) 0",
              borderTop: "1px solid var(--faint)",
              alignItems: "start",
            }}>
              {/* Number */}
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "var(--orange)", letterSpacing: ".06em", paddingTop: 4 }}>{p.code}</span>

              {/* Content */}
              <div>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{p.subtitle}</p>
                <h3 className="d" style={{ fontSize: "clamp(28px,3.5vw,48px)", color: "var(--ink)", marginBottom: 16, lineHeight: 0.95 }}>{p.title.toUpperCase()}</h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: 580 }}>{p.body}</p>
              </div>

              {/* Stat */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p className="d" style={{ fontSize: "clamp(40px,5vw,72px)", color: "var(--orange)", lineHeight: 1 }}>{p.stat}</p>
                <p className="label" style={{ fontSize: 8, marginTop: 4 }}>{p.statLabel}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--faint)" }} />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "var(--ink)", padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// How we make it</p>
          <h2 className="d" style={{ fontSize: "clamp(40px,5vw,72px)", color: "#fff", marginBottom: "clamp(48px,6vw,80px)" }}>FROM FIELD<br />TO JAR.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 4, overflow: "hidden" }}>
            {[
              { n: "01", title: "Origin Sourcing", body: "Every ingredient is sourced directly from its region of origin. No intermediaries, no substitutes." },
              { n: "02", title: "Cold Processing", body: "Basil and EVOO are cold-pressed within 24h of harvest. Heat destroys antioxidants. We never use it." },
              { n: "03", title: "Protein Fortification", body: "Whey isolate is blended in post-processing to preserve texture and avoid denaturation." },
              { n: "04", title: "Lab Verification", body: "Every batch is tested for protein content, microbiological safety and allergen cross-contamination." },
            ].map((step, i) => (
              <div key={i} style={{ padding: "clamp(24px,3vw,36px)", background: "var(--ink)" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, color: "var(--orange)", letterSpacing: ".1em", display: "block", marginBottom: 16 }}>{step.n}</span>
                <h4 style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", marginBottom: 12 }}>{step.title}</h4>
                <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.65, fontWeight: 300 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH REFERENCES ── */}
      <section style={{ padding: "clamp(80px,10vw,120px) clamp(20px,4vw,40px)", maxWidth: 1400, margin: "0 auto" }}>
        <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// Research basis</p>
        <h2 className="d" style={{ fontSize: "clamp(36px,4.5vw,64px)", color: "var(--ink)", marginBottom: "clamp(40px,5vw,64px)" }}>PEER-REVIEWED.<br />NOT MARKETING.</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {RESEARCH_REFS.map((r, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "20px 0", borderTop: "1px solid var(--faint)",
              gap: 20, flexWrap: "wrap",
            }}>
              <div>
                <p style={{ fontFamily: "var(--body)", fontSize: 14, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>{r.title}</p>
                <p className="label" style={{ fontSize: 8, color: "var(--muted)" }}>{r.journal}</p>
              </div>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "var(--orange)", flexShrink: 0 }}>{r.year}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--faint)" }} />
        </div>
      </section>

    </div>
  );
}