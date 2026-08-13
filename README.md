# Skyline Social

A polished, mobile-first travel social network prototype: **flight tracking + social networking + traveler discovery**.

## Included MVP experience
- Social travel feed with flight-attached posts
- Upcoming flight card and same-flight traveler discovery UI
- Interactive animated globe experience
- Trips and flight timeline
- Traveler profile, achievements, privacy state, and flight statistics
- Explore/trending destinations and popular routes
- Responsive desktop + mobile navigation
- Realistic seeded demo content

## Stack
Next.js App Router, React, TypeScript, Framer Motion, Lucide icons, CSS glassmorphism.

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Deploy on Vercel
This repository is configured for Vercel and uses the standard Next.js build pipeline.

1. In Vercel, choose **Add New → Project**.
2. Import the GitHub repository `raindezed/skyline-social`.
3. Keep **Framework Preset** as `Next.js`.
4. Keep **Root Directory** as `./`.
5. Leave the install/build/output commands on Vercel defaults.
6. No environment variables are required for the current demo MVP.
7. Click **Deploy**.

Vercel will run `npm install` and `npm run build` automatically. Future pushes to `main` can trigger production deployments once Git integration is enabled.

## Production roadmap
The current repository is a front-end MVP/demo. Next production steps are PostgreSQL + Prisma, Auth.js/Clerk, pluggable flight-data provider, object storage, messaging/notifications, and MapLibre/Three.js globe data.
