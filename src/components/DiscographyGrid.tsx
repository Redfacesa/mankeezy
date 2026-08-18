import type { CSSProperties } from 'react';
import { DISCOGRAPHY } from '../lib/links';

export default function DiscographyGrid() {
  return (
    <section id="catalog" className="section catalog-section">
      <div className="section-head">
        <p className="section-eyebrow">Catalog</p>
        <h2 className="section-title">Past releases</h2>
        <p className="note section-desc">Album art from the journey. Tap to stream.</p>
      </div>

      <div className="release-grid release-grid-visual">
        {DISCOGRAPHY.map((release) => (
          <a
            key={release.title}
            href={release.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`release-card-visual ${release.featured ? 'release-card-featured' : ''}`}
            style={{ '--accent': release.accent ?? '#fff' } as CSSProperties}
          >
            <div className="release-art">
              {release.cover ? (
                <img src={release.cover} alt={`${release.title} cover`} loading="lazy" />
              ) : (
                <div className="release-art-fallback">{release.title.slice(0, 1)}</div>
              )}
            </div>
            <div className="release-meta">
              <span className="release-type">{release.type}</span>
              <h3 className="release-title">{release.title}</h3>
              <span className="release-year">{release.year}</span>
              {release.featured && <span className="release-badge">New</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
