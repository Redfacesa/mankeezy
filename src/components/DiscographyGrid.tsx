import { DISCOGRAPHY } from '../lib/links';

export default function DiscographyGrid() {
  return (
    <section id="catalog" className="section">
      <div className="section-head">
        <p className="section-eyebrow">Catalog</p>
        <h2 className="section-title">Past releases</h2>
        <p className="note section-desc">
          Singles, albums, and features. Tap through to your platform of choice.
        </p>
      </div>

      <div className="release-grid">
        {DISCOGRAPHY.map((release) => (
          <a
            key={release.title}
            href={release.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`release-card ${release.featured ? 'release-card-featured' : ''}`}
          >
            <span className="release-type">{release.type}</span>
            <h3 className="release-title">{release.title}</h3>
            <span className="release-year">{release.year}</span>
            {release.featured && <span className="release-badge">New</span>}
          </a>
        ))}
      </div>
    </section>
  );
}
