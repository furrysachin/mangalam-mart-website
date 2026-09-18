// ============================================================
// MANGALAM MART — site data
// Yahan se poora content edit kar sakte ho: products, links,
// WhatsApp number, categories — UI automatically update hoga.
// ============================================================

export const STORE = {
  name: 'Mangalam Mart',
  tagline: 'Fashion for Everyone',
  location: 'Lalganj, Vaishali, Bihar',
  // Apna real WhatsApp number yahan daalo (country code + number, digits only)
  whatsappNumber: '919999999999',
  instagram: 'https://www.instagram.com/mangalammartlalganj',
  instagramHandle: '@mangalammartlalganj',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mangalam+Mart+Lalganj+Vaishali+Bihar',
  logo: '/logo-256.png',
}

export const waLink = (msg) =>
  `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(msg)}`

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`

// ------------------------------------------------------------
// SHOP PRODUCTS — cats: women | men | kids | festive
// ------------------------------------------------------------
export const PRODUCTS = [
  // ---------- WOMEN ----------
  { id: 'w1', cat: 'women', name: 'Chikankari Kurti', price: 899, oldPrice: 1199, rating: 4.5, badge: 'Trending', badgeGold: true, img: px(28512776), waMsg: "Hi Mangalam Mart! I'd like to order the Chikankari Kurti (₹899). Please share sizes & availability." },
  { id: 'w2', cat: 'women', name: 'Yellow Kurti Set', price: 1099, oldPrice: 1399, rating: 4.3, badge: 'New', img: px(13562542), waMsg: "Hi Mangalam Mart! I'd like to order the Yellow Kurti Set (₹1,099). Please share sizes & availability." },
  { id: 'w3', cat: 'women', name: 'Classic Blue Kurti', price: 949, rating: 4.4, img: px(19556879), waMsg: "Hi Mangalam Mart! I'd like to order the Classic Blue Kurti (₹949). Please share sizes & availability." },
  { id: 'w4', cat: 'women', name: 'Embroidered Anarkali', price: 1799, oldPrice: 2299, rating: 4.7, badge: 'Best Seller', badgeGold: true, img: px(20788490), waMsg: "Hi Mangalam Mart! I'd like to order the Embroidered Anarkali (₹1,799). Please share sizes & availability." },
  { id: 'w5', cat: 'women', name: 'Black & Gold Saree', price: 1899, rating: 4.6, badge: 'Premium', img: px(30004204), waMsg: "Hi Mangalam Mart! I'd like to order the Black & Gold Saree (₹1,899). Please share availability & draping details." },
  { id: 'w6', cat: 'women', name: 'Red Bridal Saree', price: 2499, oldPrice: 2999, rating: 4.8, badge: 'Best Seller', badgeGold: true, img: px(28943610), waMsg: "Hi Mangalam Mart! I'd like to order the Red Bridal Saree (₹2,499). Please share availability." },
  { id: 'w7', cat: 'women', name: 'Blue White Saree', price: 1499, rating: 4.2, img: px(34904955), waMsg: "Hi Mangalam Mart! I'd like to order the Blue White Saree (₹1,499). Please share availability." },
  { id: 'w8', cat: 'women', name: 'Blue Embroidered Gown', price: 1999, oldPrice: 2499, rating: 4.5, badge: 'New', img: px(18977044), waMsg: "Hi Mangalam Mart! I'd like to order the Blue Embroidered Gown (₹1,999). Please share sizes & availability." },

  // ---------- MEN ----------
  { id: 'm1', cat: 'men', name: 'Premium Yellow Kurta', price: 999, oldPrice: 1299, rating: 4.6, badge: 'Best Seller', badgeGold: true, img: px(34423747), waMsg: "Hi Mangalam Mart! I'd like to order the Premium Yellow Kurta (₹999). Please share sizes & availability." },
  { id: 'm2', cat: 'men', name: 'Casual Denim Shirt', price: 1199, rating: 4.4, badge: 'Trending', badgeGold: true, img: px(32223765), waMsg: "Hi Mangalam Mart! I'd like to order the Casual Denim Shirt (₹1,199). Please share sizes & availability." },
  { id: 'm3', cat: 'men', name: 'Black Tee & Jeans Combo', price: 1499, oldPrice: 1899, rating: 4.3, img: px(25025038), waMsg: "Hi Mangalam Mart! I'd like to order the Black Tee & Jeans Combo (₹1,499). Please share sizes." },
  { id: 'm4', cat: 'men', name: 'Formal White Shirt', price: 899, rating: 4.5, img: px(1042140), waMsg: "Hi Mangalam Mart! I'd like to order the Formal White Shirt (₹899). Please share sizes & availability." },
  { id: 'm5', cat: 'men', name: 'Beige Kurta Pyjama', price: 1299, oldPrice: 1599, rating: 4.5, badge: 'New', img: px(5938772), waMsg: "Hi Mangalam Mart! I'd like to order the Beige Kurta Pyjama (₹1,299). Please share sizes & availability." },
  { id: 'm6', cat: 'men', name: 'Smart Casual Shirt', price: 999, rating: 4.2, img: px(1824316), waMsg: "Hi Mangalam Mart! I'd like to order the Smart Casual Shirt (₹999). Please share sizes & availability." },

  // ---------- KIDS ----------
  { id: 'k1', cat: 'kids', name: 'Kids Traditional Set', price: 799, oldPrice: 999, rating: 4.6, badge: 'Best Seller', badgeGold: true, img: px(16574686), waMsg: "Hi Mangalam Mart! I'd like to order the Kids Traditional Set (₹799). Please share age/size options." },
  { id: 'k2', cat: 'kids', name: 'Pink Party Dress', price: 699, rating: 4.4, badge: 'New', img: px(17087585), waMsg: "Hi Mangalam Mart! I'd like to order the Pink Party Dress (₹699). Please share age/size options." },
  { id: 'k3', cat: 'kids', name: 'Floral Frock', price: 649, oldPrice: 849, rating: 4.3, img: px(20562741), waMsg: "Hi Mangalam Mart! I'd like to order the Floral Frock (₹649). Please share age/size options." },
  { id: 'k4', cat: 'kids', name: 'Rose Bow Party Dress', price: 749, rating: 4.5, img: px(5819399), waMsg: "Hi Mangalam Mart! I'd like to order the Rose Bow Party Dress (₹749). Please share age/size options." },
  { id: 'k5', cat: 'kids', name: 'Plaid Dress with Flowers', price: 599, rating: 4.2, badge: 'New', img: px(33344772), waMsg: "Hi Mangalam Mart! I'd like to order the Plaid Dress with Flowers (₹599). Please share age/size options." },

  // ---------- FESTIVE ----------
  { id: 'f1', cat: 'festive', name: 'Festive Suit (Salwar)', price: 1499, oldPrice: 1899, rating: 4.7, badge: 'Festive', badgeGold: true, img: px(13584944), waMsg: "Hi Mangalam Mart! I'd like to order the Festive Suit (₹1,499). Please share sizes & availability." },
  { id: 'f2', cat: 'festive', name: 'Diwali Special Kurta', price: 1149, rating: 4.5, badge: 'Festive', badgeGold: true, img: px(16777516), waMsg: "Hi Mangalam Mart! I'd like to order the Diwali Special Kurta (₹1,149). Please share sizes & availability." },
  { id: 'f3', cat: 'festive', name: 'Chhath Puja Saree', price: 1699, oldPrice: 2099, rating: 4.6, badge: 'Festive Special', img: px(15906953), waMsg: "Hi Mangalam Mart! I'd like to order the Chhath Puja Saree (₹1,699). Please share availability." },
  { id: 'f4', cat: 'festive', name: 'Fall Festive Saree', price: 1599, rating: 4.4, badge: 'Festive', img: px(31302931), waMsg: "Hi Mangalam Mart! I'd like to order the Fall Festive Saree (₹1,599). Please share availability." },
  { id: 'f5', cat: 'festive', name: 'Party Red Dress', price: 1349, oldPrice: 1699, rating: 4.3, badge: 'Party Wear', img: px(9101950), waMsg: "Hi Mangalam Mart! I'd like to order the Party Red Dress (₹1,349). Please share sizes & availability." },
  { id: 'f6', cat: 'festive', name: 'Yellow Festive Kurti', price: 1049, rating: 4.4, badge: 'New', img: px(12279088), waMsg: "Hi Mangalam Mart! I'd like to order the Yellow Festive Kurti (₹1,049). Please share sizes & availability." },
  { id: 'f7', cat: 'festive', name: 'Blue Kurti by the Lake', price: 1149, rating: 4.5, img: px(39287863), waMsg: "Hi Mangalam Mart! I'd like to order the Blue Kurti by the Lake (₹1,149). Please share sizes & availability." },
]

// New Arrivals = featured subset (home page ke liye)
export const FEATURED = ['m1', 'w4', 'k1']

// Category tiles — image-led (Myntra-style)
export const CATEGORIES = [
  { key: 'women', name: "Women's Wear", text: 'Kurtis, sarees, suits & dresses for every occasion.', img: px(28512776) },
  { key: 'men', name: "Men's Wear", text: 'Kurtas, shirts, denim & everyday essentials.', img: px(34423747) },
  { key: 'kids', name: "Kids' Wear", text: 'Cute, comfy & festive outfits for little ones.', img: px(16574686) },
  { key: 'festive', name: 'Festive Wear', text: 'Diwali & Chhath Puja special collection.', img: px(13584944) },
]

export const WHY = [
  { icon: 'sparkle', name: 'Latest Styles', text: 'Fresh, trending fashion added to the store every week.' },
  { icon: 'rupee', name: 'Honest Prices', text: 'Quality outfits at prices that respect your budget.' },
  { icon: 'users', name: 'For the Family', text: 'Men, women and kids — everything under one roof.' },
  { icon: 'grid', name: 'Wide Range', text: 'Casual, formal, traditional and festive wear in every size.' },
  { icon: 'pin', name: 'Your Local Store', text: 'Visit us in Lalganj, Vaishali — try before you buy.' },
]

export const COLLECTIONS = [
  { title: "Men's Collection", cat: 'men', items: ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Kurtas', 'Traditional Wear', 'Festive Wear'], waMsg: "Hi Mangalam Mart! I'd like to explore the Men's Collection." },
  { title: "Women's Collection", cat: 'women', items: ['Sarees', 'Suits', 'Kurtis', 'Dresses', 'Tops', 'Traditional Wear', 'Festive Wear'], waMsg: "Hi Mangalam Mart! I'd like to explore the Women's Collection." },
  { title: "Kids' Collection", cat: 'kids', items: ["Kids' Dresses", 'Shirts & T-Shirts', 'Jeans', 'Traditional Wear', 'Festive Wear', 'Casual Wear'], waMsg: "Hi Mangalam Mart! I'd like to explore the Kids' Collection." },
]

export const STEPS = [
  { n: '1', name: 'Explore', text: 'Browse our latest collections and products.' },
  { n: '2', name: 'Choose', text: 'Select your favourite outfit.' },
  { n: '3', name: 'WhatsApp Us', text: 'Send us the product details or screenshot.' },
  { n: '4', name: 'Confirm Your Order', text: 'Our team will help you with availability, size and order details.' },
]

export const CONTACTS = [
  { icon: 'phone', name: 'Call Us', text: 'Talk to our team directly.' },
  { icon: 'whatsapp', name: 'WhatsApp', text: 'Fast replies for orders & enquiries.' },
  { icon: 'insta', name: 'Instagram DM', text: 'Message us @MangalamMart.' },
  { icon: 'pin', name: 'Visit Store', text: 'Lalganj, Vaishali, Bihar.' },
]

export const NAV_LINKS = [
  ['Home', '#home'],
  ['Shop', '#shop'],
  ['Collections', '#categories'],
  ['Festive', '#festive'],
  ['About Us', '#about'],
  ['Contact', '#contact'],
]

// Shop filter tabs
export const SHOP_TABS = [
  { key: 'all', label: 'All' },
  { key: 'women', label: 'Women' },
  { key: 'men', label: 'Men' },
  { key: 'kids', label: 'Kids' },
  { key: 'festive', label: 'Festive' },
]
