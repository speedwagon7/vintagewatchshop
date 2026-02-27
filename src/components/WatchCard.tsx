import type { Watch } from "@/lib/products";
import { formatMoney } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

export function WatchCard({ watch }: { watch: Watch }) {
  return (
    <Link
      href={`/watches/${watch.slug}`}
      className="group overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition hover:bg-[color:var(--paper)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={watch.image.src}
          alt={watch.image.alt}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-start justify-between gap-4 text-[color:var(--ink)]">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8a7458]">{watch.brand}</div>
            <div
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-noto-serif-jp), var(--font-sans)" }}
            >
              {watch.name}
            </div>
          </div>
          <div className="text-sm font-semibold">
            {formatMoney(watch.price)}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[#7a6246]">
          {watch.year ? (
            <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              {watch.year}
            </span>
          ) : null}
          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            {watch.condition}
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            {watch.movement}
          </span>
          {typeof watch.diameterMm === "number" ? (
            <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              {watch.diameterMm}mm
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

