import PageShell from '@/components/PageShell';
import { Reveal } from '@/components/anim';
import TeamGrid from '@/components/TeamGrid';

export const metadata = {
  title: 'Team',
  description:
    'Meet the senior colorists and precision cutters behind the chair at Salon Matarazzo in Bellevue.',
};

export default function TeamPage() {
  return (
    <PageShell wrapper="sm-team" active="team">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header style={{ padding: '80px 56px 40px' }}>
        <Reveal y={12} delay={80}>
          <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
            <span style={{
              display: 'inline-block',
              borderTop: '1px solid var(--accent-deep)',
              borderBottom: '1px solid var(--accent-deep)',
              padding: '6px 0',
            }}>
              THE TEAM
            </span>
          </div>
        </Reveal>
        <Reveal y={28} delay={160} dur={1100}>
          <h1 className="serif" style={{
            fontSize: 168, lineHeight: .92, letterSpacing: '-.02em',
            color: 'var(--accent-deep)', margin: '40px 0 0',
          }}>
            See the face<br />
            <span style={{ fontWeight: 400 }}>behind the chair.</span>
          </h1>
        </Reveal>
        <Reveal y={14} delay={360}>
          <p className="grotesk" style={{
            fontSize: 18, lineHeight: 1.6, color: 'rgba(28,28,28,.78)',
            margin: '48px 0 0', maxWidth: 560,
          }}>
            Senior colorists and cutters - most have been in the chair for
            more than a decade. Quiet practice, individual to each guest.
          </p>
        </Reveal>
      </header>

      {/* ── Filter row + team grid ─────────────────────────────────── */}
      <TeamGrid />
    </PageShell>
  );
}
