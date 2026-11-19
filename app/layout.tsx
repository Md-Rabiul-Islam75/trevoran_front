import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts are stored in app/fonts (not loaded from Google at build time), so the server build never
// depends on fonts.googleapis.com.
const bodoni = localFont({
  src: [
    { path: "./fonts/bodoni-moda-latin.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/bodoni-moda-italic-latin.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const instrument = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-instrument",
  display: "swap",
});

const title = `${site.name} | Coming soon`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1828",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${instrument.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
