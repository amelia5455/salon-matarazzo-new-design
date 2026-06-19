import { Reveal, HoverZoom } from '@/components/anim';
import ImageSlot from '@/components/ImageSlot';

/* A single service row: number, image, copy + price list. Used by the
 * Services page over the SERVICES data array. */
export default function ServiceRow({ idx, num, name, tagline, body, slotId, placeholder, services, last }) {
  return (
    <>
      <Reveal y={28} delay={80}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '80px 1fr 1fr',
          gap: 80,
          alignItems: 'start',
          padding: '120px 0'
        }}>
          {/* Number */}
          <div className="grotesk" style={{ fontSize: 15, letterSpacing: '.05em', paddingTop: 8 }}>
            {num}
          </div>

          {/* Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <HoverZoom style={{ width: 380, height: 460 }} scale={1.04}>
              <ImageSlot
                style={{ width: '100%', height: '100%' }}
                shape="rect"
                placeholder={placeholder}
              />
            </HoverZoom>
          </div>

          {/* Copy */}
          <div style={{ paddingTop: 4 }}>
            <h2 className="serif" style={{
              fontSize: 92, lineHeight: .98, letterSpacing: '-.015em',
              color: 'var(--paper)', margin: 0
            }}>
              {name}
            </h2>
            <p className="serif" style={{
              fontSize: 22, lineHeight: 1.35,
              color: 'var(--accent)', margin: '28px 0 0', maxWidth: 460
            }}>
              [{tagline}]
            </p>
            <p className="grotesk" style={{
              fontSize: 15, lineHeight: 1.7, color: 'rgba(255,254,242,.78)',
              margin: '28px 0 0', maxWidth: 480
            }}>
              {body}
            </p>
            {services &&
            <ul style={{
              listStyle: 'none', margin: '36px 0 0', padding: 0,
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 40px',
              maxWidth: 720
            }}>
                {services.map((it) =>
              <li key={it.label} className="grotesk" style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 24,
                fontSize: 14, lineHeight: 1.4,
                paddingBottom: 8, borderBottom: '1px dotted rgba(255,254,242,.22)',
                color: 'var(--paper)'
              }}>
                    <span style={{ whiteSpace: 'nowrap' }}>{it.label}</span>
                    <span style={{ opacity: .75, whiteSpace: 'nowrap' }}>{it.price}</span>
                  </li>
              )}
              </ul>
            }
          </div>
        </div>
      </Reveal>
      {!last && <div className="row-divider" />}
    </>
  );
}
