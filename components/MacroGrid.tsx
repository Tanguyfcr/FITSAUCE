// components/MacroGrid.tsx
// Grille 4 colonnes avec les macros de chaque produit.
// Prop "dark" = true pour la featured card (fond noir).

import { Macro } from "@/lib/products";

type Props = {
  macros: Macro[];
  dark?: boolean;
};

export default function MacroGrid({ macros, dark = false }: Props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
      {macros.map((m, i) => (
        <div key={i}>
          {/* Label */}
          <p className="label" style={{
            fontSize: 7, marginBottom: 4,
            color: dark ? "rgba(255,255,255,.4)" : "var(--muted)",
          }}>
            {m.label}
          </p>
          {/* Barre de progression */}
          <div
            className="mbar"
            style={{ background: dark ? "rgba(255,255,255,.12)" : "var(--faint)" }}
          >
            <div
              className="mbar-fill"
              style={{
                width: `${m.pct}%`,
                background: dark ? "rgba(255,255,255,.7)" : "var(--orange)",
              }}
            />
          </div>
          {/* Valeur */}
          <p style={{
            fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700,
            color: dark ? "#fff" : "var(--ink)",
          }}>
            {m.value}
          </p>
        </div>
      ))}
    </div>
  );
}
