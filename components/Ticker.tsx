// components/Ticker.tsx

const TICKER_ITEMS = [
  "High-Protein Pesto", "·", "Spicy Romesco", "·", "Tomato Basil", "·",
  "100% EVOO", "·", "Mediterranean Origin", "·", "No Additives", "·",
  "50g+ Protein", "·", "Zero Sugar", "·", "Hyrox Ready", "·", "Macro Tracked",
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap" style={{ padding: "11px 0", background: "var(--ink)" }}>
      <div className="ticker-inner">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: item === "·" ? "var(--orange)" : "rgba(255,255,255,.35)",
              marginRight: 26,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
