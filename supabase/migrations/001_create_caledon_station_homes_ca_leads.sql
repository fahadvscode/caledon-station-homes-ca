-- Caledon Station Homes (.ca) investor-site leads.
-- Distinct from the companion .com table. Apply against project cfzuypbljirmibmxpabi.
-- Bump LAST_UPDATED in lib/content.ts whenever a confirmed project fact changes.

create table if not exists caledon_station_homes_ca_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false
);

alter table caledon_station_homes_ca_leads enable row level security;

create policy "anon can insert caledon_station_homes_ca_leads"
  on caledon_station_homes_ca_leads for insert
  to anon
  with check (true);

-- Companion proof-of-consent + first-touch UTM record. Not mixed into the leads table.
create table if not exists caledon_station_homes_ca_lead_meta (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lead_id uuid references caledon_station_homes_ca_leads (id) on delete set null,
  casl_consent boolean not null,
  consent_timestamp timestamptz not null,
  consent_page_path text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table caledon_station_homes_ca_lead_meta enable row level security;

create policy "anon can insert caledon_station_homes_ca_lead_meta"
  on caledon_station_homes_ca_lead_meta for insert
  to anon
  with check (true);
