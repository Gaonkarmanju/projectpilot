# API reference

Base URL: `http://localhost:5000/api`. Private routes need `Authorization: Bearer <token>`.

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/health` | No | Health check |
| POST | `/auth/register` | No | Create account `{ name, email, password, college?, year?, skillLevel? }` |
| POST | `/auth/login` | No | Log in `{ email, password }` → `{ token, user }` |
| GET | `/auth/me` | Yes | Current user |
| GET | `/ideas` | No | List ideas, paginated. Query: `domain`, `difficulty`, `maxWeeks`, `q` (title, description or exact tech name), `page` (default 1), `pageSize` (default 24, max 60) → `{ ideas, total, page, pageSize }` |
| GET | `/ideas/filters` | No | Available domains and difficulties |
| GET | `/ideas/:id` | No | One idea |
| GET | `/projects` | Yes | My projects with progress |
| POST | `/projects` | Yes | Start a project `{ ideaId, deadline? }` |
| GET | `/projects/:id` | Yes | Project with idea, roadmap, milestones, progress |
| PATCH | `/projects/:id` | Yes | Update `{ status?, deadline? }` |
| DELETE | `/projects/:id` | Yes | Delete project |
| POST | `/projects/:id/roadmap` | Yes | Generate (or regenerate) the weekly plan |
| PATCH | `/projects/:id/milestones/:milestoneId` | Yes | Tick a task `{ isDone }` |

Errors always return `{ "error": "message" }` with a matching HTTP status.
