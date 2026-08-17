import RsvpForm from '../components/RsvpForm';
import { EVENT } from '../lib/api';

export default function HomePage() {
  return (
    <div className="page" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="hero-sub">Manace Kapinga</p>
        <h1 className="hero-title script">Mankeezy</h1>
        <p className="hand" style={{ marginTop: '0.75rem' }}>still building · still dreaming · still me</p>
      </header>

      <div className="grid-2" style={{ maxWidth: 980, margin: '0 auto' }}>
        <section>
          <div className="album-wrap">
            <img src="/album-28.png" alt="Mankeezy album 28 cover" />
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <span className="sticker">AUG 18 · Album drop</span>
            <span className="sticker" style={{ marginLeft: '0.5rem' }}>SAT 23 · Braai</span>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p className="note">28 years of becoming. Forever evolving.</p>
            <p className="script" style={{ fontSize: '2rem', opacity: 0.35, margin: '0.5rem 0 0' }}>XXVIII</p>
          </div>
        </section>

        <section>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontWeight: 400, fontSize: '1.5rem', margin: '0 0 0.5rem' }}>28</h2>
            <p className="note">
              New album out {EVENT.albumDrop}. Family and friends braai {EVENT.partyDate.toLowerCase()}.
              Exclusive invite only. Contribute from R100 via RedFace Pay, or bring drinks, food, or a gift.
            </p>
          </div>
          <RsvpForm />
        </section>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '2rem' }}>
        <p className="note" style={{ fontSize: '0.75rem' }}>
          love · life · growth · legacy
        </p>
        <p className="note" style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}>
          Payment processing partner: RedFace Pay
        </p>
      </footer>
    </div>
  );
}
