Vintage Watch Storefront built with [Next.js](https://nextjs.org) + Tailwind.

## Getting Started

Install dependencies (already done if you used the generator):

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What’s included

- **Home**: `/`
- **Catalog**: `/watches`
- **Product pages**: `/watches/[slug]`
- **Cart**: `/cart` (localStorage-backed)
- **Checkout request**: `/checkout` (mailto-based demo flow)
- **About / Contact**: `/about`, `/contact`

## Customize inventory

Edit `src/lib/products.ts` to add/remove watches, prices, and featured items.

## Update your contact email

Replace the demo email in:

- `src/app/checkout/CheckoutClient.tsx`
- `src/app/contact/ContactClient.tsx`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
