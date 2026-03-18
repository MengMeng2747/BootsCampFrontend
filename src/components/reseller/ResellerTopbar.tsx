// ─── components/reseller/ResellerTopbar.tsx ───────────────────────────────────
import type { FC } from "react";
import { T, F } from "../../styles/tokens";
import type { ResellerPageId, ResellerUser } from "../../types";

const urlMap: Record<ResellerPageId, string> = {
  dashboard:    "/reseller/dashboard",
  catalog:      "/reseller/catalog",
  "my-products":"/reseller/my-products",
  orders:       "/reseller/orders",
  wallet:       "/reseller/wallet",
};

interface ResellerTopbarProps {
  page: ResellerPageId;
  onToggle: () => void;
  user: ResellerUser;
}

export const ResellerTopbar: FC<ResellerTopbarProps> = ({ page, onToggle, user }) => (
  <header style={{ height: 52, background: T.surface, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 14, flexShrink: 0 }}>
    <button onClick={onToggle} style={{ background: "none", border: "none", color: T.muted, cursor: "pointer", fontSize: 18, padding: 4 }}>☰</button>
    <div style={{ color: T.dim, fontSize: 12, ...F, flex: 1 }}>
      reseller <span style={{ color: T.border, margin: "0 5px" }}>/</span>
      <span style={{ color: T.muted }}>{urlMap[page].replace("/reseller/", "")}</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg,#58a6ff,#bc8cff)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>
        {user.name.charAt(0)}
      </div>
      <div>
        <div style={{ color: T.text, fontSize: 12, fontWeight: 600, ...F }}>{user.name}</div>
        <div style={{ color: T.muted, fontSize: 10, ...F }}>{user.email}</div>
      </div>
    </div>
  </header>
);
