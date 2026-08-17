# Mankeezy · 28

Artist site for **Manace Kapinga (Mankeezy)** — album drop and exclusive braai RSVP.

- **Site:** [mankeezy.space](https://mankeezy.space)
- **Backend:** RedFace Pay Supabase (`mankeezy-api` edge function)
- **Payments:** RedFace Pay → Paystack `ACCT_riokta4hzwymzta`

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Env

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

## Admin

Guest list: `/admin` (RedFace Pay admin sign-in required)

## Deploy (Vercel)

1. Push this repo to GitHub: `git push -u origin main`
2. [Vercel](https://vercel.com) → **Add New Project** → import `Redfacesa/mankeezy`
3. Environment variables (Production + Preview):

| Name | Value |
|------|--------|
| `VITE_SUPABASE_URL` | `https://bpzzgilwlkghgfkvkkxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | from `.env.example` |

4. **Domains** → add `mankeezy.space` and `www.mankeezy.space`
5. Deploy. Share `https://mankeezy.space` as the invite link.

## Admin

Guest list: **`/admin`** — sign in with RedFace Pay admin (`info@redfacepay.co.za` or `mankapmankeezy@gmail.com`).

## Event

- Album **28** · 18 August 2026
- Braai · Saturday 23 August 2026
- 12 Eagle Rock Crescent, Bernardino Heights, Cape Town
