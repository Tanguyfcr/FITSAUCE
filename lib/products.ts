// ─────────────────────────────────────────────────────────────────────────────
// lib/products.ts
// ─────────────────────────────────────────────────────────────────────────────

export type Macro = {
  label: string;
  value: string;
  pct: number;
};

export type Product = {
  id: number;
  slug: string;
  code: string;
  name: string;
  sub: string;
  tag: string;
  price: number;
  desc: string;
  img: string;
  images: string[];  // ← 3 photos pour la page produit
  macros: Macro[];
  sport: string;
};

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "high-protein-pesto",
    code: "FSC·001",
    name: "High-Protein Pesto",
    sub: "Basil · Liguria, IT",
    tag: "Recovery Window",
    price: 14.90,
    desc: "Cold-pressed Ligurian basil, 100% EVOO, 62g protein. Built for the 30-minute post-workout window.",
    img: "/images/pesto-1.png",
    images: ["/images/pesto-1.png", "/images/pesto-2.png", "/images/pesto-3.png"],
    macros: [
      { label: "Kcal",    value: "582", pct: 83 },
      { label: "Protein", value: "62g", pct: 88 },
      { label: "Carbs",   value: "26g", pct: 37 },
      { label: "Fat",     value: "36g", pct: 51 },
    ],
    sport: "Running · Strength · Hyrox",
  },
  {
    id: 2,
    slug: "spicy-romesco",
    code: "FSC·002",
    name: "Spicy Romesco",
    sub: "Red Pepper · Catalonia, ES",
    tag: "Pre-Load",
    price: 15.50,
    desc: "Roasted pepper, almonds, smoked paprika. Zero sugar. 57g protein. Heat and fuel in one jar.",
    img: "/images/romesco-1.png",
    images: ["/images/romesco-1.png", "/images/romesco-2.png", "/images/romesco-3.png"],
    macros: [
      { label: "Kcal",    value: "516", pct: 74 },
      { label: "Protein", value: "57g", pct: 81 },
      { label: "Carbs",   value: "16g", pct: 23 },
      { label: "Fat",     value: "22g", pct: 31 },
    ],
    sport: "HIIT · Hyrox · Running",
  },
  {
    id: 3,
    slug: "tomato-basil",
    code: "FSC·003",
    name: "Tomato Basil",
    sub: "San Marzano · Campania, IT",
    tag: "Base Nutrition",
    price: 12.90,
    desc: "San Marzano tomatoes, fresh basil, EVOO. 52g protein. The one you eat every day without thinking twice.",
    img: "/images/tomato-1.png",
    images: ["/images/tomato-1.png", "/images/tomato-2.png", "/images/tomato-3.png"],
    macros: [
      { label: "Kcal",    value: "498", pct: 71 },
      { label: "Protein", value: "52g", pct: 74 },
      { label: "Carbs",   value: "12g", pct: 17 },
      { label: "Fat",     value: "28g", pct: 40 },
    ],
    sport: "Everyday · Strength · Endurance",
  },
];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getAllProducts(): Promise<Product[]> {
  await delay(200);
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await delay(200);
  return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedProduct(): Promise<Product> {
  await delay(200);
  return MOCK_PRODUCTS[0];
}
