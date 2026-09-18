import { createContext, useContext, useEffect, useState, useCallback } from 'react'

// ------------------------------------------------------------
// WISHLIST — localStorage ke saath persist hota hai
// ------------------------------------------------------------
const WishlistCtx = createContext(null)

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem('mm-wishlist') || '[]')
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(loadSaved)

  useEffect(() => {
    try { localStorage.setItem('mm-wishlist', JSON.stringify(ids)) } catch { /* ignore */ }
  }, [ids])

  const toggle = useCallback((id) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])

  const has = useCallback((id) => ids.includes(id), [ids])

  return (
    <WishlistCtx.Provider value={{ ids, toggle, has, count: ids.length }}>
      {children}
    </WishlistCtx.Provider>
  )
}

export const useWishlist = () => useContext(WishlistCtx)
