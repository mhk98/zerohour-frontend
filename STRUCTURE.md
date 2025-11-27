# Project Folder Structure

```
zeroghonta-website/
├── public/
│   └── images/
│       └── README.md              # Image placeholder instructions
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts & providers
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles & Tailwind config
│   │   ├── api/
│   │   │   └── news/
│   │   │       ├── route.ts        # GET /api/news (list with pagination)
│   │   │       └── [slug]/
│   │   │           └── route.ts    # GET /api/news/[slug] (single news)
│   │   ├── news/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx        # Single news article page (client)
│   │   │       └── layout.tsx      # Metadata for SEO (server)
│   │   ├── category/
│   │   │   └── [category]/
│   │   │       └── page.tsx         # Category pages (national, sports, etc.)
│   │   └── admin/
│   │       ├── page.tsx            # Admin panel (list all news)
│   │       └── create/
│   │           └── page.tsx        # Admin panel (create new news)
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx                  # Reusable button component
│   │       ├── header.tsx                  # Sticky header with navigation
│   │       ├── footer.tsx                   # Footer component
│   │       ├── breaking-news-ticker.tsx    # Scrolling breaking news ticker
│   │       ├── news-card.tsx                # News card component
│   │       ├── news-grid.tsx                # News grid layout
│   │       ├── pagination.tsx               # Pagination component
│   │       ├── share-buttons.tsx            # Social share buttons
│   │       ├── dark-mode-toggle.tsx        # Dark mode toggle button
│   │       └── skeleton-loader.tsx         # Loading skeleton component
│   ├── store/
│   │   ├── index.ts              # Redux store configuration
│   │   ├── StoreProvider.tsx     # Redux provider wrapper
│   │   ├── newsSlice.ts          # News state slice with async thunks
│   │   └── hooks.ts               # Typed Redux hooks
│   ├── lib/
│   │   └── utils.ts              # Utility functions (formatDate, generateSlug, etc.)
│   └── data/
│       └── sample-news.json       # Sample Bengali news data (12 articles)
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── next.config.js                 # Next.js configuration
├── .gitignore                     # Git ignore rules
├── README.md                      # Main documentation
└── SETUP.md                       # Quick setup instructions
```

## Key Files Overview

### Core Configuration
- `package.json` - All dependencies (Next.js 14, Redux, Tailwind, Framer Motion, AOS)
- `tsconfig.json` - TypeScript paths configured with `@/*` alias
- `tailwind.config.ts` - Tailwind with dark mode and Bengali font support
- `next.config.js` - Image domain configuration for placeholder images

### Pages
- `src/app/page.tsx` - Home page with featured news and news grid
- `src/app/news/[slug]/page.tsx` - Single news article page
- `src/app/category/[category]/page.tsx` - Category filtered pages
- `src/app/admin/page.tsx` - Admin panel for managing news
- `src/app/admin/create/page.tsx` - Create new news article form

### Components
- `header.tsx` - Sticky navigation with dropdown menus
- `breaking-news-ticker.tsx` - Auto-scrolling ticker for breaking news
- `news-card.tsx` - Reusable news card with image, title, excerpt
- `news-grid.tsx` - Responsive grid layout (3 cols desktop, 1 col mobile)
- `pagination.tsx` - Page navigation component
- `share-buttons.tsx` - Facebook, WhatsApp, Messenger share buttons

### State Management
- `store/newsSlice.ts` - Redux slice with async thunks for fetching news
- `store/StoreProvider.tsx` - Redux provider wrapper for app

### API Routes
- `api/news/route.ts` - GET endpoint for paginated news list
- `api/news/[slug]/route.ts` - GET endpoint for single news article

### Data
- `data/sample-news.json` - 12 sample Bengali news articles with placeholder images

## Features Implemented

✅ Fully Responsive Design  
✅ Dark Mode Support  
✅ Bengali Fonts (Noto Sans Bengali + SolaimanLipi)  
✅ Breaking News Ticker  
✅ Featured News Section  
✅ 3-Column News Grid (Desktop) / 1-Column (Mobile)  
✅ Sticky Header with Dropdown Categories  
✅ Pagination  
✅ Category Pages  
✅ Single News Page with SEO  
✅ Share Buttons (Facebook, WhatsApp, Messenger)  
✅ Related Articles Section  
✅ Admin Panel Structure  
✅ Smooth Animations (AOS + Framer Motion)  
✅ Skeleton Loading States  
✅ API Ready Structure  

