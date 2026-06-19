'use client';

import { useState } from 'react';

const SHOP_URL = 'https://shop-links.co/cgkfytcWNyZ';

export default function AnnouncementBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="sm-banner" style={{
      background: 'var(--accent)', color: 'var(--ink)',
      padding: '18px 0', position: 'relative',
      display: 'flex', alignItems: 'center',
    }}>
      <div className="sm-banner-track grotesk" style={{ fontSize: 15, lineHeight: 1.4, color: 'var(--ink)' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span className="sm-banner-unit" key={i} aria-hidden={i > 0 ? 'true' : undefined}>
            Purchase R&amp;Co using this link and get free shipping on orders over $35.{' '}
            <a href={SHOP_URL} target="_blank" rel="noreferrer" tabIndex={i > 0 ? -1 : undefined}
              style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 3, whiteSpace: 'nowrap' }}>
              Shop now ↗
            </a>
            <span className="sm-banner-sep" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        style={{
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'var(--accent)', border: 'none', color: 'rgba(28,28,28,.55)',
          cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: '4px 8px', zIndex: 2,
        }}
      >
        ×
      </button>
    </div>
  );
}
