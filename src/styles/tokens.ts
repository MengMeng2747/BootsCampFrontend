// ─── styles/tokens.ts ─────────────────────────────────────────────────────────
import type { CSSProperties } from "react";

export const T = {
  bg:       "#0d1117",
  surface:  "#161b22",
  surface2: "#1c2128",
  border:   "#30363d",
  border2:  "#21262d",
  text:     "#e6edf3",
  muted:    "#7d8590",
  dim:      "#484f58",
  accent:   "#58a6ff",
  green:    "#3fb950",
  yellow:   "#d29922",
  red:      "#f85149",
  orange:   "#f0883e",
  purple:   "#bc8cff",
} as const;

export const F: CSSProperties = {
  fontFamily: "'Noto Sans Thai', 'Sarabun', sans-serif",
};
