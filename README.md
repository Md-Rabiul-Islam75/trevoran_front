# Trevoran Clothing: shop website

The website for **https://www.trevoranclothing.com**, a menswear label (polo shirts, t-shirts, shirts).

Right now it is a **coming-soon page**. The full shop (product list, product page, bag, checkout) comes later.
The API (`trevoran_back`) and admin panel (`trevoran_admin`) are separate repositories.

Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000, updates as you edit
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

## Change the text, contacts or pictures

Everything on the page is in **`lib/site.ts`**:

| What | Field |
|---|---|
| Headline, intro, "coming soon" wording | `eyebrow`, `headline`, `intro` |
| Text shown on Google / Facebook / WhatsApp link previews | `description` |
| The three first-collection items | `collection` |
| WhatsApp, Facebook, Instagram, phone, email | `contact` (an empty value hides that button) |
| Logo | put the file in `public/images/` and set `logo`, e.g. `"/images/logo.svg"` |
| Big banner photo | put the file in `public/images/` and set `heroImage` and `heroImageAlt` |

Until a logo and a photo are set, the page shows a text wordmark and a drawn polo shirt.

## Where things are

| Path | What |
|---|---|
| `app/page.tsx` | The coming-soon page |
| `app/layout.tsx` | Fonts, page title, link-preview details |
| `app/globals.css` | Colours (navy, ivory, camel), layout, the piqué texture |
| `app/icon.svg` | Browser-tab icon |
| `app/fonts/` | Bodoni Moda and Instrument Sans, stored here so the build never downloads fonts from Google |
| `components/Garment.tsx` | Line drawings of the polo, t-shirt and shirt |
| `lib/site.ts` | All text, contacts and picture paths |
