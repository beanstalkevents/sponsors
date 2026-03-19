import { siteConfig } from '../data/config'

export default function PricingTimeline() {
  const { pricing } = siteConfig

  return (
    <section className="section" style={{ background: 'var(--green-mid)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'Afacad, sans-serif', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--green-lime)', marginBottom: '16px',
          }}>Pricing Schedule</div>
          <h2 style={{
            fontFamily: 'NewSpirit, serif', fontWeight: 700,
            fontSize: 'clamp(30px, 5vw, 52px)', color: 'var(--off-white)', lineHeight: 1.05,
          }}>
            The earlier you commit,<br />
            <span style={{ color: 'var(--green-lime)' }}>the more you save.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {[
            { title: 'Ticket Rates', tiers: pricing.ticketTiers, note: 'Registrants after August 13, 2026 forgo the 1:1 Meetings Program.' },
            { title: 'Meeting Rates', tiers: pricing.meetingTiers, note: 'Minimum 10 meetings, maximum 18. All unfulfilled meetings fully refunded.' },
          ].map((col, ci) => (
            <div key={ci} style={{
              background: 'rgba(35,60,54,0.5)',
              border: '1px solid var(--border)',
              borderRadius: '10px', padding: '32px',
            }}>
              <div style={{
                fontFamily: 'Afacad, sans-serif', fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--green-lime)',
                paddingBottom: '18px',
                borderBottom: '1px solid var(--border)',
                marginBottom: '24px',
              }}>{col.title}</div>

              {col.tiers.map((tier, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0',
                  borderBottom: i < col.tiers.length - 1 ? '1px solid rgba(205,247,101,0.08)' : 'none',
                  opacity: i === 0 ? 1 : 0.6,
                }}>
                  <div style={{
                    fontFamily: 'NewSpirit, serif', fontWeight: 700,
                    fontSize: '26px',
                    color: i === 0 ? 'var(--off-white)' : 'var(--mint)',
                  }}>{tier.price}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'Afacad, sans-serif', fontSize: '13px', color: 'var(--text-faint)' }}>
                      by {tier.deadline}
                    </div>
                    {i === 0 && (
                      <div style={{
                        display: 'inline-block', marginTop: '4px',
                        fontFamily: 'Afacad, sans-serif', fontSize: '10px', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--black)', background: 'var(--green-lime)',
                        borderRadius: '100px', padding: '2px 10px',
                      }}>Best Rate</div>
                    )}
                  </div>
                </div>
              ))}

              <p style={{
                marginTop: '20px', fontFamily: 'Afacad, sans-serif', fontSize: '13px',
                color: 'var(--text-faint)', fontStyle: 'italic', lineHeight: 1.6,
              }}>{col.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
