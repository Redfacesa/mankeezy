import { NAV } from '../lib/links';

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <a href="#" className="site-nav-logo script">Mankeezy</a>
      <div className="site-nav-links">
        {NAV.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="site-nav-link">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
