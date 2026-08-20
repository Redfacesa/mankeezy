import RsvpForm from './RsvpForm';
import { EVENT } from '../lib/api';

export default function InviteSection() {
  return (
    <section id="braai" className="section invite-section invite-section-hot">
      <div className="invite-banner">
        <span className="invite-banner-tag">Exclusive · Limited spots</span>
        <h2 className="invite-banner-title">Birthday braai RSVP</h2>
        <p className="invite-banner-sub">
          Saturday 22 August · Bernardino Heights · Friends and family only
        </p>
      </div>

      <div className="invite-grid">
        <div className="invite-copy">
          <p className="section-eyebrow">Get your invite</p>
          <p className="invite-lead">
            Drop your details below. We email you the full address at{' '}
            <strong>12 Eagle Rock Crescent</strong>. Contribute from{' '}
            <strong>R{EVENT.minContribution} and up</strong> via RedFace Pay, or bring drinks, food, or a gift.
          </p>

          <div className="invite-details card invite-details-glow">
            <div className="invite-detail-row">
              <span className="label">When</span>
              <p>{EVENT.partyDate}</p>
            </div>
            <div className="invite-detail-row">
              <span className="label">Where</span>
              <p>
                {EVENT.venue}
                <br />
                {EVENT.suburb}
              </p>
            </div>
            <div className="invite-detail-row">
              <span className="label">Album drop</span>
              <p>{EVENT.albumDrop} · <strong>28</strong> out everywhere</p>
            </div>
          </div>

          <p className="hand invite-scribble">love · life · growth · legacy</p>
        </div>

        <div className="invite-form-wrap">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}
