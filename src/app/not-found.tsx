import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="py-14">
      <Container>
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs tracking-[0.22em] text-zinc-400">404</div>
          <h1 className="mt-2 text-2xl font-semibold text-white">Page not found</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            That page doesn’t exist (or it moved). Head back to the collection.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/watches">
              <Button>Browse watches</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

