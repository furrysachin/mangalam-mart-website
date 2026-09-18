<p align="center">
  <img src="public/logo-256.png" alt="Mangalam Mart" width="120" />
</p>

<h1 align="center">Mangalam Mart</h1>

<p align="center">
  <strong>Fashion for Everyone</strong> · Lalganj, Vaishali, Bihar
</p>

<p align="center">
  A fast, mobile-first e-commerce storefront for a family fashion store —
  browsable catalog, category filtering, wishlist, and WhatsApp-based ordering.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/license-private-lightgrey" alt="License" />
</p>

---

## Features

- **Shoppable catalog** — 25+ products across Women, Men, Kids and Festive collections with real photography, prices, discounts, ratings and badges
- **Category filtering** — one tap on Women / Men / Kids / Festive shows only that collection
- **Search & sort** — instant text search plus sorting by price and rating
- **Product quick view** — modal with large photo, size selector, quantity stepper and a live order-total
- **WhatsApp ordering** — every order button opens a pre-filled WhatsApp chat with product, size, quantity and total
- **Wishlist** — heart products, see a live counter in the header; saved in `localStorage` and survives page reloads
- **Fully responsive** — designed mobile-first, tested down to 320px phones
- **Zero backend** — pure static site; content lives in one data file

## Tech Stack

| Layer     | Choice                                    |
| --------- | ----------------------------------------- |
| UI        | React 18 (function components + hooks)    |
| Bundler   | Vite 5                                    |
| Styling   | Hand-written CSS (custom properties, no framework) |
| Icons     | Inline SVG (no icon library)              |
| Hosting   | Any static host (Vercel / Netlify / Pages)|

## Getting Started

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173

# 3. Production build (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Customization

All store content lives in **`src/data.js`** — edit it and the whole site updates. No component changes needed.

### Store settings (`STORE`)

```js
export const STORE = {
  name: 'Mangalam Mart',
  location: 'Lalganj, Vaishali, Bihar',
  whatsappNumber: '919999999999',   // country code + number, digits only
  instagram: 'https://instagram.com/mangalammart',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=...',
}
```

> **Set `whatsappNumber` to the store's real number** — every order button across
> the site uses it automatically.

### Adding a product (`PRODUCTS`)

```js
{
  id: 'w9',                    // unique
  cat: 'women',                // women | men | kids | festive
  name: 'Silk Blend Saree',
  price: 1599,
  oldPrice: 1999,              // optional — shows struck-through MRP + discount %
  rating: 4.6,
  badge: 'New',                // optional — New | Best Seller | Trending | ...
  img: 'https://.../photo.jpg',
  waMsg: "Hi Mangalam Mart! I'd like to order the Silk Blend Saree (₹1,599).",
}
```

Product photos can be any public image URL (currently served from Pexels CDN).

## Project Structure

```
mangalam-mart/
├── index.html                  # Vite entry
├── public/                     # Logo / favicon assets
└── src/
    ├── data.js                 # ★ All content: store info + products
    ├── wishlist.jsx            # Wishlist context + localStorage
    ├── hooks.jsx               # Reveal-on-scroll helpers
    ├── App.jsx
    ├── main.jsx
    ├── styles.css              # Design system (white + brand pink)
    └── components/
        ├── Navbar.jsx          # Header, nav, wishlist counter
        ├── Hero.jsx            # Hero + trust strip
        ├── Shop.jsx            # Catalog: tabs, search, sort, grid
        ├── ProductModal.jsx    # Quick view: sizes, qty, order
        ├── Sections.jsx        # Categories, new arrivals, offers
        ├── Info.jsx            # About, how-to-order, location, contact
        ├── Footer.jsx
        └── Icons.jsx           # Inline SVG icon set
```

## Deployment

The build output is fully static — deploy `dist/` anywhere:

**Vercel**

```bash
npx vercel --prod
```

Framework preset: **Vite** · Build: `npm run build` · Output: `dist`

**Netlify**

```bash
npx netlify deploy --prod --dir=dist
```

## Ordering Flow

1. Customer browses or searches the catalog and taps a product photo
2. Picks size and quantity in the quick-view — the button shows the live total
3. Tapping **Order** opens WhatsApp with product, size, quantity and total pre-filled
4. The store confirms availability and completes the order in chat

No payment gateway, no accounts — deliberate, for a local storefront.

---

<p align="center">
  <strong>Mangalam Mart</strong> · Quality · Style · Affordability
</p>
