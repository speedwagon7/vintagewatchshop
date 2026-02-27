import { Container } from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.22em] text-zinc-400">ABOUT</div>
          <h1 className="mt-2 text-3xl font-semibold text-white">Vintage Wrist</h1>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            Vintage Wrist is a small, curated shop focused on timeless designs, honest condition
            notes, and a buying experience that feels modern. Every listing is reviewed with
            wearability in mind—no hype, no guesswork.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <div className="text-sm font-semibold">What we sell</div>
              <p className="mt-2 text-sm leading-6 text-[#7a6246]">
                Vintage and neo-vintage pieces from trusted brands, chosen for design, value, and
                long-term serviceability.
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <div className="text-sm font-semibold">How we describe condition</div>
              <p className="mt-2 text-sm leading-6 text-[#7a6246]">
                Clear, human-readable notes and highlight bullets. If you want specific photos or a
                timegrapher reading, just ask.
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <div className="text-sm font-semibold">Shipping</div>
              <p className="mt-2 text-sm leading-6 text-[#7a6246]">
                Packed securely, shipped tracked, and insured where available. We confirm shipping
                options on invoice.
              </p>
            </div>
            <div className="rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <div className="text-sm font-semibold">Returns</div>
              <p className="mt-2 text-sm leading-6 text-[#7a6246]">
                Policies vary by item and destination. We’ll confirm terms clearly before you pay
                an invoice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

