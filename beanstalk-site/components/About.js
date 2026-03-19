import { siteConfig } from '../data/config'

export default function About() {
  const { event, pricing } = siteConfig

  return (
    <section id="about" className="section" style={{ background: 'var(--green-dark)' }}>
      <div className="container">
        <div className="section-label">01 — What is Beanstalk?</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '72px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'NewSpirit, serif', fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--off-white)', lineHeight: 1.0, marginBottom: '24px',
            }}>
              Peer-led.<br />
              <span style={{ color: 'var(--green-lime)' }}>Decision<br />makers only.</span>
            </h2>
            <div className="divider-warm" style={{ marginBottom: '24px' }} />
            <p style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '16px',
              color: 'var(--mint)', lineHeight: 1.75,
            }}>
              {event.attendeeProfile}
            </p>
          </div>

          {/* Right — feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                icon: '🌱',
                title: 'The Format',
                body: '90% of time at Beanstalk is in 1:1 or small group, peer-led discussions — maximizing meaningful connections with decision makers.',
              },
              {
                icon: '🎯',
                title: 'Who Attends',
                body: event.brandRatio,
              },
              {
                icon: '📍',
                title: 'The Location',
                body: `${event.location} — ${event.dates}. Spread across 5 unique Industry City venues.`,
              },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: '24px 28px', display: 'flex', gap: '18px' }}>
                <span style={{ fontSize: '22px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{c.icon}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'NewSpirit, serif', fontWeight: 700, fontSize: '18px',
                    color: 'var(--off-white)', marginBottom: '6px',
                  }}>{c.title}</h3>
                  <p style={{ fontFamily: 'Afacad, sans-serif', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early pricing banner */}
        <div style={{
          marginTop: '72px', padding: '36px 44px',
          background: 'rgba(205,247,101,0.06)',
          border: '1px solid rgba(205,247,101,0.2)',
          borderRadius: '10px',
          display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--green-lime)', marginBottom: '10px',
            }}>Early Partner Rates</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
              <div>
                <div style={{ fontFamily: 'NewSpirit, serif', fontWeight: 700, fontSize: '44px', color: 'var(--off-white)', lineHeight: 1 }}>
                  ${pricing.meetingRate.toLocaleString()}
                </div>
                <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '14px', color: 'var(--mint)', marginTop: '4px' }}>
                  per meeting — by {pricing.meetingDeadline}
                </div>
              </div>
              <div style={{ width: '1px', background: 'rgba(205,247,101,0.15)' }} />
              <div>
                <div style={{ fontFamily: 'NewSpirit, serif', fontWeight: 700, fontSize: '44px', color: 'var(--off-white)', lineHeight: 1 }}>
                  ${pricing.ticketRate.toLocaleString()}
                </div>
                <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '14px', color: 'var(--mint)', marginTop: '4px' }}>
                  per ticket — by {pricing.ticketDeadline}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <p style={{
              fontFamily: 'Afacad, sans-serif', fontSize: '14px', color: 'var(--text-faint)',
              fontStyle: 'italic', maxWidth: '280px', lineHeight: 1.65,
            }}>
              Any unfulfilled meetings are fully refunded at your per-meeting rate. Entirely performance based.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
