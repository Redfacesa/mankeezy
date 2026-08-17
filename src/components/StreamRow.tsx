import { SOCIALS } from '../lib/links';

interface StreamRowProps {
  compact?: boolean;
}

export default function StreamRow({ compact }: StreamRowProps) {
  const items = compact ? SOCIALS.slice(0, 6) : SOCIALS;

  return (
    <div className={`stream-row ${compact ? 'stream-row-compact' : ''}`} {...(!compact ? { id: 'connect' } : {})}>
      {!compact && <p className="section-eyebrow">Stream & connect</p>}
      <div className="stream-grid">
        {items.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="stream-pill"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
