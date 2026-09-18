import { Reveal } from '../hooks.jsx'
import { CATEGORIES, WHY, PRODUCTS, FEATURED, waLink } from '../data.js'
import { ArrowRight, SparkleIcon, RupeeIcon, UsersIcon, GridIcon, MapPinIcon } from './Icons.jsx'

const WHY_ICONS = { sparkle: SparkleIcon, rupee: RupeeIcon, users: UsersIcon, grid: GridIcon, pin: MapPinIcon }

export function FestiveBanner() {
  return (
    <section className="festive" id="festive">
      <div className="container festive-inner">
        <Reveal className="festive-copy-block">
          <span className="festive-kicker">The Festive Edit</span>
          <h2>
            Diwali &amp; Chhath Puja <em>Collection</em>
          </h2>
          <p>
            Celebrate every moment in style. Traditional silhouettes, rich fabrics and
            festive colours — for the whole family, at prices that make sense.
          </p>
          <div className="festive-list">
            <span>Women's festive suits &amp; sarees</span>
            <span>Men's kurtas &amp; traditional sets</span>
            <span>Kids' festive collection</span>
          </div>
          <div className="festive-cta">
            <a
              href="#shop"
              className="btn btn-light"
              onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: 'festive' }))}
            >
              Shop the Festive Edit <ArrowRight size={16} />
            </a>
            <p className="festive-note">Limited stock — available in store &amp; on WhatsApp order.</p>
          </div>
        </Reveal>
        <Reveal delay={1} className="festive-visual">
          <img
            src="https://images.pexels.com/photos/13584944/pexels-photo-13584944.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Festive suit from the Mangalam Mart Diwali collection"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}

export function Categories() {
  return (
    <section id="categories">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Collections</span>
          <h2 className="section-title">Shop by category</h2>
          <p className="section-sub">Four edits, curated for the whole family.</p>
        </Reveal>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={i % 4}>
              <a
                href="#shop"
                className="cat-tile"
                onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: c.key }))}
              >
                <div className="cat-tile-media">
                  <img src={c.img} alt={c.name} loading="lazy" />
                </div>
                <div className="cat-tile-body">
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                  <span className="cat-tile-cta">Explore <ArrowRight size={14} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewArrivals() {
  const featured = FEATURED.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean)

  return (
    <section className="arrivals" id="new-arrivals">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Just In</span>
          <h2 className="section-title">New arrivals</h2>
          <p className="section-sub">The latest additions to our shelves this week.</p>
        </Reveal>
        <div className="product-grid">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i % 3} className="product-card">
              <div className="product-media">
                <span className={`product-badge ${p.badgeGold ? 'gold' : ''}`}>{p.badge || 'New'}</span>
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="product-body">
                <h3 className="product-name">{p.name}</h3>
                <div className="product-price">₹{p.price.toLocaleString('en-IN')}</div>
                <p className="product-note">Available in multiple sizes</p>
                <div className="product-actions">
                  <a href="#shop" className="btn btn-outline">View All</a>
                  <a href={waLink(p.waMsg)} target="_blank" rel="noopener" className="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="how-cta" delay={2}>
          <a href="#shop" className="btn btn-primary">
            Browse the Full Shop <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Why Us</span>
          <h2 className="section-title">Fashion you can trust</h2>
        </Reveal>
        <div className="why-grid">
          {WHY.map((w, i) => {
            const Icon = WHY_ICONS[w.icon]
            return (
              <Reveal key={w.name} delay={i % 3} className="why-card cat-card">
                <div className="why-icon"><Icon size={22} /></div>
                <h3>{w.name}</h3>
                <p>{w.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
