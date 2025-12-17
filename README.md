# Nextjs 15 Tutorial

Minimal Next.js "app" directory tutorial project. Includes TypeScript, Tailwind CSS, and Prisma examples used for learning and demos.

## Contents

- src/app — Next.js app directory (main page: src/app/page.jsx)
- src/app/globals.css — global styles (Tailwind)
- src/app/page.module.css — component styles
- prisma/schema.prisma — Prisma schema
- package.json — useful scripts

## Prerequisites

- Node.js 18+
- npm, pnpm, or yarn
- (optional) a database for Prisma (SQLite recommended for local dev)

## Install

Open a terminal in the project root (Windows PowerShell):

```powershell
npm install
# or
pnpm install
# or
yarn install
```

## Development

Start the Next.js dev server:

```powershell
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000

Edit pages under src/app — changes reload automatically.

## TypeScript & Tailwind

- TypeScript: check tsconfig.json. Rename .jsx/.js to .tsx/.ts to opt in.
- Tailwind configured via tailwind.config.js and src/app/globals.css.

## Prisma — setup and start

1. Create a .env in the project root with DATABASE_URL. Example for SQLite:

DATABASE_URL="file:./dev.db"

2. Run migrations and open Prisma Studio:

```powershell
npx prisma migrate dev --name init
npx prisma studio
```

3. Optional convenience npm script (add to package.json "scripts"):

```json
"prisma:start": "npx prisma migrate dev --name init && npx prisma studio"
```

Then run:

```powershell
npm run prisma:start
```

Notes:
- For Postgres/MySQL set DATABASE_URL before running migrations.
- migrate dev will create/apply migrations and create the DB for SQLite.

## Useful scripts

- npm run dev — start dev server
- npm run build — build for production
- npm start — run built app
- npm run prisma:start — run migrations and open Prisma Studio (if added)

## Deploy

See Next.js docs for deployment instructions: https://nextjs.org/docs/deployment

## Resources

- Next.js: https://nextjs.org/docs
- Prisma: https://www.prisma.io/docs
