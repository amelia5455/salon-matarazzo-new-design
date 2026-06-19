import PageShell from '@/components/PageShell';
import { Reveal, HoverZoom } from '@/components/anim';
import ImageSlot from '@/components/ImageSlot';
import BrandCell from '@/components/BrandCell';
import { BRANDS } from '@/data/products';

export const metadata = {
  title: 'Products',
  description:
    'A tightly curated shelf of professional hair care — Oribe, Olaplex, R+Co and more — chosen to keep your color and cut looking salon-fresh at home.',
};

export default function ProductsPage() {
  return (
    <PageShell wrapper="sm-prd" active="products">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header style={{ padding: '80px 56px 56px' }}>
        <Reveal y={12} delay={80}>
          <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
            <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent-deep)', borderBottom: '1px solid var(--accent-deep)', padding: '6px 0' }}>
              PRODUCTS
            </span>
          </div>
        </Reveal>
        <Reveal y={28} delay={160} dur={1100}>
          <h1 className="serif" style={{
            fontSize: 168, lineHeight: .92, letterSpacing: '-.02em',
            color: 'var(--accent-deep)', margin: '40px 0 0',
          }}>
            The shelf,<br />
            <span style={{ fontWeight: 400 }}>curated with your hair in mind.</span>
          </h1>
        </Reveal>
      </header>

      {/* ── Full-bleed editorial image ─────────────────────────────── */}
      <section style={{ padding: '24px 0 96px' }}>
        <Reveal y={32} delay={120} dur={1200}>
          <HoverZoom style={{ width: '100%', height: 620 }} scale={1.03}>
            <ImageSlot
              shape="rect"
              placeholder="Editorial - the in-studio shelf, evening light"
              style={{ width: '100%', height: '100%' }}
            />
          </HoverZoom>
        </Reveal>
      </section>

      {/* ── Compact brand grid ─────────────────────────────────────── */}
      <section style={{ padding: '32px 56px 140px' }}>
        <Reveal y={20} delay={80}>
          <div style={{
            paddingBottom: 36,
            borderBottom: '1px solid rgba(28,28,28,.18)',
          }}>
            <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
              Brands we stand behind
            </div>
          </div>
        </Reveal>

        <div className="brand-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 64,
          rowGap: 0,
        }}>
          {BRANDS.map((b, i) =>
            <BrandCell key={b.id} idx={i} {...b} />
          )}
        </div>
      </section>
    </PageShell>
  );
}
