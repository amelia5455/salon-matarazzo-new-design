import PageShell from '@/components/PageShell';
import { Reveal, HoverZoom } from '@/components/anim';
import ImageSlot from '@/components/ImageSlot';
import SmartLink from '@/components/SmartLink';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { TESTIMONIALS } from '@/data/testimonials';

const BOOK_URL = 'https://www.vagaro.com/salonmatarazzo/book-now';

export const metadata = {
  description:
    'An Eastside hair salon in Bellevue, WA. Expert colorists and precision cutters delivering personalized, on-trend looks since 1990.',
};

export default function HomePage() {
  return (
    <PageShell wrapper="sm-home" active="home">
      {/* Hero */}
      <header style={{ padding: '80px 56px 80px', color: 'rgb(168, 136, 10)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal y={12} delay={80}>
              <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
                <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent-deep)', borderBottom: '1px solid var(--accent-deep)', padding: '6px 0' }}>
                  An Eastside salon · Bellevue, WA
                </span>
              </div>
            </Reveal>
            <Reveal y={28} delay={160} dur={1100}>
              <h1 className="serif" style={{ fontSize: 144, lineHeight: 0.92, letterSpacing: '-.02em', color: 'var(--accent-deep)', margin: '40px 0 0' }}>
                Styling Bellevue<br />
                <span style={{ fontWeight: 400 }}>since 1990.</span>
              </h1>
            </Reveal>
            <Reveal y={14} delay={360}>
              <p className="grotesk" style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(28,28,28,.78)', margin: '40px 0 0', maxWidth: 480 }}>
                A studio of considered colorists and cutters - quietly setting the standard for the Eastside.
              </p>
            </Reveal>
            <Reveal y={12} delay={480}>
              <div style={{ display: 'inline-flex', gap: 18, marginTop: 36, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill">Book a chair</a>
                <SmartLink href="/services" className="link" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 0', fontSize: 14, letterSpacing: '.05em' }}>
                  See the services
                </SmartLink>
              </div>
            </Reveal>
          </div>
          <Reveal y={28} delay={240} dur={1100}>
            <HoverZoom style={{ width: '100%', height: 680 }} scale={1.03}>
              <ImageSlot placeholder="Drop hero portrait - the chair, a wash, the room" style={{ width: '100%', height: '100%' }} />
            </HoverZoom>
          </Reveal>
        </div>
      </header>

      {/* About */}
      <section className="on-dark" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '140px 56px 160px' }}>
        <Reveal y={12} delay={60}>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)', padding: '6px 0' }}>
              About the salon
            </span>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'start', marginTop: 56 }}>
          <Reveal y={24} delay={160} dur={1100}>
            <h2 className="serif" style={{ fontSize: 112, lineHeight: 0.96, letterSpacing: '-.02em', color: 'var(--paper)', margin: 0 }}>
              Thirty-six years,<br />
              <span style={{ fontWeight: 400, color: 'var(--accent)' }}>one client at a time.</span>
            </h2>
          </Reveal>
          <div style={{ paddingTop: 24 }}>
            <Reveal y={20} delay={240}>
              <p className="serif" style={{ fontSize: 24, lineHeight: 1.45, color: 'var(--paper)', margin: 0, maxWidth: 520 }}>
                Located in Bellevue, WA, Salon Matarazzo is where elevated style meets a relaxed, welcoming vibe. Our expert colorists and precision cutters deliver personalized, on-trend looks — without the ego you&apos;ll find at many high-end salons.
              </p>
            </Reveal>
            <Reveal y={16} delay={380}>
              <p className="grotesk" style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,254,242,.7)', margin: '32px 0 0', maxWidth: 480 }}>
                Step into a fun, upbeat space where exceptional results speak for themselves.
              </p>
            </Reveal>
            <Reveal y={14} delay={520}>
              <SmartLink href="/team" className="info-link grotesk" style={{ display: 'inline-block', marginTop: 40, fontSize: 14, letterSpacing: '.06em', textTransform: 'uppercase', paddingBottom: 6 }}>
                Meet the team ↗
              </SmartLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '140px 56px 140px', background: 'var(--paper)' }}>
        <Reveal y={12} delay={60}>
          <div className="eyebrow" style={{ color: 'var(--accent-deep)' }}>
            <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent-deep)', borderBottom: '1px solid var(--accent-deep)', padding: '6px 0' }}>
              From the chair
            </span>
          </div>
        </Reveal>
        <Reveal y={24} delay={140} dur={1100}>
          <h2 className="serif" style={{ fontSize: 112, lineHeight: 0.96, letterSpacing: '-.02em', color: 'var(--ink)', margin: '36px 0 80px', maxWidth: 1000 }}>
            Kind words,<br />
            <span style={{ fontWeight: 400, color: 'var(--accent-deep)' }}>year after year.</span>
          </h2>
        </Reveal>
        <TestimonialCarousel items={TESTIMONIALS} />
      </section>

      {/* CTA */}
      <section className="on-dark" id="book" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '160px 56px 180px', textAlign: 'center' }}>
        <Reveal y={12} delay={60}>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            <span style={{ display: 'inline-block', borderTop: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)', padding: '6px 0' }}>
              Ready when you are
            </span>
          </div>
        </Reveal>
        <Reveal y={28} delay={160} dur={1100}>
          <h2 className="serif" style={{ fontSize: 168, lineHeight: 0.92, letterSpacing: '-.02em', color: 'var(--paper)', margin: '48px 0 0' }}>
            Sit in our<br />
            <span style={{ fontWeight: 400, color: 'var(--accent)' }}>chair.</span>
          </h2>
        </Reveal>
        <Reveal y={14} delay={340}>
          <p className="grotesk" style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,254,242,.7)', margin: '56px auto 0', maxWidth: 540 }}>
            A first visit takes ninety minutes - a conversation, a consultation, and the beginning of a strong client-stylist relationship.
          </p>
        </Reveal>
        <Reveal y={12} delay={480}>
          <div style={{ display: 'inline-flex', gap: 16, marginTop: 48, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="pill-light">Book online</a>
            <a href="tel:+14254542890" className="pill-ghost">Call (425) 454-2890</a>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
