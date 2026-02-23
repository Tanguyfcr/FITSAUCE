// app/about/page.tsx

export default function AboutPage() {
  return (
    <section style={{
      paddingTop: "clamp(100px,12vw,140px)",
      padding: "clamp(100px,12vw,140px) clamp(20px,4vw,40px) clamp(80px,8vw,96px)",
      maxWidth: 1400,
      margin: "0 auto",
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <p className="label" style={{ color: "var(--orange)", marginBottom: 16 }}>// Our story</p>
      <h1 className="d" style={{ fontSize: "clamp(48px,7vw,100px)", color: "var(--ink)", marginBottom: 24 }}>
        WHY<br />FITSAUCE.
      </h1>
      <p style={{
        fontFamily: "var(--body)", fontSize: 16, color: "var(--muted)",
        lineHeight: 1.75, fontWeight: 300, maxWidth: 520,
      }}>
        Mediterranean roots. Performance obsession. Full brand story coming soon.
      </p>
    </section>
  );
}
