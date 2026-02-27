"use client";

import {
  CART_STORAGE_KEY,
  type CartState,
  addToCart,
  countItems,
  removeFromCart,
  setQuantity,
} from "@/lib/cart";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

type CartActions = {
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

type CartContextValue = {
  state: CartState;
  itemCount: number;
  actions: CartActions;
};

const CartContext = createContext<CartContextValue | null>(null);

type Action =
  | { type: "hydrate"; state: CartState }
  | { type: "add"; slug: string; qty: number }
  | { type: "remove"; slug: string }
  | { type: "setQty"; slug: string; qty: number }
  | { type: "clear" };

const initialState: CartState = { items: [] };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add":
      return addToCart(state, action.slug, action.qty);
    case "remove":
      return removeFromCart(state, action.slug);
    case "setQty":
      return setQuantity(state, action.slug, action.qty);
    case "clear":
      return initialState;
    default:
      return state;
  }
}

function safeParseCart(raw: string | null): CartState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return null;
    const items = (parsed as { items?: unknown }).items;
    if (!Array.isArray(items)) return { items: [] };
    return {
      items: items
        .map((i) => {
          const slug = (i as { slug?: unknown }).slug;
          const quantity = (i as { quantity?: unknown }).quantity;
          if (typeof slug !== "string") return null;
          if (typeof quantity !== "number") return { slug, quantity: 1 };
          return { slug, quantity };
        })
        .filter(Boolean) as { slug: string; quantity: number }[],
    };
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const hydrated = safeParseCart(window.localStorage.getItem(CART_STORAGE_KEY));
    if (hydrated) dispatch({ type: "hydrate", state: hydrated });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const actions: CartActions = {
      add: (slug, qty = 1) => dispatch({ type: "add", slug, qty }),
      remove: (slug) => dispatch({ type: "remove", slug }),
      setQty: (slug, qty) => dispatch({ type: "setQty", slug, qty }),
      clear: () => dispatch({ type: "clear" }),
    };

    return {
      state,
      itemCount: countItems(state),
      actions,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

