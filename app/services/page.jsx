import PageShell from '@/components/PageShell';
import { Reveal } from '@/components/anim';
import ServiceRow from '@/components/ServiceRow';
import { SERVICES } from '@/data/services';

export const metadata = {
  title: 'Services',
  description:
    'Precision cuts, considered color, highlights, and restorative treatments at Salon Matarazzo in Bellevue, WA.',
};

export default function ServicesPage() {
  return (
    <PageShell wrapper="sm-srv" active="services">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header style={{ padding: '80px 56px 56px' }}>
        <Reveal y={12} delay={80}>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)', padding: '6px 0' }}>
              SERVICES
            </span>
          </div>
        </Reveal>
        <Reveal y={28} delay={160} dur={1100}>
          <h1 className="serif" style={{
            fontSize: 168, lineHeight: .92, letterSpacing: '-.02em',
            color: 'var(--accent)', margin: '40px 0 0'
          }}>
            Hair, crafted<br />
            <span style={{ fontWeight: 400 }}>with intention.</span>
          </h1>
        </Reveal>
      </header>

      {/* ── Editorial image ────────────────────────────────────────── */}
      <section className="srv-editorial" style={{ padding: '24px 0 0' }}>
        <Reveal y={32} delay={240} dur={1200}>
          <div style={{ width: '100%', height: 620, overflow: 'hidden' }}>
            <img
              src="/images/services/editorial.jpg"
              alt="A blow-dry and finish at Salon Matarazzo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </Reveal>
      </section>

      {/* ── Service-list section ───────────────────────────────────── */}
      <section className="on-dark" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '40px 56px 120px' }}>
        {SERVICES.map((s, i) =>
          <ServiceRow key={s.id} idx={i} {...s} last={i === SERVICES.length - 1} />
        )}
      </section>
    </PageShell>
  );
}
