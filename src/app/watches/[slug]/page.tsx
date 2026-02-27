import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { Button } from "@/components/ui/Button";
import { formatMoney } from "@/lib/format";
import { getWatchBySlug, watches } from "@/lib/products";

export function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const watch = getWatchBySlug(params.slug);
  if (!watch) return { title: "Watch not found" };
  return {
    title: `${watch.brand} ${watch.name}`,
    description: watch.description,
  };
}

export default function WatchDetailPage({ params }: { params: { slug: string } }) {
  const watch = getWatchBySlug(params.slug);
  if (!watch) notFound();

  const specs: Array<[string, string]> = [
    ["Brand", watch.brand],
    ["Model", watch.name],
    ...(watch.year ? ([["Year", watch.year]] as Array<[string, string]>) : []),
    ...(watch.reference ? ([["Reference", watch.reference]] as Array<[string, string]>) : []),
    ["Movement", watch.movement],
    ["Case", watch.caseMaterial],
    ...(typeof watch.diameterMm === "number"
      ? ([["Diameter", `${watch.diameterMm}mm`]] as Array<[string, string]>)
      : []),
    ["Dial", watch.dialColor],
    ["Strap", watch.strap],
    ["Condition", watch.condition],
  ];

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <div className="mb-6 text-sm text-zinc-300">
          <Link href="/watches" className="hover:text-white">
            ← Back to collection
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={watch.image.src}
                  alt={watch.image.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs tracking-[0.22em] text-zinc-400">{watch.brand}</div>
              <h1 className="mt-2 text-3xl font-semibold text-white">{watch.name}</h1>
              <div className="mt-3 text-lg font-semibold text-white">
                {formatMoney(watch.price)}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{watch.description}</p>

              <div className="mt-5 grid gap-2">
                <AddToCartButton slug={watch.slug} disabled={!watch.available} />
                <Link href="/checkout">
                  <Button variant="secondary" className="w-full">
                    Request invoice
                  </Button>
                </Link>
              </div>

              {!watch.available ? (
                <div className="mt-4 rounded-2xl bg-white/5 p-4 text-sm text-zinc-200 ring-1 ring-white/10">
                  This watch is currently marked unavailable.
                </div>
              ) : null}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-white">Highlights</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {watch.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-white">Specs</div>
              <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {specs.map(([k, v]) => (
                  <div key={k} className="space-y-1">
                    <dt className="text-xs tracking-[0.18em] text-zinc-500">{k}</dt>
                    <dd className="text-zinc-200">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

