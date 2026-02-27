export type CartItem = {
  slug: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export const CART_STORAGE_KEY = "vw_cart_v1";

export function normalizeQuantity(qty: number) {
  if (!Number.isFinite(qty)) return 1;
  return Math.max(1, Math.min(99, Math.round(qty)));
}

export function addToCart(state: CartState, slug: string, qty = 1): CartState {
  const quantity = normalizeQuantity(qty);
  const existing = state.items.find((i) => i.slug === slug);
  if (!existing) return { items: [...state.items, { slug, quantity }] };
  return {
    items: state.items.map((i) =>
      i.slug === slug ? { ...i, quantity: normalizeQuantity(i.quantity + quantity) } : i,
    ),
  };
}

export function removeFromCart(state: CartState, slug: string): CartState {
  return { items: state.items.filter((i) => i.slug !== slug) };
}

export function setQuantity(state: CartState, slug: string, qty: number): CartState {
  const quantity = normalizeQuantity(qty);
  return { items: state.items.map((i) => (i.slug === slug ? { ...i, quantity } : i)) };
}

export function countItems(state: CartState) {
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

