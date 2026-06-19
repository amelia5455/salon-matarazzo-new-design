import { Reveal } from '@/components/anim';
import ImageSlot from '@/components/ImageSlot';

/* ─── Brand cell ─────────────────────────────────────────────────── */
export default function BrandCell({ idx, id, num, name, origin, tagline, logo }) {
  return (
    <Reveal y={20} delay={60 + (idx % 3) * 60}>
      <article style={{
        padding: '32px 0 28px',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        rowGap: 18,
      }}>
        {/* Logo slot */}
        <div style={{
          width: '100%', aspectRatio: '5 / 3',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: logo ? '#ffffff' : 'transparent',
          borderRadius: 4,
          padding: logo ? '6%' : 0,
          overflow: 'hidden',
        }}>
          {logo ? (
            <img
              src={logo}
              alt={`${name} logo`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <ImageSlot
              shape="rect"
              placeholder={`${name} logo`}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>

        {/* Caption: brand name + italic tagline */}
        <div>
          <div className="serif" style={{
            fontSize: 22, lineHeight: 1.1, letterSpacing: '-.005em',
            color: 'var(--ink)',
          }}>
            {name}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
