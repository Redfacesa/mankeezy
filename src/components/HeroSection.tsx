import { ARTIST, FEATURED_RELEASE } from '../lib/links';
import StreamRow from './StreamRow';

export default function HeroSection() {
  return (
    <section id="listen" className="hero">
      <div className="hero-grid">
        <div className="hero-visual">
          <div className="hero-art-frame">
            <img src={FEATURED_RELEASE.cover} alt={`${FEATURED_RELEASE.title} album cover`} />
          </div>
          <div className="hero-badges">
            <span className="sticker">AUG 18 · Album drop</span>
            <span className="sticker">SAT 23 · Braai</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">{ARTIST.legalName}</p>
          <h1 className="hero-title script">{FEATURED_RELEASE.title}</h1>
          <p className="hero-hand hand">still building · still dreaming · still me</p>
          <p className="hero-lead">{ARTIST.bio}</p>
          <p className="note hero-meta">
            New album <strong>{FEATURED_RELEASE.title}</strong> drops {FEATURED_RELEASE.date}.
            Pre-save now on Spotify and Apple Music.
          </p>

          <div className="hero-actions">
            <a
              href={FEATURED_RELEASE.presaveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              Pre-save 28
            </a>
            <a
              href={FEATURED_RELEASE.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              Apple Music
            </a>
          </div>

          <StreamRow compact />
        </div>
      </div>
    </section>
  );
}
