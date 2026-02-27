import Link from "next/link";
import { Container } from "@/components/Container";
import { WatchCard } from "@/components/WatchCard";
import { getFeaturedWatches } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const featured = getFeaturedWatches();
  return (
    <main>
      <section className="pb-10 pt-14 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-200 ring-1 ring-white/10">
                Curated vintage watches • Transparent condition notes
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Vintage watches with modern clarity.
              </h1>
              <p className="max-w-xl text-pretty text-base leading-7 text-zinc-300">
                Shop a small, carefully selected collection—each piece photographed, described
                honestly, and packed like it matters.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/watches">
                  <Button>Browse watches</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Ask a question</Button>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-5 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <div className="text-sm font-semibold">Straightforward pricing</div>
                  <div className="mt-1 text-sm text-[#7a6246]">
                    No hidden fees—USD pricing shown.
                  </div>
                </div>
                <div className="rounded-2xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-5 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <div className="text-sm font-semibold">Careful shipping</div>
                  <div className="mt-1 text-sm text-[#7a6246]">Secure packaging & tracking.</div>
                </div>
                <div className="rounded-2xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-5 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <div className="text-sm font-semibold">Human support</div>
                  <div className="mt-1 text-sm text-[#7a6246]">Questions answered quickly.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                <div className="text-xs tracking-[0.22em] text-[#8a7458]">FEATURED</div>
                <div className="mt-2 text-lg font-semibold">
                  Hand-picked this week
                </div>
                <div className="mt-5 grid gap-4">
                  {featured.slice(0, 2).map((w) => (
                    <div
                      key={w.slug}
                      className="rounded-2xl border border-[rgba(0,0,0,0.12)] bg-[color:var(--paper)] p-4 text-[color:var(--ink)]"
                    >
                      <div className="text-xs tracking-[0.2em] text-[#8a7458]">{w.brand}</div>
                      <div className="text-base font-semibold">{w.name}</div>
                      <div className="mt-2 text-sm text-[#7a6246]">{w.description}</div>
                      <div className="mt-4">
                        <Link href={`/watches/${w.slug}`}>
                          <Button variant="secondary" className="w-full">
                            View listing
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.22em] text-zinc-400">COLLECTION</div>
              <h2 className="mt-2 text-2xl font-semibold text-white">New arrivals</h2>
            </div>
            <Link href="/watches" className="text-sm text-zinc-300 hover:text-white">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((w) => (
              <WatchCard key={w.slug} watch={w} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
