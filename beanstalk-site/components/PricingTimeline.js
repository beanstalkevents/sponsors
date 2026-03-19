import { siteConfig } from '../data/config'

export default function PricingTimeline() {
  const { pricing } = siteConfig

  return (
    <section className="section" style={{ background: 'var(--bark)', position: 'relative', overflow: 'hidden' }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative' }}>

        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>Pricing Schedule</div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 300,
            color: 'var(--parchment)',
            lineHeight: 1.1,
          }}>
            The earlier you commit,<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>the more you save.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>

          {/* Ticket pricing */}
          <div>
            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(200,169,110,0.2)',
            }}>Ticket Rates</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pricing.ticketTiers.map((tier, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(200,169,110,0.08)',
                  opacity: i === 0 ? 1 : 0.55 + (i * 0.05),
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    color: i === 0 ? 'var(--gold)' : 'var(--stone-light)',
                    fontWeight: 400,
                  }}>{tier.price}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: 'var(--stone)',
                    }}>by {tier.deadline}</div>
                    {i === 0 && (
                      <div style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                      }}>Best Rate</div>
                    )}
                  </div>
                </div>
              ))}
              <div style={{
                paddingTop: '16px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'var(--stone)',
                fontStyle: 'italic',
              }}>
                Registrants after August 13, 2026 forgo the 1:1 Meetings Program.
              </div>
            </div>
          </div>

          {/* Meeting pricing */}
          <div>
            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(200,169,110,0.2)',
            }}>Meeting Rates</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pricing.meetingTiers.map((tier, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(200,169,110,0.08)',
                  opacity: i === 0 ? 1 : 0.6,
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '28px',
                    color: i === 0 ? 'var(--gold)' : 'var(--stone-light)',
                    fontWeight: 400,
                  }}>{tier.price}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: 'var(--stone)',
                    }}>by {tier.deadline}</div>
                    {i === 0 && (
                      <div style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                      }}>Best Rate</div>
                    )}
                  </div>
                </div>
              ))}
              <div style={{
                paddingTop: '16px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'var(--stone)',
                fontStyle: 'italic',
              }}>
                Minimum 10 meetings, maximum 18. All unfulfilled meetings are fully refunded.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
