'use client';

import { useState, useEffect } from 'react';
import { Reveal } from './anim';

export default function TestimonialCarousel({ items, perView: perViewProp = 3 }) {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(perViewProp);
  const total = items.length;

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w <= 600 ? 1 : w <= 900 ? 2 : perViewProp);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [perViewProp]);

  const pages = Math.max(1, total - perView + 1);

  useEffect(() => { setStart((s) => Math.min(s, pages - 1)); }, [pages]);

  const go = (dir) => setStart((s) => (s + dir + pages) % pages);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pages]); // eslint-disable-line react-hooks/exhaustive-deps

  const gap = 32;
  const colExpr = `calc((100% - ${(perView - 1) * gap}px) / ${perView})`;
  const shiftExpr = `calc(${start} * (-1 * (${colExpr} + ${gap}px)))`;

  return (
    <Reveal y={28} delay={120}>
      <div className="tcarousel">
        <button className="arrow" aria-label="Previous" onClick={() => go(-1)}>
          <span aria-hidden="true">←</span>
        </button>

        <div className="stage">
          <div className="track" style={{ transform: `translateX(${shiftExpr})`, gridAutoColumns: colExpr }}>
            {items.map((t, i) => {
              const parts = String(t.who).trim().split(/\s+/);
              const firstName = parts[0].replace(/\.$/, '');
              const lastTok = parts[1] ? parts[1].replace(/[^A-Za-z]/g, '') : '';
              const displayName = lastTok ? `${firstName} ${lastTok.charAt(0).toUpperCase()}.` : firstName;
              const initial = firstName.charAt(0).toUpperCase();
              return (
                <figure key={i} className="tcard v-dark" style={{ margin: 0 }}>
                  <span className="tstars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2.5l2.95 6.36 6.8.78-5.05 4.74 1.4 6.7L12 17.7l-6.1 3.38 1.4-6.7L2.25 9.64l6.8-.78L12 2.5z" />
                      </svg>
                    ))}
                  </span>
                  <p className="tbody">{t.q}</p>
                  <figcaption className="tperson">
                    <span className="tavatar" aria-hidden="true">{initial}</span>
                    <span className="tname">{displayName}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <button className="arrow" aria-label="Next" onClick={() => go(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="tdots" role="tablist" aria-label="Testimonials">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === start}
            aria-label={`Show testimonials ${i + 1}`}
            className={'dot' + (i === start ? ' is-active' : '')}
            onClick={() => setStart(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
