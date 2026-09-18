import { useEffect, useMemo, useState } from 'react'
import { Reveal } from '../hooks.jsx'
import { PRODUCTS, SHOP_TABS, waLink } from '../data.js'
import { useWishlist } from '../wishlist.jsx'
import ProductModal from './ProductModal.jsx'
import { SearchIcon, HeartIcon, StarIcon, EyeIcon, WhatsAppIcon, CloseIcon } from './Icons.jsx'

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="stars" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={13} half={i === full && half} />
      ))}
      <span className="stars-num">{rating.toFixed(1)}</span>
    </span>
  )
}

function ProductCard({ p, onOpen }) {
  const { has, toggle } = useWishlist()
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0
  const liked = has(p.id)

  return (
    <article className="shop-card">
      <div
        className="shop-media"
        onClick={() => onOpen(p)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(p)}
        aria-label={`View ${p.name}`}
      >
        <img src={p.img} alt={p.name} loading="lazy" />
        {p.badge && <span className={`shop-badge ${p.badgeGold ? 'gold' : ''}`}>{p.badge}</span>}
        {discount > 0 && <span className="shop-discount">-{discount}%</span>}
        <button
          className={`shop-heart ${liked ? 'liked' : ''}`}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={(e) => { e.stopPropagation(); toggle(p.id) }}
        >
          <HeartIcon filled={liked} size={16} />
        </button>
        <button className="shop-quick" onClick={() => onOpen(p)}>
          <EyeIcon size={14} /> Quick View
        </button>
      </div>
      <div className="shop-body">
        <h3 className="shop-name">{p.name}</h3>
        <div className="shop-meta">
          <Stars rating={p.rating} />
          <span className="shop-stock">In stock</span>
        </div>
        <div className="shop-price-row">
          <span className="shop-price">₹{p.price.toLocaleString('en-IN')}</span>
          {p.oldPrice && <span className="shop-old">₹{p.oldPrice.toLocaleString('en-IN')}</span>}
        </div>
        <div className="shop-actions">
          <button className="btn btn-primary btn-sm shop-order" onClick={() => onOpen(p)}>Order Now</button>
          <a href={waLink(p.waMsg)} target="_blank" rel="noopener" className="btn btn-outline btn-sm shop-ask" aria-label={`Ask about ${p.name} on WhatsApp`}>
            <WhatsAppIcon size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'priceLow', label: 'Price: Low to High' },
  { key: 'priceHigh', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')
  const [openProduct, setOpenProduct] = useState(null)
  const { ids, count } = useWishlist()

  useEffect(() => {
    const handler = (e) => {
      setTab(e.detail)
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('shop-tab', handler)
    return () => window.removeEventListener('shop-tab', handler)
  }, [])

  const filtered = useMemo(() => {
    let list = tab === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.cat === tab)
    if (tab === 'wishlist') list = PRODUCTS.filter((p) => ids.includes(p.id))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    switch (sort) {
      case 'priceLow': list.sort((a, b) => a.price - b.price); break
      case 'priceHigh': list.sort((a, b) => b.price - a.price); break
      case 'rating': list.sort((a, b) => b.rating - a.rating); break
      default: break
    }
    return list
  }, [tab, query, sort, ids])

  const counts = useMemo(() => {
    const c = { all: PRODUCTS.length, wishlist: ids.length }
    for (const p of PRODUCTS) c[p.cat] = (c[p.cat] || 0) + 1
    return c
  }, [ids])

  const tabs = [...SHOP_TABS, { key: 'wishlist', label: 'Wishlist' }]

  return (
    <section className="shop" id="shop">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Our Shop</span>
          <h2 className="section-title">Shop the latest collection</h2>
          <p className="section-sub">
            Search, filter by category, or sort by price — then order instantly on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={1} className="shop-controls">
          <div className="shop-search">
            <span className="shop-search-icon"><SearchIcon size={17} /></span>
            <input
              type="search"
              placeholder="Search products — kurti, saree, kurta…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
            {query && (
              <button className="shop-search-clear" aria-label="Clear search" onClick={() => setQuery('')}>
                <CloseIcon size={13} />
              </button>
            )}
          </div>
          <div className="shop-sort">
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
              {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
            </select>
          </div>
        </Reveal>

        <Reveal delay={1} className="shop-tabs-wrap">
          <div className="shop-tabs" role="tablist" aria-label="Product categories">
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                className={`shop-tab ${tab === t.key ? (t.key === 'wishlist' ? 'active wishlist-active' : 'active') : ''}`}
                onClick={() => setTab(t.key)}
              >
                {t.key === 'wishlist' && <HeartIcon size={14} filled={tab === t.key} />}
                {t.label}
                <span className="shop-tab-count">{counts[t.key] || 0}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <div className="shop-empty">
            <div className="shop-empty-icon"><HeartIcon size={30} /></div>
            <h3>{tab === 'wishlist' ? 'Your wishlist is empty' : `No results for "${query}"`}</h3>
            <p>{tab === 'wishlist' ? 'Tap the heart on any product to save it here.' : 'Check the spelling or try a different search.'}</p>
            <button className="btn btn-outline btn-sm" onClick={() => { setQuery(''); setTab('all') }}>
              Show All Products
            </button>
          </div>
        ) : (
          <div className="shop-grid" key={tab + query + sort}>
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i % 4, 3)} className="shop-card-reveal">
                <ProductCard p={p} onOpen={setOpenProduct} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="shop-more" delay={2}>
          <p>Much more is available in store — visit us or ask on WhatsApp.</p>
          <a href={waLink('Hi Mangalam Mart! Please share your latest catalogue.')} target="_blank" rel="noopener" className="btn btn-primary">
            <WhatsAppIcon size={16} /> Ask for the Full Catalogue
          </a>
        </Reveal>
      </div>

      {openProduct && <ProductModal product={openProduct} onClose={() => setOpenProduct(null)} />}
    </section>
  )
}
