"use client";
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { products } from "@/data/products";

export interface CartItem {
  productId: string;
  name: string;
  color: string;
  size: string;
  price: number;
  discountPerUnit?: number;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQty: (productId: string, color: string, size: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dtu_cart_items");
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[];
        // Sync unit prices with current catalog MRP (1499) regardless of legacy SKU
        const synced = parsed.map((item) => {
          const match = products.find((p) => p.id === item.productId) || products[0];
          return match ? { ...item, price: match.price, discountPerUnit: match.discountPerUnit } : item;
        });
        setItems(synced);
      }
    } catch (e) {
      console.warn("Failed to load saved cart", e);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("dtu_cart_items", JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage", e);
    }
  }, [items, hydrated]);

  const key = (p: string, c: string, s: string) => `${p}-${c}-${s}`;

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    const match = products.find((p) => p.id === item.productId) || products[0];
    const catalogPrice = match?.price ?? item.price;
    const discountPerUnit = match?.discountPerUnit ?? item.discountPerUnit ?? 300;
    const normalizedItem = { ...item, price: catalogPrice, discountPerUnit };
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => key(i.productId, i.color, i.size) === key(normalizedItem.productId, normalizedItem.color, normalizedItem.size)
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], price: catalogPrice, discountPerUnit, qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...normalizedItem, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string, color: string, size: string) => {
    setItems((prev) =>
      prev.filter((i) => key(i.productId, i.color, i.size) !== key(productId, color, size))
    );
  }, []);

  const updateQty = useCallback((productId: string, color: string, size: string, qty: number) => {
    if (qty < 1) return removeItem(productId, color, size);
    setItems((prev) =>
      prev.map((i) =>
        key(i.productId, i.color, i.size) === key(productId, color, size)
          ? { ...i, qty }
          : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
