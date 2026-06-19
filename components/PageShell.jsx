import AnnouncementBanner from './AnnouncementBanner';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';

/* Wraps every page: scoped wrapper (carries the per-page CSS vars/styles),
 * announcement banner, sticky nav, the page's <main> content, and the footer. */
export default function PageShell({ wrapper, active, children }) {
  return (
    <div className={wrapper} style={{
      width: '100%', minHeight: '100vh',
      background: 'var(--paper)', color: 'var(--ink)',
      fontFamily: '"Manrope", system-ui, sans-serif',
    }}>
      <AnnouncementBanner />
      <SiteNav active={active} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
