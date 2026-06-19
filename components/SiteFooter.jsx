import FooterCol from './FooterCol';

const BOOK_URL = 'https://www.vagaro.com/salonmatarazzo/book-now';
const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=677+120th+Ave+NE+Suite+A1,+Bellevue,+WA+98005';

export default function SiteFooter() {
  return (
    <footer style={{
      background: 'var(--accent)', color: 'var(--ink)',
      padding: '120px 96px 48px', backgroundColor: 'rgb(207, 170, 2)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
        gap: 80, paddingBottom: 120, alignItems: 'start',
      }}>
        <div>
          <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-.015em', color: 'var(--ink)' }}>
            Salon <span style={{ fontWeight: 400 }}>Matarazzo</span>
          </div>
          <p className="grotesk" style={{
            fontSize: 16, lineHeight: 1.6, color: 'rgba(28,28,28,.7)', maxWidth: 320, margin: '32px 0 0',
          }}>
            An Eastside salon, Bellevue-born. Quiet craft since 1990.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 56, flexWrap: 'wrap' }}>
          <FooterCol
            heading="Navigate"
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Team', href: '/team' },
              { label: 'Products', href: '/products' },
              { label: 'Contact', href: '/contact' },
              { label: 'Book Online', href: BOOK_URL },
            ]}
          />
          <FooterCol
            heading="Hours"
            items={['Mon: 9:30 – 5:00', 'Tue – Fri: 9:30 – 7:00', 'Wed: 10:00 – 8:00', 'Sat: 9:00 – 5:00', 'Sun: Hours vary']}
            plain
          />
          <FooterCol
            heading="Find Us"
            items={[
              { lines: ['677 120th Ave NE', 'Suite A1', 'Bellevue, WA 98005'], href: MAPS_URL },
              { gap: true },
              { label: '(425) 454-2890', href: 'tel:+14254542890' },
              { label: 'Salon.matarazzo@icloud.com', href: 'mailto:Salon.matarazzo@icloud.com' },
            ]}
            plain
          />
        </div>
      </div>
      <div style={{
        paddingTop: 32, borderTop: '1px solid rgba(28,28,28,.22)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div className="grotesk" style={{ fontSize: 14, color: 'rgba(28,28,28,.65)' }}>
          © 2026 Salon Matarazzo. All rights reserved.
        </div>
        <div className="grotesk" style={{ fontSize: 14, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)' }}>
          DESIGNED BY{' '}
          <a href="https://ameliarsimpson.com" target="_blank" rel="noreferrer"
            style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            AMELIA SIMPSON
          </a>
        </div>
      </div>
    </footer>
  );
}
