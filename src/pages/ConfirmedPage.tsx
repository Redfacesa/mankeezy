import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getRsvpByToken, EVENT } from '../lib/api';

export default function ConfirmedPage() {
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const [rsvp, setRsvp] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    getRsvpByToken(token)
      .then((r) => setRsvp(r.rsvp))
      .catch((e) => setError(e instanceof Error ? e.message : 'Not found'));
  }, [token]);

  return (
    <div className="page" style={{ padding: '3rem 1.5rem', maxWidth: 560, margin: '0 auto' }}>
      <p className="hero-sub">Mankeezy · 28</p>
      <h1 style={{ fontWeight: 400, fontSize: '2rem' }}>You're confirmed</h1>

      {error && <p className="error">{error}</p>}

      {rsvp && (
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <p>Hi {String(rsvp.full_name)},</p>
          <p className="note" style={{ marginTop: '1rem' }}>
            <strong>Venue</strong><br />
            {EVENT.venue}<br />
            {EVENT.suburb}
          </p>
          <p className="note" style={{ marginTop: '1rem' }}>
            {EVENT.partyDate}
          </p>
          {rsvp.payment_status === 'pending' && rsvp.contribution_type === 'pay' && (
            <p className="note" style={{ marginTop: '1rem', color: '#f0c674' }}>
              Payment pending. Return to the home page to complete your contribution.
            </p>
          )}
          {rsvp.payment_status === 'paid' && (
            <p className="success" style={{ marginTop: '1rem' }}>Contribution received. Thank you.</p>
          )}
        </div>
      )}

      <Link to="/" className="btn btn-ghost" style={{ marginTop: '2rem', display: 'inline-flex', textDecoration: 'none' }}>
        Back home
      </Link>
    </div>
  );
}
