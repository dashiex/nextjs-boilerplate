# 🚀 Company Profile CMS

> A modern **Company Profile + CMS** built with **Next.js**, focused on
> scalability, maintainability, and production-ready architecture.

---

## 📖 About

This project is a personal learning project to master the modern React
ecosystem through **Next.js** by building a real-world Company Profile
website with a custom CMS.

The goal is not only to complete a project, but also to learn
production-level architecture, clean code practices, reusable
components, and scalable folder structures.

---

# 🛠 Tech Stack

| Category       | Technology            |
| -------------- | --------------------- |
| Framework      | Next.js (App Router)  |
| Language       | TypeScript            |
| Styling        | Tailwind CSS          |
| Formatting     | Prettier + ESLint     |
| ORM            | Prisma _(planned)_    |
| Database       | PostgreSQL _(planned)_|
| Authentication | Auth.js _(planned)_   |
| Validation     | Zod _(planned)_       |
| Forms          | React Hook Form _(planned)_ |
| Icons          | Lucide React _(planned)_ |
| HTTP Client    | Axios _(planned)_     |
| Deployment     | Vercel                |

> _(planned)_ items are on the roadmap and not yet installed. See the
> [Development Roadmap](#-development-roadmap).

---

# 📂 Project Structure

Root-level folders (no `src/` directory). The folders marked ✅ are scaffolded
by the [bootstrap step](#-project-bootstrap); the rest are added as the roadmap
progresses.

```text
.
├── app/                 # App Router (pages, layouts, globals.css)
│
├── components/          # ✅ scaffolded
│   ├── ui/              # Reusable UI (Button, Input, Card)
│   ├── layout/          # Header, Footer, Sidebar
│   ├── sections/        # Page sections
│   └── partials/        # Shared components
│
├── services/            # ✅ API calls
├── utils/               # ✅ Utility functions
│
├── features/            # Feature-based modules (auth, blog, services) — planned
├── hooks/               # Custom React hooks — planned
├── lib/                 # Third-party configs (axios, auth, prisma) — planned
├── types/               # TypeScript types/interfaces — planned
├── constants/           # Constants — planned
└── styles/              # Global styles (if needed) — planned
```

---

# 📦 Project Bootstrap

The base folder structure and config files are generated from a single
manifest, [`setup.md`](setup.md), by [`scripts/setup.mjs`](scripts/setup.mjs).

- Runs **automatically after `npm install`** (via the `postinstall` hook) the
  first time on a fresh clone, then writes a `.setup-done` marker so it never
  runs again.
- **Existing files are never overwritten** — safe to run any time.
- Empty folders get a `.gitkeep` so git preserves them.

Re-run the bootstrap manually at any time (ignores the marker):

```bash
npm run setup
```

To add or change what gets scaffolded, edit the **Folders** / **Files**
sections in [`setup.md`](setup.md) — it is the single source of truth.

---

# ✨ Features

## Public Website

- Home
- About
- Services
- Projects
- Blog
- Careers
- Contact
- SEO Optimized

---

## CMS Dashboard

- Dashboard
- Authentication
- Page Builder
- Blog Management
- Services Management
- Projects Management
- Contact Enquiries
- Media Library
- User Management
- Website Settings

---

# 🗺 Development Roadmap

## Phase 1 --- Foundation

- [x] Next.js
- [x] TypeScript
- [x] Tailwind CSS
- [x] ESLint
- [x] Prettier
- [x] Folder Structure
- [ ] Git Convention

---

## Phase 2 --- Design System

- [ ] Button
- [ ] Input
- [ ] Card
- [ ] Modal
- [ ] Badge
- [ ] Table
- [ ] Pagination
- [ ] Breadcrumb

---

## Phase 3 --- Public Website

- [ ] Header
- [ ] Footer
- [ ] Hero
- [ ] About
- [ ] Services
- [ ] Projects
- [ ] Blog
- [ ] Contact

---

## Phase 4 --- CMS

- [ ] Dashboard Layout
- [ ] Login
- [ ] Protected Routes
- [ ] User Roles

---

## Phase 5 --- Database

- [ ] Prisma
- [ ] PostgreSQL
- [ ] Database Schema
- [ ] Seed Data

---

## Phase 6 --- CRUD

- [ ] Pages
- [ ] Blog
- [ ] Services
- [ ] Projects
- [ ] Contact Messages
- [ ] Settings

---

## Phase 7 --- Deployment

- [ ] Environment Variables
- [ ] Production Build
- [ ] Deploy to Vercel

---

# 📋 Coding Standards

- TypeScript-first
- Reusable Components
- Feature-based Architecture
- Clean Folder Structure
- ESLint + Prettier
- Conventional Commits

---

# 🌿 Git Branch Strategy

```text
main
└── develop
    ├── feature/auth
    ├── feature/blog
    ├── feature/services
    └── feature/dashboard
```

---

# 📝 Commit Convention

```bash
feat: add authentication
fix: resolve login issue
refactor: simplify sidebar component
style: format code
docs: update README
chore: update dependencies
```

---

# 🚀 Getting Started

```bash
git clone <repository-url>

cd nextjs-boilerplate

npm install   # also runs the one-time bootstrap (see Project Bootstrap)

npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🎯 Learning Goals

- Learn React through Next.js
- Build production-ready applications
- Master App Router
- Write scalable TypeScript
- Implement clean architecture
- Create reusable UI components
- Understand modern full-stack development

---

# 📄 License

This project is built for learning, experimentation, and portfolio
purposes.