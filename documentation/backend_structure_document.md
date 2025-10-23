# Backend Structure Document for codeguide-landing-page

This document explains how the backend of the `codeguide-landing-page` project is built, hosted, and maintained. It’s written in everyday language so anyone can understand how the pieces fit together.

## 1. Backend Architecture

**Overview:**
The backend is built on top of Next.js 15 using its App Router and API Routes. It uses familiar design patterns that separate concerns, making the code easy to change and grow.

Key points:

- Next.js App Router / API Routes
  - Each file under `app/api` handles one piece of server logic (for example, authentication).
- TypeScript throughout
  - Catches errors early and makes the code self-documenting.
- Drizzle ORM for database access
  - A light, type-safe layer between your code and PostgreSQL.
- Better Auth library for authentication
  - Handles sign-up, sign-in, session management, and secure cookies.

How it helps:

- **Scalability**:  API Routes can run on serverless platforms (like Vercel), automatically scaling to meet traffic.
- **Maintainability**: Clear folder structure and use of TypeScript means new developers can quickly find where to add or change code.
- **Performance**: Static landing pages are generated once and served from cache; dynamic routes spin up quickly when needed.

## 2. Database Management

**Technology used:**

- PostgreSQL (SQL database)
- Drizzle ORM (TypeScript-friendly data modeling and query builder)

How data is handled:

- All tables are defined in the `db/` directory using Drizzle’s schema files.
- Drizzle generates type-safe query helpers so you write SQL-like code in TypeScript without risking typos.
- Environment variables store the database connection string, keeping credentials out of source control.

## 3. Database Schema

Below is a human-friendly description of the main tables, followed by the actual SQL schema.

### Human-Readable Table Descriptions:

- **Users**: Stores each user’s email, hashed password, and the date they signed up.
- **Sessions**: Tracks active login sessions so we can keep users signed in securely.
- **(Optional) Profiles**: Additional user details like display name or avatar URL.

### SQL Schema (PostgreSQL)

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  hashed_password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  session_token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Profiles table (optional)
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 4. API Design and Endpoints

All backend logic lives under `app/api`. We’ve adopted a largely REST-style approach using Next.js routes.

- **Authentication routes** (`app/api/auth/[...all]/route.ts`)
  - POST `/api/auth/signup`: Create a new user and start a session.
  - POST `/api/auth/signin`: Verify credentials and issue a session token.
  - GET `/api/auth/user`: Retrieve the current user’s info based on the session.
- **Dashboard data** (future endpoints)
  - GET `/api/dashboard/data`: Fetch user-specific data for charts and tables.
  - POST `/api/dashboard/item`: Create or update application data in Drizzle.

The catch-all `[...all]` route in Next.js lets the Better Auth library handle multiple authentication-related actions in one place. When you need new endpoints, just add new files under `app/api` or expand the existing route file.

## 5. Hosting Solutions

**Recommended hosting provider:** Vercel (the creators of Next.js)

Why Vercel?

- **Built-in serverless functions**: Your API Routes run as serverless lambdas that auto-scale.
- **Global CDN**: Static assets and pre-rendered pages are cached at the edge for fast load times world-wide.
- **Easy environment setup**: Connect your GitHub repo, configure environment variables in the dashboard, and you’re live.

**Containerization option:**

- A `Dockerfile` is included if you prefer self-hosting (e.g., on AWS ECS, DigitalOcean, or on-prem).
- Docker ensures your app runs the same everywhere, from your laptop to production.

## 6. Infrastructure Components

Here’s how everything works together for a smooth, fast user experience:

- **Load Balancer / Edge Network** (provided by Vercel or your cloud provider)
  - Distributes incoming requests across multiple serverless instances.
- **CDN**
  - Caches static assets (CSS, JS, images) at the edge.
- **Database (PostgreSQL)**
  - Hosted as a managed service (e.g., AWS RDS, DigitalOcean Managed DB).
- **Docker**
  - Local development: `docker-compose` can spin up the app and a local Postgres.
  - Production: Docker images can be deployed to container services.

This setup minimizes latency by caching static content close to users, while dynamic API calls are handled on-demand by serverless functions or container instances.

## 7. Security Measures

To protect users and data, we follow these practices:

- **Authentication & Authorization**
  - Better Auth library handles password hashing (bcrypt) and session token security.
  - `middleware.ts` guards the `/dashboard` route, redirecting unauthenticated users back to sign-in.
- **Data Encryption**
  - All traffic runs over HTTPS.
  - Database credentials and API keys live in environment variables, never in code.
- **Input Validation**
  - Simple checks on email/password length and format before creating accounts.
- **Regular Updates**
  - Keep dependencies (Next.js, Drizzle, Better Auth) up to date to receive security patches.

## 8. Monitoring and Maintenance

We recommend the following tools and practices:

- **Logging & Errors**
  - Integrate Sentry (or similar) to capture uncaught errors in serverless functions.
  - Use Next.js built-in logging for API calls.
- **Performance Monitoring**
  - Vercel Analytics or a third-party APM (e.g., New Relic) to track response times.
- **Database Health**
  - Set up automatic backups and alerts for high CPU or storage usage on your managed Postgres.
- **CI/CD Pipeline**
  - Use GitHub Actions to run linters, unit tests, and Drizzle migrations on each push.
  - On successful checks, automatically deploy to Vercel or your container registry.

## 9. Conclusion and Overall Backend Summary

The `codeguide-landing-page` backend is designed to be:

- **Fast**: Static landing pages served from a global CDN plus serverless API routes that spin up quickly.
- **Secure**: Industry-standard authentication, HTTPS everywhere, and strict route guarding.
- **Easy to extend**: Clear folder structure, TypeScript safety, and Drizzle ORM make adding new features painless.
- **Production-ready**: Docker included, with a straightforward path to deploy on Vercel or any container platform.

With this foundation, the CodeGuide team can focus on crafting engaging landing page content, building out new data-driven features in the dashboard, and trusting that the underlying backend will scale, remain secure, and stay easy to maintain.