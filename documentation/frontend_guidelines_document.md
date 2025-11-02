# Frontend Guideline Document

This document outlines the frontend architecture, design principles, and technologies used in the CodeGuide landing page and application starter template. It’s written in everyday language so anyone can understand how the frontend is set up and how to work with it.

## 1. Frontend Architecture

### Overview
Our frontend is built on Next.js 15 (App Router) using React and TypeScript. This combination gives us:
- Server-side rendering (SSR) and static site generation (SSG) for fast page loads and good SEO.
- A folder-based router that maps files in `app/` directly to URLs.
- A clear separation between server components (for data fetching) and client components (for interactivity).

### Key Frameworks & Libraries
- **Next.js 15 (App Router)**: Manages pages, routes, and server/client rendering.
- **React**: Powers the UI through components.
- **TypeScript**: Adds type safety across the codebase.
- **Tailwind CSS**: Provides utility-first styling.
- **shadcn/ui**: A collection of headless, accessible React components styled via Tailwind.
- **Better Auth**: Handles sign-up/sign-in flows and session management.
- **Drizzle ORM + PostgreSQL**: Manages database access with type safety.
- **Docker**: Containerizes the app for consistent local and production environments.

### Scalability, Maintainability & Performance
- **File-based routing** and clear folder conventions keep the project organized as it grows.
- **Component-based design** lets us reuse and test pieces in isolation.
- **TypeScript types** prevent many runtime errors and make refactoring safer.
- **Tailwind’s utility classes** mean less custom CSS to maintain.
- **Built-in Next.js optimizations** (image optimization, code splitting, API routing) ensure fast, efficient delivery.

## 2. Design Principles

Our design is guided by three main principles:

1. **Usability**: Interfaces are intuitive. Buttons, links, and forms look and behave predictably.
2. **Accessibility (a11y)**: We follow WCAG guidelines—components have proper labels, focus states, and keyboard navigation.
3. **Responsiveness**: Layouts and typography adapt smoothly from mobile screens to large desktops.

### Applying These Principles
- **Consistent spacing and typography** ensure a clean, readable layout.
- **Contrast ratios** meet accessibility standards in both light and dark modes.
- **ARIA attributes and semantic HTML** help screen readers interpret our content.
- **Mobile-first approach** in Tailwind ensures small devices get priority styling, then scale up.

## 3. Styling and Theming

### Styling Approach
- We use **Tailwind CSS** for utility-first styling.
- **No custom CSS frameworks** like BEM or SMACSS—just Tailwind’s well-organized utilities.
- Styles are configured in `tailwind.config.ts`, where we define colors, fonts, and breakpoints.

### Theming
- Out-of-the-box **dark mode** support via Tailwind’s `dark:` variant.
- A `ThemeToggle` component allows users to switch between light and dark.
- Theme preference is stored in `localStorage` and read on page load.

### Visual Style
- **Design style**: Modern, flat design—clean lines, simple shadows, and a focus on content.
- **Glassmorphism accents**: Light frosted backgrounds on modals or cards (optional).

### Color Palette
- Primary: Indigo 600 (#4F46E5)
- Secondary: Emerald 500 (#10B981)
- Accent: Amber 400 (#FBBF24)
- Background Light: Gray 50 (#F9FAFB)
- Background Dark: Gray 900 (#111827)
- Text Light: Gray 800 (#1F2937)
- Text Dark: Gray 100 (#F3F4F6)

### Typography
- **Font Family**: `Inter, sans-serif`
- **Font Sizes**: Scaled via Tailwind’s `text-sm` to `text-4xl` classes.
- **Line Heights**: Comfortable reading at 1.5× font size.

## 4. Component Structure

### Organization
- `app/` contains page files and layout wrappers.
- `components/` holds reusable UI pieces:
  - `components/ui/`: shadcn/ui base components (Button, Card, Accordion).
  - `components/auth-buttons.tsx`: Sign In / Sign Up calls to action.
  - `components/theme-toggle.tsx`: Dark mode switch.
  - `components/app-sidebar.tsx`: Navigation for the authenticated dashboard.
- `lib/` and `db/` hold business logic, authentication helpers, and database schemas.

### Reuse & Maintainability
- Each component lives in its own folder with its TypeScript file and a minimal CSS or Tailwind class set.
- Components accept props to customize content, making them flexible and testable.
- Shared UI elements from shadcn/ui can be overridden or extended in `components/ui/` for branding.

## 5. State Management

### Authentication State
- **Better Auth** provides React hooks for session data and user info.
- We protect routes (like `/dashboard`) via middleware, redirecting unauthenticated users.

### Local & UI State
- **React useState/useReducer** for simple form and toggle states.
- **React Context** for theme data (light/dark) and any global UI flags.

### Server Data
- Server components in Next.js fetch data directly from the API or database.
- For client-side data fetching (e.g., dynamic testimonials), we recommend **SWR** or **React Query (TanStack Query)** for caching and revalidation.

## 6. Routing and Navigation

- **Next.js App Router**: Folder-based routing in `app/` maps to URLs.
- **Public routes**: Landing page at `/`.
- **Auth routes**: `app/(auth)/sign-in` and `sign-up` handle user conversion.
- **Protected route**: `/dashboard` is guarded by `middleware.ts`—only signed-in users can access.
- **Linking**: We use `next/link` for client-side transitions and `useRouter` for programmatic navigation.

## 7. Performance Optimization

- **Static Generation (SSG)** for landing page sections improves load times.
- **Server-side Rendering (SSR)** in API routes ensures fresh data for protected pages.
- **Code Splitting**: Next.js automatically splits code at page boundaries.
- **Dynamic Imports**: Lazily load heavy components (charts, tables) in the dashboard.
- **Image Optimization**: `next/image` serves responsive, optimized images.
- **Asset Compression**: Built-in Next.js gzip/brotli compression in production.

## 8. Testing and Quality Assurance

### Unit Tests
- **Jest** + **React Testing Library** for component and utility function testing.
- Focus on rendering, props, and state behavior.

### Integration Tests
- Test form flows (sign-in/sign-up), ensuring API routes respond correctly.
- Mock Drizzle ORM and Better Auth in tests to isolate logic.

### End-to-End (E2E) Tests
- **Cypress** or **Playwright** to simulate real user journeys:
  - Landing page navigation.
  - Sign-up > Dashboard redirect.
  - Theme toggle persistence.

### Linters & Formatters
- **ESLint** with TypeScript and Next.js rules.
- **Prettier** for consistent code formatting.
- **Husky** pre-commit hooks to run lint and tests automatically.

## 9. Conclusion and Overall Frontend Summary

The CodeGuide frontend starter brings together Next.js 15, React, and TypeScript under a single roof to deliver a fast, scalable, and maintainable codebase. With utility-first Tailwind CSS and accessible shadcn/ui components, you can build a polished landing page alongside a secure user dashboard. Key strengths include:
- Clear folder structure for pages, components, and logic.
- Built-in authentication and database integration with Better Auth + Drizzle ORM.
- Theming and responsiveness out of the box.
- A roadmap for testing and performance optimizations.

With these guidelines in place, anyone can confidently jump in and start crafting the CodeGuide landing page and application features without friction.