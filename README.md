# CodeGuide Starter Fullstack

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Version](https://img.shields.io/badge/Version-0.1.0-orange?style=flat-square)

A modern, production-ready full-stack web application starter template built with **Next.js 15**. CodeGuide provides developers with a complete foundation including authentication, database integration, and a polished landing page - everything needed to launch a web application quickly and professionally.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🌍 Environment Variables](#-environment-variables)
- [🐳 Docker Development](#-docker-development)
- [🚀 Deployment](#-deployment)
- [📖 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- 🔐 **Authentication** - Complete auth flow with Better Auth (sign-up, sign-in, session management)
- 🗄️ **Database** - PostgreSQL with Drizzle ORM for type-safe database operations
- 🎨 **40+ UI Components** - Pre-configured shadcn/ui components (New York style)
- 🌙 **Dark Mode** - System preference detection with persistent theme switching
- 📱 **Responsive Design** - Mobile-first design with TailwindCSS v4
- 🚀 **App Router** - Next.js 15 App Router with Server Components and Turbopack
- 🎯 **Type Safety** - Full TypeScript integration with proper type definitions
- 🐳 **Docker Support** - Multi-stage builds and docker-compose configuration
- 📊 **Dashboard** - Protected dashboard with charts and tables
- 🏠 **Landing Page** - Marketing-ready landing page sections (Hero, Features, Testimonials, Pricing)
- 🔒 **Security** - Modern authentication patterns and best practices
- 🚀 **Production Ready** - Optimized for deployment with proper build configuration

## 🛠️ Tech Stack

| Category | Technology | Version | Description |
|----------|------------|---------|-------------|
| **Framework** | [Next.js](https://nextjs.org/) | 15 | React framework with App Router & Turbopack |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5+ | Type-safe JavaScript |
| **Database** | [PostgreSQL](https://www.postgresql.org/) | 14+ | Relational database |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) | 0.44+ | Type-safe database operations |
| **Authentication** | [Better Auth](https://better-auth.com/) | 1.3+ | Modern authentication solution |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4+ | Utility-first CSS framework |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) | Latest | Radix UI-based component library |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) | 0.4+ | Dark mode support |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.540+ | Beautiful icon library |
| **Containerization** | [Docker](https://www.docker.com/) | Latest | Container runtime and compose

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** 20+ and npm (recommended for full compatibility)
- **[Docker](https://www.docker.com/)** and Docker Compose (for database)
- **[Git](https://git-scm.com/)** for version control

> **Note**: While the application may work with Node.js 18+, some dependencies require Node.js 20+ for optimal performance and to avoid engine warnings.

> 💡 **Tip**: Generated project documents from [CodeGuide](https://codeguide.dev/) provide the best development experience.

### Setup in 5 Minutes

1. **Clone and navigate to the project**
   ```bash
   git clone https://github.com/RafiulM/codeguide-starter-fullstack.git
   cd codeguide-starter-fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # The default values work with Docker setup
   ```

4. **Start the database**
   ```bash
   npm run db:up
   ```

5. **Initialize database schema**
   ```bash
   npm run db:push
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Visit your application**
   - Open [http://localhost:3000](http://localhost:3000) to see the landing page
   - Visit [http://localhost:3000/sign-up](http://localhost:3000/sign-up) to create an account
   - Access your dashboard at [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

That's it! 🎉 You now have a fully functional full-stack application running locally.

## 📁 Project Structure

```
codeguide-starter-fullstack/
├── 📂 app/                        # Next.js app router pages
│   ├── 📄 globals.css            # Global styles with dark mode
│   ├── 📄 layout.tsx             # Root layout with providers
│   ├── 📄 page.tsx               # Landing page
│   ├── 📂 sign-in/               # Sign-in page
│   ├── 📂 sign-up/               # Sign-up page
│   ├── 📂 dashboard/             # Protected dashboard
│   └── 📂 api/auth/              # Authentication API routes
├── 📂 components/                # React components
│   ├── 📂 ui/                    # shadcn/ui components (40+)
│   ├── 📄 auth-buttons.tsx       # Authentication buttons
│   ├── 📄 site-header.tsx        # Main navigation header
│   ├── 📄 theme-toggle.tsx       # Dark mode toggle
│   └── 📄 ...                    # Other components
├── 📂 db/                        # Database configuration
│   ├── 📄 index.ts              # Database connection
│   └── 📂 schema/               # Database schemas
├── 📂 lib/                       # Utility functions
│   ├── 📄 auth.ts               # Better Auth configuration
│   ├── 📄 auth-client.ts        # Client-side auth utilities
│   └── 📄 utils.ts              # General utilities
├── 📂 hooks/                     # Custom React hooks
├── 📂 public/                    # Static assets
├── 📂 documentation/             # Project documentation
├── 📂 drizzle/                   # Database migrations
├── 📂 docker/                    # Docker configuration
├── 📄 auth-schema.ts            # Authentication schema
├── 📄 components.json           # shadcn/ui configuration
├── 📄 docker-compose.yml        # Docker services configuration
├── 📄 Dockerfile                # Application container definition
├── 📄 drizzle.config.ts         # Drizzle configuration
└── 📄 package.json              # Dependencies and scripts
```

## ⚙️ Configuration

### Database Setup

Choose one of the following options:

#### Option 1: Docker with Compose (Recommended)
```bash
# Start PostgreSQL database
npm run db:up

# Push schema to database
npm run db:push
```
This starts PostgreSQL in a Docker container with secure default credentials.

#### Option 2: Development Database (Alternative)
```bash
# Start development database on port 5433
npm run db:dev

# Push schema to database
npm run db:push
```

#### Option 3: External Database
1. Create a PostgreSQL database on your preferred provider
2. Update your environment variables with the connection string
3. Run database migrations:
   ```bash
   npm run db:push
   ```

## 🌍 Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication (Generate a secure secret for production)
BETTER_AUTH_SECRET=your_secret_key_here_minimum_32_characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### Generating Secure Secrets

For production, generate a secure `BETTER_AUTH_SECRET`:

```bash
# Using Node.js
node -e "console.log(crypto.randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -hex 32
```

## 📝 Development Commands

### Application Commands
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint for code quality
```

### Database Commands
```bash
npm run db:up        # Start PostgreSQL in Docker (port 5433)
npm run db:down      # Stop PostgreSQL container
npm run db:dev       # Start development PostgreSQL (port 5433)
npm run db:dev-down  # Stop development PostgreSQL
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Drizzle migration files
npm run db:studio    # Open Drizzle Studio (database GUI)
npm run db:reset     # Reset database (drop all tables and recreate)
npm run db:migrate   # Run database migrations
npm run db:pull      # Pull schema from database
```

### Docker Commands
```bash
npm run docker:build   # Build application Docker image
npm run docker:up      # Start full application stack (app + database)
npm run docker:down    # Stop all containers
npm run docker:logs    # View container logs
```

### Component Management
```bash
npx shadcn@latest add [component-name]    # Add new shadcn/ui component
npx shadcn@latest remove [component-name] # Remove component
```

## 🗄️ Database Integration

This starter includes modern database integration:

- **[Drizzle ORM](https://orm.drizzle.team/)** for type-safe database operations with TypeScript support
- **[PostgreSQL](https://www.postgresql.org/)** as the reliable database provider
- **[Better Auth](https://better-auth.com/)** integration with Drizzle adapter for seamless authentication
- **Database migrations** with Drizzle Kit for version control
- **Database Studio** for visual database management

### Schema Management

The database schema is defined in TypeScript under `db/schema/`:
- `auth.ts` - Authentication tables (users, sessions, accounts)
- Additional schemas can be added as your application grows

### Migration Workflow

```bash
# 1. Make schema changes in db/schema/
# 2. Generate migration files
npm run db:generate

# 3. Apply migrations to database
npm run db:push

# 4. For development, you can reset and start fresh
npm run db:reset
```

## 🐳 Docker Development

### Quick Start with Docker
```bash
# Start the entire stack (recommended for new users)
npm run docker:up

# View logs in real-time
npm run docker:logs

# Stop all containers
npm run docker:down
```

### Development Workflows

#### Option 1: Database Only (Recommended for Development)
```bash
# Start only PostgreSQL database
npm run db:up

# Start Next.js development server locally
npm run dev
```

#### Option 2: Full Docker Stack
```bash
# Start both application and database in containers
npm run docker:up
```

### Docker Services

The `docker-compose.yml` includes:

- **postgres**: Main PostgreSQL database (port 5432)
- **postgres-dev**: Development database (port 5433) - use `--profile dev`
- **app**: Next.js application container (port 3000)

### Docker Profiles

```bash
# Start development database on port 5433
docker compose --profile dev up postgres-dev -d

# Or use the npm script
npm run db:dev
```

### Production Docker Build

```bash
# Build optimized production image
docker build -t codeguide-starter-fullstack:latest .

# Run production container
docker run -p 3000:3000 --env-file .env codeguide-starter-fullstack:latest
```

### Docker Development Tips

- **Hot Reload**: When using `npm run dev`, the application hot-reloads automatically
- **Database Persistence**: Database data persists in Docker volumes
- **Environment Variables**: Copy `.env.example` to `.env` before running containers
- **Troubleshooting**: Use `npm run docker:logs` to debug container issues

### 📖 Comprehensive Docker Guide

For detailed Docker deployment instructions, including:
- Production deployment strategies
- Security best practices
- Performance optimization
- Troubleshooting common issues
- Backup and recovery procedures

👉 **[Read the Complete Docker Deployment Guide](documentation/docker-deployment-guide.md)**

## 🚀 Deployment

### Production Deployment Options

#### Option 1: Docker Compose (VPS/Dedicated Server)

**Recommended for** self-hosted deployments and maximum control.

```bash
# 1. Clone and setup on your server
git clone https://github.com/RafiulM/codeguide-starter-fullstack.git
cd codeguide-starter-fullstack
cp .env.example .env

# 2. Configure production environment variables
nano .env  # Edit with your production values

# 3. Deploy the application
npm run docker:up
```

**Production Environment Variables:**
```env
DATABASE_URL=postgresql://postgres:your_secure_password@postgres:5432/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password
BETTER_AUTH_SECRET=your-very-secure-32-character-secret-key
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com
```

#### Option 2: Vercel + External Database

**Recommended for** rapid deployment and serverless architecture.

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy to Vercel
vercel

# 3. Configure environment variables in Vercel Dashboard:
#    - DATABASE_URL: Your managed PostgreSQL connection string
#    - BETTER_AUTH_SECRET: Generate a secure secret (32+ characters)
#    - BETTER_AUTH_URL: Your Vercel deployment URL

# 4. Push schema to your managed database
npm run db:push
```

**Database Providers for Vercel:**
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Neon](https://neon.tech/)
- [Supabase](https://supabase.com/)
- [PlanetScale](https://planetscale.com/)
- [Railway](https://railway.app/)

#### Option 3: Container Registry (AWS/GCP/Azure)

**Recommended for** enterprise environments and custom infrastructure.

```bash
# 1. Build and push to container registry
docker build -t your-registry/codeguide-starter-fullstack:latest .
docker push your-registry/codeguide-starter-fullstack:latest

# 2. Deploy using your cloud provider's container service
#    - AWS ECS/Fargate
#    - Google Cloud Run
#    - Azure Container Instances
```

### Production Environment Variables

Essential variables for production:

```env
# Required
DATABASE_URL=postgresql://user:password@host:port/database
BETTER_AUTH_SECRET=your-very-secure-32-character-secret-key
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com

# Optional optimizations
NODE_ENV=production
```

### 📋 Production Checklist

- [ ] **Generate secure secrets** - Use `openssl rand -hex 32` for `BETTER_AUTH_SECRET`
- [ ] **Use HTTPS** - Configure SSL certificates (Let's Encrypt recommended)
- [ ] **Database backups** - Set up automated daily backups
- [ ] **Monitoring** - Add application monitoring (Sentry, LogRocket, etc.)
- [ ] **Health checks** - Implement `/api/health` endpoint
- [ ] **Error handling** - Configure proper error logging
- [ ] **CORS configuration** - Update for your domain
- [ ] **Rate limiting** - Implement API rate limiting
- [ ] **Security headers** - Add security middleware
- [ ] **Performance optimization** - Enable caching and CDN

### Deployment Scripts

Add these scripts to your deployment pipeline:

```bash
# Build and deploy
npm run build
npm start

# Database migration (run after code deployment)
npm run db:push

# Health check
curl https://yourdomain.com/api/health
```

## 📖 Documentation

This project includes comprehensive documentation in the `documentation/` folder:

- **[Project Requirements](documentation/project_requirements_document.md)** - Complete PRD with features and scope
- **[Tech Stack Details](documentation/tech_stack_document.md)** - In-depth technology choices and alternatives
- **[Security Guidelines](documentation/security_guideline_document.md)** - Security best practices and implementation
- **[Frontend Guidelines](documentation/frontend_guidelines_document.md)** - UI/UX patterns and component usage
- **[Backend Structure](documentation/backend_structure_document.md)** - API architecture and database design
- **[Application Flow](documentation/app_flow_document.md)** - User journey and application logic

### Key Architecture Decisions

- **Next.js 15 App Router** - Latest React patterns with Server Components
- **Better Auth** - Modern, type-safe authentication with excellent developer experience
- **Drizzle ORM** - Type-safe database operations with excellent TypeScript support
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **PostgreSQL** - Reliable, scalable relational database
- **Docker** - Consistent development and deployment environment

## 🤖 AI Coding Agent Integration

This starter is optimized for AI coding agents and assistants:

- ✅ **Clear file structure** with intuitive naming conventions
- ✅ **TypeScript integration** with comprehensive type definitions
- ✅ **Modern authentication patterns** with Better Auth
- ✅ **Database schema examples** and migration workflows
- ✅ **Component documentation** and usage examples
- ✅ **Consistent code style** and formatting

## 🛡️ Security Features

- **Secure Authentication** - Password hashing, session management, CSRF protection
- **Environment Variables** - Sensitive data never committed to version control
- **Type Safety** - TypeScript prevents many runtime errors
- **SQL Injection Prevention** - Drizzle ORM provides parameterized queries
- **CORS Configuration** - Proper cross-origin resource sharing setup

## 🔧 Customization Guide

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file with your React component
3. Update navigation in `components/site-header.tsx`

### Adding New Database Tables

1. Create a new schema file in `db/schema/`
2. Define your table using Drizzle schema syntax
3. Run `npm run db:generate` to create migrations
4. Run `npm run db:push` to apply to database

### Adding New UI Components

```bash
# Add new shadcn/ui component
npx shadcn@latest add [component-name]

# Components are automatically available in components/ui/
```

### Customizing Theme

- Edit `app/globals.css` for global styles
- Modify CSS variables in `:root` and `[data-theme="dark"]` for theme customization
- Components use CSS variables for consistent theming

## 🧪 Testing (Coming Soon)

Future versions will include:
- **Unit Tests** - Jest and React Testing Library
- **Integration Tests** - API endpoint testing
- **E2E Tests** - Playwright for user flow testing
- **Type Checking** - TypeScript strict mode

## 📈 Performance Optimizations

- **Next.js 15 Turbopack** - Fast development builds
- **Image Optimization** - Next.js Image component with WebP support
- **Code Splitting** - Automatic route-based code splitting
- **Bundle Analysis** - Built-in bundle analyzer
- **Caching Strategy** - Proper HTTP caching headers

## 🚀 Roadmap

- [ ] Social login providers (Google, GitHub)
- [ ] Email verification and password reset
- [ ] Advanced user roles and permissions
- [ ] API rate limiting and caching
- [ ] Real-time features with WebSockets
- [ ] Advanced analytics dashboard
- [ ] Component testing framework
- [ ] CI/CD pipeline templates

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Write meaningful commit messages
- Add TypeScript types for new features
- Update documentation when needed
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Created and maintained by [RafiulM](https://github.com/RafiulM)**

- GitHub: [@RafiulM](https://github.com/RafiulM)
- Twitter: [@your-twitter](https://twitter.com/your-twitter) (optional)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Better Auth](https://better-auth.com/) - Modern authentication library
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL toolkit

---

⭐ **Star this repository** if it helped you build something amazing!

🐛 **Found a bug?** [Please open an issue](https://github.com/RafiulM/codeguide-starter-fullstack/issues)

💡 **Have an idea?** [We'd love to hear it](https://github.com/RafiulM/codeguide-starter-fullstack/discussions)
