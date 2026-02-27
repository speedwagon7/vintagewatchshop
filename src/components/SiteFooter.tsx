import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,11,7,0.92),rgba(42,26,16,0.92))]">
      <Container className="py-10 text-sm text-zinc-200">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="text-xs tracking-[0.2em] text-zinc-400">VINTAGE WRIST</div>
            <div className="max-w-md text-zinc-200">
              Curated vintage watches. Honest condition notes. Fast, careful shipping.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="hover:text-[color:var(--paper)]" href="/watches">
              Watches
            </Link>
            <Link className="hover:text-[color:var(--paper)]" href="/about">
              About
            </Link>
            <Link className="hover:text-[color:var(--paper)]" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Vintage Wrist. All rights reserved.</div>
          <div>Prices in USD. Availability subject to prior sale.</div>
        </div>
      </Container>
    </footer>
  );
}

