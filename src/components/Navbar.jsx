import { useState } from 'react'
import { STORE, NAV_LINKS, waLink } from '../data.js'
import { useWishlist } from '../wishlist.jsx'
import { WhatsAppIcon, HeartIcon } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useWishlist()

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <img className="logo-mark" src={STORE.logo} alt="Mangalam Mart logo" />
          <span>
            <span className="logo-name">Mangalam Mart</span>
            <span className="logo-tag">Fashion for Everyone</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-wish" href="#shop" aria-label={`Wishlist, ${count} items`} onClick={() => setOpen(false)}>
            <HeartIcon filled={count > 0} size={19} />
            {count > 0 && <span className="nav-wish-count">{count}</span>}
          </a>
          <a className="btn btn-primary btn-sm nav-wa" target="_blank" rel="noopener" href={waLink("Hi Mangalam Mart! I'd like to know more about your collection.")}>
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <button
            className={`hamburger ${open ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
