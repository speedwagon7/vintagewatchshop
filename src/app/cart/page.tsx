import { Container } from "@/components/Container";
import { CartClient } from "@/app/cart/CartClient";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Cart</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
          You’re not charged yet. Submit a checkout request and we’ll confirm availability, total,
          and shipping before sending an invoice.
        </p>
        <CartClient />
      </Container>
    </main>
  );
}

