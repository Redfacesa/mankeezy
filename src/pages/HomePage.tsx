import SiteNav from '../components/SiteNav';
import BirthdayHero from '../components/BirthdayHero';
import InviteSection from '../components/InviteSection';
import MusicVideosSection from '../components/MusicVideosSection';
import DiscographyGrid from '../components/DiscographyGrid';
import HeroSection from '../components/HeroSection';
import StreamRow from '../components/StreamRow';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
  return (
    <div className="page">
      <SiteNav />
      <main>
        <BirthdayHero />
        <div className="main">
          <InviteSection />
          <MusicVideosSection />
          <DiscographyGrid />
          <HeroSection />
          <section className="section section-connect">
            <StreamRow />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
