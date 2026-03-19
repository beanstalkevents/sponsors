import { siteConfig } from '../data/config'

export default function Hero() {
  const { event, clientName, clientNote, pricing } = siteConfig

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '80px',
      overflow: 'hidden',
      background: 'var(--ink)',
    }}>
      {/* Background grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Vertical label */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '32px',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'center',
        fontFamily: 'DM Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.2em',
        color: 'var(--stone)',
        whiteSpace: 'nowrap',
      }}>
        SEPT 14–16 · INDUSTRY CITY · BROOKLYN
      </div>

      <div className="container">
        {/* Client personalization */}
        {clientName && (
          <div className="animate-fade-up" style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            Prepared exclusively for {clientName}
          </div>
        )}

        {/* Eyebrow */}
        {!clientName && (
          <div className="animate-fade-up" style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--stone-light)',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
            Partnership Overview · {siteConfig.year}
          </div>
        )}

        {/* Title */}
        <h1 className="animate-fade-up delay-1" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(56px, 9vw, 128px)',
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          color: 'var(--parchment)',
          marginBottom: '8px',
        }}>
          Bean
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>stalk</span>
        </h1>
        <h2 className="animate-fade-up delay-2" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(16px, 3vw, 28px)',
          fontWeight: 300,
          color: 'var(--stone-light)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '48px',
        }}>
          {event.dates}
        </h2>

        {/* Stats bar */}
        <div className="animate-fade-up delay-3" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0',
          borderTop: '1px solid rgba(200,169,110,0.2)',
          borderBottom: '1px solid rgba(200,169,110,0.2)',
          marginBottom: '56px',
        }}>
          {[
            { value: '90%+', label: 'VP & Above' },
            { value: '2×', label: 'Senior Ratio vs Competitors' },
            { value: '100%', label: 'Invite Only' },
            { value: '3', label: 'Days, Brooklyn NY' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: '1 1 160px',
              padding: '24px 28px',
              borderRight: i < 3 ? '1px solid rgba(200,169,110,0.15)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '36px',
                fontWeight: 400,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'var(--stone-light)',
                letterSpacing: '0.06em',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="animate-fade-up delay-4" style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--stone-light)',
            lineHeight: 1.7,
            maxWidth: '520px',
            flex: '1 1 300px',
          }}>
            {event.description}
          </p>
          <div style={{ flex: '0 0 auto' }}>
            <a href="#packages" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              border: '1px solid rgba(200,169,110,0.4)',
              padding: '14px 28px',
              transition: 'background 0.25s, color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold)'
            }}
            >
              View Packages
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.2em', color: 'var(--stone)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>
    </section>
  )
}
