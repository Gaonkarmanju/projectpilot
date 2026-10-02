# Database design

PostgreSQL, managed with Prisma (`backend/prisma/schema.prisma`).

```mermaid
erDiagram
    USERS ||--o{ USER_PROJECTS : starts
    IDEAS ||--o{ USER_PROJECTS : "chosen in"
    USER_PROJECTS ||--o| ROADMAPS : has
    USER_PROJECTS ||--o{ MILESTONES : "tracked by"

    USERS {
        string id PK
        string name
        string email UK
        string password_hash
        string college
        int year
        enum skill_level
        datetime created_at
    }
    IDEAS {
        string id PK
        string title UK
        string description
        string domain
        enum difficulty
        string[] tech_stack
        string[] features
        int est_weeks
        datetime created_at
    }
    USER_PROJECTS {
        string id PK
        string user_id FK
        string idea_id FK
        enum status
        datetime deadline
        datetime started_at
    }
    ROADMAPS {
        string id PK
        string user_project_id FK, UK
        json content
        string source
        datetime generated_at
    }
    MILESTONES {
        string id PK
        string user_project_id FK
        string title
        int week_no
        boolean is_done
        datetime done_at
    }
```

## Design decisions

- **`user_projects` joins users and ideas** with a unique `(user_id, idea_id)` pair, so a student cannot save the same idea twice.
- **Roadmap stored as JSON.** The plan's shape (summary, modules, weeks) can evolve without migrations, and the AI returns JSON directly.
- **Milestones are real rows**, created from the roadmap's weekly tasks. This makes progress queries (`count where is_done`) simple and fast.
- **Cascade deletes.** Deleting a user or project removes its roadmap and milestones.
- **Idea titles are unique**, so the seed script can be re-run safely: it inserts only ideas with new titles and never deletes existing ones (which would cascade-delete students' projects).
- **Indexes** on `ideas.domain`, `ideas.difficulty` and foreign keys keep filtering and dashboard queries fast.
- **Enums** (`SkillLevel`, `ProjectStatus`) keep values consistent at the database level.
