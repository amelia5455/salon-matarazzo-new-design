import SmartLink from './SmartLink';

const LINKS = [
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'team', label: 'Team', href: '/team' },
  { key: 'products', label: 'Products', href: '/products' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const BOOK_URL = 'https://www.vagaro.com/salonmatarazzo/book-now';

export default function SiteNav({ active }) {
  return (
    <nav style={{
      padding: '28px 56px',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      background: 'var(--paper)', color: 'var(--ink)', position: 'sticky', top: 0, zIndex: 20,
      borderBottom: '1px solid rgba(28,28,28,.06)',
    }}>
      <SmartLink href="/" className="serif" style={{
        fontSize: 40, color: 'var(--ink)', letterSpacing: '.01em',
        fontWeight: 500, textDecoration: 'none', justifySelf: 'start',
      }}>
        SALON MATARAZZO
      </SmartLink>
      <div style={{ display: 'flex', gap: 48 }}>
        {LINKS.map((l) => (
          <SmartLink key={l.key} className={'link' + (active === l.key ? ' active' : '')} href={l.href}>
            {l.label}
          </SmartLink>
        ))}
      </div>
      <div style={{ justifySelf: 'end' }}>
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill">Book</a>
      </div>
    </nav>
  );
}
