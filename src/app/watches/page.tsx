import { Container } from "@/components/Container";
import { WatchCard } from "@/components/WatchCard";
import { watches } from "@/lib/products";

export const metadata = {
  title: "Watches",
};

export default function WatchesPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs tracking-[0.22em] text-zinc-400">VINTAGE WATCHES</div>
            <h1 className="mt-2 text-3xl font-semibold text-white">Collection</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
              Each listing includes key specs, condition notes, and high-level highlights. If
              you’d like additional photos or wrist shots, just reach out.
            </p>
          </div>
          <div className="text-sm text-zinc-300">
            {watches.filter((w) => w.available).length} available
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {watches
            .filter((w) => w.available)
            .map((w) => (
              <WatchCard key={w.slug} watch={w} />
            ))}
        </div>
      </Container>
    </main>
  );
}

