// Everything on the landing page that the business may want to change lives in this file.
// The wording below is a DRAFT: replace it with Trevoran's own text.
//
// PHOTOS: the photos in /public/images are free stock photos used as PLACEHOLDERS until Trevoran's own
// product and model photos are ready (Pexels licence / Unsplash licence: free for commercial use, no credit
// required). Sources are listed next to each image. Swap in your own photos by replacing the files (same
// names) or by changing the paths below.

export type GarmentKind = "polo" | "tshirt" | "shirt";

export type Photo = { src: string; alt: string };

export type HeroSlide = {
  kind: GarmentKind;
  label: string; // short name in the slider controls
  eyebrow: string;
  title: string;
  line: string;
  photo: Photo;
  focus?: string; // CSS object-position, which part of the photo to keep when it is cropped
};

export const site = {
  name: "Trevoran Clothing",
  wordmark: "TREVORAN",
  url: "https://www.trevoranclothing.com",
  domain: "trevoranclothing.com",

  // Search engines and link previews (Facebook, WhatsApp) show this.
  description:
    "Trevoran Clothing: men's shirts, t-shirts and polo shirts. Our online shop is coming soon at trevoranclothing.com.",

  // Light (ivory + gold) logo versions for the navy page; all logo versions are in D:\Trevoran-Project\material\logo.
  logo: "/images/trevoran-wordmark-light.png", // "TREVORAN" only: header and footer
  logoFull: "/images/trevoran-logo-light.png", // with "MEN'S OUTFIT" and the tagline

  nav: [
    { label: "Collection", href: "#collection" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Our promise", href: "#promise" },
  ],

  // 1. Slider at the top: one slide per garment, then the animated "Coming soon" slide.
  hero: {
    slides: [
      {
        kind: "shirt",
        label: "Shirts",
        eyebrow: "The first collection · 01",
        title: "Shirts",
        line: "Crisp, breathable cotton, cut clean for the office and the weekend.",
        // https://www.pexels.com/photo/33261953/
        photo: { src: "/images/hero-shirt.jpg", alt: "Man in a dark teal button-up shirt and beige trousers" },
        focus: "50% 30%",
      },
      {
        kind: "tshirt",
        label: "T-shirts",
        eyebrow: "The first collection · 02",
        title: "T-shirts",
        line: "Soft everyday cotton tees in colours that go with everything.",
        // https://www.pexels.com/photo/8498700/
        photo: { src: "/images/hero-tshirt.jpg", alt: "Smiling man in a plain white t-shirt" },
        focus: "50% 35%",
      },
      {
        kind: "polo",
        label: "Polos",
        eyebrow: "The first collection · 03",
        title: "Polos",
        line: "Classic piqué polos: smart enough for work, easy enough for the weekend.",
        // https://www.pexels.com/photo/17987957/ (the original's small chest logo was retouched out)
        photo: { src: "/images/hero-polo.jpg", alt: "Bearded man in a sky-blue polo shirt" },
        focus: "60% 75%",
      },
    ] satisfies HeroSlide[],
    comingSoon: {
      label: "Soon",
      eyebrow: "Trevoran Clothing",
      words: ["Coming", "soon."],
      line: "Shirts, t-shirts and polos for men. Our online shop opens soon at trevoranclothing.com.",
    },
  },

  // Moving text band under the slider.
  marquee: ["Shirts", "T-shirts", "Polos", "Coming soon", "Style meets confidence"],

  // 2. The first collection: product photo, and a model wearing it (shown on hover, and in the small inset).
  collection: {
    eyebrow: "The first collection",
    title: { before: "Three essentials,", emphasis: "properly made." },
    intro:
      "We are starting with the pieces a man wears most. Each one is chosen for its fabric, its fit and its finish.",
    items: [
      {
        kind: "shirt",
        name: "Shirts",
        line: "Cotton shirts in solid colours and checks, for work and weekends.",
        // https://www.pexels.com/photo/8483487/
        photo: { src: "/images/product-shirts.jpg", alt: "Cotton shirts in green, mustard and pastel colours on hangers" },
        // https://www.pexels.com/photo/33261956/
        model: { src: "/images/model-shirt.jpg", alt: "Man wearing a dark teal shirt" },
      },
      {
        kind: "tshirt",
        name: "T-shirts",
        line: "Plain crew-neck tees, from white and sand to navy and black.",
        // https://www.pexels.com/photo/26601197/
        photo: { src: "/images/product-tshirts.jpg", alt: "Plain t-shirts in a row of colours on a clothes rail" },
        // https://www.pexels.com/photo/28446958/
        model: { src: "/images/model-tshirt.jpg", alt: "Young man wearing a white t-shirt, arms folded" },
      },
      {
        kind: "polo",
        name: "Polos",
        line: "Piqué polo shirts with a neat collar, for days that are smart and relaxed.",
        // https://unsplash.com/photos/F5i3PZXYkvY
        photo: { src: "/images/product-polos.jpg", alt: "White polo shirt on a hanger" },
        // https://www.pexels.com/photo/8422392/
        model: { src: "/images/model-polo.jpg", alt: "Man wearing a light pink knit polo shirt" },
      },
    ] as { kind: GarmentKind; name: string; line: string; photo: Photo; model: Photo }[],
  },

  // 3. Lookbook: the brand story with model photos.
  lookbook: {
    eyebrow: "Lookbook",
    title: { before: "Style meets", emphasis: "confidence." },
    text: "From a Monday meeting to a Friday evening, Trevoran is made to look sharp and feel easy: clean cuts, honest fabrics and colours that work together.",
    moments: ["Office", "Weekend", "Every day"],
    looks: [
      // https://www.pexels.com/photo/33261965/
      { src: "/images/look-1.jpg", alt: "Man in a dark teal shirt adjusting his watch", caption: "The office shirt" },
      // https://www.pexels.com/photo/15996635/
      { src: "/images/look-2.jpg", alt: "Man in a red checked shirt outdoors", caption: "The weekend check" },
      // https://www.pexels.com/photo/18178100/
      { src: "/images/look-3.jpg", alt: "Man in a white t-shirt walking outdoors", caption: "The everyday tee" },
    ],
  },

  // 4. What Trevoran stands for, then the launch call.
  promise: {
    eyebrow: "Our promise",
    title: { before: "What Trevoran", emphasis: "stands for." },
    items: [
      { icon: "fabric", title: "Fabric first", text: "Breathable cotton, chosen for warm days in Bangladesh." },
      { icon: "fit", title: "A clean fit", text: "Cut to sit well on the shoulders and move with you, in sizes S to XXL." },
      { icon: "price", title: "Fair prices", text: "Well-made clothes at honest prices, in taka." },
      { icon: "delivery", title: "Delivered to you", text: "Order online and get it delivered anywhere in Bangladesh." },
    ] as { icon: "fabric" | "fit" | "price" | "delivery"; title: string; text: string }[],
  },

  launch: {
    title: { before: "Be the first", emphasis: "to wear it." },
    text: "Our online shop opens soon at trevoranclothing.com.",
    linksTitle: "Follow the launch",
  },

  // Leave a contact empty ("") to hide its button.
  contact: {
    whatsapp: "", // with country code, e.g. "8801XXXXXXXXX"
    phone: "",
    email: "",
    facebook: "", // full link, e.g. "https://www.facebook.com/..."
    instagram: "",
  },
};

export type ContactLink = { label: string; href: string; external: boolean };

export function contactLinks(): ContactLink[] {
  const c = site.contact;
  const links: ContactLink[] = [];
  if (c.whatsapp) links.push({ label: "WhatsApp", href: `https://wa.me/${c.whatsapp.replace(/\D/g, "")}`, external: true });
  if (c.facebook) links.push({ label: "Facebook", href: c.facebook, external: true });
  if (c.instagram) links.push({ label: "Instagram", href: c.instagram, external: true });
  if (c.phone) links.push({ label: c.phone, href: `tel:${c.phone.replace(/[^\d+]/g, "")}`, external: false });
  if (c.email) links.push({ label: c.email, href: `mailto:${c.email}`, external: false });
  return links;
}
