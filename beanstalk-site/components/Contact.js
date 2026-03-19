import Image from 'next/image'
import { siteConfig } from '../data/config'

export default function Contact() {
  const { cta, event } = siteConfig

  return (
    <>
      <section id="contact" className="section" style={{
        background: 'linear-gradient(160deg, var(--green-darkest) 0%, #1a2e28 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Big background text */}
        <div style={{
          position: 'absolute', bottom: '-40px', right: '-10px',
          fontFamily: 'NewSpirit, serif', fontWeight: 700,
          fontSize: 'clamp(100px, 18vw, 220px)',
          color: 'rgba(205,247,101,0.04)',
          lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        }}>2026</div>

        <div className="container" style={{ position: 'relative' }}>
          <div className="section-label">04 — Get in Touch</div>

          <div style={{ maxWidth: '640px' }}>
            <h2 style={{
              fontFamily: 'NewSpirit, serif', fontWeight: 700,
              fontSize: 'clamp(38px, 6vw, 68px)',
              color: 'var(--off-white)', lineHeight: 1.0, marginBottom: '24px',
            }}>{cta.headline}</h2>

            <div className="divider-warm" style={{ marginBottom: '24px' }} />

            <p style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '17px',
              color: 'var(--mint)', lineHeight: 1.7, marginBottom: '40px',
            }}>{cta.body}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <a href={`mailto:${cta.email}`} className="btn-primary">
                {cta.buttonLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={`mailto:${cta.email}`} style={{
                fontFamily: 'Afacad, sans-serif', fontSize: '15px', fontWeight: 500,
                color: 'var(--mint)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--mint)'}
              >{cta.email}</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(205,247,101,0.1)',
        padding: '36px 0',
      }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <Image src="/logos/logo-lime.png" alt="Beanstalk" width={120} height={36}
            style={{ objectFit: 'contain', height: '28px', width: 'auto' }} />
          <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '13px', color: 'rgba(199,220,205,0.45)' }}>
            {event.location} · {event.dates}
          </div>
          <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '13px', color: 'rgba(199,220,205,0.35)' }}>
            © {siteConfig.year} Beanstalk Events
          </div>
        </div>
      </footer>
    </>
  )
}
