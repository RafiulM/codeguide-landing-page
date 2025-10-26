# Codeguide Starter Fullstack

Modern Next.js 15 starter with authentication, database, and dark mode.

## Tech Stack

- **Framework:** Next.js 15 (App Router + Turbopack)
- **Language:** TypeScript
- **Auth:** Better Auth
- **Database:** Drizzle ORM + PostgreSQL
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui components
- **Theme:** next-themes
- **Icons:** Lucide React

## Quick Start

**Prerequisites:** Node.js 18+ (Node.js 20+ recommended)

1. **Clone & install**
   ```bash
   git clone <repository-url>
   cd codeguide-starter-fullstack
   npm install
   ```

2. **Setup environment**
   ```bash
   cp .env.example .env
   ```

3. **Start database & app**
   ```bash
   npm run db:up      # Start PostgreSQL
   npm run db:push    # Initialize database
   npm run dev        # Start development server
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Environment Variables

```env
# Database (Docker defaults work out-of-the-box)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Auth
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

## Features

- 🔐 Email/password authentication
- 🗄️ Type-safe database operations
- 🎨 40+ shadcn/ui components
- 🌙 Dark mode support
- 📱 Responsive design
- 🐳 Docker development setup

## Key Commands

### Development
```bash
npm run dev          # Start dev server
npm run db:up        # Start PostgreSQL
npm run db:down      # Stop database
npm run db:push      # Push schema changes
npm run db:studio    # Open database GUI
```

### Docker
```bash
npm run docker:up    # Start full stack
npm run docker:down  # Stop all containers
npm run docker:logs  # View logs
```

## Project Structure

```
├── app/              # Next.js pages
├── components/ui/    # shadcn/ui components
├── db/              # Database config & schemas
├── lib/             # Utilities & auth config
└── hooks/           # Custom React hooks
```

## Deployment

**Vercel (Recommended)**
1. Deploy to Vercel
2. Add `DATABASE_URL` and `BETTER_AUTH_SECRET` in dashboard
3. Run `npm run db:push` with your database

**Docker**
```bash
npm run docker:up  # Production-ready setup
```

## Contributing

Pull requests welcome!

## Author

[RafiulM](https://github.com/RafiulM)
