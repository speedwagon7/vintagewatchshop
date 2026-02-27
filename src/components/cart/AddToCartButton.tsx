"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function AddToCartButton({
  slug,
  disabled,
}: {
  slug: string;
  disabled?: boolean;
}) {
  const { actions } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      disabled={disabled}
      onClick={() => {
        actions.add(slug, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
      className="w-full"
    >
      {added ? "Added" : "Add to cart"}
    </Button>
  );
}

