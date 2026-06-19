'use client';

import { useState } from 'react';
import SmartLink from './SmartLink';

const LINKS = [
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'team', label: 'Team', href: '/team' },
  { key: 'products', label: 'Products', href: '/products' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const BOOK_URL = 'https://www.vagaro.com/salonmatarazzo/book-now';

export default function SiteNav({ active }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="sm-nav">
      <SmartLink href="/" className="sm-nav__brand serif" onClick={close}>
        SALON MATARAZZO
      </SmartLink>

      <div className="sm-nav__links">
        {LINKS.map((l) => (
          <SmartLink key={l.key} className={'link' + (active === l.key ? ' active' : '')} href={l.href}>
            {l.label}
          </SmartLink>
        ))}
      </div>

      <div className="sm-nav__cta">
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill">Book</a>
      </div>

      <button
        type="button"
        className="sm-nav__burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <div className={'sm-nav__drawer' + (open ? ' open' : '')}>
        {LINKS.map((l) => (
          <SmartLink key={l.key} className={'link' + (active === l.key ? ' active' : '')} href={l.href} onClick={close}>
            {l.label}
          </SmartLink>
        ))}
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill" onClick={close}>Book</a>
      </div>
    </nav>
  );
}
