export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://bpzzgilwlkghgfkvkkxx.supabase.co';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const EVENT = {
  albumDrop: '18 August 2026',
  partyDate: 'Saturday, 22 August 2026',
  venue: '12 Eagle Rock Crescent',
  suburb: 'Bernardino Heights, Cape Town',
  minContribution: 100,
} as const;

export type ContributionType = 'pay' | 'gift' | 'drinks' | 'food';

export interface RsvpPayload {
  full_name: string;
  email: string;
  phone?: string;
  attending: boolean;
  guest_count: number;
  contribution_type: ContributionType;
  contribution_amount_zar?: number;
  contribution_note?: string;
}

export interface RsvpResult {
  id: string;
  invite_token: string;
  payment_status: string;
  contribution_type: string;
  contribution_amount_zar?: number;
  needs_payment: boolean;
}

async function apiCall<T>(body: Record<string, unknown>, authToken?: string): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (SUPABASE_ANON_KEY) headers.apikey = SUPABASE_ANON_KEY;
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const res = await fetch(`${SUPABASE_URL}/functions/v1/mankeezy-api`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data as T;
}

export async function submitRsvp(payload: RsvpPayload) {
  return apiCall<{ ok: boolean; rsvp: RsvpResult; payment_url: string | null }>({
    action: 'rsvp',
    ...payload,
  });
}

export async function getRsvpByToken(token: string) {
  return apiCall<{ ok: boolean; rsvp: Record<string, unknown> }>({
    action: 'get_rsvp',
    token,
  });
}

export async function fetchGuestList(authToken: string) {
  return apiCall<{ ok: boolean; guests: GuestRow[] }>({ action: 'guest_list' }, authToken);
}

export interface GuestRow {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  attending: boolean;
  guest_count: number;
  contribution_type: string;
  contribution_amount_zar: number | null;
  contribution_note: string | null;
  payment_status: string;
  created_at: string;
}
