# Docker Deployment Guide

This guide provides comprehensive instructions for deploying CodeGuide Starter Fullstack using Docker.

## 🐳 Docker Setup Overview

### Architecture Components

- **Application Container**: Next.js application (Node.js 18 Alpine)
- **Database Container**: PostgreSQL 16 Alpine
- **Network**: Custom Docker network for service communication
- **Volumes**: Persistent storage for database data

### File Structure

```
codeguide-starter-fullstack/
├── Dockerfile                    # Multi-stage build configuration
├── docker-compose.yaml           # Orchestration configuration
├── docker-compose.override.yaml  # Development overrides (optional)
├── .dockerignore                 # Files excluded from Docker build
└── docker/
    └── postgres/
        └── init.sql             # Database initialization script
```

## 🚀 Quick Docker Deployment

### Option 1: Development with Docker Compose

**Recommended for local development**

```bash
# 1. Clone the repository
git clone https://github.com/RafiulM/codeguide-starter-fullstack.git
cd codeguide-starter-fullstack

# 2. Set up environment variables
cp .env.example .env

# 3. Start the development database
docker compose --profile dev up postgres-dev -d

# 4. Install dependencies and start the app locally
npm install
npm run db:push  # Push schema to Docker database
npm run dev      # Start Next.js development server
```

### Option 2: Full Docker Stack (Development)

```bash
# Start both application and database in containers
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down
```

### Option 3: Production Docker Deployment

```bash
# 1. Configure production environment
cp .env.example .env
# Edit .env with production values

# 2. Start production stack
docker compose -f docker-compose.yaml up -d

# 3. Run database migrations (first time only)
docker compose exec app npm run db:push

# 4. Verify deployment
curl http://localhost:3000/api/health
```

## 📋 Environment Configuration

### Production Environment Variables

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:your_secure_password@postgres:5432/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password

# Authentication
BETTER_AUTH_SECRET=your-very-secure-32-character-secret-key
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com

# Application
NODE_ENV=production
```

### Docker Compose Profiles

#### Development Profile
```bash
# Start development database only
docker compose --profile dev up postgres-dev -d
```

#### Production Profile
```bash
# Start full production stack
docker compose up -d
```

## 🔧 Docker Customization

### Custom Dockerfile for Production

Create `Dockerfile.production` for custom production builds:

```dockerfile
# Use Node.js 20 for better compatibility
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run db:generate
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Custom docker-compose for Production

Create `docker-compose.prod.yaml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: codeguide-postgres-prod
    restart: always
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - codeguide-network
    # Expose only internally, not to host
    expose:
      - "5432"

  app:
    build:
      context: .
      dockerfile: Dockerfile.production
    container_name: codeguide-app-prod
    restart: always
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
      - BETTER_AUTH_URL=${BETTER_AUTH_URL}
      - NEXT_PUBLIC_BETTER_AUTH_URL=${NEXT_PUBLIC_BETTER_AUTH_URL}
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    networks:
      - codeguide-network
    # Health check
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

volumes:
  postgres_data:

networks:
  codeguide-network:
    driver: bridge
```

## 🔍 Troubleshooting

### Common Docker Issues

#### 1. Port Conflicts
```bash
# Check if ports are in use
netstat -tulpn | grep :3000
netstat -tulpn | grep :5432

# Solution: Change ports in docker-compose.yaml
ports:
  - "3001:3000"  # Use different host port
```

#### 2. Database Connection Issues
```bash
# Check database logs
docker compose logs postgres

# Test database connection
docker compose exec postgres psql -U postgres -d postgres -c "SELECT 1;"

# Reset database
docker compose down -v  # Removes volumes
docker compose up -d
```

#### 3. Build Failures
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker compose build --no-cache
```

#### 4. Permission Issues
```bash
# Fix volume permissions
sudo chown -R 1001:1001 ./data
```

### Performance Optimization

#### 1. Multi-stage Build Optimization
The current Dockerfile uses multi-stage builds for optimal image size:
- **Stage 1 (deps)**: Install dependencies
- **Stage 2 (builder)**: Build application
- **Stage 3 (runner)**: Production runtime

#### 2. Resource Limits
Add to `docker-compose.yaml`:

```yaml
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

## 📊 Monitoring and Logging

### Viewing Logs
```bash
# View all service logs
docker compose logs -f

# View specific service logs
docker compose logs -f app
docker compose logs -f postgres

# View last 100 lines
docker compose logs --tail=100 -f app
```

### Health Monitoring
```bash
# Check container status
docker compose ps

# Check container health
docker compose exec app curl http://localhost:3000/api/health

# Monitor resource usage
docker stats
```

## 🔄 Backup and Recovery

### Database Backup
```bash
# Create backup
docker compose exec postgres pg_dump -U postgres postgres > backup.sql

# Restore backup
docker compose exec -T postgres psql -U postgres postgres < backup.sql
```

### Volume Backup
```bash
# Backup volume
docker run --rm -v codeguide-starter-fullstack_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .

# Restore volume
docker run --rm -v codeguide-starter-fullstack_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data
```

## 🚀 Production Deployment Checklist

### Pre-deployment
- [ ] Configure production environment variables
- [ ] Generate secure `BETTER_AUTH_SECRET`
- [ ] Set up SSL/TLS certificates
- [ ] Configure firewall rules
- [ ] Set up monitoring and logging

### Deployment Steps
1. **Build and Deploy**
   ```bash
   docker compose -f docker-compose.prod.yaml up -d --build
   ```

2. **Run Database Migrations**
   ```bash
   docker compose exec app npm run db:push
   ```

3. **Verify Deployment**
   ```bash
   curl https://yourdomain.com/api/health
   ```

4. **Set up Reverse Proxy** (nginx, Apache, or cloud load balancer)

### Post-deployment
- [ ] Monitor application logs
- [ ] Test all critical user flows
- [ ] Set up automated backups
- [ ] Configure alerting
- [ ] Document deployment process

## 🔐 Security Considerations

### Docker Security Best Practices

1. **Use Non-root User**: The Dockerfile creates and uses a non-root user
2. **Minimal Base Image**: Uses Alpine Linux for reduced attack surface
3. **Multi-stage Builds**: Reduces final image size and attack surface
4. **Read-only Filesystem**: Consider adding `read_only: true` in production
5. **Resource Limits**: Set CPU and memory limits
6. **Network Security**: Use custom networks, avoid exposing database port

### Environment Variable Security
- Use Docker secrets or external secret management
- Never commit `.env` files to version control
- Use strong, randomly generated secrets
- Rotate secrets regularly

---

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Deployment with Docker](https://nextjs.org/docs/deployment)
- [PostgreSQL Docker Official Image](https://hub.docker.com/_/postgres)
- [Docker Security Best Practices](https://docs.docker.com/develop/dev-best-practices/)