// Everything on the coming-soon page that the business may want to change lives in this file.
// The wording below is a DRAFT: replace it with Trevoran's own text.

export type GarmentKind = "polo" | "tshirt" | "shirt";

export const site = {
  name: "Trevoran Clothing",
  wordmark: "TREVORAN",
  url: "https://www.trevoranclothing.com",
  domain: "trevoranclothing.com",

  // Search engines and link previews (Facebook, WhatsApp) show this.
  description:
    "Trevoran Clothing: men's polo shirts, t-shirts and shirts. Our online shop is coming soon at trevoranclothing.com.",

  eyebrow: "Coming soon",
  headline: { before: "Everyday menswear,", emphasis: "properly made." },
  intro:
    "Trevoran Clothing is getting ready to open. Our first collection of polo shirts, t-shirts and shirts is on its way.",

  collectionTitle: "The first collection",
  collection: [
    { kind: "polo", name: "Polo shirts" },
    { kind: "tshirt", name: "T-shirts" },
    { kind: "shirt", name: "Shirts" },
  ] as { kind: GarmentKind; name: string }[],

  // Photos: put the files in /public/images and write the path, e.g. "/images/hero.jpg".
  // Empty = the drawn polo is shown instead of a photo, and the text wordmark instead of a logo.
  logo: "",
  heroImage: "",
  heroImageAlt: "",

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
