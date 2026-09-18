import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Shop from './components/Shop.jsx'
import { FestiveBanner, Categories, NewArrivals, WhyUs } from './components/Sections.jsx'
import { TrustStrip, Offer, About, Collections, HowToOrder, Location, Instagram, Contact, FinalCTA } from './components/Info.jsx'
import Footer from './components/Footer.jsx'
import { WhatsAppIcon } from './components/Icons.jsx'
import { useEffect, useState } from 'react'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'clip' }}>
        <Hero />
        <TrustStrip />
        <Shop />
        <Categories />
        <NewArrivals />
        <WhyUs />
        <FestiveBanner />
        <Offer />
        <About />
        <Collections />
        <HowToOrder />
        <Location />
        <Instagram />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />

      <button
        className={`to-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <a
        className="wa-float"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/919999999999?text=Hi%20Mangalam%20Mart!%20I%27d%20like%20to%20know%20more%20about%20your%20collection."
      >
        <WhatsAppIcon size={22} />
      </a>
    </>
  )
}
