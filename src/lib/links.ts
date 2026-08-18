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
  coverRemote:
    'https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F5218012--7272C740-3433-432C-88DFFED7E079A9A4--0--391673--WhatsAppImage20260604at8.18.35AM.jpeg?fm=jpg&q=75&w=600',
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
  cover?: string;
  featured?: boolean;
  accent?: string;
}

export const DISCOGRAPHY: Release[] = [
  {
    title: '28',
    year: '2026',
    type: 'Album',
    href: FEATURED_RELEASE.presaveUrl,
    cover: FEATURED_RELEASE.cover,
    featured: true,
    accent: '#ffd700',
  },
  {
    title: 'New Age',
    year: '2026',
    type: 'Album',
    href: 'https://open.spotify.com/artist/3mlqQIEqjblXPijyUvbrai',
    cover: 'https://cdn-images.dzcdn.net/images/cover/75aad91ec0b4f660a3456efafb3774b8/500x500-000000-80-0-0.jpg',
    accent: '#6c5ce7',
  },
  {
    title: 'Tough Love',
    year: '2025',
    type: 'Album',
    href: 'https://www.deezer.com/artist/227363835',
    cover: 'https://cdn-images.dzcdn.net/images/cover/4520c11d1aee68c5ccf7ae4ac1e5d333/500x500-000000-80-0-0.jpg',
    accent: '#e17055',
  },
  {
    title: 'Christmas Gift',
    year: '2025',
    type: 'Album',
    href: 'https://www.deezer.com/artist/227363835',
    cover: 'https://cdn-images.dzcdn.net/images/cover/49a73f1fc3aa507ecd5a032694e1bcd5/500x500-000000-80-0-0.jpg',
    accent: '#00b894',
  },
  {
    title: 'Roll Up',
    year: '2025',
    type: 'Single',
    href: 'https://www.deezer.com/album/942142941',
    cover: 'https://cdn-images.dzcdn.net/images/cover/682c9aa991bd62fc7c8717a680f92272/500x500-000000-80-0-0.jpg',
    accent: '#fdcb6e',
  },
  {
    title: 'Mwana Ya Mboka',
    year: '2025',
    type: 'Single',
    href: 'https://www.deezer.com/artist/227363835',
    cover: 'https://cdn-images.dzcdn.net/images/cover/0dda474bff9a747b1186092b9cf1d574/500x500-000000-80-0-0.jpg',
    accent: '#0984e3',
  },
  {
    title: 'Baby',
    year: '2024',
    type: 'Single',
    href: 'https://www.deezer.com/album/678831851',
    cover: 'https://cdn-images.dzcdn.net/images/cover/698ed6f7686392967a96779d3e1bbe3b/500x500-000000-80-0-0.jpg',
    accent: '#fd79a8',
  },
  {
    title: 'Paris "My Chance"',
    year: '2024',
    type: 'Single',
    href: 'https://www.deezer.com/album/677526851',
    cover: 'https://cdn-images.dzcdn.net/images/cover/abb9e98fd3f233f320d350a1040892c0/500x500-000000-80-0-0.jpg',
    accent: '#a29bfe',
  },
  {
    title: 'Puppet',
    year: '2024',
    type: 'Single',
    href: 'https://www.deezer.com/album/672993021',
    cover: 'https://cdn-images.dzcdn.net/images/cover/2de15122c5d2cd9f673130cdb8a91dc0/500x500-000000-80-0-0.jpg',
    accent: '#636e72',
  },
  {
    title: 'Water',
    year: '2024',
    type: 'Single',
    href: 'https://www.deezer.com/artist/227363835',
    cover: 'https://cdn-images.dzcdn.net/images/cover/35aabfcf9ac1ec5ab93e423e464f93fe/500x500-000000-80-0-0.jpg',
    accent: '#00cec9',
  },
  {
    title: 'TicToc',
    year: '2023',
    type: 'Single',
    href: 'https://www.deezer.com/album/494814471',
    cover: 'https://cdn-images.dzcdn.net/images/cover/ad1213c89b08415d9365996e767f7729/500x500-000000-80-0-0.jpg',
    accent: '#e84393',
  },
];

export const NAV = [
  { id: 'birthday', label: 'Birthday' },
  { id: 'braai', label: 'RSVP braai' },
  { id: 'videos', label: 'Videos' },
  { id: 'catalog', label: 'Catalog' },
  { id: 'listen', label: 'Listen' },
  { id: 'connect', label: 'Connect' },
] as const;
