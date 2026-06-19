'use client';

import { useState, useMemo } from 'react';
import TeamCard from '@/components/TeamCard';
import { TEAM } from '@/data/team';

const FILTERS = ['All', 'Stylists', 'Front Desk'];

/* Filter chips + the layered-image team grid. Client component because the
 * filter selection and count are interactive. */
export default function TeamGrid() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? TEAM : TEAM.filter(t => t.group === filter)),
    [filter]
  );

  return (
    <>
      {/* ── Filter row ─────────────────────────────────────────────── */}
      <section style={{ padding: '64px 56px 40px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {FILTERS.map(f =>
              <button
                key={f}
                className={'chip' + (filter === f ? ' is-active' : '')}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            )}
          </div>
          <div className="grotesk" style={{
            fontSize: 14, color: 'var(--accent-deep)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            ({String(visible.length).padStart(2, '0')})
          </div>
        </div>
      </section>

      {/* ── Team grid ──────────────────────────────────────────────── */}
      <section style={{ padding: '24px 56px 140px' }}>
        <div
          className="grid-3"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '120px 32px',
          }}>
          {visible.map((m, i) =>
            <TeamCard key={m.id} idx={i} {...m} />
          )}
        </div>
      </section>
    </>
  );
}
