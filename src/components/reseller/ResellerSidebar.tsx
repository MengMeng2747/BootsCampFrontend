// ─── components/reseller/ResellerSidebar.tsx ──────────────────────────────────
import type { FC } from "react";
import { T, F } from "../../styles/tokens";
import type { ResellerPageId, ResellerUser } from "../../types";

interface NavItem { id: ResellerPageId; label: string; icon: string; }
const navItems: NavItem[] = [
  { id: "dashboard",   label: "Dashboard",     icon: "⊞" },
  { id: "catalog",     label: "เลือกสินค้า",   icon: "🏪" },
  { id: "my-products", label: "สินค้าในร้าน",  icon: "📦" },
  { id: "orders",      label: "ออเดอร์",        icon: "🛒" },
  { id: "wallet",      label: "Wallet",         icon: "💰" },
];

interface ResellerSidebarProps {
  page: ResellerPageId;
  setPage: (p: ResellerPageId) => void;
  onLogout: () => void;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  user: ResellerUser;
}

export const ResellerSidebar: FC<ResellerSidebarProps> = ({ page, setPage, onLogout, collapsed, setCollapsed, user }) => (
  <aside style={{ width: collapsed ? 60 : 220, minHeight: "100vh", background: T.surface, borderRight: `1px solid ${T.border}`, display: "flex", flexDirection: "column", transition: "width .2s", flexShrink: 0 }}>
    <div style={{ padding: collapsed ? "16px 14px" : "16px 20px", borderBottom: `1px solid ${T.border2}`, display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,#58a6ff,#bc8cff)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
        {user.name.charAt(0)}
      </div>
      {!collapsed && (
        <div style={{ overflow: "hidden" }}>
          <div style={{ color: T.text, fontWeight: 700, fontSize: 13, ...F, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.shopName}</div>
          <div style={{ color: T.muted, fontSize: 10, ...F }}>/shop/{user.shopSlug}</div>
        </div>
      )}
    </div>

    <button onClick={() => setCollapsed(c => !c)} style={{ background: "none", border: "none", color: T.muted, cursor: "pointer", padding: "8px 0", textAlign: "center", fontSize: 14 }}>
      {collapsed ? "›" : "‹"}
    </button>

    <nav style={{ flex: 1, padding: 8 }}>
      {navItems.map(n => {
        const active = page === n.id;
        return (
          <button key={n.id} onClick={() => setPage(n.id)} title={collapsed ? n.label : undefined}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: collapsed ? "10px 0" : "10px 12px", justifyContent: collapsed ? "center" : "flex-start", marginBottom: 2, borderRadius: 8, border: "none", cursor: "pointer", background: active ? "rgba(88,166,255,.15)" : "transparent", color: active ? T.accent : T.muted, ...F }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>{n.icon}</span>
            {!collapsed && <span style={{ fontSize: 13, fontWeight: active ? 700 : 400 }}>{n.label}</span>}
          </button>
        );
      })}
    </nav>

    <div style={{ padding: "12px 8px", borderTop: `1px solid ${T.border2}` }}>
      <button onClick={onLogout} title={collapsed ? "ออกจากระบบ" : undefined}
        style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: collapsed ? "10px 0" : "10px 12px", justifyContent: collapsed ? "center" : "flex-start", borderRadius: 8, border: "none", cursor: "pointer", background: "transparent", color: T.muted, ...F }}>
        <span style={{ fontSize: 16 }}>⏻</span>
        {!collapsed && <span style={{ fontSize: 13 }}>ออกจากระบบ</span>}
      </button>
    </div>
  </aside>
);
