import { STORE, NAV_LINKS, waLink } from '../data.js'
import { WhatsAppIcon, InstaIcon, MapPinIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <img className="logo-mark" src={STORE.logo} alt="Mangalam Mart logo" />
              <span>
                <span className="logo-name">Mangalam Mart</span>
                <span className="logo-tag" style={{ color: 'rgba(255,255,255,0.5)' }}>Fashion for Everyone</span>
              </span>
            </a>
            <p>Trendy, stylish and affordable clothing for men, women and kids in Lalganj, Vaishali.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li><a href="#shop" onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: 'men' }))}>Men</a></li>
              <li><a href="#shop" onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: 'women' }))}>Women</a></li>
              <li><a href="#shop" onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: 'kids' }))}>Kids</a></li>
              <li><a href="#shop" onClick={() => window.dispatchEvent(new CustomEvent('shop-tab', { detail: 'festive' }))}>Festive Wear</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <ul>
              <li className="footer-addr"><MapPinIcon size={15} /> <span>{STORE.location}</span></li>
              <li>
                <a href={waLink("Hi Mangalam Mart! I'd like to enquire about a product.")} target="_blank" rel="noopener">
                  <WhatsAppIcon size={15} /> Orders &amp; Enquiries
                </a>
              </li>
              <li>
                <a href={STORE.instagram} target="_blank" rel="noopener">
                  <InstaIcon size={15} /> {STORE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mangalam Mart. All rights reserved.</span>
          <span><b>DM for orders &amp; enquiries</b></span>
        </div>
      </div>
    </footer>
  )
}
