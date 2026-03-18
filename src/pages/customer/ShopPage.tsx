// ─── pages/customer/ShopPage.tsx ─────────────────────────────────────────────
// URL: /shop/:slug
// BR-24: URL ชื่อร้านไม่มีในระบบ → แสดงหน้า 404
// BR-25: สต็อกสินค้า = 0 → แสดง "สินค้าหมด" ปุ่ม Disabled
import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { T, F } from "../../styles/tokens";
import type { ResellerUser, ShopProduct } from "../../types";

interface ShopPageProps {
  resellers:    ResellerUser[];
  shopProducts: ShopProduct[];
}

export const ShopPage: FC<ShopPageProps> = ({ resellers, shopProducts }) => {
  const { slug }   = useParams<{ slug: string }>();
  const navigate   = useNavigate();

  // หาร้านจาก slug
  const reseller = resellers.find(r => r.shopSlug === slug && r.status === "approved");

  // BR-24: ไม่พบร้าน
  if (!reseller) {
    return (
      <div style={{ minHeight: "100vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", ...F }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🏪</div>
          <h1 style={{ color: T.red, fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>404</h1>
          <p style={{ color: T.muted, fontSize: 16, margin: "0 0 24px" }}>ไม่พบร้านค้านี้ในระบบ (BR-24)</p>
          <button onClick={() => navigate("/")}
            style={{ padding: "10px 22px", background: T.accent, border: "none", borderRadius: 8, color: "#0d1117", fontWeight: 700, cursor: "pointer", ...F }}>
            กลับหน้าหลัก
          </button>
        </div>
      </div>
    );
  }

  // สินค้าในร้านนี้
  const myProducts = shopProducts.filter(sp => sp.shopId === reseller.id);

  return (
    <div style={{ minHeight: "100vh", background: T.bg, ...F }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Shop Header */}
      <div style={{ background: T.surface, borderBottom: `1px solid ${T.border}`, padding: "24px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg,${T.accent},#bc8cff)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#fff", fontWeight: 700 }}>
              {reseller.shopName.charAt(0)}
            </div>
            <div>
              <h1 style={{ color: T.text, fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>{reseller.shopName}</h1>
              <p style={{ color: T.muted, fontSize: 13, margin: 0 }}>URL: /shop/{reseller.shopSlug}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>
        {myProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px", color: T.muted }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📦</div>
            <p style={{ fontSize: 16 }}>ยังไม่มีสินค้าในร้านนี้</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
            {myProducts.map(sp => {
              const outOfStock = sp.stock === 0; // BR-25
              return (
                <div key={sp.id} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden", opacity: outOfStock ? .65 : 1 }}>
                  {/* รูปสินค้า */}
                  <div style={{ height: 180, background: T.surface2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, position: "relative" }}>
                    {sp.imagePreview
                      ? <img src={sp.imagePreview} alt={sp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : "📦"
                    }
                    {outOfStock && (
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: T.red, fontWeight: 700, fontSize: 15, background: "rgba(0,0,0,.7)", padding: "6px 14px", borderRadius: 8 }}>สินค้าหมด</span>
                      </div>
                    )}
                  </div>

                  {/* ข้อมูลสินค้า */}
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ color: T.text, fontSize: 15, fontWeight: 600, margin: "0 0 6px" }}>{sp.name}</h3>
                    <p style={{ color: T.muted, fontSize: 12, margin: "0 0 12px", lineHeight: 1.5 }}>{sp.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span style={{ color: T.green, fontWeight: 700, fontSize: 20 }}>฿{sp.sellingPrice.toLocaleString()}</span>
                      <span style={{ color: T.dim, fontSize: 12 }}>คงเหลือ {sp.stock} ชิ้น</span>
                    </div>
                    <button
                      disabled={outOfStock}
                      onClick={() => navigate(`/shop/${slug}/checkout?productId=${sp.id}`)}
                      style={{ width: "100%", padding: "10px", background: outOfStock ? T.surface2 : T.accent, border: `1px solid ${outOfStock ? T.border : T.accent}`, borderRadius: 8, color: outOfStock ? T.dim : "#0d1117", fontWeight: 700, cursor: outOfStock ? "not-allowed" : "pointer", fontSize: 14, ...F }}
                    >
                      {outOfStock ? "สินค้าหมด" : "สั่งซื้อ →"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
