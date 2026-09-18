import { useEffect, useState } from 'react'
import { waLink } from '../data.js'
import { useWishlist } from '../wishlist.jsx'
import { CloseIcon, HeartIcon } from './Icons.jsx'

const SIZES = ['S', 'M', 'L', 'XL', 'XXL']
const KID_SIZES = ['2-3 Y', '4-5 Y', '6-7 Y', '8-9 Y', '10-11 Y']

export default function ProductModal({ product, onClose }) {
  const [size, setSize] = useState(product?.cat === 'kids' ? KID_SIZES[1] : 'M')
  const [qty, setQty] = useState(1)
  const { has, toggle } = useWishlist()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null

  const sizes = product.cat === 'kids' ? KID_SIZES : SIZES
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0
  const liked = has(product.id)

  const orderMsg = `Hi Mangalam Mart!\n\nI'd like to order:\n• Product: ${product.name}\n• Price: ₹${product.price.toLocaleString('en-IN')}\n• Size: ${size}\n• Quantity: ${qty}\n• Total: ₹${(product.price * qty).toLocaleString('en-IN')}\n\nPlease confirm availability.`

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}><CloseIcon size={16} /></button>

        <div className="modal-media">
          <img src={product.img.replace('w=600', 'w=1000')} alt={product.name} />
          {product.badge && <span className={`shop-badge ${product.badgeGold ? 'gold' : ''}`}>{product.badge}</span>}
          {discount > 0 && <span className="shop-discount">-{discount}%</span>}
        </div>

        <div className="modal-body">
          <h3 className="modal-name">{product.name}</h3>
          <div className="shop-meta">
            <span className="shop-stock">In stock</span>
          </div>

          <div className="shop-price-row">
            <span className="shop-price">₹{product.price.toLocaleString('en-IN')}</span>
            {product.oldPrice && <span className="shop-old">₹{product.oldPrice.toLocaleString('en-IN')}</span>}
            {discount > 0 && <span className="modal-save">Save ₹{(product.oldPrice - product.price).toLocaleString('en-IN')}</span>}
          </div>

          <div className="modal-opt-label">Select size</div>
          <div className="modal-sizes" role="radiogroup" aria-label="Select size">
            {sizes.map((s) => (
              <button
                key={s}
                className={`size-chip ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="modal-opt-label">Quantity</div>
          <div className="modal-qty">
            <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button aria-label="Increase quantity" onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="modal-actions">
            <a href={waLink(orderMsg)} target="_blank" rel="noopener" className="btn btn-primary modal-order">
              Order on WhatsApp — ₹{(product.price * qty).toLocaleString('en-IN')}
            </a>
            <button className={`btn btn-outline modal-wish ${liked ? 'is-liked' : ''}`} onClick={() => toggle(product.id)}>
              <HeartIcon filled={liked} size={15} /> {liked ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>

          <p className="modal-note">Size chart on request · Easy exchange within 3 days · Also available at our Lalganj store</p>
        </div>
      </div>
    </div>
  )
}
