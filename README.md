# Minoqtopus

The website for **Minoqtopus LLC** — minoqtopus.com

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Supabase · Motion

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

## Environment

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URL used for metadata and sitemaps |
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Contact form, job applications, admin inbox |
| `SUPABASE_SERVICE_ROLE_KEY` | yes | Server-only. Never expose to the client |
| `ADMIN_PASSWORD` | yes | Admin dashboard login |
| `ADMIN_SESSION_SECRET` | yes | Signs admin session cookies. The app refuses to sign sessions without it |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | no | Google Search Console token |

Without the Supabase and admin variables the site renders, but both forms
return a 502 and the admin dashboard cannot load.

## Database

`supabase/schema.sql` creates `contact_submissions` and `job_applications`.
Both have row-level security enabled with no public policies, so only the
service role can read or write them.

## Admin

`/admin/login` — form submissions and job applications, with a new/reviewed
status per entry.
