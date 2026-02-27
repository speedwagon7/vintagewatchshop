import Link from "next/link";
import { Container } from "@/components/Container";
import { CartStatus } from "@/components/cart/CartStatus";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[linear-gradient(180deg,rgba(42,26,16,0.88),rgba(15,11,7,0.72))] backdrop-blur supports-[backdrop-filter]:bg-[linear-gradient(180deg,rgba(42,26,16,0.72),rgba(15,11,7,0.55))]">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-sm font-semibold tracking-[0.22em] text-[color:var(--paper)]"
            style={{ fontFamily: "var(--font-noto-serif-jp), var(--font-sans)" }}
          >
            VINTAGE WRIST
          </span>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-200">
          <Link href="/watches" className="hover:text-[color:var(--paper)]">
            Watches
          </Link>
          <Link href="/about" className="hover:text-[color:var(--paper)]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[color:var(--paper)]">
            Contact
          </Link>
          <CartStatus />
        </nav>
      </Container>
    </header>
  );
}

