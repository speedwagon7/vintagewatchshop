export type Money = {
  currency: "USD";
  amount: number;
};

export type Watch = {
  slug: string;
  name: string;
  brand: string;
  model?: string;
  year?: string;
  reference?: string;
  diameterMm?: number;
  condition: "Excellent" | "Very good" | "Good" | "Fair";
  movement: "Automatic" | "Manual" | "Quartz";
  caseMaterial: "Steel" | "Gold" | "Plated" | "Titanium";
  dialColor: string;
  strap: string;
  price: Money;
  highlights: string[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  available: boolean;
};

export const watches: Watch[] = [
  {
    slug: "omega-seamaster-1968",
    name: "Seamaster",
    brand: "Omega",
    year: "1968",
    reference: "166.010",
    diameterMm: 35,
    condition: "Very good",
    movement: "Automatic",
    caseMaterial: "Steel",
    dialColor: "Silver",
    strap: "Black leather (new)",
    price: { currency: "USD", amount: 2450 },
    highlights: ["Serviced", "Original dial", "Clean case lines"],
    description:
      "A classic mid-century Seamaster with a crisp silver dial and a versatile 35mm case. Recently inspected and ready to wear.",
    image: { src: "/watches/omega-seamaster-1968.svg", alt: "Omega Seamaster 1968" },
    featured: true,
    available: true,
  },
  {
    slug: "rolex-oysterdate-precision-1972",
    name: "Oysterdate Precision",
    brand: "Rolex",
    year: "1972",
    reference: "6694",
    diameterMm: 34,
    condition: "Good",
    movement: "Manual",
    caseMaterial: "Steel",
    dialColor: "Black",
    strap: "Oyster-style steel bracelet",
    price: { currency: "USD", amount: 3950 },
    highlights: ["Sharp dial print", "Smooth running", "Daily-wearable vintage"],
    description:
      "A clean and honest Oysterdate with a timeless black dial. Great entry point into vintage Rolex with classic proportions.",
    image: {
      src: "/watches/rolex-oysterdate-precision-1972.svg",
      alt: "Rolex Oysterdate Precision 1972",
    },
    featured: true,
    available: true,
  },
  {
    slug: "cartier-must-tank-1980s",
    name: "Must de Cartier Tank",
    brand: "Cartier",
    year: "1980s",
    reference: "Tank Must",
    condition: "Very good",
    movement: "Quartz",
    caseMaterial: "Plated",
    dialColor: "Ivory",
    strap: "Burgundy leather",
    price: { currency: "USD", amount: 2850 },
    highlights: ["Iconic rectangular case", "Elegant Roman numerals", "Fresh strap"],
    description:
      "A refined Tank Must with classic Roman numerals and blued hands. An effortless dress watch that elevates any outfit.",
    image: { src: "/watches/cartier-must-tank-1980s.svg", alt: "Cartier Must Tank 1980s" },
    available: true,
  },
  {
    slug: "seiko-6139-6002-1970",
    name: "6139 “Pogue”",
    brand: "Seiko",
    year: "1970",
    reference: "6139-6002",
    diameterMm: 41,
    condition: "Good",
    movement: "Automatic",
    caseMaterial: "Steel",
    dialColor: "Yellow",
    strap: "Steel bracelet",
    price: { currency: "USD", amount: 1750 },
    highlights: ["Vintage chronograph", "Bold dial", "Collector favorite"],
    description:
      "One of the most recognizable vintage Seiko chronographs. Bright, playful, and historically significant—built for fun.",
    image: { src: "/watches/seiko-6139-pogue-1970.svg", alt: "Seiko 6139 Pogue 1970" },
    featured: true,
    available: true,
  },
  {
    slug: "longines-conquest-1960s",
    name: "Conquest",
    brand: "Longines",
    year: "1960s",
    condition: "Very good",
    movement: "Automatic",
    caseMaterial: "Steel",
    dialColor: "Champagne",
    strap: "Brown leather",
    price: { currency: "USD", amount: 1650 },
    highlights: ["Classic crosshair vibe", "Slim profile", "Great value"],
    description:
      "A tasteful Conquest with warm tones and vintage charm. A quietly special everyday piece with plenty of heritage.",
    image: { src: "/watches/longines-conquest-1960s.svg", alt: "Longines Conquest 1960s" },
    available: true,
  },
  {
    slug: "tudor-prince-oysterdate-1989",
    name: "Prince Oysterdate",
    brand: "Tudor",
    year: "1989",
    condition: "Very good",
    movement: "Automatic",
    caseMaterial: "Steel",
    dialColor: "Blue",
    strap: "Steel bracelet",
    price: { currency: "USD", amount: 2650 },
    highlights: ["Robust daily driver", "Deep blue dial", "Great proportions"],
    description:
      "A strong late-80s Tudor with a rich blue dial and a comfortable bracelet. Perfect for an easy, vintage daily wear.",
    image: { src: "/watches/tudor-prince-oysterdate-1989.svg", alt: "Tudor Prince Oysterdate 1989" },
    available: true,
  },
  {
    slug: "hamilton-khaki-1990s",
    name: "Khaki Field",
    brand: "Hamilton",
    year: "1990s",
    condition: "Good",
    movement: "Quartz",
    caseMaterial: "Steel",
    dialColor: "Matte black",
    strap: "NATO strap",
    price: { currency: "USD", amount: 450 },
    highlights: ["Lightweight", "Legible dial", "Grab-and-go"],
    description:
      "A practical field watch with a no-nonsense dial. Ideal as a casual vintage piece that you won’t baby.",
    image: { src: "/watches/hamilton-khaki-1990s.svg", alt: "Hamilton Khaki 1990s" },
    available: true,
  },
  {
    slug: "zenith-elite-1997",
    name: "Elite",
    brand: "Zenith",
    year: "1997",
    condition: "Excellent",
    movement: "Automatic",
    caseMaterial: "Steel",
    dialColor: "White",
    strap: "Black leather",
    price: { currency: "USD", amount: 3200 },
    highlights: ["Ultra-thin movement family", "Dressy and modern", "Understated luxe"],
    description:
      "A late-90s Zenith Elite with clean lines and an elegant wrist presence. A refined option for those who like subtle excellence.",
    image: { src: "/watches/zenith-elite-1997.svg", alt: "Zenith Elite 1997" },
    available: true,
  },
];

export function getWatchBySlug(slug: string) {
  return watches.find((w) => w.slug === slug) ?? null;
}

export function getFeaturedWatches() {
  return watches.filter((w) => w.featured);
}

