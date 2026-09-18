import { Reveal } from '../hooks.jsx'
import { STORE } from '../data.js'
import { ArrowRight, MapPinIcon } from './Icons.jsx'

const MODEL_IMG = 'https://images.pexels.com/photos/20788490/pexels-photo-20788490.jpeg?auto=compress&cs=tinysrgb&w=900'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <span className="hero-kicker">Lalganj, Vaishali</span>
          <h1>
            Fashion that fits<br /><em>every</em> style &amp; budget
          </h1>
          <p className="hero-lede">
            Trendy, stylish and affordable clothing for <strong>men, women and kids</strong> —
            everyday essentials to festive wear, all under one roof.
          </p>
          <div className="hero-ctas">
            <a href="#shop" className="btn btn-primary">
              Shop Now <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">Visit Store</a>
          </div>
          <dl className="hero-stats">
            <div><dt>4.6★</dt><dd>Average product rating</dd></div>
            <div><dt>25+</dt><dd>Styles in the new collection</dd></div>
            <div><dt>100%</dt><dd>Family fashion, one store</dd></div>
          </dl>
        </Reveal>

        <Reveal delay={1} className="hero-visual">
          <figure className="hero-photo">
            <img src={MODEL_IMG} alt="Model wearing embroidered traditional wear from the Mangalam Mart festive collection" />
            <figcaption className="hero-tagline-chip">
              <span className="hero-chip-dot" />
              Diwali &amp; Chhath Collection — Now Live
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {Array.from({ length: 3 }).flatMap((_, r) =>
            ['New Arrivals', 'Kurtis & Sarees', 'Kurtas & Denims', "Kids' Fashion", 'Festive Collection', 'Sizes for Everyone']
              .map((t, i) => <span key={`${r}-${i}`}>{t}</span>)
          )}
        </div>
      </div>
    </section>
  )
}
