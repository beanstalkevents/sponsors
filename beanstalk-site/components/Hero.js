import Image from 'next/image'
import { siteConfig } from '../data/config'

export default function Hero() {
  const { event, clientName, pricing } = siteConfig

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      paddingBottom: '80px', overflow: 'hidden',
      background: 'linear-gradient(160deg, var(--green-darkest) 0%, #1a2e28 100%)',
    }}>
      {/* Organic background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(ellipse 60% 50% at 80% 20%, rgba(205,247,101,0.07) 0%, transparent 70%),
                          radial-gradient(ellipse 40% 60% at 10% 80%, rgba(49,92,82,0.6) 0%, transparent 60%)`,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(205,247,101,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(205,247,101,0.04) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />

      {/* Event date pill — top right */}
      <div style={{
        position: 'absolute', top: '90px', right: '32px',
        fontFamily: 'Afacad, sans-serif', fontSize: '12px', fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--green-lime)',
        background: 'rgba(205,247,101,0.1)',
        border: '1px solid rgba(205,247,101,0.2)',
        borderRadius: '100px', padding: '8px 18px',
      }}>
        Sept 14–16, 2026 · Brooklyn, NY
      </div>

      <div className="container">
        {/* Client badge */}
        {clientName && (
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'Afacad, sans-serif', fontSize: '13px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--black)', background: 'var(--green-lime)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '28px',
          }}>
            <span>🌱</span> Prepared for {clientName}
          </div>
        )}

        {!clientName && (
          <div className="animate-fade-up" style={{ marginBottom: '28px' }}>
            <span style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--green-lime)',
            }}>Partnership Overview · 2026</span>
          </div>
        )}

        {/* Hero headline */}
        <h1 className="animate-fade-up delay-1" style={{
          fontFamily: 'NewSpirit, serif', fontWeight: 700,
          fontSize: 'clamp(52px, 9vw, 120px)',
          lineHeight: 0.92, letterSpacing: '-0.02em',
          color: 'var(--off-white)',
          marginBottom: '32px',
        }}>
          Grow your<br />
          <span style={{ color: 'var(--green-lime)' }}>network.</span>
        </h1>

        <p className="animate-fade-up delay-2" style={{
          fontFamily: 'Afacad, sans-serif', fontSize: '18px', fontWeight: 400,
          color: 'var(--mint)', lineHeight: 1.65,
          maxWidth: '560px', marginBottom: '48px',
        }}>
          {event.description}
        </p>

        {/* Stats row */}
        <div className="animate-fade-up delay-3" style={{
          display: 'flex', flexWrap: 'wrap', gap: '0',
          borderTop: '1px solid rgba(205,247,101,0.15)',
          marginBottom: '52px', maxWidth: '720px',
        }}>
          {[
            { value: '90%+', label: 'VP & Above' },
            { value: '2×', label: 'Senior ratio vs peers' },
            { value: 'Invite', label: 'Only event' },
            { value: '3', label: 'Days in Brooklyn' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: '1 1 140px', padding: '20px 24px',
              borderRight: i < 3 ? '1px solid rgba(205,247,101,0.1)' : 'none',
              borderBottom: '1px solid rgba(205,247,101,0.15)',
            }}>
              <div style={{
                fontFamily: 'NewSpirit, serif', fontWeight: 700,
                fontSize: '32px', color: 'var(--green-lime)', lineHeight: 1, marginBottom: '4px',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'Afacad, sans-serif', fontSize: '13px', color: 'var(--text-faint)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a href="#packages" className="btn-primary">
            View Packages
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.35,
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--green-lime), transparent)' }} />
        <span style={{ fontFamily: 'Afacad, sans-serif', fontSize: '10px', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--mint)' }}>Scroll</span>
      </div>
    </section>
  )
}
