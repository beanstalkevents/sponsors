import { useState } from 'react'
import { siteConfig } from '../data/config'

export default function Packages() {
  const { packages } = siteConfig
  const [active, setActive] = useState(0)

  const pkg = packages[active]

  return (
    <section id="packages" className="section" style={{ background: 'var(--ink)', position: 'relative' }}>
      <div className="container">

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>02 — Partnership Packages</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(200,169,110,0.3), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4px', minHeight: '600px' }}
             className="packages-grid">

          {/* Left — tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {packages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? 'rgba(200,169,110,0.1)' : 'rgba(200,169,110,0.03)',
                  border: active === i ? '1px solid rgba(200,169,110,0.35)' : '1px solid rgba(200,169,110,0.08)',
                  borderLeft: active === i ? `3px solid var(--gold)` : '3px solid transparent',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  if (active !== i) {
                    e.currentTarget.style.background = 'rgba(200,169,110,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)'
                  }
                }}
                onMouseLeave={e => {
                  if (active !== i) {
                    e.currentTarget.style.background = 'rgba(200,169,110,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(200,169,110,0.08)'
                  }
                }}
              >
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  color: active === i ? 'var(--gold)' : 'var(--stone)',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>
                  0{i + 1}
                </div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: active === i ? 'var(--parchment)' : 'var(--stone-light)',
                  lineHeight: 1.2,
                }}>
                  {p.name}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: 'var(--stone)',
                  marginTop: '4px',
                }}>
                  {p.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Right — package detail */}
          <div
            key={active}
            style={{
              background: 'var(--ink-soft)',
              border: '1px solid rgba(200,169,110,0.15)',
              padding: '48px',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
              <div>
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  Package 0{active + 1}
                </div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 300,
                  color: 'var(--parchment)',
                  lineHeight: 1.1,
                }}>
                  {pkg.name}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--stone)',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>Total Investment</div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  color: 'var(--gold)',
                  fontStyle: 'italic',
                }}>
                  {pkg.totalRange}
                </div>
                {pkg.noteSuffix && (
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    color: 'var(--stone)',
                    marginTop: '2px',
                  }}>{pkg.noteSuffix}</div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(200,169,110,0.15)', marginBottom: '28px' }} />

            {/* Summary */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              color: 'var(--stone-light)',
              lineHeight: 1.75,
              marginBottom: '32px',
            }}>
              {pkg.summary}
            </p>

            {/* Includes */}
            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>What's Included</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
              {pkg.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--gold)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    flexShrink: 0,
                    opacity: 0.7,
                  }}>◈</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: 'var(--stone-light)',
                    lineHeight: 1.65,
                  }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Note */}
            {pkg.note && (
              <div style={{
                marginTop: '28px',
                padding: '16px 20px',
                background: 'rgba(200,169,110,0.04)',
                borderLeft: '2px solid rgba(200,169,110,0.3)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'var(--stone)',
                fontStyle: 'italic',
              }}>
                {pkg.note}
              </div>
            )}

            {/* CTA */}
            <div style={{ marginTop: '40px' }}>
              <a href="#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                background: 'var(--gold)',
                textDecoration: 'none',
                padding: '12px 28px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Inquire About This Package
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <p style={{
          marginTop: '32px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: 'var(--stone)',
          fontStyle: 'italic',
          textAlign: 'center',
        }}>
          All meeting packages are performance-based — any unfulfilled meeting is refunded at your per-meeting rate.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
