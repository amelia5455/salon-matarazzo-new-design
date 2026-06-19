import { Reveal } from '@/components/anim';

/* Info column (Address · Contact · Hours) for the Contact page. */
export default function InfoCol({ num, kicker, heading, headingColor, body, footer, largeBody }) {
  return (
    <Reveal y={28} delay={120}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 360 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 36
        }}>
          <div className="grotesk" style={{ fontSize: 13, letterSpacing: '.05em', color: 'var(--paper)' }}>
            {num}
          </div>
        </div>

        <h3 className="serif" style={{
          fontSize: 56, lineHeight: 1, letterSpacing: '-.015em',
          color: headingColor || 'var(--paper)', margin: '0 0 36px'
        }}>
          {heading}
        </h3>

        <div className="grotesk" style={{
          fontSize: largeBody ? 17 : 16, lineHeight: 1.7,
          color: 'rgba(255,254,242,.85)', flex: 1
        }}>
          {body}
        </div>

        {footer &&
        <div style={{ marginTop: 36 }}>
            {footer}
          </div>
        }
      </div>
    </Reveal>);

}
