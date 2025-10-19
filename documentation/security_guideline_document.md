# Security Guidelines for codeguide-landing-page

This document provides comprehensive security guidelines tailored to the `codeguide-landing-page` Next.js 15 starter template. It aligns with security-by-design principles and covers best practices from authentication to infrastructure.

---

## 1. Security by Design

- **Threat Modeling**: Early in development, identify assets (user data, tokens), potential threats (XSS, CSRF, injection), and attack surfaces (API routes, public pages). Update the model as features evolve.
- **Secure Defaults**: All features (routing, middleware, headers) should default to the most restrictive configuration. Enable only what’s necessary.
- **Defense in Depth**: Layer controls (input validation + CSP + security headers + middleware) so that failure in one control doesn’t compromise the system.

---

## 2. Authentication & Access Control

### 2.1 Better Auth Configuration

- Use a proven library (Better Auth) correctly: enable unique salts, strong hashing (bcrypt/Argon2) for passwords.
- Enforce multi-factor authentication (MFA) for privileged users or sensitive actions.

### 2.2 Session & JWT Security

- If using cookies, set `HttpOnly`, `Secure`, and `SameSite=Strict` attributes.
- If using JWT, avoid `alg=none`, validate signatures server-side, enforce short-lived tokens with `exp`, and rotate refresh tokens.
- Implement idle and absolute session timeouts. Provide logout endpoints to revoke tokens.
- Prevent session fixation by issuing a new session on every authentication event.

### 2.3 Role-Based Access Control (RBAC)

- Define minimal roles (e.g., `guest`, `user`, `admin`) in your database schema.
- Enforce server-side checks in middleware (`middleware.ts`) for protected routes (`/dashboard`).
- Never rely on client-side role checks.

---

## 3. Input Handling & Processing

- **Validation Library**: Use a schema-based validator (Zod, Joi) for all API route inputs. Reject unknown fields.
- **Prevent Injection**: Use Drizzle ORM’s parameterized queries. Never concatenate user input into SQL.
- **File Uploads**: If you plan file uploads, validate MIME types, size, and store them outside `public/`. Scan for malware.
- **Template Injection**: Sanitize or escape any user data before inserting into server-side templates.

---

## 4. Data Protection & Privacy

- **TLS Everywhere**: Enforce HTTPS (e.g., via Vercel config or reverse proxy). Use TLS 1.2+ and strong ciphers.
- **Secrets Management**: Store credentials (database URL, JWT secret) in a secrets manager (AWS Secrets Manager, Vault). Do not commit them to Git.
- **Encryption at Rest**: Ensure your PostgreSQL instance uses disk encryption.
- **PII Handling**: Mask or redact sensitive fields in logs and responses. Follow GDPR/CCPA guidelines for data retention and deletion.

---

## 5. API & Service Security

- **Rate Limiting**: Implement per-IP or per-user rate limits on authentication endpoints to mitigate brute-force attacks.
- **CORS**: Configure CORS to allow only trusted origins (`codeguide.com`, staging domains).
- **Minimal Data Exposure**: Return only necessary fields in API responses. Do not leak internal IDs or stack traces.
- **HTTP Methods**: Use `GET` for safe reads, `POST` for creation, `PUT/PATCH` for updates, and `DELETE` for removals. Reject unsupported methods with `405 Method Not Allowed`.
- **API Versioning**: Prefix future breaking changes (e.g., `/api/v1/auth`). Maintain backward compatibility.

---

## 6. Web Application Security Hygiene

- **CSRF Protection**: Use anti-CSRF tokens (synchronizer token pattern) for state-changing requests. Next.js Edge functions or custom middleware can inject and verify tokens.
- **Security Headers**:
  - Content-Security-Policy: Restrict script/style sources to self, approved CDNs, and enable Subresource Integrity (SRI).
  - Strict-Transport-Security: `max-age=63072000; includeSubDomains; preload`
  - X-Frame-Options: `DENY` or `SAMEORIGIN`
  - X-Content-Type-Options: `nosniff`
  - Referrer-Policy: `no-referrer-when-downgrade`
- **Subresource Integrity (SRI)**: When loading third-party scripts/styles, include integrity hashes in `<link>` and `<script>` tags.
- **Secure Client Storage**: Avoid storing tokens or sensitive data in `localStorage`/`sessionStorage`. Use secure, HttpOnly cookies.

---

## 7. Infrastructure & Configuration Management

- **Docker Security**:
  - Use minimal base images (e.g., `node:18-alpine`).
  - Run the application under a non-root user.
  - Avoid embedding secrets; pass them at runtime via environment variables or secrets mounts.
- **Host Hardening**: Disable unused services in production containers. Keep the attack surface minimal.
- **Configuration as Code**: Store environment configuration in encrypted CI/CD secrets. Never expose them in logs.
- **Disable Debugging**: Ensure `NEXT_PUBLIC_*_DEBUG` flags are off in production. Hide stack traces from end users.

---

## 8. Dependency Management

- **Lockfiles**: Commit `package-lock.json` or `yarn.lock` to guarantee deterministic builds.
- **Vulnerability Scanning**: Integrate Dependabot or Snyk to alert on known CVEs. Patch dependencies promptly.
- **Minimal Footprint**: Audit dependencies (`npm prune`) and remove unused packages to shrink the attack surface.
- **Peer Reviews**: Vet each new dependency for maintenance activity, license compatibility, and security posture.

---

## 9. DevOps & CI/CD Security

- **Immutable Builds**: Build containers in CI, run tests, then publish only after passing all security and quality gates.
- **Secrets in CI**: Use encrypted secrets storage (e.g., GitHub Secrets) for environment variables, keys, and tokens.
- **Scan as Part of Pipeline**: Automate linting, type checking, dependency scanning, and static analysis (ESLint, `npm audit`, custom SAST) on each pull request.
- **Automated Deploys**: Deploy to staging first, run smoke tests, then promote to production. Use role-based permissions for deployment credentials.

---

### Conclusion
Adhering to these guidelines will help ensure that the `codeguide-landing-page` starter kit remains secure throughout development, deployment, and maintenance. Periodically review and update controls as dependencies evolve and new threats emerge.