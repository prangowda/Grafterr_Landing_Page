# Grafterr Landing Page

A pixel-perfect, fully responsive React landing page for **Grafterr** — a restaurant technology platform.

## Tech Stack

| Technology | Reason |
|---|---|
| **React 18** | Modern functional components with hooks for state management |
| **Vite** | Lightning-fast dev server with HMR and optimized production builds |
| **CSS Modules** | Scoped styling without class name collisions, zero runtime cost |
| **Plain CSS** | Full control over design tokens, animations, and responsive breakpoints |

## Setup

```bash
npm install
npm run dev
```

The app will start at `http://localhost:5173`.

## Architecture & Approach

### Data Layer
All content is stored in `src/data/content.json` and accessed through an API service (`src/services/api.js`) that simulates network latency (1000–1500ms) and random failures (~10%). This demonstrates real-world loading and error states.

### Custom Hooks
- **`useContent`** — Fetches hero and features data in parallel via `Promise.all`, exposing `loading`, `error`, and `retry` states.
- **`useCarousel`** — Manages carousel index with boundary clamping and touch swipe support (50px threshold).

### Component Hierarchy
```
App
├── HeroSection
│   ├── FloatingShape (decorative)
│   ├── GradientText (headline)
│   ├── GradientButton (CTA)
│   └── Skeleton (loading)
└── FeaturesSection
    ├── FloatingShape (decorative)
    ├── Carousel
    │   └── ProductCard[]
    └── Skeleton (loading)
```

### Design System
CSS custom properties in `src/styles/variables.css` define the entire design system — colors, typography, spacing, radii, and transitions. All components reference these tokens.

### Responsive Breakpoints
- **Mobile** (< 768px): Single column, 1 carousel card
- **Tablet** (768px–1199px): 2 carousel cards
- **Desktop** (1200px+): 3 carousel cards, full layout

## Screenshots

_(<img width="1920" height="1011" alt="Screenshot 2026-04-21 221901" src="https://github.com/user-attachments/assets/ade39100-088f-4f22-b423-0b6aa7020352" /><img width="1920" height="1020" alt="Screenshot 2026-04-21 221617" src="https://github.com/user-attachments/assets/fe1540fd-fdb0-4bcd-b0f4-47f7e67f58c4" />


## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI primitives
│   └── sections/     # Page sections
├── hooks/            # Custom React hooks
├── services/         # API service layer
├── data/             # Static content
└── styles/           # Global styles & design tokens
```
