import type { CSSProperties } from 'react';
import FireworksCanvas from './FireworksCanvas';

export default function BirthdayHero() {
  return (
    <section className="birthday-hero" id="birthday">
      <FireworksCanvas />
      <div className="confetti-layer" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="confetti" style={{ '--i': i } as CSSProperties} />
        ))}
      </div>

      <div className="birthday-content">
        <p className="birthday-eyebrow">18 August · Turning 28</p>
        <h1 className="birthday-age script">
          <span className="birthday-age-num">28</span>
        </h1>
        <p className="birthday-name">Mankeezy</p>
        <p className="birthday-tag hand">still building · still dreaming · still me</p>

        <div className="birthday-cta-block">
          <p className="birthday-hook">
            Exclusive birthday braai. Family and friends only.
            <strong> RSVP now</strong> to get your invite with the address.
          </p>
          <div className="birthday-actions">
            <a href="#braai" className="btn btn-gold btn-xl pulse-cta">
              RSVP to the braai
            </a>
            <a
              href="https://distrokid.com/hyperfollow/mankeezy/28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              Pre-save album 28
            </a>
          </div>
          <p className="birthday-fine note">
            Contribute from R100 via RedFace Pay, or bring drinks, food, or a gift.
          </p>
        </div>
      </div>

      <a href="#braai" className="scroll-hint" aria-label="Scroll to RSVP">
        <span>↓</span>
      </a>
    </section>
  );
}
