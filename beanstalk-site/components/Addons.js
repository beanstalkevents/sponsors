import { useState } from 'react'
import { siteConfig } from '../data/config'

export default function Addons() {
  const { addons } = siteConfig
  const [activeCategory, setActiveCategory] = useState(0)
  const cat = addons[activeCategory]

  return (
    <section id="addons" className="section" style={{ background: 'var(--green-dark)' }}>
      <div className="container">
        <div className="section-label">03 — À La Carte Add-Ons</div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3px' }}
             className="addons-grid">

          {/* Category tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {addons.map((c, i) => (
              <button key={i} onClick={() => setActiveCategory(i)} style={{
                background: activeCategory === i ? 'var(--green-mid)' : 'transparent',
                border: 'none',
                borderLeft: activeCategory === i ? '3px solid var(--green-lime)' : '3px solid transparent',
                padding: '15px 18px', cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s',
                fontFamily: 'Afacad, sans-serif', fontSize: '14px', fontWeight: activeCategory === i ? 600 : 400,
                color: activeCategory === i ? 'var(--off-white)' : 'var(--text-faint)',
                borderRadius: '0',
              }}
              onMouseEnter={e => { if (activeCategory !== i) e.currentTarget.style.color = 'var(--mint)' }}
              onMouseLeave={e => { if (activeCategory !== i) e.currentTarget.style.color = 'var(--text-faint)' }}
              >{c.category}</button>
            ))}
          </div>

          {/* Items */}
          <div key={activeCategory} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '3px', alignContent: 'start',
            animation: 'fadeIn 0.28s ease',
          }}>
            {cat.items.map((item, i) => (
              <div key={i} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h4 style={{
                  fontFamily: 'NewSpirit, serif', fontWeight: 700,
                  fontSize: '17px', color: 'var(--off-white)', lineHeight: 1.2,
                }}>{item.name}</h4>
                <div style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '14px', fontWeight: 600,
                  color: 'var(--green-lime)',
                }}>{item.price}</div>
                <div className="divider" />
                <p style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '13px',
                  color: 'var(--text-muted)', lineHeight: 1.65, flex: 1,
                }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .addons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
