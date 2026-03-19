import { useState } from 'react'
import { siteConfig } from '../data/config'

export default function Addons() {
  const { addons } = siteConfig
  const [activeCategory, setActiveCategory] = useState(0)

  const cat = addons[activeCategory]

  return (
    <section id="addons" className="section" style={{ background: 'var(--ink-soft)' }}>
      <div className="container">

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>03 — À La Carte Add-Ons</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(200,169,110,0.3), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '4px' }}
             className="addons-grid">

          {/* Category tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {addons.map((cat, i) => (
              <button key={i} onClick={() => setActiveCategory(i)} style={{
                background: activeCategory === i ? 'rgba(200,169,110,0.1)' : 'transparent',
                border: '1px solid transparent',
                borderLeft: activeCategory === i ? '3px solid var(--gold)' : '3px solid transparent',
                borderColor: activeCategory === i ? 'rgba(200,169,110,0.3)' : 'transparent',
                padding: '16px 20px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: activeCategory === i ? 500 : 300,
                color: activeCategory === i ? 'var(--parchment)' : 'var(--stone)',
              }}
              onMouseEnter={e => { if (activeCategory !== i) e.currentTarget.style.color = 'var(--stone-light)' }}
              onMouseLeave={e => { if (activeCategory !== i) e.currentTarget.style.color = 'var(--stone)' }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <div key={activeCategory} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2px',
            alignContent: 'start',
            animation: 'fadeIn 0.3s ease',
          }}>
            {cat.items.map((item, i) => (
              <div key={i} className="card" style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div>
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '19px',
                    fontWeight: 400,
                    color: 'var(--parchment)',
                    lineHeight: 1.2,
                    marginBottom: '8px',
                  }}>{item.name}</h4>
                  <div style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '13px',
                    color: 'var(--gold)',
                    letterSpacing: '0.04em',
                  }}>{item.price}</div>
                </div>
                <div style={{
                  height: '1px',
                  background: 'rgba(200,169,110,0.1)',
                }} />
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: 'var(--stone)',
                  lineHeight: 1.65,
                  flex: 1,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .addons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
