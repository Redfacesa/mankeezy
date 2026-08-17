import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { fetchGuestList, type GuestRow, SUPABASE_ANON_KEY, SUPABASE_URL } from '../lib/api';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function statusBadge(g: GuestRow) {
  if (g.contribution_type !== 'pay') return <span className="badge-na">N/A</span>;
  if (g.payment_status === 'paid') return <span className="badge-paid">Paid</span>;
  if (g.payment_status === 'pending') return <span className="badge-pending">Pending</span>;
  return <span className="badge-na">{g.payment_status}</span>;
}

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [guests, setGuests] = useState<GuestRow[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loadGuests = useCallback(async (authToken: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchGuestList(authToken);
      setGuests(data.guests);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.access_token) {
        setToken(data.session.access_token);
        loadGuests(data.session.access_token);
      }
    });
  }, [loadGuests]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const { data, error: authErr } = await supabase.auth.signInWithPassword({ email, password });
    if (authErr || !data.session) {
      setError(authErr?.message || 'Sign in failed');
      return;
    }
    setToken(data.session.access_token);
    loadGuests(data.session.access_token);
  }

  const attending = guests.filter((g) => g.attending);
  const paidTotal = guests
    .filter((g) => g.payment_status === 'paid' && g.contribution_amount_zar)
    .reduce((s, g) => s + Number(g.contribution_amount_zar), 0);

  return (
    <div className="page" style={{ padding: '2rem 1.25rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <p className="hero-sub">RedFace Pay admin</p>
          <h1 style={{ fontWeight: 400, fontSize: '1.75rem', margin: 0 }}>Mankeezy guest list</h1>
        </div>
        <Link to="/" className="btn btn-ghost" style={{ textDecoration: 'none' }}>Site</Link>
      </div>

      {!token ? (
        <form className="card" style={{ maxWidth: 400, marginTop: '2rem' }} onSubmit={signIn}>
          <p className="note" style={{ marginBottom: '1rem' }}>Sign in with your RedFace Pay admin account.</p>
          {error && <p className="error">{error}</p>}
          <label className="label" htmlFor="admin-email">Email</label>
          <input id="admin-email" type="email" className="field" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="label" htmlFor="admin-pass">Password</label>
          <input id="admin-pass" type="password" className="field" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn">Sign in</button>
        </form>
      ) : (
        <>
          <div className="grid-2" style={{ marginTop: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
            <div className="card"><p className="label">RSVPs</p><p style={{ fontSize: '1.75rem', margin: 0 }}>{guests.length}</p></div>
            <div className="card"><p className="label">Attending</p><p style={{ fontSize: '1.75rem', margin: 0 }}>{attending.length}</p></div>
            <div className="card"><p className="label">Guests total</p><p style={{ fontSize: '1.75rem', margin: 0 }}>{attending.reduce((s, g) => s + g.guest_count, 0)}</p></div>
            <div className="card"><p className="label">Paid (ZAR)</p><p style={{ fontSize: '1.75rem', margin: 0 }}>R{paidTotal.toFixed(0)}</p></div>
          </div>

          {error && <p className="error" style={{ marginTop: '1rem' }}>{error}</p>}

          <div className="card" style={{ marginTop: '1.5rem', overflowX: 'auto' }}>
            {loading ? (
              <p className="note">Loading…</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Coming</th>
                    <th>Guests</th>
                    <th>Contribution</th>
                    <th>Payment</th>
                    <th>When</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((g) => (
                    <tr key={g.id}>
                      <td>{g.full_name}</td>
                      <td>{g.email}</td>
                      <td>{g.attending ? 'Yes' : 'No'}</td>
                      <td>{g.guest_count}</td>
                      <td>
                        {g.contribution_type === 'pay'
                          ? `R${Number(g.contribution_amount_zar ?? 0).toFixed(0)}`
                          : g.contribution_type + (g.contribution_note ? ` · ${g.contribution_note}` : '')}
                      </td>
                      <td>{statusBadge(g)}</td>
                      <td>{new Date(g.created_at).toLocaleString('en-ZA', { dateStyle: 'short', timeStyle: 'short' })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <button type="button" className="btn btn-ghost" style={{ marginTop: '1rem' }} onClick={() => token && loadGuests(token)}>
            Refresh
          </button>
        </>
      )}
    </div>
  );
}
