"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { formatMoney } from "@/lib/format";
import { getWatchBySlug } from "@/lib/products";

const TO_EMAIL = "sales@vintagewrist.example";

function buildMailto(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${TO_EMAIL}?subject=${s}&body=${b}`;
}

export function CheckoutClient() {
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

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (rows.length === 0) {
    return (
      <div className="mt-8 rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-8 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <div className="text-lg font-semibold">Your cart is empty.</div>
        <div className="mt-2 text-sm text-[#7a6246]">
          Add a watch to your cart before submitting a checkout request.
        </div>
        <div className="mt-6 flex gap-3">
          <Link href="/watches">
            <Button>Browse watches</Button>
          </Link>
          <Link href="/cart">
            <Button variant="secondary">View cart</Button>
          </Link>
        </div>
      </div>
    );
  }

  const subject = `Checkout request (${rows.length} item${rows.length === 1 ? "" : "s"})`;
  const lines = [
    "Checkout request",
    "",
    `Name: ${fullName || "(not provided)"}`,
    `Email: ${email || "(not provided)"}`,
    `Shipping address: ${address || "(not provided)"}`,
    "",
    "Items:",
    ...rows.map(({ item, watch }) => {
      const line = `- ${watch.brand} ${watch.name}${watch.year ? ` (${watch.year})` : ""} — ${formatMoney(
        watch.price,
      )} x ${item.quantity}`;
      return line;
    }),
    "",
    `Estimated subtotal: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(total)}`,
    "",
    `Notes: ${notes || "(none)"}`,
  ];

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          <div className="text-sm font-semibold">Your details</div>
          <div className="mt-4 grid gap-3">
            <Input
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
            />
            <Input
              placeholder="Shipping address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="shipping street-address"
            />
            <Textarea
              placeholder="Notes (wrist size, preferred shipping speed, questions, etc.)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a href={buildMailto(subject, lines.join("\n"))} onClick={() => actions.clear()}>
              <Button className="w-full sm:w-auto">Open email to submit</Button>
            </a>
            <Link href="/cart">
              <Button variant="secondary" className="w-full sm:w-auto">
                Back to cart
              </Button>
            </Link>
          </div>
          <div className="mt-3 text-xs text-[#9c8364]">
            This will open your default email app addressed to{" "}
            <span className="text-[color:var(--ink)]">{TO_EMAIL}</span>. Replace that email in{" "}
            <span className="text-[color:var(--ink)]">src/app/checkout/CheckoutClient.tsx</span>.
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          <div className="text-sm font-semibold">Order summary</div>
          <div className="mt-4 space-y-3">
            {rows.map(({ item, watch }) => (
              <div key={watch.slug} className="flex items-start justify-between gap-4 text-sm">
                <div>
                  <div>
                    {watch.brand} {watch.name}
                  </div>
                  <div className="text-[#7a6246]">
                    {formatMoney(watch.price)} × {item.quantity}
                  </div>
                </div>
                <div className="font-semibold text-white">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  }).format(watch.price.amount * item.quantity)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
            <div className="text-[#7a6246]">Estimated subtotal</div>
            <div className="font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(total)}
            </div>
          </div>
          <div className="mt-2 text-xs text-[#9c8364]">
            Final totals are confirmed on invoice after availability and shipping are verified.
          </div>
        </div>
      </div>
    </div>
  );
}

