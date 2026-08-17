export const ARTIST = {
  name: 'Mankeezy',
  legalName: 'Manace Kapinga',
  tagline: 'Cape Town · DRC roots · rapper · producer · designer',
  bio: '28 years of becoming. Forever evolving.',
  email: 'mankapmankeezy@gmail.com',
} as const;

export const FEATURED_RELEASE = {
  title: '28',
  type: 'Album',
  date: '18 August 2026',
  presaveUrl: 'https://distrokid.com/hyperfollow/mankeezy/28',
  appleMusicUrl: 'https://music.apple.com/us/album/28/6776959332',
  cover: '/album-28.png',
} as const;

export const SOCIALS = [
  { id: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/artist/3mlqQIEqjblXPijyUvbrai' },
  { id: 'apple', label: 'Apple Music', href: 'https://music.apple.com/us/album/28/6776959332' },
  { id: 'deezer', label: 'Deezer', href: 'https://www.deezer.com/artist/227363835' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/mankeezy' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@Mankeezy' },
  { id: 'mixcloud', label: 'Mixcloud', href: 'https://www.mixcloud.com/mankap/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://za.linkedin.com/in/manace-kapinga-1941441a7' },
] as const;

export interface Release {
  title: string;
  year: string;
  type: 'Album' | 'Single' | 'EP';
  href: string;
  featured?: boolean;
}

/** Past releases — links to streaming where available. */
export const DISCOGRAPHY: Release[] = [
  { title: '28', year: '2026', type: 'Album', href: FEATURED_RELEASE.presaveUrl, featured: true },
  { title: 'New Age', year: '2026', type: 'Album', href: 'https://open.spotify.com/artist/3mlqQIEqjblXPijyUvbrai' },
  { title: 'Tough Love', year: '2025', type: 'Album', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'Christmas Gift', year: '2025', type: 'Album', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'Roll Up', year: '2025', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'Mwana Ya Mboka', year: '2025', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'Baby', year: '2024', type: 'Single', href: 'https://www.deezer.com/album/678831851' },
  { title: 'Paris "My Chance"', year: '2024', type: 'Single', href: 'https://www.deezer.com/album/677526851' },
  { title: 'Puppet', year: '2024', type: 'Single', href: 'https://www.deezer.com/album/672993021' },
  { title: 'Na Ko Baga Te', year: '2024', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'Water', year: '2024', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'TicToc', year: '2023', type: 'Single', href: 'https://www.deezer.com/album/494814471' },
  { title: 'Bad Man', year: '2023', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
  { title: 'How Bout That', year: '2023', type: 'Single', href: 'https://www.deezer.com/artist/227363835' },
];

export const NAV = [
  { id: 'listen', label: 'Listen' },
  { id: 'catalog', label: 'Catalog' },
  { id: 'braai', label: 'Braai RSVP' },
  { id: 'connect', label: 'Connect' },
] as const;
