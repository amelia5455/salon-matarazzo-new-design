'use client';

import React from 'react';
import SmartLink from './SmartLink';

const BASE = { fontSize: 16, color: 'rgba(28,28,28,.85)', lineHeight: 1.4, textDecoration: 'none', transition: 'color .3s ease' };
const hoverIn = (e) => { e.currentTarget.style.color = 'var(--paper)'; };
const hoverOut = (e) => { e.currentTarget.style.color = 'rgba(28,28,28,.85)'; };

export default function FooterCol({ heading, items, plain }) {
  return (
    <div>
      <div className="grotesk" style={{
        fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--ink)', fontWeight: 500, marginBottom: 36,
      }}>
        {heading}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((it, i) => {
          if (typeof it === 'object' && it.gap) {
            return <li key={`gap-${i}`} style={{ height: 22 }} aria-hidden="true" />;
          }
          if (typeof it === 'object' && Array.isArray(it.lines)) {
            return (
              <li key={`lines-${i}`} style={{ marginBottom: 16 }}>
                <SmartLink href={it.href || '#'} className="grotesk" style={{ ...BASE, display: 'inline-block' }}
                  onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {it.lines.map((ln, j) => (
                    <React.Fragment key={j}>{ln}{j < it.lines.length - 1 && <br />}</React.Fragment>
                  ))}
                </SmartLink>
              </li>
            );
          }
          const isObj = typeof it === 'object';
          const label = isObj ? String(it.label) : String(it);
          const href = isObj && it.href ? it.href : '#';
          return (
            <li key={label} style={{ marginBottom: 16 }}>
              {plain && !(isObj && it.href) ? (
                <span className="grotesk" style={{ fontSize: 16, color: 'rgba(28,28,28,.85)', lineHeight: 1.4 }}>{label}</span>
              ) : (
                <SmartLink href={href} className="grotesk" style={BASE} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {label}
                </SmartLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
