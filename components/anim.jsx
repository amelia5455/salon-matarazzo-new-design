'use client';

/* Shared scroll/mount reveal + motion helpers, ported from the original
 * bundle. Client components because they rely on IntersectionObserver,
 * scroll listeners, and hover state. */

import { useEffect, useRef, useState } from 'react';

export function useReveal(opts = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: opts.threshold ?? 0.12, rootMargin: opts.rootMargin ?? '0px 0px -8% 0px' }
    );
    io.observe(el);
    const t = setTimeout(() => setShown(true), opts.fallbackMs ?? 480);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, shown];
}

export function Reveal({ children, delay = 0, y = 18, dur = 900, as: As = 'div', style, className, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${dur}ms cubic-bezier(.2,.6,.2,1) ${delay}ms, transform ${dur}ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

/* Line-by-line masked reveal for large headings: each line rises from
 * behind a clipped edge with a small stagger. Pass the heading's lines as
 * an array; inline styles stay on the heading element itself so the
 * responsive [style*="font-size:..."] selectors keep matching. */
export function LinesReveal({ lines, as: As = 'h2', delay = 120, stagger = 110, dur = 950, style, className, ...rest }) {
  /* Long fallback so below-fold headings genuinely wait for scroll-in;
   * the IntersectionObserver is the real trigger, the timer is a safety
   * net for environments where IO never fires. */
  const [ref, shown] = useReveal({ fallbackMs: 8000 });
  return (
    <As ref={ref} className={className} style={style} {...rest}>
      {lines.map((ln, i) => (
        <span
          key={i}
          style={{
            display: 'block', overflow: 'hidden',
            /* room for descenders that overhang the tight line-height */
            paddingBottom: '.12em', marginBottom: '-.12em',
          }}
        >
          <span style={{
            display: 'block',
            transform: shown ? 'translateY(0)' : 'translateY(115%)',
            opacity: shown ? 1 : 0,
            transition: `transform ${dur}ms cubic-bezier(.2,.6,.2,1) ${delay + i * stagger}ms, opacity ${Math.round(dur * 0.6)}ms ease ${delay + i * stagger}ms`,
          }}>
            {ln}
          </span>
        </span>
      ))}
    </As>
  );
}

export function useParallax(strength = 0.05) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scroller = el.closest('[data-scroller]') || window;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = scroller === window ? window.innerHeight : scroller.clientHeight;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-center * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return ref;
}

export function HoverZoom({ children, scale = 1.04, dur = 1200, style, ...rest }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ overflow: 'hidden', position: 'relative', ...style }}
      {...rest}
    >
      <div style={{
        width: '100%', height: '100%',
        transform: h ? `scale(${scale})` : 'scale(1)',
        transition: `transform ${dur}ms cubic-bezier(.2,.6,.2,1)`,
      }}>
        {children}
      </div>
    </div>
  );
}

export function Marquee({ children, speed = 40, style }) {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', ...style }}>
      <div style={{
        display: 'inline-flex', gap: 64,
        animation: `mq-scroll ${speed}s linear infinite`,
      }}>
        {children}
        {children}
      </div>
    </div>
  );
}
