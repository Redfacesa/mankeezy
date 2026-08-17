import SiteNav from '../components/SiteNav';
import HeroSection from '../components/HeroSection';
import DiscographyGrid from '../components/DiscographyGrid';
import InviteSection from '../components/InviteSection';
import StreamRow from '../components/StreamRow';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
  return (
    <div className="page">
      <SiteNav />
      <main className="main">
        <HeroSection />
        <DiscographyGrid />
        <InviteSection />
        <section className="section section-connect">
          <StreamRow />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
