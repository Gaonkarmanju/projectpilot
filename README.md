# ProjectPilot

**Plan your final-year CS project week by week.** ProjectPilot helps college students pick a project that fits their skills and deadline, generates a weekly plan covering code, documentation and testing, and tracks progress until submission.

> Live demo: _add your link after deploying_

## Features

- **Idea finder:** browse 1,000+ curated project ideas across 18 areas, filtered by area, difficulty and time available
- **Weekly plan:** AI-generated roadmap fitted to the student's deadline and skill level, with a free template fallback when no API key is set
- **Progress tracking:** every weekly task becomes a checklist item, with progress shown on the dashboard
- **Secure accounts:** bcrypt password hashing, JWT auth, input validation and rate limiting

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), React |
| Backend | Node.js, Express, Zod |
| Database | PostgreSQL, Prisma ORM |
| AI | Anthropic Messages API (optional) |

## Project structure

```
projectpilot/
├── backend/
│   ├── prisma/            # schema.prisma, migrations, seed script
│   │   └── ideas/         # project ideas, one file per area
│   └── src/
│       ├── config/        # environment variables
│       ├── controllers/   # request handlers
│       ├── routes/        # Express routers + validation schemas
│       ├── services/      # roadmap generation (AI + template)
│       ├── middleware/    # auth, validation, errors
│       └── lib/           # Prisma client, helpers
├── frontend/
│   ├── app/               # pages (Next.js App Router)
│   ├── components/        # UI components
│   └── lib/               # API client, auth context
├── docs/                  # database design, API reference, build plan
└── docker-compose.yml     # local PostgreSQL
```

## Run locally

**Requirements:** Node.js 18+, and Docker (or any PostgreSQL database).

```bash
# 1. Start PostgreSQL
docker compose up -d

# 2. Backend
cd backend
cp .env.example .env          # then set JWT_SECRET (and ANTHROPIC_API_KEY if you have one)
npm install
npx prisma migrate dev --name init
npm run db:seed
npm run dev                   # http://localhost:5000

# 3. Frontend (new terminal)
cd frontend
cp .env.example .env.local
npm install
npm run dev                   # http://localhost:3000
```

## Adding project ideas

Ideas live in `backend/prisma/ideas/`, one file per area, one idea per line:

```
Title | B/I/A | weeks | Description | Tech, Tech | Feature; Feature; Feature
```

Run `npm run db:seed` afterwards. The seed validates every line, rejects duplicate titles and only inserts new ideas, so it is safe to re-run.

## Documentation

- [Database design](docs/database.md)
- [API reference](docs/api.md)
- [Build plan](docs/plan.md)

## License

MIT
