# mariohodzelmans.nl Payload CMS

Payload CMS runs inside this Next.js app. The admin panel is available at `/admin` and the API routes are available under `/api`.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Fill in the environment variables:

   ```bash
   DATABASE_URI=postgresql://postgres.<project-ref>:<password>@aws-0-<region>.pooler.supabase.com:6543/postgres
   PAYLOAD_SECRET=<long-random-secret>
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

   `DATABASE_URL` is also supported, but `DATABASE_URI` is the preferred name in this project.

4. Start development:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000/admin` and create the first Payload admin user.

## Vercel deployment

Set these environment variables in Vercel for Production and Development:

```bash
DATABASE_URI=<your Supabase transaction pooler connection string>
PAYLOAD_SECRET=<long-random-secret>
NEXT_PUBLIC_SERVER_URL=https://mariohodzelmans.nl
```

The default Vercel build command can stay `npm run build`. Payload migrations are committed in `src/migrations` and should be applied before deploying schema changes.

## Supabase notes

The direct Supabase Postgres URL is IPv6-only for this project and Vercel build cannot reach it. Use Supabase's pooler connection string for Vercel.

This template includes a `media` upload collection. Vercel has an ephemeral filesystem, so production uploads should be moved to persistent storage such as Supabase Storage/S3 before relying on uploaded files.

## Useful commands

```bash
npm run dev
npm run build
npm run lint
npm run payload -- migrate:create <name>
npm run payload -- migrate:status
```
