import { Reveal } from '../hooks.jsx'
import { STORE, COLLECTIONS, STEPS, CONTACTS, waLink } from '../data.js'
import {
  WhatsAppIcon, PhoneIcon, InstaIcon, MapPinIcon, ArrowRight, TruckIcon, RefreshIcon, ShieldIcon,
} from './Icons.jsx'

const CONTACT_ICONS = { phone: PhoneIcon, whatsapp: WhatsAppIcon, insta: InstaIcon, pin: MapPinIcon }

export function TrustStrip() {
  const items = [
    { icon: TruckIcon, title: 'Store Pickup', text: 'Collect your order at the shop' },
    { icon: RefreshIcon, title: 'Easy Exchange', text: 'Within 3 days of purchase' },
    { icon: ShieldIcon, title: 'Quality Checked', text: 'Every piece, before it ships' },
  ]
  return (
    <div className="trust-strip">
      <div className="container trust-strip-inner">
        {items.map(({ icon: Icon, title, text }) => (
          <div className="trust-item" key={title}>
            <Icon size={20} />
            <div><b>{title}</b><span>{text}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Offer() {
  return (
    <section className="offer-wrap">
      <div className="container">
        <Reveal className="offer">
          <span className="eyebrow-plain">Festive Season Special</span>
          <h2>Diwali &amp; Chhath Puja shopping starts here</h2>
          <p className="offer-copy">
            Looking for the perfect festive outfit? Visit the store or message us on WhatsApp —
            we'll help you pick, size and order.
          </p>
          <span className="limited">Limited festive collection available</span>
          <div className="offer-ctas">
            <a href="#location" className="btn btn-light">
              <MapPinIcon size={16} /> Visit Store
            </a>
            <a href={waLink("Hi Mangalam Mart! I'd like to know about your current festive offers.")} target="_blank" rel="noopener" className="btn btn-outline-light">
              <WhatsAppIcon size={16} /> WhatsApp Us
            </a>
          </div>
          <p className="offer-note">Offer details updated according to the current store promotion.</p>
        </Reveal>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <Reveal>
          <span className="section-kicker">About Us</span>
          <h2 className="section-title about-title">A neighbourhood fashion store, done right</h2>
          <p>
            <strong>Mangalam Mart</strong> is a family fashion destination in <strong>Lalganj, Vaishali</strong>,
            offering stylish and affordable clothing for the entire family.
          </p>
          <p>
            From everyday basics to festive and traditional wear, our goal is simple — a wide variety
            of genuine-quality styles, at prices that make sense.
          </p>
          <ul className="about-points">
            <li><span className="tick">✓</span> Wide variety of styles for the whole family</li>
            <li><span className="tick">✓</span> Everyday, traditional &amp; festive wear under one roof</li>
            <li><span className="tick">✓</span> Friendly, local service you can rely on</li>
          </ul>
        </Reveal>
        <Reveal delay={1} className="about-card">
          <h3>Our Promise</h3>
          <div className="promise-words">
            <span>Quality</span>
            <span>Style</span>
            <span>Affordability</span>
          </div>
          <p>We want every customer to find something they love — and come back for more.</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Our Collection</span>
          <h2 className="section-title">Everything your family needs</h2>
        </Reveal>
        <div className="coll-grid">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.title} delay={i} className="coll-card">
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a
                href="#shop"
                className="coll-link"
                onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: c.cat }))}
              >
                Explore {c.title.split("'")[0]} Wear <ArrowRight size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowToOrder() {
  return (
    <section id="how">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">How to Order</span>
          <h2 className="section-title">Shopping made simple</h2>
        </Reveal>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="how-cta" delay={2}>
          <a href={waLink("Hi Mangalam Mart! I'd like to place an order.")} target="_blank" rel="noopener" className="btn btn-primary">
            <WhatsAppIcon size={16} /> Start an Order
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Location() {
  return (
    <section className="arrivals" id="location">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Store Location</span>
          <h2 className="section-title">Visit Mangalam Mart</h2>
        </Reveal>
        <div className="location-inner">
          <Reveal className="loc-card">
            <div className="loc-pin"><MapPinIcon size={24} /></div>
            <h3>Mangalam Mart</h3>
            <p className="loc-address">{STORE.location}</p>
            <p>Come visit our store and explore the complete collection in person.</p>
            <a className="btn btn-primary" target="_blank" rel="noopener" href={STORE.mapsUrl}>
              Get Directions <ArrowRight size={14} />
            </a>
            <div className="loc-info">
              <div><b>Location</b> <span>Lalganj, Vaishali</span></div>
              <div><b>Category</b> <span>Clothing &amp; Fashion</span></div>
              <div><b>For</b> <span>Men · Women · Kids</span></div>
            </div>
            <p className="loc-note">Exact address, phone number and opening hours to be added once confirmed by the store.</p>
          </Reveal>
          <Reveal delay={1} className="loc-visual">
            <div>
              <h3>Your neighbourhood fashion store</h3>
              <p>Step in, explore the racks, try the styles — and walk out with a look you love.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Instagram() {
  return (
    <section className="insta" id="instagram">
      <div className="container">
        <Reveal as="h2" className="section-title">Follow our latest looks</Reveal>
        <Reveal as="p" delay={1} className="section-sub">New arrivals, festive collections and store updates.</Reveal>
        <Reveal delay={2} className="insta-list">
          <span>New Arrivals</span>
          <span>Festive Collections</span>
          <span>Latest Trends</span>
          <span>Offers &amp; Promotions</span>
        </Reveal>
        <Reveal as="p" delay={2} className="insta-handle">{STORE.instagramHandle}</Reveal>
        <Reveal delay={3}>
          <a className="btn btn-outline-light" target="_blank" rel="noopener" href={STORE.instagram}>
            <InstaIcon size={16} /> Follow on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Have a question?</h2>
          <p className="section-sub">Product availability, sizes, prices — we're happy to help.</p>
        </Reveal>
        <div className="contact-grid">
          {CONTACTS.map((c, i) => {
            const Icon = CONTACT_ICONS[c.icon]
            return (
              <Reveal key={c.name} delay={i} className="contact-card">
                <div className="why-icon"><Icon size={20} /></div>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="contact-cta" delay={2}>
          <h3>DM for orders &amp; enquiries</h3>
          <a href={waLink("Hi Mangalam Mart! I have a question about your products.")} target="_blank" rel="noopener" className="btn btn-primary">
            <WhatsAppIcon size={16} /> Message Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" id="final">
      <div className="container">
        <Reveal as="h2">
          Your style. Your choice.<br /><em>Your Mangalam Mart.</em>
        </Reveal>
        <Reveal as="p" delay={2} className="final-loc">{STORE.location}</Reveal>
        <Reveal delay={2} className="final-ctas">
          <a href="#shop" className="btn btn-light">
            Explore the Shop <ArrowRight size={16} />
          </a>
          <a href={waLink("Hi Mangalam Mart! I'd like to know more about your collection.")} target="_blank" rel="noopener" className="btn btn-outline-light">
            <WhatsAppIcon size={16} /> WhatsApp Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
