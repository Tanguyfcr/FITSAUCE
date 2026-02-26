"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Activity, ArrowLeft, Leaf, Zap, Shield, MapPin, Truck, AlertTriangle } from "lucide-react";

// ── Enriched product data ──────────────────────────────────────────────────────

const PRODUCT_DATA: Record<string, {
  longDesc: string;
  ingredients: string;
  allergens: string;
  nutrition100g: { label: string; value: string; sub?: { label: string; value: string } }[];
  pairsWith: { label: string; emoji: string }[];
}> = {
  "high-protein-pesto": {
    longDesc: "Hand-harvested Grand Vert basil from the hills of Liguria, cold-pressed within 24 hours of picking to lock in every layer of flavour. Blended with first-press Sicilian EVOO and stone-ground Mediterranean pine nuts, then fortified with 62g of clean protein per serving. No fillers, no shortcuts — just the sauce serious athletes deserve. Built specifically for the 30-minute post-workout anabolic window.",
    ingredients: "Fresh basil (28%), extra virgin olive oil (22%), whey protein isolate (18%), pine nuts (12%), Parmigiano Reggiano (8%), cashews (5%), garlic, lemon juice, sea salt, black pepper.",
    allergens: "Contains: Milk, Tree Nuts (pine nuts, cashews). May contain traces of Gluten.",
    nutrition100g: [
      { label: "Energy", value: "582 kcal / 2435 kJ" },
      { label: "Fat", value: "36g", sub: { label: "of which saturates", value: "7.2g" } },
      { label: "Carbohydrate", value: "26g", sub: { label: "of which sugars", value: "1.8g" } },
      { label: "Fibre", value: "2.4g" },
      { label: "Protein", value: "62g" },
      { label: "Salt", value: "0.9g" },
    ],
    pairsWith: [
      { label: "Post-workout pasta", emoji: "🍝" },
      { label: "Grilled chicken", emoji: "🍗" },
      { label: "Rice bowl", emoji: "🍚" },
    ],
  },
  "spicy-romesco": {
    longDesc: "Slow-roasted Catalonian red peppers, charred over open flame and blended with Marcona almonds and smoked Vera paprika. Zero added sugar, zero compromise. At 57g of protein per serving with a glycaemic load of near-zero, this is the pre-training sauce built to load your muscles without spiking your insulin. Heat that works as hard as you do.",
    ingredients: "Roasted red peppers (32%), whey protein isolate (18%), Marcona almonds (15%), extra virgin olive oil (14%), tomatoes (8%), smoked paprika, garlic, sherry vinegar, sea salt, cayenne pepper.",
    allergens: "Contains: Milk, Tree Nuts (almonds). May contain traces of Gluten and Peanuts.",
    nutrition100g: [
      { label: "Energy", value: "516 kcal / 2159 kJ" },
      { label: "Fat", value: "22g", sub: { label: "of which saturates", value: "4.1g" } },
      { label: "Carbohydrate", value: "16g", sub: { label: "of which sugars", value: "9.2g" } },
      { label: "Fibre", value: "3.8g" },
      { label: "Protein", value: "57g" },
      { label: "Salt", value: "1.1g" },
    ],
    pairsWith: [
      { label: "Grilled white fish", emoji: "🐟" },
      { label: "Pre-workout toast", emoji: "🍞" },
      { label: "Roasted vegetables", emoji: "🥦" },
    ],
  },
  "tomato-basil": {
    longDesc: "San Marzano tomatoes — the only tomato with DOP certification — slow-simmered with fresh Campanian basil and finished with cold-pressed EVOO. 52g of protein per serving with the kind of clean macros that fit any meal, any day. This is the sauce you stop thinking about because it always works. Everyday performance nutrition, perfected.",
    ingredients: "San Marzano tomatoes DOP (40%), whey protein isolate (18%), extra virgin olive oil (12%), fresh basil (10%), onion (6%), garlic, sea salt, black pepper, oregano.",
    allergens: "Contains: Milk. May contain traces of Gluten, Tree Nuts and Peanuts.",
    nutrition100g: [
      { label: "Energy", value: "498 kcal / 2083 kJ" },
      { label: "Fat", value: "28g", sub: { label: "of which saturates", value: "5.6g" } },
      { label: "Carbohydrate", value: "12g", sub: { label: "of which sugars", value: "7.4g" } },
      { label: "Fibre", value: "2.1g" },
      { label: "Protein", value: "52g" },
      { label: "Salt", value: "0.8g" },
    ],
    pairsWith: [
      { label: "Pasta & meatballs", emoji: "🍝" },
      { label: "Shakshuka eggs", emoji: "🍳" },
      { label: "Protein pizza base", emoji: "🍕" },
    ],
  },
};

const TRUST_BADGES = [
  { icon: Leaf,   label: "100% Natural" },
  { icon: Shield, label: "No Preservatives" },
  { icon: Zap,    label: "Lab Tested" },
  { icon: MapPin, label: "Mediterranean Origin" },
];

type Props = { product: Product; allProducts: Product[] };

export default function ProductDetail({ product: p, allProducts }: Props) {
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState(0);

  const extra = PRODUCT_DATA[p.slug];
  const similar = allProducts.filter((x) => x.id !== p.id);

  return (
    <div>
      <section style={{
        padding: "clamp(100px,12vw,140px) clamp(20px,4vw,40px) clamp(60px,6vw,80px)",
        maxWidth: 1400, margin: "0 auto",
      }}>

        {/* Back link */}
        <Link href="/shop" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em",
            textTransform: "uppercase", color: "var(--muted)",
            display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 40,
          }}>
            <ArrowLeft size={11} /> Back to shop
          </span>
        </Link>

        {/* Shipping banner */}
        <div style={{
          background: "var(--ink)", borderRadius: 4, padding: "12px 20px",
          display: "flex", alignItems: "center", gap: 10, marginBottom: 40,
        }}>
          <Truck size={14} color="var(--orange)" />
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "rgba(255,255,255,.7)" }}>
            Shipping <strong style={{ color: "#fff" }}>€3.00</strong> · Free over <strong style={{ color: "#fff" }}>€40</strong> · Delivered in <strong style={{ color: "#fff" }}>3–5 business days</strong>
          </span>
        </div>

        {/* Main layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(32px,5vw,80px)",
          alignItems: "start",
        }}>

          {/* LEFT — Gallery */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ borderRadius: 4, overflow: "hidden", height: "clamp(300px,45vw,480px)", background: "var(--ink)" }}>
              <img
                src={p.images[activeImg]}
                alt={p.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity .3s ease" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {p.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    height: 80, borderRadius: 4, overflow: "hidden",
                    border: activeImg === i ? "2px solid var(--orange)" : "2px solid transparent",
                    cursor: "pointer", transition: "border .2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`${p.name} ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: activeImg === i ? 1 : 0.6, transition: "opacity .2s" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="label" style={{ color: "var(--muted)" }}>{p.code}</span>
              <span className="chip chip-orange">{p.tag}</span>
            </div>

            <h1 className="d" style={{ fontSize: "clamp(44px,6vw,80px)", color: "var(--ink)", lineHeight: 0.92 }}>{p.name}</h1>
            <p className="label" style={{ color: "var(--muted)" }}>{p.sub} · Net weight: 300g · Serving size: 100g</p>

            <p style={{ fontFamily: "var(--mono)", fontSize: 32, fontWeight: 700, color: "var(--orange)" }}>
              {p.price.toFixed(2)}€
            </p>

            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>
              {extra?.longDesc}
            </p>

            {/* Macros visual */}
            <div style={{ paddingTop: 16, borderTop: "1px solid var(--faint)" }}>
              <p className="label" style={{ marginBottom: 12 }}>Macros / 100g serving</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                {p.macros.map((m, i) => (
                  <div key={i}>
                    <p className="label" style={{ fontSize: 7, marginBottom: 6 }}>{m.label}</p>
                    <div style={{ height: 3, background: "var(--faint)", borderRadius: 2, marginBottom: 6, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${m.pct}%`, background: i === 1 ? "var(--orange)" : "var(--ink)", borderRadius: 2 }} />
                    </div>
                    <p className="d" style={{ fontSize: 22, color: i === 1 ? "var(--orange)" : "var(--ink)" }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Allergen warning */}
            <div style={{
              background: "#fff8f0", border: "1.5px solid var(--orange)",
              borderRadius: 4, padding: "12px 16px",
              display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <AlertTriangle size={14} color="var(--orange)" style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 4 }}>Allergen Information</p>
                <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--ink)", lineHeight: 1.6 }}>{extra?.allergens}</p>
              </div>
            </div>

            {/* Pairs well with */}
            <div style={{ paddingTop: 16, borderTop: "1px solid var(--faint)" }}>
              <p className="label" style={{ marginBottom: 12 }}>Pairs Well With</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {extra?.pairsWith.map((pair, i) => (
                  <span key={i} style={{
                    fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em",
                    padding: "6px 12px", border: "1px solid var(--faint)", borderRadius: 2,
                    color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 6,
                  }}>
                    {pair.emoji} {pair.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Sport */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Activity size={11} color="var(--orange)" />
              <p className="label" style={{ fontSize: 8 }}>{p.sport}</p>
            </div>

            {/* CTA */}
            <button className="btn btn-orange btn-full" style={{ border: "none", marginTop: 8 }} onClick={() => addToCart(p)}>
              <ShoppingBag size={13} color="#fff" />
              Add to Basket — {p.price.toFixed(2)}€
            </button>

            {/* Storage */}
            <p style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--muted)", lineHeight: 1.6 }}>
              🌡️ Store in a cool dry place. Refrigerate after opening. Use within 5 days.
            </p>

          </div>
        </div>

        {/* Trust Badges */}
        <div style={{
          marginTop: "clamp(48px,6vw,64px)",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))",
          gap: 1, background: "var(--faint)", border: "1px solid var(--faint)",
          borderRadius: 4, overflow: "hidden",
        }}>
          {TRUST_BADGES.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} style={{ background: "var(--white)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
                <Icon size={16} color="var(--orange)" />
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink)" }}>{b.label}</span>
              </div>
            );
          })}
        </div>

{/* EU Legal Nutrition Table */}
<div style={{ marginTop: "clamp(48px,6vw,64px)" }}>
  <p className="label" style={{ marginBottom: 16 }}>Nutritional Declaration (per 100g)</p>
  <div style={{ border: "1px solid var(--faint)", borderRadius: 4, overflow: "hidden" }}>
    <div style={{ background: "var(--ink)", padding: "10px 16px", display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "#fff" }}>Nutrient</span>
      <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700, color: "#fff" }}>Per 100g</span>
    </div>
    {extra?.nutrition100g.map((row, i) => (
      <div key={i}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: i % 2 === 0 ? "var(--white)" : "var(--bg)", borderTop: "1px solid var(--faint)" }}>
          <span style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{row.label}</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink)" }}>{row.value}</span>
        </div>
        {row.sub && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 16px 7px 32px", background: i % 2 === 0 ? "var(--white)" : "var(--bg)", borderTop: "1px solid var(--faint)" }}>
            <span style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--muted)" }}>of which {row.sub.label}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>{row.sub.value}</span>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

        {/* Full Ingredients */}
        <div style={{ marginTop: 32, padding: "20px 24px", background: "var(--bg)", border: "1px solid var(--faint)", borderRadius: 4 }}>
          <p className="label" style={{ marginBottom: 8 }}>Full Ingredients List</p>
          <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{extra?.ingredients}</p>
        </div>

        {/* Legal footer */}
        <div style={{ marginTop: 24, padding: "16px 0", borderTop: "1px solid var(--faint)" }}>
          <p style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--muted)", lineHeight: 1.7 }}>
            Distributed by <strong style={{ color: "var(--ink)" }}>Fitsauce SRL</strong> · Carrer de la Providència 139, 08024 Barcelona, Spain ·{" "}
            <a href="mailto:hello@fitsauce.com" style={{ color: "var(--orange)", textDecoration: "none" }}>hello@fitsauce.com</a>
          </p>
        </div>

      </section>

      {/* Similar products */}
      <section style={{ padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px)", background: "var(--ink)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="label" style={{ color: "rgba(255,255,255,.35)", marginBottom: 8 }}>// You might also like</p>
          <h2 className="d" style={{ fontSize: "clamp(32px,4vw,52px)", color: "#fff", marginBottom: 32 }}>THE REST OF THE RANGE.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
            {similar.map((s) => (
              <Link key={s.id} href={`/products/${s.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ border: "1px solid rgba(255,255,255,.1)", borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "border-color .25s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--orange)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,.1)")}
                >
                  <div style={{ height: 200, overflow: "hidden" }}>
                    <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.5) saturate(.6)" }} />
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <p className="label" style={{ color: "rgba(255,255,255,.3)", marginBottom: 6 }}>{s.code}</p>
                    <h3 className="d" style={{ fontSize: 28, color: "#fff", marginBottom: 8 }}>{s.name}</h3>
                    <p style={{ fontFamily: "var(--mono)", fontSize: 14, fontWeight: 700, color: "var(--orange)" }}>{s.price.toFixed(2)}€</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}