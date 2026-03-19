import { siteConfig } from '../data/config'

export default function Contact() {
  const { cta, event } = siteConfig

  return (
    <>
      <section id="contact" className="section" style={{
        background: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Large watermark text */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(120px, 20vw, 240px)',
          fontWeight: 300,
          color: 'rgba(200,169,110,0.04)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}>
          2026
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '600px' }}>

            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>04 — Get in Touch</div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 300,
              color: 'var(--parchment)',
              lineHeight: 1.05,
              marginBottom: '32px',
            }}>
              {cta.headline}
            </h2>

            <span className="gold-rule" style={{ marginBottom: '32px', display: 'block' }} />

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: 'var(--stone-light)',
              lineHeight: 1.75,
              marginBottom: '48px',
            }}>
              {cta.body}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <a
                href={`mailto:${cta.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  background: 'var(--gold)',
                  textDecoration: 'none',
                  padding: '16px 36px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {cta.buttonLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href={`mailto:${cta.email}`} style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '13px',
                color: 'var(--stone-light)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--stone-light)'}
              >
                {cta.email}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--bark)',
        padding: '40px 0',
        borderTop: '1px solid rgba(200,169,110,0.1)',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '18px',
              color: 'var(--gold)',
              letterSpacing: '0.08em',
            }}>BEANSTALK</span>
            <span style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              color: 'var(--stone)',
              letterSpacing: '0.15em',
            }}>EVENTS · {siteConfig.year}</span>
          </div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            color: 'var(--stone)',
          }}>
            {event.location} · {event.dates}
          </div>
          <div style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            color: 'var(--stone)',
          }}>
            © {siteConfig.year} Beanstalk Events
          </div>
        </div>
      </footer>
    </>
  )
}
