import { siteConfig } from '../data/config'

export default function About() {
  const { event, pricing } = siteConfig

  return (
    <section id="about" className="section" style={{ background: 'var(--ink-soft)', position: 'relative' }}>
      <div className="container">

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>01 — What is Beanstalk?</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(200,169,110,0.3), transparent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>

          {/* Left — headline */}
          <div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 300,
              color: 'var(--parchment)',
              lineHeight: 1.05,
              marginBottom: '32px',
            }}>
              Peer-led.<br />
              <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Decision makers</span><br />
              only.
            </h2>
            <span className="gold-rule" style={{ marginBottom: '32px' }} />
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              color: 'var(--stone-light)',
              lineHeight: 1.8,
              marginTop: '32px',
            }}>
              {event.attendeeProfile}
            </p>
          </div>

          {/* Right — cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                icon: '◈',
                title: 'The Format',
                body: '90% of time at Beanstalk is in 1:1 or small group, peer-led discussions — maximizing meaningful connections with people who can move the needle.',
              },
              {
                icon: '◎',
                title: 'The Attendees',
                body: event.brandRatio,
              },
              {
                icon: '◇',
                title: 'The Location',
                body: `${event.location} — ${event.dates}. Spread across 5 unique Industry City venues including the Kura Distillery, Shadi's Grocery, and more.`,
              },
            ].map((card, i) => (
              <div key={i} className="card" style={{ padding: '28px 32px', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '18px',
                    color: 'var(--gold)',
                    opacity: 0.7,
                    lineHeight: 1.4,
                    flexShrink: 0,
                  }}>{card.icon}</span>
                  <div>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '20px',
                      color: 'var(--parchment)',
                      marginBottom: '8px',
                      fontWeight: 400,
                    }}>{card.title}</h3>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      color: 'var(--stone-light)',
                      lineHeight: 1.7,
                    }}>{card.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing snapshot banner */}
        <div style={{
          marginTop: '80px',
          padding: '40px 48px',
          background: 'rgba(200,169,110,0.05)',
          border: '1px solid rgba(200,169,110,0.2)',
          borderRadius: '2px',
        }}>
          <div style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}>Early Partner Pricing</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '48px',
                color: 'var(--parchment)',
                lineHeight: 1,
              }}>${pricing.meetingRate.toLocaleString()}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--stone-light)', marginTop: '6px' }}>
                per hosted meeting — by {pricing.meetingDeadline}
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(200,169,110,0.2)' }} />
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '48px',
                color: 'var(--parchment)',
                lineHeight: 1,
              }}>${pricing.ticketRate.toLocaleString()}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--stone-light)', marginTop: '6px' }}>
                per ticket — by {pricing.ticketDeadline}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 'auto' }}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'var(--stone)',
                fontStyle: 'italic',
                maxWidth: '260px',
                lineHeight: 1.6,
              }}>
                Any unfulfilled meetings are fully refunded at your per-meeting rate. Entirely performance based.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
