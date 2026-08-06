'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import SmartLink from './SmartLink';
import RollText from './RollText';

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

  /* Home hero overlay: nav starts transparent over the video and turns
   * solid (paper) once the user scrolls. Other pages keep the solid nav. */
  const pathname = usePathname();
  const overlay = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  /* Expose the nav's height so the home hero can extend underneath it. */
  const navRef = useRef(null);
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const set = () => document.documentElement.style.setProperty('--nav-h', el.offsetHeight + 'px');
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <nav ref={navRef} className={'sm-nav' + (overlay && !scrolled && !open ? ' sm-nav--overlay' : '')}>
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
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill"><RollText>Book</RollText></a>
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
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill" onClick={close}><RollText>Book</RollText></a>
      </div>
    </nav>
  );
}
