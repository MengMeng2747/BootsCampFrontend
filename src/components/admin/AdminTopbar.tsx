// ─── components/admin/AdminTopbar.tsx ─────────────────────────────────────────
import type { FC } from "react";
import { T, F } from "../../styles/tokens";
import type { AdminPageId } from "../../types";

const urlMap: Record<AdminPageId, string> = {
  dashboard: "/admin/dashboard",
  products:  "/admin/products",
  resellers: "/admin/resellers",
  orders:    "/admin/orders",
};

interface AdminTopbarProps {
  page: AdminPageId;
  onToggle: () => void;
}

export const AdminTopbar: FC<AdminTopbarProps> = ({ page, onToggle }) => (
  <header style={{ height: 52, background: T.surface, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 14, flexShrink: 0 }}>
    <button onClick={onToggle} style={{ background: "none", border: "none", color: T.muted, cursor: "pointer", fontSize: 18, padding: 4 }}>☰</button>
    <div style={{ color: T.dim, fontSize: 12, ...F, flex: 1 }}>
      admin <span style={{ color: T.border, margin: "0 5px" }}>/</span>
      <span style={{ color: T.muted }}>{urlMap[page].replace("/admin/", "")}</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(88,166,255,.2)", border: `1px solid ${T.accent}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontSize: 12, fontWeight: 700 }}>A</div>
      <div>
        <div style={{ color: T.text, fontSize: 12, fontWeight: 600, ...F }}>Admin</div>
        <div style={{ color: T.muted, fontSize: 10, ...F }}>admin@rms.com</div>
      </div>
    </div>
  </header>
);
