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
  advancePerUnit?: number;
  customName?: string | null;
  qty: number;
}

export function getBulkDiscountPerUnit(totalItems: number): number {
  if (totalItems >= 4) return 100;
  if (totalItems === 3) return 50;
  return 0;
}

export function calculateCheckoutTotals(items: CartItem[], isCouponApplied: boolean) {
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const couponDiscount = isCouponApplied
    ? Math.min(subtotal, items.reduce((s, i) => s + (i.discountPerUnit ?? 300) * i.qty, 0))
    : 0;
  const afterCoupon = Math.max(0, subtotal - couponDiscount);
  const bulkPerUnit = getBulkDiscountPerUnit(totalItems);
  const bulkDiscount = Math.min(afterCoupon, bulkPerUnit * totalItems);
  const finalTotal = Math.max(0, afterCoupon - bulkDiscount);
  const advancePayable = Math.min(
    finalTotal,
    items.reduce((s, i) => s + getItemAdvancePerUnit(i) * i.qty, 0)
  );
  const balanceAmount = Math.max(0, finalTotal - advancePayable);
  return {
    totalItems,
    subtotal,
    couponDiscount,
    bulkPerUnit,
    bulkDiscount,
    finalTotal,
    advancePayable,
    balanceAmount,
  };
}

function hasCustomBackprint(item: { color: string; customName?: string | null }): boolean {
  if (typeof item.customName === "string") return item.customName.trim().length > 0;
  return item.color.includes("•") && !item.color.endsWith("• Standard");
}

export function getItemAdvancePerUnit(item: {
  productId: string;
  name: string;
  color: string;
  advancePerUnit?: number;
  customName?: string | null;
}): number {
  if (typeof item.advancePerUnit === "number" && item.advancePerUnit > 0) {
    return item.advancePerUnit;
  }
  const isMinimo =
    item.productId === "heritage-design-2" ||
    item.productId === "heritage-plain" ||
    item.name.toLowerCase().includes("minimo");
  const baseAdvance = isMinimo ? 600 : 850;
  return baseAdvance + (hasCustomBackprint(item) ? 100 : 0);
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
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      try {
        const saved = localStorage.getItem("dtu_cart_items");
        if (saved) {
          const parsed = JSON.parse(saved) as CartItem[];
          const synced = parsed.map((item) => {
            const match = products.find(
              (p) => p.id === item.productId || p.name.toLowerCase() === item.name.toLowerCase()
            );
            if (!match) return item;
            const syncedPrice = match.price + (hasCustomBackprint(item) ? 100 : 0);
            const syncedAdvance = getItemAdvancePerUnit(item);
            return {
              ...item,
              price: syncedPrice,
              discountPerUnit: match.discountPerUnit,
              advancePerUnit: syncedAdvance,
            };
          });
          setItems(synced);
        }
      } catch (e) {
        console.warn("Failed to load saved cart", e);
      }
      setHydrated(true);
    });
    return () => {
      active = false;
    };
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
    const catalogPrice = item.price > 0 ? item.price : (match?.price ?? item.price);
    const discountPerUnit = match?.discountPerUnit ?? item.discountPerUnit ?? 300;
    const advancePerUnit = getItemAdvancePerUnit(item);
    const normalizedItem = { ...item, price: catalogPrice, discountPerUnit, advancePerUnit };
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => key(i.productId, i.color, i.size) === key(normalizedItem.productId, normalizedItem.color, normalizedItem.size)
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          price: catalogPrice,
          discountPerUnit,
          advancePerUnit,
          qty: next[idx].qty + 1,
        };
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
