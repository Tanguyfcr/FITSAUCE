// ─────────────────────────────────────────────────────────────────────────────
// lib/products.ts
//
// Toutes les données produits + mock fetch functions.
// Quand tu connecteras Shopify, tu remplaceras ces fonctions par de vrais
// appels à l'API Shopify Storefront (GraphQL). La structure des objets
// Product reste exactement la même — seul le "where the data comes from" change.
// ─────────────────────────────────────────────────────────────────────────────

export type Macro = {
  label: string;   // ex: "Protein"
  value: string;   // ex: "62g"
  pct: number;     // 0–100, pour la barre de progression
};

export type Product = {
  id: number;
  slug: string;       // ex: "high-protein-pesto" — utilisé pour l'URL /products/[slug]
  code: string;       // ex: "FSC·001"
  name: string;
  sub: string;        // ex: "Basil · Liguria, IT"
  tag: string;        // ex: "Recovery Window"
  price: number;
  desc: string;
  img: string;
  macros: Macro[];
  sport: string;
};

// ── Données brutes (mock "database") ─────────────────────────────────────────
// Remplacera les champs title, variants, images, metafields de Shopify.

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
    img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?auto=format&fit=crop&q=80&w=900",
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
    img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=900",
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
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=900",
    macros: [
      { label: "Kcal",    value: "498", pct: 71 },
      { label: "Protein", value: "52g", pct: 74 },
      { label: "Carbs",   value: "12g", pct: 17 },
      { label: "Fat",     value: "28g", pct: 40 },
    ],
    sport: "Everyday · Strength · Endurance",
  },
];

// ── Mock fetch functions ──────────────────────────────────────────────────────
// Ces fonctions simulent un appel réseau avec un petit délai (200ms).
// Quand tu passes à Shopify, tu les remplaceras par fetch() vers l'API GraphQL.
// La signature (inputs/outputs) reste IDENTIQUE — le reste du code ne change pas.

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * Récupère tous les produits.
 * → Shopify : query { products(first: 10) { edges { node { ... } } } }
 */
export async function getAllProducts(): Promise<Product[]> {
  await delay(200); // simule latence réseau
  return MOCK_PRODUCTS;
}

/**
 * Récupère un produit par son slug.
 * → Shopify : query { productByHandle(handle: $slug) { ... } }
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  await delay(200);
  return MOCK_PRODUCTS.find((p) => p.slug === slug) ?? null;
}

/**
 * Récupère le produit "featured" (le premier du catalogue).
 * → Shopify : query { products(first: 1, sortKey: MANUAL) { ... } }
 */
export async function getFeaturedProduct(): Promise<Product> {
  await delay(200);
  return MOCK_PRODUCTS[0];
}
