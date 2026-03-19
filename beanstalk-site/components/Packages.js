import { useState } from 'react'
import { siteConfig } from '../data/config'

export default function Packages() {
  const { packages } = siteConfig
  const [active, setActive] = useState(0)
  const pkg = packages[active]

  return (
    <section id="packages" className="section" style={{ background: 'var(--green-darkest)' }}>
      <div className="container">
        <div className="section-label">02 — Partnership Packages</div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3px', minHeight: '580px' }}
             className="pkg-grid">

          {/* Tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {packages.map((p, i) => (
              <button key={p.id} onClick={() => setActive(i)} style={{
                background: active === i ? 'var(--green-mid)' : 'var(--green-dark)',
                border: 'none',
                borderLeft: active === i ? '3px solid var(--green-lime)' : '3px solid transparent',
                padding: '18px 22px', cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s', borderRadius: '0',
              }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = '#2f5448' }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'var(--green-dark)' }}
              >
                <div style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: active === i ? 'var(--green-lime)' : 'var(--text-faint)',
                  marginBottom: '5px',
                }}>0{i+1}</div>
                <div style={{
                  fontFamily: 'NewSpirit, serif', fontWeight: 700, fontSize: '17px',
                  color: active === i ? 'var(--off-white)' : 'var(--mint)',
                  lineHeight: 1.2,
                }}>{p.name}</div>
                <div style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '12px',
                  color: active === i ? 'var(--mint)' : 'var(--text-faint)',
                  marginTop: '3px',
                }}>{p.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} style={{
            background: 'var(--green-dark)',
            borderRadius: '0 8px 8px 0',
            padding: '40px 44px',
            animation: 'fadeIn 0.28s ease',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <div style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--green-lime)', marginBottom: '8px',
                }}>Package 0{active+1}</div>
                <h3 style={{
                  fontFamily: 'NewSpirit, serif', fontWeight: 700,
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  color: 'var(--off-white)', lineHeight: 1.0,
                }}>{pkg.name}</h3>
              </div>
              <div style={{
                background: 'rgba(205,247,101,0.08)',
                border: '1px solid rgba(205,247,101,0.2)',
                borderRadius: '8px', padding: '14px 20px', textAlign: 'right',
              }}>
                <div style={{
                  fontFamily: 'Afacad, sans-serif', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--text-faint)', marginBottom: '4px',
                }}>Total Investment</div>
                <div style={{
                  fontFamily: 'NewSpirit, serif', fontWeight: 700, fontSize: '20px',
                  color: 'var(--green-lime)',
                }}>{pkg.totalRange}</div>
                {pkg.noteSuffix && (
                  <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '11px', color: 'var(--text-faint)', marginTop: '2px' }}>
                    {pkg.noteSuffix}
                  </div>
                )}
              </div>
            </div>

            <div className="divider" style={{ marginBottom: '24px' }} />

            <p style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '15px',
              color: 'var(--mint)', lineHeight: 1.75, marginBottom: '28px',
            }}>{pkg.summary}</p>

            <div style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--green-lime)', marginBottom: '14px',
            }}>What's Included</div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              {pkg.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: 'rgba(205,247,101,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#cdf765" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ fontFamily: 'Afacad, sans-serif', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {pkg.note && (
              <div style={{
                marginTop: '24px', padding: '14px 18px',
                background: 'rgba(186,158,110,0.08)',
                borderLeft: '2px solid var(--tan)',
                borderRadius: '0 4px 4px 0',
                fontFamily: 'Afacad, sans-serif', fontSize: '13px',
                color: 'var(--cream)', fontStyle: 'italic',
              }}>{pkg.note}</div>
            )}

            <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Inquire About This Package
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p style={{
          marginTop: '24px', fontFamily: 'Afacad, sans-serif', fontSize: '13px',
          color: 'var(--text-faint)', fontStyle: 'italic', textAlign: 'center',
        }}>
          All meeting packages are performance-based — any unfulfilled meeting is fully refunded.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pkg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
