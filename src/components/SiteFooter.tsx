import { ARTIST, FEATURED_RELEASE, SOCIALS } from '../lib/links';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="script footer-logo">Mankeezy</p>
          <p className="note">{ARTIST.tagline}</p>
        </div>
        <div>
          <p className="label">Listen</p>
          <a href={FEATURED_RELEASE.presaveUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            Pre-save {FEATURED_RELEASE.title}
          </a>
        </div>
        <div>
          <p className="label">Connect</p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="note footer-fine">
        Payment processing partner: RedFace Pay · {new Date().getFullYear()} Mankeezy
      </p>
    </footer>
  );
}
