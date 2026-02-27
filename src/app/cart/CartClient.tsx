"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { formatMoney } from "@/lib/format";
import { getWatchBySlug } from "@/lib/products";

export function CartClient() {
  const { state, actions } = useCart();

  const rows = useMemo(() => {
    return state.items
      .map((i) => {
        const watch = getWatchBySlug(i.slug);
        if (!watch) return null;
        return { item: i, watch };
      })
      .filter(Boolean) as Array<{ item: { slug: string; quantity: number }; watch: NonNullable<ReturnType<typeof getWatchBySlug>> }>;
  }, [state.items]);

  const total = rows.reduce((sum, r) => sum + r.watch.price.amount * r.item.quantity, 0);

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-8">
        {rows.length === 0 ? (
          <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-8 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <div className="text-lg font-semibold">Your cart is empty.</div>
            <div className="mt-2 text-sm text-[#7a6246]">
              Browse the collection and add a watch you’d like to purchase.
            </div>
            <div className="mt-6">
              <Link href="/watches">
                <Button>Browse watches</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {rows.map(({ item, watch }) => (
              <div
                key={watch.slug}
                className="flex flex-col gap-4 rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-5 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:flex-row sm:items-center"
              >
                <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10 sm:w-44">
                  <Image
                    src={watch.image.src}
                    alt={watch.image.alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs tracking-[0.2em] text-[#8a7458]">{watch.brand}</div>
                  <div className="mt-1 text-base font-semibold">{watch.name}</div>
                  <div className="mt-2 text-sm text-[#7a6246]">{formatMoney(watch.price)}</div>
                </div>
                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <label className="flex items-center gap-3 text-sm text-[#7a6246]">
                    Qty
                    <input
                      value={item.quantity}
                      min={1}
                      max={99}
                      type="number"
                      onChange={(e) => actions.setQty(watch.slug, Number(e.target.value))}
                      className="h-10 w-20 rounded-xl bg-white/40 px-3 text-sm text-[color:var(--ink)] ring-1 ring-[rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-[color:var(--paper)]/40"
                    />
                  </label>
                  <button
                    className="text-sm text-[#7a6246] hover:text-[color:var(--ink)]"
                    onClick={() => actions.remove(watch.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lg:col-span-4">
        <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          <div className="text-sm font-semibold">Summary</div>
          <div className="mt-4 flex items-center justify-between text-sm text-[#7a6246]">
            <div>Subtotal</div>
            <div className="font-semibold">
              {rows.length === 0 ? "—" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(total)}
            </div>
          </div>
          <div className="mt-2 text-xs text-[#9c8364]">
            Shipping and taxes (if any) are confirmed on invoice.
          </div>
          <div className="mt-6 grid gap-2">
            <Link href="/checkout">
              <Button className="w-full" disabled={rows.length === 0}>
                Checkout request
              </Button>
            </Link>
            <button
              className="h-11 rounded-full text-sm font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={rows.length === 0}
              onClick={() => actions.clear()}
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

