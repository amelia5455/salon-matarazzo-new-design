'use client';

import { Reveal } from '@/components/anim';
import { DEFAULT_BIO } from '@/data/team';

/* Team card — image on front, bio on the flip side. */
export default function TeamCard({ idx, id, first, last, tag, bio, instagram }) {
  const igHandle = instagram
    ? '@' + (instagram.match(/instagram\.com\/([^\/?#]+)/) || [, ''])[1]
    : null;
  return (
    <Reveal y={36} delay={80 + (idx % 6) * 50} dur={1100}>
      <article className="card">
        {/* Flip container — image on front, bio on back */}
        <div className="flip" style={{ position: 'relative', width: '100%', aspectRatio: '5 / 7' }}>
          <div className="flip-inner">
            <div className="face front bg" style={{ overflow: 'hidden' }}>
              <img
                src={`/images/team/team-${id}.avif`}
                alt={`${first}${last ? ' ' + last : ''}`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="face back">
              <div>
                <h4 className="back-name">{first}{last ? ' ' + last : ''}</h4>
              </div>
              <div className="back-bio">{bio ? (
                Array.isArray(bio)
                  ? bio.map((para, i) => <p key={i}>{para}</p>)
                  : <p>{bio}</p>
              ) : <p>{DEFAULT_BIO}</p>}</div>
              {instagram &&
                <a className="back-ig"
                   href={instagram}
                   target="_blank"
                   rel="noreferrer"
                   onClick={(e) => e.stopPropagation()}>
                  {igHandle} <span aria-hidden="true">↗</span>
                </a>
              }
            </div>
          </div>
        </div>

        {/* Caption */}
        <div style={{ marginTop: 28 }}>
          <h3 className="serif" style={{
            fontSize: 44, lineHeight: 1, letterSpacing: '-.012em',
            margin: 0, color: 'var(--accent-deep)',
            display: 'inline',
          }}>
            {first}&nbsp;{last}
          </h3>
          <span className="tag">{tag}</span>
        </div>
      </article>
    </Reveal>
  );
}
