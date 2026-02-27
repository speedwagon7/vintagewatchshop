import { Container } from "@/components/Container";
import { CheckoutClient } from "@/app/checkout/CheckoutClient";

export const metadata = {
  title: "Checkout request",
};

export default function CheckoutPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Checkout request</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
          Submit your details and we’ll respond with an invoice and shipping confirmation. This demo
          uses your email client (mailto) so it works without a backend.
        </p>
        <CheckoutClient />
      </Container>
    </main>
  );
}

