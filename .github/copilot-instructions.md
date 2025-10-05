# Copilot Instructions for Buggy Riders

## Project Overview
This is a Next.js 15 tourism website for a Dubai dune buggy rental company. The app uses the App Router with server-side and client-side components, Firebase for backend services, and Tailwind CSS for styling.

## Key Architecture Patterns

### Client/Server Component Split
- `app/layout.js` handles server-side metadata and font loading
- `app/ClientLayout.js` wraps all client-side functionality (modals, scroll behavior, lead tracking)
- Most interactive components are client components using `"use client"` directive

### Dynamic Routing & Content Management
- Content varies by pathname using `usePathname()` hook in `app/page.js`
- Routes like `/dunebuggy`, `/quadbike`, `/desertadventure` change hero content dynamically
- Blog uses dynamic routes: `app/blog/[id]/page.js` with static data from `app/data/blog.js`

### Firebase Integration
- Configuration in `app/lib/firebase.js` exports `db` and `storage`
- Services API in `app/services/serviceapi.js` for CRUD operations on `buggyServices` collection
- Lead tracking system in `app/utils/leadService.js` prevents spam (10-minute IP cooldown)

### Admin Dashboard
- Protected admin routes in `app/admin/dashboard/page.js`
- Session-based auth using `sessionStorage.getItem("user")`
- Admin manages services and leads through tabbed interface
- Image uploads use Cloudinary (requires `NEXT_PUBLIC_CLOUDINARY_*` env vars)

## Development Patterns

### Component Organization
- Reusable page sections in `app/pages/` (DesertAdventure.js, Footer.js, etc.)
- UI components in `app/components/`
- Admin-specific components in `app/admin/components/`

### Styling Conventions
- Tailwind with custom theme extensions in `tailwind.config.js`
- Custom color `text1: '#FFFFFF'` and animation `spin-slow`
- Responsive design patterns throughout with `md:` breakpoints

### Lead Generation System
- Automatic lead tracking on page visits via `addLeadIfAllowed()` in ClientLayout
- IP-based deduplication using external IP service
- Firestore `leads` collection with page tracking

### Asset Management
- Images in `assets/` for imports, `public/` for static serving
- Gallery images numbered 1-89.webp in `public/gallery/`
- Blog images in `assets/blog/images/`

## Key Files to Understand

- `app/ClientLayout.js` - Main client wrapper with navigation, modals, and lead tracking
- `app/page.js` - Homepage with dynamic content based on route
- `app/utils/leadService.js` - Lead generation and IP tracking logic
- `app/admin/dashboard/page.js` - Admin interface architecture
- `app/phone.js` - Contains contact number configuration

## Common Development Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
```

## Environment Variables Needed
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
- Firebase config is hardcoded in `app/lib/firebase.js`