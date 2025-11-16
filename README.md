# CodeGuide Starter Fullstack

<div align="center">

**A production-ready Next.js 15 starter template with authentication, database integration, and a beautiful landing page**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-316192?logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Deployment](#-deployment)

</div>

---

## 📖 Overview

**CodeGuide Starter Fullstack** is a modern, enterprise-grade web application template designed to accelerate your Next.js development. Built with the latest technologies and best practices, it provides everything you need to launch a production-ready application in minutes, not weeks.

This starter includes a beautiful, customizable landing page with Hero, Features, Testimonials, and Pricing sections, along with a secure authentication system and a protected dashboard. Perfect for SaaS applications, marketing websites, or any project that needs a solid foundation.

### What is CodeGuide?

[CodeGuide](https://codeguide.dev/) is an AI-powered development platform that generates comprehensive project documentation and architecture guides. This starter template is optimized for use with CodeGuide, but works great standalone too!

---

## ✨ Features

### 🎨 **Frontend & UI**
- **Modern Landing Page** - Pre-built sections: Hero, Features, Testimonials, Pricing
- **40+ UI Components** - shadcn/ui components in New York style
- **Dark Mode** - System preference detection with persistent toggle
- **Fully Responsive** - Mobile-first design with Tailwind CSS v4
- **Type-Safe** - 100% TypeScript for better DX and fewer bugs

### 🔐 **Authentication & Security**
- **Better Auth** - Modern authentication with email/password
- **Protected Routes** - Middleware-based route protection
- **Session Management** - Secure cookie-based sessions
- **Role-Based Access** - Ready for RBAC implementation

### 🗄️ **Database & Backend**
- **PostgreSQL** - Robust relational database
- **Drizzle ORM** - Type-safe database operations
- **Database Migrations** - Version-controlled schema changes
- **Drizzle Studio** - Visual database management GUI

### 🚀 **Developer Experience**
- **Next.js 15 App Router** - Latest features with Turbopack
- **Server Components** - Improved performance and SEO
- **Hot Module Replacement** - Instant feedback during development
- **Docker Support** - Full containerization for dev and production
- **Comprehensive Scripts** - npm commands for every common task

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Install Docker](https://docs.docker.com/get-docker/)
- **Git** - [Install Git](https://git-scm.com/downloads)
- *(Optional)* Generated project docs from [CodeGuide](https://codeguide.dev/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/codeguide-starter-fullstack.git
   cd codeguide-starter-fullstack
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   The default values work with Docker setup. See [Environment Variables](#environment-variables) for details.

4. **Start the database**

   ```bash
   npm run db:up
   ```

   This starts PostgreSQL in a Docker container with the default credentials.

5. **Initialize the database schema**

   ```bash
   npm run db:push
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your application!

---

## 📚 Documentation

### Project Structure

```
codeguide-starter-fullstack/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes (sign-in, sign-up)
│   ├── dashboard/             # Protected dashboard pages
│   ├── globals.css            # Global styles with dark mode
│   ├── layout.tsx             # Root layout with providers
│   └── page.tsx               # Landing page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (40+)
│   └── ...                    # Custom components
├── db/                        # Database configuration
│   ├── index.ts              # Database connection
│   └── schema/               # Drizzle schemas
├── documentation/             # Project documentation
│   ├── project_requirements_document.md
│   ├── tech_stack_document.md
│   ├── frontend_guidelines_document.md
│   └── ...                   # Additional docs
├── docker/                    # Docker configuration
│   └── postgres/             # PostgreSQL initialization scripts
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
│   ├── auth.ts               # Better Auth configuration
│   └── utils.ts              # Helper functions
├── auth-schema.ts            # Authentication schema
├── docker-compose.yaml       # Docker services
├── Dockerfile                # Application container
├── drizzle.config.ts         # Drizzle ORM configuration
└── components.json           # shadcn/ui configuration
```

### Environment Variables

Create a `.env` file in the root directory with these variables:

```env
# Database Configuration (defaults work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication
BETTER_AUTH_SECRET=your_secret_key_here_minimum_32_characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

#### Variable Explanations

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5433/postgres` |
| `POSTGRES_DB` | Database name | `postgres` |
| `POSTGRES_USER` | Database username | `postgres` |
| `POSTGRES_PASSWORD` | Database password | `postgres` |
| `BETTER_AUTH_SECRET` | Secret key for session encryption (min 32 chars) | Generate your own! |
| `BETTER_AUTH_URL` | Server-side auth URL | `http://localhost:3000` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Client-side auth URL | `http://localhost:3000` |

> **Security Note**: Always generate a strong, unique secret for `BETTER_AUTH_SECRET` in production. You can use: `openssl rand -base64 32`

### Database Setup

#### Option 1: Docker (Recommended)

Start PostgreSQL in a Docker container:

```bash
# Start database
npm run db:up

# Push schema to database
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio
```

#### Option 2: Local PostgreSQL

If you have PostgreSQL installed locally:

1. Create a database
2. Update your `.env` with your local credentials
3. Run migrations:

   ```bash
   npm run db:push
   ```

---

## 💻 Development

### Available Scripts

#### Application Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production with Turbopack |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

#### Database Commands

| Command | Description |
|---------|-------------|
| `npm run db:up` | Start PostgreSQL in Docker (port 5432) |
| `npm run db:down` | Stop PostgreSQL container |
| `npm run db:dev` | Start development PostgreSQL (port 5433) |
| `npm run db:dev-down` | Stop development PostgreSQL |
| `npm run db:push` | Push schema changes to database |
| `npm run db:generate` | Generate Drizzle migration files |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |
| `npm run db:reset` | Reset database (drop all tables and recreate) |

#### Docker Commands

| Command | Description |
|---------|-------------|
| `npm run docker:build` | Build application Docker image |
| `npm run docker:up` | Start full application stack (app + database) |
| `npm run docker:down` | Stop all containers |
| `npm run docker:logs` | View container logs |

### Working with Components

This starter uses [shadcn/ui](https://ui.shadcn.com/), a collection of re-usable components built with Radix UI and Tailwind CSS.

#### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

#### Customization

- Components are fully customizable and located in `components/ui/`
- Uses CSS variables for theming (see `app/globals.css`)
- Automatic dark mode support via `next-themes`

### Dark Mode

Dark mode is implemented using [next-themes](https://github.com/pacocoursey/next-themes):

```tsx
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  )
}
```

---

## 🐳 Docker

### Quick Start with Docker

Start the entire stack (recommended for new users):

```bash
# Build and start all services
npm run docker:up

# View logs
npm run docker:logs

# Stop everything
npm run docker:down
```

### Docker Services

The `docker-compose.yaml` includes:

- **postgres** - Main PostgreSQL database (port 5432)
- **postgres-dev** - Development database (port 5433) - use `--profile dev`
- **app** - Next.js application container (port 3000)

### Development Workflows

**Option 1: Database only (develop app locally)**

```bash
npm run db:up          # Start PostgreSQL
npm run dev            # Start Next.js locally
```

**Option 2: Full Docker stack**

```bash
npm run docker:up      # Start both app and database
```

**Option 3: Development database on alternative port**

```bash
npm run db:dev         # Start PostgreSQL on port 5433
```

### Docker Compose Profiles

```bash
# Start development database on port 5433
docker compose --profile dev up postgres-dev -d

# Or use the npm script
npm run db:dev
```

---

## 🚀 Deployment

### Option 1: Docker Compose (VPS/Server)

Perfect for deploying to a VPS or cloud server:

1. **Clone and setup on your server**

   ```bash
   git clone <your-repo-url>
   cd codeguide-starter-fullstack
   cp .env.example .env
   ```

2. **Configure environment variables**

   Edit `.env` with production values:

   ```env
   DATABASE_URL=postgresql://postgres:STRONG_PASSWORD@postgres:5432/postgres
   POSTGRES_DB=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=STRONG_PASSWORD_HERE
   BETTER_AUTH_SECRET=generate-secure-32-char-secret-here
   BETTER_AUTH_URL=https://yourdomain.com
   NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com
   ```

3. **Deploy**

   ```bash
   npm run docker:up
   ```

4. **Set up reverse proxy** (recommended)

   Use Nginx or Caddy to handle SSL termination and proxy to port 3000.

### Option 2: Vercel + External Database

Perfect for serverless deployment:

1. **Deploy to Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

   Or use the [Vercel Dashboard](https://vercel.com/new) to import your repository.

2. **Set up a managed PostgreSQL database**

   Recommended providers:
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
   - [Neon](https://neon.tech/)
   - [Supabase](https://supabase.com/)
   - [Railway](https://railway.app/)

3. **Add environment variables in Vercel dashboard**

   ```env
   DATABASE_URL=your-managed-postgres-connection-string
   BETTER_AUTH_SECRET=generate-secure-32-char-secret
   BETTER_AUTH_URL=https://your-vercel-deployment.vercel.app
   NEXT_PUBLIC_BETTER_AUTH_URL=https://your-vercel-deployment.vercel.app
   ```

4. **Push database schema**

   ```bash
   npm run db:push
   ```

### Option 3: Container Registry (AWS/GCP/Azure)

For enterprise deployments:

1. **Build and tag the image**

   ```bash
   docker build -t your-registry/codeguide-starter-fullstack:latest .
   ```

2. **Push to registry**

   ```bash
   # AWS ECR example
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
   docker push your-registry/codeguide-starter-fullstack:latest
   ```

3. **Deploy using your cloud provider's container service**
   - AWS ECS/Fargate
   - Google Cloud Run
   - Azure Container Instances

### Production Best Practices

#### Security Checklist

- [ ] Generate a strong `BETTER_AUTH_SECRET` (min 32 characters)
- [ ] Use strong, unique database passwords
- [ ] Enable HTTPS/SSL (use Let's Encrypt or cloud provider SSL)
- [ ] Set secure HTTP headers (CSP, HSTS, etc.)
- [ ] Regularly update dependencies
- [ ] Enable database backups
- [ ] Use environment variables, never commit secrets

#### Performance Optimization

- [ ] Enable Next.js `output: 'standalone'` for smaller container images
- [ ] Use a CDN for static assets
- [ ] Enable database connection pooling
- [ ] Implement proper caching strategies
- [ ] Monitor application performance with APM tools

#### Monitoring & Maintenance

- [ ] Set up error tracking (Sentry, Bugsnag, etc.)
- [ ] Configure logging aggregation
- [ ] Set up uptime monitoring
- [ ] Configure automated backups
- [ ] Document your deployment process

### Health Checks

Add health checks to your deployment:

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

Update `Dockerfile` to include health check:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

> **Note**: Testing setup (Jest/Vitest, React Testing Library, Playwright) is planned for future releases. Contributions welcome!

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation for significant changes
- Add tests for new features (when testing is available)
- Ensure all checks pass before submitting PR

---

## 🔗 Useful Links

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Better Auth](https://better-auth.com/) - Authentication library
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM documentation
- [Docker Documentation](https://docs.docker.com/) - Containerization guide

### Resources

- [CodeGuide](https://codeguide.dev/) - AI-powered project documentation
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples) - Official examples
- [Vercel Platform](https://vercel.com/) - Deployment platform

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌟 Support

If you find this starter helpful, please consider:

- Giving it a ⭐️ on GitHub
- Sharing it with your network
- Contributing improvements
- Reporting bugs or suggesting features

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [Next.js](https://nextjs.org/) by Vercel
- [shadcn/ui](https://ui.shadcn.com/) by @shadcn
- [Tailwind CSS](https://tailwindcss.com/) by Tailwind Labs
- [Better Auth](https://better-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)

Special thanks to the [CodeGuide](https://codeguide.dev/) team for inspiration!

---

<div align="center">

**[⬆ back to top](#codeguide-starter-fullstack)**

Made with ❤️ by the CodeGuide community

</div>
