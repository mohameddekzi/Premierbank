# Premier Bank — Supabase backend setup

The site is a static page (GitHub Pages). The secure backend — login, the team
content, and press releases/posts — is provided by **Supabase** (free tier is
enough). Security is enforced by Postgres **Row-Level Security (RLS)**: anyone
can *read* published content, but only a signed-in admin can *write*.

Follow these 5 steps once. Total time ≈ 10 minutes.

---

## 1. Create a Supabase project

1. Go to <https://supabase.com> → **Sign in** → **New project**.
2. Pick a name (e.g. `premier-bank`), a strong database password, and a region
   close to your users (e.g. `Europe (eu-central)` or `Middle East`).
3. Wait ~2 minutes for it to provision.

## 2. Create the tables, security policies & storage

Open **SQL Editor** (left sidebar) → **New query**, paste **all** of the SQL
below, and click **Run**.

```sql
-- ============ TABLES ============
create table if not exists public.team_members (
  id         uuid primary key default gen_random_uuid(),
  category   text not null check (category in ('board','leadership','shariah')),
  name       text not null,
  title      text,
  bio        text,
  photo_url  text,
  sort       int  default 0,
  created_at timestamptz default now()
);

create table if not exists public.posts (
  id         uuid primary key default gen_random_uuid(),
  category   text not null default 'news' check (category in ('news','press')),
  title      text not null,
  summary    text,
  body       text,
  cover_url  text,
  published  boolean default true,
  created_at timestamptz default now()
);

-- Key/value store powering the full dashboard (branding, hero, page text…)
create table if not exists public.site_content (
  key        text primary key,
  value      jsonb,
  updated_at timestamptz default now()
);

-- ============ ROW-LEVEL SECURITY ============
alter table public.team_members enable row level security;
alter table public.posts        enable row level security;
alter table public.site_content enable row level security;

-- Site content: anyone may read; only signed-in admins may write.
create policy "content read"  on public.site_content for select using (true);
create policy "content write" on public.site_content for all
  to authenticated using (true) with check (true);

-- Team: anyone may read; only signed-in admins may write.
create policy "team read"  on public.team_members for select using (true);
create policy "team write" on public.team_members for all
  to authenticated using (true) with check (true);

-- Posts: the public sees only published; signed-in admins see & edit everything.
create policy "posts read public" on public.posts for select using (published = true);
create policy "posts read admin"  on public.posts for select to authenticated using (true);
create policy "posts write"        on public.posts for all
  to authenticated using (true) with check (true);

-- ============ STORAGE (images for photos & post covers) ============
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "media read"   on storage.objects for select using (bucket_id = 'media');
create policy "media insert" on storage.objects for insert to authenticated with check (bucket_id = 'media');
create policy "media update" on storage.objects for update to authenticated using (bucket_id = 'media');
create policy "media delete" on storage.objects for delete to authenticated using (bucket_id = 'media');
```

## 3. Create your admin login (and lock out everyone else)

1. **Authentication → Providers → Email**: turn **OFF** "Allow new users to sign
   up". This means *only* the admin user you create by hand can ever log in.
2. **Authentication → Users → Add user → Create new user**: enter your admin
   **email** and a **password**. Tick "Auto-confirm user".
   - These are the credentials you'll use at `#admin`. You can change the
     password anytime from the admin panel (**Settings → Change password**).

## 4. Connect the website to your project

1. In Supabase: **Project Settings → API**. Copy:
   - **Project URL** (e.g. `https://abcd1234.supabase.co`)
   - **anon public** key (a long `eyJ…` string — safe to expose; RLS protects data)
2. Two ways to plug them in:
   - **Easy (no code):** open the site, add `#admin` to the URL
     (`…/index.html#admin`). The panel opens on **Settings** — paste the URL and
     anon key, click **Save & reload**. Stored in your browser.
   - **Permanent (for all visitors):** edit `index.html`, find
     `window.PB_SUPABASE` near the top of the script section, and replace the
     two placeholder values. Commit & push.

## 5. Use the admin

- Open `…/index.html#admin` → sign in with the admin email/password from step 3.
- **Team tab:** add/edit Board, Senior Management and Shari'ah members —
  drag & drop a photo, fill in name, title and bio. Saved members instantly
  replace the built-in list on the public About pages.
- **Posts & Press tab:** create a news item or press release — drag & drop a
  cover image, write the title/summary/body, tick **Published**. It appears on
  the public **Newsroom** / **Press Releases** pages.

### The full dashboard

The admin is a complete control centre with a sidebar:

| Section | What you control |
|---|---|
| **Dashboard** | Overview & quick links |
| **Branding** | Primary & accent colours — applied site-wide instantly |
| **Hero slides** | Add / edit / reorder the homepage hero slides (EN + SO) |
| **Page content** | Edit the title, eyebrow, tagline & feature cards of *any* About / Accounts / Cards / Services / News page (EN + SO) |
| **Team** | Board, Senior Management & Shari'ah members with photos |
| **News & Press** | Posts and press releases |
| **Settings** | Supabase connection & your password |

Everything is bilingual (English / Somali) and goes live the moment you save —
no code, no redeploy.

> **Already ran the SQL before this update?** Just run the new `site_content`
> table + its two policies (they're included in the block above) once more — the
> `create table if not exists` / `create policy` statements are safe to re-run;
> if a policy already exists, ignore the "already exists" notice.

---

### Optional: pre-load the official Board of Directors into the database

If you'd like the researched board list stored in Supabase (so you can edit it
from the panel), run this in the SQL Editor:

```sql
insert into public.team_members (category, name, title, bio, sort) values
('board','Jibril Hassan Mohamed','Chairman','An astute businessman, in business since 2002. As Chair he guides the Board on strategy, policy, investor relations and key partnerships. Holds an MBA (Finance), a BSc in Mathematics, and a Postgraduate Diploma in IT.',0),
('board','Mohamed Djirde Hussein','Director','Holds a BS in Economics and Business Administration from the USA and has been in business since 1972, bringing decades of commercial leadership to the Board.',1),
('board','Ahmed Abdirahman Sheikh','Non-Executive Director','A businessman with vast experience in the financial industry, serving as a Director of Premier Bank since 2014.',2),
('board','Khadar Mohamoud Jama','Director','Owner and Managing Director of AMS Logistics Co., operating across Somalia, the UAE, Djibouti and Ethiopia since 1998. Holds three Diplomas in Accounting & Business Management.',3),
('board','Abdelaziz Ali Eid','Director','In financial services for over 16 years; Director and Shareholder of International Commercial Bank (ICB) Juba, South Sudan. Holds a BA in History and an MA in African History.',4),
('board','Tengeri Nyaramba Osoro','Director','A Chartered Financial Analyst (CFA) with over 10 years experience in finance and banking in Kenya and the region.',5),
('board','Abdullahi Shidane','Director','A long-serving Director of Premier Bank, contributing extensive commercial and entrepreneurial experience to the Board.',6),
('leadership','Dr. Mohamed Ghedi Jumale','Managing Director & CEO','Elected Managing Director in March 2024. A management practitioner with over 20 years experience, leading group strategy and the executive committee.',0);
```

> Note: Shari'ah Supervisory Board member names were not publicly available, so
> add them yourself from the admin **Team** tab (select section "Shari'ah Board").

---

### How the security works (summary)

| Action | Anonymous visitor | Signed-in admin |
|---|---|---|
| Read published posts & team | ✅ | ✅ |
| Read drafts | ❌ | ✅ |
| Create / edit / delete content | ❌ | ✅ |
| Upload images | ❌ | ✅ |

The anon key in the page only grants what RLS allows (read). All writes require a
valid login session that only you hold. Passwords are managed by Supabase Auth
and never stored in the site.
