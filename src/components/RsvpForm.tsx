import { FormEvent, useState } from 'react';
import { submitRsvp, EVENT, type ContributionType } from '../lib/api';

const CONTRIBUTIONS: { id: ContributionType; label: string; hint: string }[] = [
  { id: 'pay', label: 'Contribute R100+', hint: 'Pay via RedFace Pay' },
  { id: 'drinks', label: 'Bring drinks', hint: 'Coolers welcome' },
  { id: 'food', label: 'Bring food', hint: 'Salads, sides, snacks' },
  { id: 'gift', label: 'Bring a gift', hint: 'For the birthday braai' },
];

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState(true);
  const [guestCount, setGuestCount] = useState(1);
  const [contribution, setContribution] = useState<ContributionType>('pay');
  const [amount, setAmount] = useState(EVENT.minContribution);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await submitRsvp({
        full_name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        attending,
        guest_count: guestCount,
        contribution_type: contribution,
        contribution_amount_zar: contribution === 'pay' ? amount : undefined,
        contribution_note: note.trim() || undefined,
      });

      if (result.payment_url) {
        window.location.href = result.payment_url;
        return;
      }

      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="card">
        <p className="success">You're on the list. Check your email for the venue and details.</p>
      </div>
    );
  }

  return (
    <form className="card rsvp-card" onSubmit={onSubmit}>
      <h2 className="rsvp-title">RSVP</h2>
      <p className="note rsvp-sub">Confirm your spot. You'll get the address by email.</p>

      {error && <p className="error">{error}</p>}

      <label className="label" htmlFor="name">Full name</label>
      <input id="name" className="field" required value={name} onChange={(e) => setName(e.target.value)} />

      <label className="label" htmlFor="email">Email</label>
      <input id="email" type="email" className="field" required value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className="label" htmlFor="phone">Phone (optional)</label>
      <input id="phone" type="tel" className="field" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label className="label">Are you coming?</label>
      <div className="chip-row">
        <button type="button" className={`chip ${attending ? 'active' : ''}`} onClick={() => setAttending(true)}>
          Yes, I'll be there
        </button>
        <button type="button" className={`chip ${!attending ? 'active' : ''}`} onClick={() => setAttending(false)}>
          Can't make it
        </button>
      </div>

      {attending && (
        <>
          <label className="label" htmlFor="guests">Guests (including you)</label>
          <select id="guests" className="field" value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <label className="label">Your contribution</label>
          <div className="chip-row">
            {CONTRIBUTIONS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`chip ${contribution === c.id ? 'active' : ''}`}
                onClick={() => setContribution(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="note" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
            {CONTRIBUTIONS.find((c) => c.id === contribution)?.hint}
          </p>

          {contribution === 'pay' && (
            <>
              <label className="label" htmlFor="amount">Amount (ZAR, min R{EVENT.minContribution})</label>
              <input
                id="amount"
                type="number"
                min={EVENT.minContribution}
                step={50}
                className="field"
                value={amount}
                onChange={(e) => setAmount(Math.max(EVENT.minContribution, Number(e.target.value)))}
              />
            </>
          )}

          {(contribution === 'gift' || contribution === 'drinks' || contribution === 'food') && (
            <>
              <label className="label" htmlFor="note">What are you bringing? (optional)</label>
              <input id="note" className="field" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. craft beer, potato salad" />
            </>
          )}
        </>
      )}

      <button type="submit" className="btn" disabled={loading} style={{ width: '100%' }}>
        {loading ? 'Sending…' : attending && contribution === 'pay' ? 'RSVP & pay' : 'Confirm RSVP'}
      </button>

      <p className="note" style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.8rem' }}>
        Payments processed by RedFace Pay. You'll receive the full address by email.
      </p>
    </form>
  );
}
