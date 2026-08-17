import RsvpForm from './RsvpForm';
import { EVENT } from '../lib/api';

export default function InviteSection() {
  return (
    <section id="braai" className="section invite-section">
      <div className="invite-grid">
        <div className="invite-copy">
          <p className="section-eyebrow">Exclusive invite</p>
          <h2 className="section-title">Saturday braai</h2>
          <p className="note invite-lead">
            Family and friends only. Album launch week, turning 28, and a private braai
            to celebrate together.
          </p>

          <div className="invite-details card">
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
              <span className="label">Contribution</span>
              <p>
                R{EVENT.minContribution}+ via RedFace Pay, or bring drinks, food, or a gift.
              </p>
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
