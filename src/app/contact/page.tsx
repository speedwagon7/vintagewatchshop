import { Container } from "@/components/Container";
import { ContactClient } from "@/app/contact/ContactClient";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.22em] text-zinc-400">CONTACT</div>
          <h1 className="mt-2 text-3xl font-semibold text-white">Ask anything</h1>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            Want additional photos, wrist shots, or details? Send a message and we’ll reply quickly.
          </p>
        </div>
        <div className="mt-8">
          <ContactClient />
        </div>
      </Container>
    </main>
  );
}

