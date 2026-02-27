"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export function CartStatus() {
  const { itemCount } = useCart();
  return (
    <Link
      href="/cart"
      className="group inline-flex items-center gap-2 hover:text-[color:var(--paper)]"
    >
      <span>Cart</span>
      <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-[color:var(--paper)] ring-1 ring-white/10 group-hover:bg-white/15">
        {itemCount}
      </span>
    </Link>
  );
}

