# Project Requirements Document (PRD)

## 1. Project Overview

CodeGuide is a full-stack web application starter and a custom landing page built on Next.js 15. It gives developers a ready-made marketing front end and a secure user-only back end so they can launch the CodeGuide service quickly. On the public side, visitors see a modern, multi-section landing page (Hero, Features, Testimonials, Pricing, etc.) that’s fully customizable. Once they sign up, they’re taken to a protected dashboard where the core CodeGuide app lives.

We’re building this template to eliminate repetitive setup work and let the team focus on CodeGuide’s unique features. Success means any new project can spin up a polished landing page, authentication flow, database integration, dark mode, and a basic dashboard in minutes—not days. Key objectives include: fast time to first deployment, a consistent UI/UX, and a secure, scalable foundation for future features.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (v1)**
- A public landing page scaffold with customizable Hero, Features, Testimonials, Pricing sections.
- Authentication flow: sign-up, sign-in, session management via Better Auth.
- Protected dashboard (at `/dashboard`) displaying skeleton charts/tables.
- PostgreSQL integration using Drizzle ORM with basic `User` schema.
- Dark mode toggle and responsive design via Tailwind CSS.
- Docker configuration for local development and production deployment.
- UI component library (`shadcn/ui`) with ready-made buttons, cards, inputs, etc.
- Middleware to guard private routes.

**Out-of-Scope (Phase 2 or later)**
- Social login providers (Google, GitHub) and password reset flows.
- Email verification or multi-factor authentication.
- Real data models beyond `User` (e.g., content CMS integration).
- Advanced analytics or real-time collaboration features.
- Automated testing or CI/CD pipelines (unit tests, e2e tests).
- Third-party API integrations (payment gateways, CRMs).

## 3. User Flow

A new visitor lands on the public landing page (`app/page.tsx`). They scroll through the Hero section, read about features, check testimonials, and compare pricing cards. Once convinced, they click the “Sign Up” button in the header or at the bottom of a section. That action loads the Next.js page at `/sign-up`, where they fill out the form and submit it.

After successful sign-up, Better Auth redirects the user to the protected dashboard (`/dashboard`). Here, they see a navigation sidebar with links to any future CodeGuide modules and a main content area showing sample charts and tables. The theme toggle in the header lets them switch between light and dark modes. Throughout the session, the app keeps them authenticated and guards routes via middleware.

## 4. Core Features

- **Landing Page Sections**: Modular React components for Hero, Features, Testimonials, Pricing.
- **Authentication**: Sign-up, sign-in, sign-out, session management using Better Auth.
- **Protected Dashboard**: Basic stub with charts/tables, accessible only to logged-in users.
- **Database Layer**: Drizzle ORM setup for PostgreSQL, including a `users` table and migrations.
- **UI Components**: `shadcn/ui` library integrated with Tailwind CSS for buttons, cards, forms.
- **Dark Mode**: Persistent light/dark theme toggle stored in cookies or local storage.
- **Routing & Middleware**: Next.js App Router with middleware to redirect unauthenticated users.
- **Deployment**: Dockerfile and `docker-compose.yml` for containerized builds and easy deployment.

## 5. Tech Stack & Tools

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, `shadcn/ui` custom component library
- **Backend & API**: Next.js API Routes, Better Auth library for authentication
- **Database**: PostgreSQL, Drizzle ORM for type-safe queries
- **Containerization**: Docker, Docker Compose
- **Dev Tools**: VS Code (any IDE), Tailwind CLI, Node.js v18+
- **Testing (future)**: Jest/React Testing Library, Playwright or Cypress

_No AI models are currently integrated; none are required for v1._

## 6. Non-Functional Requirements

- **Performance**: Initial load under 2 seconds on 3G; core pages should hydrate in under 1 second.
- **Scalability**: Able to handle 1,000 simultaneous users with horizontal scaling in production.
- **Security**: All traffic via HTTPS; follow OWASP Top 10 best practices; secure cookies; protect API routes.
- **Accessibility**: WCAG 2.1 AA compliance for color contrast, keyboard navigation, ARIA roles.
- **SEO**: Metadata (title, description, Open Graph tags) on landing page for social sharing; SSG/SSR for indexable content.
- **Usability**: Responsive design across mobile, tablet, and desktop. Dark mode switch persisted between visits.

## 7. Constraints & Assumptions

- Must run on Node.js 18+ and a PostgreSQL 14+ database.
- Better Auth library compatible with Next.js 15 App Router.
- Drizzle ORM supports all required database operations without custom SQL.
- Docker is available for all developers and CI environments.
- Users have modern browsers (Chrome, Firefox, Safari, Edge) with ES2020 support.
- No third-party payment or messaging services required in v1.

## 8. Known Issues & Potential Pitfalls

- **API Rate Limits**: If Better Auth enforces rate limits, implement retry logic or server-side caching.
- **Drizzle Migrations**: Ensure migrations run correctly in CI/CD; version-pin Drizzle to avoid breaking changes.
- **Tailwind Purge**: Misconfigured purging can remove unused CSS classes. Verify `tailwind.config.js` paths include all JSX/TSX files.
- **Next.js App Router Stability**: Next.js 15 is new; monitor upgrade notes and pin dependencies to minor versions.
- **Docker Overhead**: Container startup times can slow dev feedback loops—use hot-reload mount volumes.

By following this PRD, the AI and development team can generate subsequent technical documents—Tech Stack details, Frontend Guidelines, Backend Architecture, File Structure, and CI/CD setup—without ambiguity or missing information.