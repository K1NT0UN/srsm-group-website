-- Run this in your Supabase SQL editor

create table if not exists enquiries (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),

  -- shared fields
  type         text not null check (type in ('quick', 'site_visit')),
  name         text not null,
  phone        text not null,
  email        text not null,
  message      text,

  -- quick enquiry
  project_interest text,

  -- site visit
  preferred_date text,
  preferred_time text
);

-- Only allow inserts from the browser (anon key)
alter table enquiries enable row level security;

create policy "Anyone can submit an enquiry"
  on enquiries for insert
  to anon
  with check (true);

-- Only authenticated users (you) can read submissions
create policy "Authenticated users can read enquiries"
  on enquiries for select
  to authenticated
  using (true);
