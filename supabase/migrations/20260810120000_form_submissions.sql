-- Minoqtopus form submissions schema
-- Safe to run multiple times.

create extension if not exists "pgcrypto";

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  budget text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewed')),
  created_at timestamptz not null default now()
);

create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_slug text not null,
  job_title text not null,
  full_name text not null,
  email text not null,
  current_company text not null,
  current_salary text not null,
  expected_salary text not null,
  avg_monthly_sales text not null,
  employment_interest text not null check (employment_interest in ('full-time', 'part-time')),
  qualification_reason text not null,
  resume_path text not null,
  resume_filename text not null,
  status text not null default 'new' check (status in ('new', 'reviewed')),
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists job_applications_created_at_idx
  on public.job_applications (created_at desc);

alter table public.contact_submissions enable row level security;
alter table public.job_applications enable row level security;

-- No public policies: only the service role (server) can read/write.
