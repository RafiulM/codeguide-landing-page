# Codeguide Starter Fullstack

<div align="center">

![Codeguide Starter](codeguide-backdrop.svg)

**Modern Next.js 15 Full-Stack Starter Template**

A production-ready boilerplate with authentication, database, and beautiful UI components

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

[📖 Documentation](./documentation/) · [🐛 Report Bug](https://github.com/RafiulM/codeguide-landing-page/issues)

</div>

## 📖 Overview

Codeguide Starter Fullstack is a comprehensive, modern full-stack application built with Next.js 15, TypeScript, and cutting-edge technologies. It provides everything you need to kickstart your next web project with best practices, security, and scalability in mind.

### ✨ Key Highlights

- 🚀 **Next.js 15** with App Router and Turbopack for lightning-fast development
- 🔐 **Secure Authentication** with Better Auth and session management
- 🗄️ **Type-Safe Database** with Drizzle ORM and PostgreSQL
- 🎨 **Beautiful UI** with 40+ shadcn/ui components and dark mode
- 📱 **Fully Responsive** design that works on all devices
- 🐳 **Docker Ready** for seamless development and deployment
- 🎯 **Production Optimized** with performance and security best practices

---

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router & Turbopack
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 19](https://react.dev/)** - Modern React with latest features

### Authentication & Security
- **[Better Auth](https://better-auth.com/)** - Modern authentication solution
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **Session Management** - Secure cookie-based sessions

### Database & ORM
- **[PostgreSQL 16](https://www.postgresql.org/)** - Powerful relational database
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL toolkit
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migrations and management

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Lucide React](https://lucide.dev/)** - Consistent icon system
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode support

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Docker](https://www.docker.com/)** - Containerization for development and production

### Additional Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[TanStack Table](https://tanstack.com/table/v8)** - Powerful headless table UI
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **and many more...**

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18+ (Node.js 20+ recommended)
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (for database)

### Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/RafiulM/codeguide-landing-page.git
cd codeguide-landing-page

# Install dependencies
npm install
```

### Step 2: Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Generate a secure secret key (recommended)
node -e "console.log('BETTER_AUTH_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
```

### Step 3: Database Setup

```bash
# Start PostgreSQL database
npm run db:up

# Push database schema
npm run db:push

# (Optional) Open database GUI
npm run db:studio
```

### Step 4: Start Development

```bash
# Start development server with Turbopack
npm run dev

# Your app is now running at http://localhost:3000
```

---

## ⚙️ Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# ========================================
# Database Configuration
# ========================================
# PostgreSQL connection string
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres

# Database credentials (for Docker setup)
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# ========================================
# Authentication Configuration
# ========================================
# Secret key for signing JWT tokens (generate a secure random string)
BETTER_AUTH_SECRET=your_super_secure_secret_key_here_minimum_32_characters

# Auth URLs (update for production)
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# ========================================
# Optional Configuration
# ========================================
# Node environment (development, production, test)
NODE_ENV=development

# Add any additional environment variables your app needs
```

### Security Notes

- **Never commit** `.env` files to version control
- Use **strong, unique secrets** for production
- Update `BETTER_AUTH_URL` for production domains
- Consider using **environment-specific** configurations

---

## 📁 Project Structure

```
codeguide-starter-fullstack/
├── app/                          # Next.js App Router pages
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/                # Login page
│   │   └── register/             # Registration page
│   ├── dashboard/                # Protected dashboard area
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...                  # 40+ components
├── db/                          # Database configuration
│   ├── index.ts                 # Database connection
│   └── schema/                  # Database schema definitions
│       └── auth.ts              # User authentication schema
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Better Auth configuration
│   ├── auth-client.ts           # Client-side auth utilities
│   └── utils.ts                 # General utilities
├── hooks/                       # Custom React hooks
├── public/                      # Static assets
├── docker/                      # Docker configuration
│   └── postgres/
│       └── init.sql             # Database initialization
├── documentation/               # Project documentation
├── drizzle/                     # Drizzle migration files
├── .env.example                 # Environment template
├── docker-compose.yaml          # Docker development setup
├── Dockerfile                   # Production Docker image
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🎯 Features

### 🔐 Authentication & Security
- **Email/Password Authentication** with secure password hashing
- **Session Management** with HTTP-only cookies
- **Protected Routes** with middleware
- **Type-safe Auth** with TypeScript integration
- **OAuth Providers** ready (Google, GitHub, etc.)

### 🗄️ Database & Data Management
- **Type-Safe Operations** with Drizzle ORM
- **Database Migrations** with version control
- **Connection Pooling** for performance
- **Database Studio** for visual management
- **Seed Data** for development

### 🎨 User Interface
- **40+ shadcn/ui Components** out of the box
- **Dark/Light Mode** with system preference detection
- **Responsive Design** for all screen sizes
- **Accessible Components** following WAI-ARIA standards
- **Custom Animations** with Tailwind

### 📱 Advanced Features
- **Data Tables** with sorting, filtering, and pagination
- **Form Handling** with validation and error states
- **Toast Notifications** for user feedback
- **Date Handling** with timezone support
- **Data Visualization** with charts and graphs
- **Drag & Drop** interfaces

### 🛠️ Development Experience
- **Hot Module Replacement** for instant updates
- **Turbopack** for ultra-fast builds
- **TypeScript** for catch-all errors
- **ESLint & Prettier** for code quality
- **Docker Development** for consistent environments

---

## 💻 Development Commands

### 🏃‍♂️ Development Workflow
```bash
# Start development server with Turbopack
npm run dev

# Type checking (run this manually)
npx tsc --noEmit

# Linting and formatting
npm run lint
# Fix linting issues (run manually)
npx eslint --fix .

# Build for production
npm run build

# Start production server
npm start
```

### 🗄️ Database Management
```bash
# Start PostgreSQL database
npm run db:up

# Stop database
npm run db:down

# Push schema changes (development)
npm run db:push

# Generate migration files (production)
npm run db:generate

# Run migrations
npm run db:migrate

# Reset database (destructive)
npm run db:reset

# Open Drizzle Studio (database GUI)
npm run db:studio

# Pull schema from database
npm run db:pull
```

### 🐳 Docker Development
```bash
# Start full application stack
npm run docker:up

# Stop all containers
npm run docker:down

# View container logs
npm run docker:logs

# Build Docker image
npm run docker:build

# Start development database only
npm run db:dev

# Stop development database
npm run db:dev-down
```

---

## 🐳 Docker Deployment

### Prerequisites

Ensure you have the following installed:
- **Docker** 20.10+ and **Docker Compose** v2.0+
- Sufficient disk space for containers and images
- Network access to pull images from Docker Hub

### Development Setup

The project includes a comprehensive Docker setup for seamless development:

```bash
# Start full development stack (database + application)
npm run docker:up

# Or use docker-compose directly
docker-compose up -d

# View real-time logs
npm run docker:logs

# View logs for specific service
docker-compose logs -f app
docker-compose logs -f postgres

# Stop all services
npm run docker:down

# Restart services
docker-compose restart app
docker-compose restart postgres

# Check container status
docker-compose ps

# Access running containers
docker-compose exec app sh
docker-compose exec postgres psql -U postgres -d postgres
```

### Production Deployment

#### Method 1: Using Docker Compose (Recommended)

```bash
# 1. Clone and navigate to project
git clone https://github.com/RafiulM/codeguide-landing-page.git
cd codeguide-landing-page

# 2. Create production environment file
cp .env.example .env.production

# 3. Edit production environment variables
nano .env.production
```

**Essential Production Environment Variables:**
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@your-db-host:5432/dbname
BETTER_AUTH_SECRET=your_production_secret_32_chars_minimum
BETTER_AUTH_URL=https://your-domain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-domain.com
```

```bash
# 4. Build and deploy with production environment
docker-compose --env-file .env.production up -d --build

# 5. Check deployment status
docker-compose --env-file .env.production ps

# 6. Verify application is running
curl http://localhost:3000
```

#### Method 2: Standalone Docker Build

```bash
# Build the application image
docker build -t codeguide-starter-fullstack:latest .

# Run with environment variables
docker run -d \
  --name codeguide-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL="your-production-db-url" \
  -e BETTER_AUTH_SECRET="your-production-secret" \
  -e BETTER_AUTH_URL="https://your-domain.com" \
  codeguide-starter-fullstack:latest
```

### Advanced Docker Configurations

#### Custom Docker Compose Override

Create `docker-compose.override.yml` for custom development configurations:

```yaml
# docker-compose.override.yml
version: '3.8'
services:
  app:
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev

  postgres-dev:
    ports:
      - "5434:5432"  # Additional port for testing
```

#### Production Dockerfile with Caching

For optimized production builds, consider using BuildKit:

```bash
# Enable BuildKit for better caching
export DOCKER_BUILDKIT=1

# Build with cache mounting for faster builds
docker build \
  --cache-from type=local,src=/tmp/.buildx-cache \
  --cache-to type=local,dest=/tmp/.buildx-cache \
  -t codeguide-starter-fullstack:latest .
```

#### Database-Only Deployment

For deploying the database separately:

```bash
# Deploy PostgreSQL only
docker-compose up -d postgres

# Deploy application separately (connects to external DB)
docker-compose up -d app
```

### Docker Configuration Deep Dive

#### Production `docker-compose.yaml` includes:

- **PostgreSQL Database** with persistent volumes and health checks
- **Next.js Application** with multi-stage builds for optimization
- **Development Database** profile for isolated testing
- **Custom Network** for secure container communication
- **Restart Policies** for high availability
- **Resource Limits** for production safety
- **Environment-Specific Configurations**

#### Key Configuration Features:

```yaml
# Health Checks
healthcheck:
  test: ["CMD-SHELL", "curl -f http://localhost:3000/api/health || exit 1"]
  interval: 30s
  timeout: 10s
  retries: 3

# Resource Limits
deploy:
  resources:
    limits:
      cpus: '1.0'
      memory: 1G
    reservations:
      cpus: '0.5'
      memory: 512M

# Persistent Volumes
volumes:
  postgres_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /var/lib/postgresql/data
```

### Environment-Specific Docker Files

#### Development Dockerfile.dev

Create `Dockerfile.dev` for development optimization:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

#### Production Optimization

The production `Dockerfile` includes:
- **Multi-stage builds** to reduce image size
- **Security best practices** with non-root user
- **Optimized layer caching** for faster builds
- **Health checks** for monitoring
- **Static asset optimization**

### Monitoring and Maintenance

#### Log Management

```bash
# View logs with limits
docker-compose logs --tail=100 app

# Follow logs with timestamps
docker-compose logs -f --timestamps app

# Export logs to file
docker-compose logs app > app-logs.txt

# Rotate logs (logrotate setup)
sudo nano /etc/logrotate.d/docker-containers
```

#### Performance Monitoring

```bash
# Monitor resource usage
docker stats

# Monitor specific container
docker stats codeguide-starter-fullstack-app

# Check disk usage
docker system df

# Clean up unused resources
docker system prune -f
```

#### Backup and Recovery

```bash
# Backup database volume
docker run --rm -v codeguide-starter-fullstack_postgres_data:/data \
  -v $(pwd):/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .

# Restore database volume
docker run --rm -v codeguide-starter-fullstack_postgres_data:/data \
  -v $(pwd):/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data
```

### Troubleshooting Docker Issues

#### Common Problems and Solutions

```bash
# Problem: Port conflicts
# Solution: Find and kill process using port 3000
sudo lsof -i :3000
sudo kill -9 <PID>

# Problem: Build cache issues
# Solution: Clean build cache
docker builder prune -f
docker-compose build --no-cache

# Problem: Database connection issues
# Solution: Check network and credentials
docker network ls
docker network inspect codeguide-starter-fullstack-network
docker-compose exec postgres psql -U postgres -d postgres

# Problem: Permission issues
# Solution: Fix volume permissions
sudo chown -R 1001:1001 ./postgres_data

# Problem: Out of disk space
# Solution: Clean up Docker resources
docker system prune -a --volumes -f
```

#### Debug Mode

```bash
# Run container with shell access for debugging
docker-compose run --rm app sh

# Debug with environment variable overrides
docker-compose run --rm -e DEBUG=true app npm run dev

# Check container environment
docker-compose exec app env | sort
```

### Production Best Practices

#### Security Considerations

1. **Use Secrets Management:**
   ```bash
   # Use Docker secrets instead of environment variables
   echo "your_secret" | docker secret create db_password -
   ```

2. **Network Isolation:**
   ```yaml
   # Use custom networks
   networks:
     frontend:
       driver: bridge
     backend:
       driver: bridge
       internal: true
   ```

3. **Regular Updates:**
   ```bash
   # Update base images regularly
   docker pull postgres:16-alpine
   docker-compose pull
   docker-compose up -d
   ```

#### Scaling Considerations

```bash
# Scale with multiple replicas
docker-compose up -d --scale app=3

# Use load balancer (nginx/traefik)
# Add nginx configuration for reverse proxy
```

#### CI/CD Integration

```yaml
# .github/workflows/docker.yml
name: Deploy to Docker
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Docker
        run: |
          docker-compose -f docker-compose.prod.yml up -d --build
```

### Migration and Updates

#### Zero-Downtime Deployment

```bash
# Deploy new version without downtime
docker-compose up -d --no-deps app
```

#### Database Migrations

```bash
# Run migrations before deployment
docker-compose run --rm app npm run db:migrate
```

This comprehensive Docker deployment guide ensures smooth development workflows and reliable production deployments.

---

## 🌐 Production Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel --prod
   ```

2. **Configure Environment Variables**
   - Add `DATABASE_URL` (PostgreSQL connection string)
   - Add `BETTER_AUTH_SECRET` (generate secure secret)
   - Add `BETTER_AUTH_URL` (your deployment URL)

3. **Setup Database**
   ```bash
   # Push schema to production database
   npm run db:push
   ```

### Railway

1. **Connect Repository** to Railway
2. **Add Environment Variables** in Railway dashboard
3. **Deploy** - Railway will build and deploy automatically

### DigitalOcean App Platform

1. **Create App** and connect GitHub repository
2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Run Command: `npm start`
3. **Add Environment Variables**
4. **Deploy**

### Self-Hosted VPS

```bash
# Clone repository
git clone https://github.com/RafiulM/codeguide-landing-page.git
cd codeguide-landing-page

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with production values

# Build application
npm run build

# Start with PM2 (recommended)
npm install -g pm2
pm2 start ecosystem.config.js

# Or start directly
npm start
```

---

## 🔧 Configuration

### Customizing Database Schema

Edit files in `db/schema/` to modify your database structure:

```typescript
// db/schema/your-model.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const yourModel = pgTable('your_model', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Adding New UI Components

The project uses shadcn/ui for components. Add new components:

```bash
# Add new component
npx shadcn@latest add [component-name]

# Example: npx shadcn@latest add dialog
```

### Customizing Authentication

Modify `lib/auth.ts` to configure authentication behavior:

```typescript
// Custom auth providers, callbacks, etc.
export const auth = betterAuth({
  database: {
    provider: 'postgres',
    url: process.env.DATABASE_URL!,
  },
  // Add your custom configuration
});
```

---

## 🧪 Testing & Quality

### Code Quality Tools

```bash
# Lint code
npm run lint

# Fix linting issues (run manually)
npx eslint --fix .

# Type checking (run manually)
npx tsc --noEmit

# Format code (run manually)
npx prettier --write .
```

### Testing (Coming Soon)

The template is set up to easily add testing frameworks:

- **Jest** for unit tests
- **React Testing Library** for component tests
- **Playwright** for E2E tests

---

## 📚 Learn More

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

### Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)

---

## 🤝 Contributing

We welcome contributions! Please follow our guidelines:

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- **Follow** the existing code style and conventions
- **Add** tests for new features
- **Update** documentation as needed
- **Be** respectful and constructive in PR discussions

### Development Setup

```bash
# Fork and clone your fork
git clone https://github.com/YOUR-USERNAME/codeguide-landing-page.git
cd codeguide-landing-page

# Install dependencies
npm install

# Create feature branch
git checkout -b your-feature-name

# Make your changes and test
npm run dev
npm run lint
npx tsc --noEmit

# Commit and push
git add .
git commit -m "feat: add your feature"
git push origin your-feature-name
```

---

## ❓ Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check if PostgreSQL is running
npm run db:up

# Verify connection string in .env
echo $DATABASE_URL
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Authentication Issues
- Check `BETTER_AUTH_SECRET` is set and long enough
- Verify `BETTER_AUTH_URL` matches your deployment URL
- Clear browser cookies and localStorage

#### Docker Issues
```bash
# Rebuild containers
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Getting Help

- 📖 Check the [documentation](./documentation/)
- 🐛 [Report an issue](https://github.com/RafiulM/codeguide-landing-page/issues)
- 💬 [Start a discussion](https://github.com/RafiulM/codeguide-landing-page/discussions)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**[Rafiul Mahdi](https://github.com/RafiulM)**

- 🐦 [Twitter](https://twitter.com/rafiulm)
- 💼 [LinkedIn](https://linkedin.com/in/rafiulm)
- 🌐 [Website](https://rafiulm.com)

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com/) for the amazing Next.js framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Better Auth](https://better-auth.com/) for the modern authentication solution
- [Drizzle Team](https://github.com/drizzle-team) for the excellent ORM
- All the [contributors](https://github.com/RafiulM/codeguide-landing-page/graphs/contributors) who helped make this project better

---

<div align="center">

**⭐ Star this repo if it helped you!**

Made with ❤️ by [RafiulM](https://github.com/RafiulM)

[🔝 Back to top](#codeguide-starter-fullstack)

</div>
