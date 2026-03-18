// ─── components/Layout.tsx ────────────────────────────────────────────────────
import type { FC, ReactNode } from "react";
import { T, F } from "../styles/tokens";

// ── StatCard ──────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
  icon: string;
}

export const StatCard: FC<StatCardProps> = ({ label, value, sub, accent = T.accent, icon }) => (
  <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: "18px 20px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", right: 14, top: 12, fontSize: 28, opacity: .15 }}>{icon}</div>
    <div style={{ color: T.muted, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", ...F, marginBottom: 8 }}>{label}</div>
    <div style={{ color: T.text, fontSize: 26, fontWeight: 700, ...F }}>{value}</div>
    {sub && <div style={{ color: T.muted, fontSize: 12, marginTop: 4, ...F }}>{sub}</div>}
    <div style={{ height: 2, background: `linear-gradient(90deg,${accent},transparent)`, borderRadius: 2, marginTop: 14 }} />
  </div>
);

// ── PageHeader ────────────────────────────────────────────
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, action }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
    <div>
      <h2 style={{ color: T.text, fontSize: 22, margin: "0 0 4px", fontWeight: 700, ...F }}>{title}</h2>
      {subtitle && <p style={{ color: T.muted, margin: 0, fontSize: 13, ...F }}>{subtitle}</p>}
    </div>
    {action}
  </div>
);

// ── EmptyState ────────────────────────────────────────────
interface EmptyStateProps {
  icon?: string;
  message?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({ icon = "📭", message = "ไม่มีข้อมูล" }) => (
  <div style={{ textAlign: "center", padding: "52px 24px", color: T.muted, ...F }}>
    <div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>
    <div style={{ fontSize: 14 }}>{message}</div>
  </div>
);
