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
