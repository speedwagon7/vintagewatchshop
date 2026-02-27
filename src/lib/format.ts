import type { Money } from "@/lib/products";

export function formatMoney(m: Money) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: m.currency,
    maximumFractionDigits: 0,
  }).format(m.amount);
}

