// ─── data/mockData.ts ─────────────────────────────────────────────────────────
import type { Product, ResellerUser, Order, ShopProduct, WalletEntry } from "../types";

export const initProducts: Product[] = [
  { id: 1, name: "เสื้อยืดคอกลม สีดำ",  imagePreview: null, description: "ผ้าคอตตอน 100% น้ำหนักเบา",   cost: 120, minPrice: 180, stock: 45 },
  { id: 2, name: "กางเกงขาสั้น",          imagePreview: null, description: "ผ้าชีฟองสีกรม ทรงสวย",         cost: 200, minPrice: 320, stock: 12 },
  { id: 3, name: "รองเท้าผ้าใบ",          imagePreview: null, description: "สีขาว ไซส์ 36-45",             cost: 550, minPrice: 750, stock: 8  },
  { id: 4, name: "หมวก Cap สีขาว",         imagePreview: null, description: "ปรับขนาดได้ Cotton แท้",       cost: 85,  minPrice: 140, stock: 30 },
  { id: 5, name: "กระเป๋าสะพาย",          imagePreview: null, description: "สีน้ำตาล หนัง PU คุณภาพสูง",  cost: 380, minPrice: 520, stock: 0  },
  { id: 6, name: "แว่นตากันแดด",           imagePreview: null, description: "เลนส์ UV400 ทรงโอเวอร์ไซส์",  cost: 150, minPrice: 250, stock: 20 },
  { id: 7, name: "ผ้าพันคอ",              imagePreview: null, description: "ผ้า Silk เทียม สีพาสเทล",     cost: 90,  minPrice: 160, stock: 35 },
];

export const initResellers: ResellerUser[] = [
  { id: 1, name: "นายสมชาย ใจดี",      email: "somchai@email.com", phone: "081-234-5678", shopName: "ร้านสมชาย",    shopSlug: "somchaishop",  address: "789 ถ.พระราม 4 กทม.", status: "pending",  password: "password123" },
  { id: 2, name: "นางสาวมาลี สวยงาม",   email: "malee@email.com",   phone: "089-876-5432", shopName: "MaleeShop",    shopSlug: "maleeshop",    address: "123 ถ.สุขุมวิท กทม.",  status: "approved", password: "password123" },
  { id: 3, name: "นายวิชัย รวยดี",      email: "wichai@email.com",  phone: "062-111-2222", shopName: "Wichai Store", shopSlug: "wichaistore",  address: "456 ถ.เพชรบุรี กทม.",  status: "approved", password: "password123" },
  { id: 4, name: "นางสาวปิยะ นิดหน่อย", email: "piya@email.com",    phone: "090-333-4444", shopName: "PiyaShop",     shopSlug: "piyashop",     address: "10 ถ.รัชดา กทม.",      status: "rejected", password: "password123" },
  { id: 5, name: "นายกิตติ ลุยดี",      email: "kitti@email.com",   phone: "095-555-6666", shopName: "Kitti Market", shopSlug: "kittimarket",  address: "55 ถ.ลาดพร้าว กทม.",   status: "pending",  password: "password123" },
];

export const initShopProducts: ShopProduct[] = [
  { id: 1, productId: 1, shopId: 2, name: "เสื้อยืดคอกลม สีดำ",  imagePreview: null, description: "ผ้าคอตตอน 100%",   cost: 120, minPrice: 180, stock: 45, sellingPrice: 240 },
  { id: 2, productId: 3, shopId: 2, name: "รองเท้าผ้าใบ",          imagePreview: null, description: "สีขาว ไซส์ 36-45", cost: 550, minPrice: 750, stock: 8,  sellingPrice: 890 },
  { id: 3, productId: 4, shopId: 2, name: "หมวก Cap สีขาว",         imagePreview: null, description: "ปรับขนาดได้",      cost: 85,  minPrice: 140, stock: 30, sellingPrice: 175 },
  { id: 4, productId: 1, shopId: 3, name: "เสื้อยืดคอกลม สีดำ",  imagePreview: null, description: "ผ้าคอตตอน 100%",   cost: 120, minPrice: 180, stock: 45, sellingPrice: 220 },
];

export const initOrders: Order[] = [
  { id: "ORD-20260001", resellerId: 2, resellerName: "นางสาวมาลี สวยงาม", shopName: "MaleeShop",    customer: "คุณอานนท์ มีสุข",   phone: "081-111-1111", address: "10/5 ถ.ลาดพร้าว กทม.", product: "เสื้อยืดคอกลม สีดำ", productId: 1, items: [{ productName: "เสื้อยืดคอกลม สีดำ", qty: 5, sellingPrice: 240, cost: 120 }], qty: 5,  salePrice: 240, totalSale: 1200, totalProfit: 600, cost: 120, date: "2026-03-13T10:00:00", status: "pending"   },
  { id: "ORD-20260002", resellerId: 2, resellerName: "นางสาวมาลี สวยงาม", shopName: "MaleeShop",    customer: "คุณสมหญิง ใจดี",    phone: "082-222-2222", address: "25 ถ.พระราม 9 กทม.",   product: "กางเกงขาสั้น",        productId: 2, items: [{ productName: "รองเท้าผ้าใบ", qty: 1, sellingPrice: 890, cost: 550 }, { productName: "หมวก Cap สีขาว", qty: 2, sellingPrice: 175, cost: 85 }], qty: 3, salePrice: 390, totalSale: 1240, totalProfit: 590, cost: 200, date: "2026-03-12T14:30:00", status: "shipped"   },
  { id: "ORD-20260003", resellerId: 3, resellerName: "นายวิชัย รวยดี",    shopName: "Wichai Store", customer: "คุณประสิทธิ์ ดีมาก", phone: "083-333-3333", address: "50 ซ.ทองหล่อ กทม.",    product: "รองเท้าผ้าใบ",        productId: 3, items: [{ productName: "เสื้อยืดคอกลม สีดำ", qty: 3, sellingPrice: 220, cost: 120 }], qty: 2, salePrice: 850, totalSale: 720,  totalProfit: 300, cost: 550, date: "2026-03-11T09:15:00", status: "completed" },
  { id: "ORD-20260004", resellerId: 2, resellerName: "นางสาวมาลี สวยงาม", shopName: "MaleeShop",    customer: "คุณบัวแก้ว สดใส",   phone: "084-444-4444", address: "88 ถ.สีลม กทม.",       product: "หมวก Cap สีขาว",      productId: 4, items: [{ productName: "หมวก Cap สีขาว", qty: 10, sellingPrice: 175, cost: 85 }], qty: 10, salePrice: 160, totalSale: 1600, totalProfit: 900, cost: 85, date: "2026-03-13T08:00:00", status: "pending"   },
  { id: "ORD-20260005", resellerId: 3, resellerName: "นายวิชัย รวยดี",    shopName: "Wichai Store", customer: "คุณมานะ ขยันดี",    phone: "085-555-5555", address: "12 ถ.เยาวราช กทม.",    product: "เสื้อยืดคอกลม สีดำ", productId: 1, items: [{ productName: "เสื้อยืดคอกลม สีดำ", qty: 8, sellingPrice: 220, cost: 120 }], qty: 8,  salePrice: 220, totalSale: 1760, totalProfit: 800, cost: 120, date: "2026-03-10T13:00:00", status: "completed" },
];

export const initWalletEntries: WalletEntry[] = [
  { id: 1, orderId: "ORD-20260003", shop: "Wichai Store", profit: 300, at: "2026-03-11T11:00:00" },
  { id: 2, orderId: "ORD-20260005", shop: "Wichai Store", profit: 800, at: "2026-03-10T15:00:00" },
  { id: 3, orderId: "ORD-20260002", shop: "MaleeShop",    profit: 590, at: "2026-03-12T16:00:00" },
];
