import { VIDEO_LINKS } from '../lib/media';

export default function MusicVideosSection() {
  return (
    <section id="videos" className="section videos-section">
      <div className="section-head">
        <p className="section-eyebrow">Watch</p>
        <h2 className="section-title">Music videos</h2>
        <p className="note section-desc">Visuals from the catalog. Tap to watch on YouTube.</p>
      </div>

      <div className="video-scroll">
        {VIDEO_LINKS.map((v) => (
          <a
            key={v.title}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="video-card-play" aria-hidden>▶</div>
            <h3 className="video-card-title">{v.title}</h3>
            <span className="video-card-label">{v.label}</span>
          </a>
        ))}
        <a
          href="https://www.youtube.com/@Mankeezy"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card video-card-channel"
        >
          <div className="video-card-play" aria-hidden>+</div>
          <h3 className="video-card-title">All videos</h3>
          <span className="video-card-label">YouTube channel</span>
        </a>
      </div>
    </section>
  );
}
