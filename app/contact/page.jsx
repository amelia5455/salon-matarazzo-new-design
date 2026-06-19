import PageShell from '@/components/PageShell';
import { Reveal } from '@/components/anim';
import InfoCol from '@/components/InfoCol';
import { HOURS } from '@/data/contact';

export const metadata = {
  title: 'Contact',
  description: 'Visit Salon Matarazzo in Bellevue, WA — address, hours, phone, and booking.',
};

export default function ContactPage() {
  return (
    <PageShell wrapper="sm-ctc" active="contact">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header style={{ padding: '80px 56px 40px' }}>
        <Reveal y={12} delay={80}>
          <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
            <span style={{
              display: 'inline-block',
              borderTop: '1px solid var(--accent-deep)',
              borderBottom: '1px solid var(--accent-deep)',
              padding: '6px 0'
            }}>
              VISIT, CONTACT &amp; HOURS
            </span>
          </div>
        </Reveal>
        <Reveal y={28} delay={160} dur={1100}>
          <h1 className="serif" style={{
            fontSize: 168, lineHeight: .92, letterSpacing: '-.02em',
            color: 'var(--accent-deep)', margin: '40px 0 0'
          }}>
            Find us in<br />
            <span style={{ fontWeight: 400 }}>Bellevue.</span>
          </h1>
        </Reveal>
      </header>

      {/* ── Full-bleed Google Map ──────────────────────────────────── */}
      <section style={{ padding: '32px 0 0' }}>
        <Reveal y={28} delay={120} dur={1100}>
          <div style={{
            position: 'relative', width: '100%', height: 380,
            background: '#e9e7dc'
          }}>
            <iframe
              title="Salon Matarazzo - 677 120th Ave NE, Bellevue, WA"
              src="https://www.google.com/maps?ll=47.6256,-122.1843&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: '100%', height: '100%', border: 0, display: 'block',
                filter: 'grayscale(.15) contrast(.95)'
              }} />

            {/* Custom location pin — anchored at the studio centerpoint */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
              filter: 'drop-shadow(0 6px 14px rgba(28,28,28,.35))'
            }}>
              <svg width="34" height="46" viewBox="0 0 34 46" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 0C7.6 0 0 7.6 0 17c0 11.2 13.5 26.6 16 29.3.5.5 1.5.5 2 0C20.5 43.6 34 28.2 34 17 34 7.6 26.4 0 17 0z"
                  fill="var(--accent-deep, #a8880a)" />
                <circle cx="17" cy="17" r="6" fill="#FFFEF2" />
              </svg>
            </div>
            {/* Subtle pulsing ring at the same anchor */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 64, height: 64, borderRadius: '999px',
              transform: 'translate(-50%, -50%)',
              border: '2px solid rgba(168,136,10,.35)',
              animation: 'salonPin 2.4s ease-out infinite',
              pointerEvents: 'none'
            }} />

            {/* Pin card overlay */}
            <div style={{
              position: 'absolute', top: 40, right: 56,
              background: 'var(--paper)',
              padding: '24px 28px',
              boxShadow: '0 24px 60px rgba(28,28,28,.18), 0 2px 6px rgba(28,28,28,.08)',
              maxWidth: 320
            }}>
              <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
                The studio
              </div>
              <div className="serif" style={{
                fontSize: 30, lineHeight: 1.05, letterSpacing: '-.01em',
                color: 'var(--ink)', marginTop: 14
              }}>
                Salon <span style={{ fontWeight: 400 }}>Matarazzo</span>
              </div>
              <p className="grotesk" style={{
                fontSize: 14, lineHeight: 1.55, color: 'rgba(28,28,28,.75)',
                margin: '14px 0 18px'
              }}>
                677 120th Ave NE, Suite A1<br />
                Bellevue, WA 98005
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=677+120th+Ave+NE+Suite+A1,+Bellevue,+WA+98005"
                target="_blank"
                rel="noreferrer"
                className="grotesk"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase',
                  color: 'var(--ink)', textDecoration: 'none',
                  borderBottom: '1px solid var(--ink)', paddingBottom: 4
                }}>
                Get directions <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Dark info section: Address · Contact · Hours ────────────── */}
      <section className="on-dark" style={{
        background: 'var(--ink)',
        padding: '120px 56px 140px', color: "rgb(168, 136, 10)"
      }}>
        <div className="info-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
          gap: 64,
          padding: '0 0 24px',
          alignItems: 'start'
        }}>
          {/* Address */}
          <InfoCol
            num="01"
            heading="Address"
            headingColor="#a8880a"
            body={
            <>
                <span style={{ display: 'block' }}>Salon Matarazzo</span>
                <span style={{ display: 'block' }}>677 120th Ave NE</span>
                <span style={{ display: 'block' }}>Suite A1</span>
                <span style={{ display: 'block' }}>Bellevue, WA 98005</span>
              </>
            }
            footer={
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=677+120th+Ave+NE+Suite+A1,+Bellevue,+WA+98005"
              target="_blank" rel="noreferrer"
              className="info-link">
                Open in Google Maps ↗
              </a>
            } />


          <div className="col-divider" />

          {/* Contact */}
          <InfoCol
            num="02"
            heading="Contact"
            headingColor="#a8880a"
            body={
            <>
                <span style={{ display: 'block', color: 'rgba(255,254,242,.55)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Phone
                </span>
                <a href="tel:+14254542890" className="info-link">
                  (425) 454-2890
                </a>
                <span style={{ display: 'block', height: 28 }} />
                <span style={{ display: 'block', color: 'rgba(255,254,242,.55)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Email
                </span>
                <a href="mailto:Salon.matarazzo@icloud.com" className="info-link">
                  Salon.matarazzo@icloud.com
                </a>
                <span style={{ display: 'block', height: 28 }} />
                <span style={{ display: 'block', color: 'rgba(255,254,242,.55)', fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Instagram
                </span>
                <a href="https://www.instagram.com/salon_matarazzo/" target="_blank" rel="noreferrer" className="info-link">
                  @salon_matarazzo
                </a>
              </>
            }
            largeBody />


          <div className="col-divider" />

          {/* Hours */}
          <InfoCol
            num="03"
            heading="Salon hours"
            headingColor="#a8880a"
            body={
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, width: '100%' }}>
                {HOURS.map((h) =>
              <li
                key={h.day}
                className="grotesk"
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  gap: 16, padding: '10px 0',
                  borderBottom: '1px dotted rgba(255,254,242,.22)',
                  fontSize: 15, lineHeight: 1.4,
                  color: 'var(--paper)'
                }}>
                    <span style={{ letterSpacing: '.04em' }}>{h.day}</span>
                    <span style={{ opacity: .78 }}>{h.hours}</span>
                  </li>
              )}
              </ul>
            }
            footer={
            <span className="grotesk" style={{
              fontSize: 13, lineHeight: 1.5, color: 'rgba(255,254,242,.55)'
            }}>
                Sunday availability varies - text the studio for the week ahead.
              </span>
            } />

        </div>
      </section>
    </PageShell>
  );
}
