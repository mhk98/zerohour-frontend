# Zero Ghonta - Bengali News Website

A fully responsive Bengali news website built with Next.js 14 App Router, Tailwind CSS, and modern web technologies.

## Features

✅ Fully Responsive Bengali News Website  
✅ Modern UI similar to Daily Amar Desh  
✅ Featured news on top with large thumbnail  
✅ 3-column news grid on desktop / 1 column on mobile  
✅ Sticky main menu with dropdown categories  
✅ Breaking news ticker (scrolling left → right)  
✅ Pagination for news list  
✅ Category pages (International, Sports, Entertainment, Technology, etc.)  
✅ Single News Page with:

- Title, Author, Published Time
- Share Buttons (FB, WhatsApp, Messenger)
- Suggested/Related articles section  
  ✅ SEO Best Practices:
- Dynamic Open Graph & Meta Tags
- Slug-based URLs e.g. /news/something-unique  
  ✅ API Ready Structure:
- news list (latest)
- single news by id/slug  
  ✅ Dark Mode Support  
  ✅ Local Bengali font (Noto Sans Bengali / SolaimanLipi)  
  ✅ Admin Panel Ready Codebase (CRUD news)  
  ✅ Clean and reusable UI components  
  ✅ Smooth animations (AOS / Framer Motion)  
  ✅ Light skeleton loading animation for images

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit** (State Management)
- **Framer Motion** (Animations)
- **AOS** (Scroll Animations)
- **Shadcn UI** (Component Library)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── api/
│   │   └── news/
│   │       ├── route.ts           # GET /api/news
│   │       └── [slug]/route.ts    # GET /api/news/[slug]
│   ├── news/
│   │   └── [slug]/
│   │       ├── page.tsx    # Single news page
│   │       └── layout.tsx   # Metadata for SEO
│   ├── category/
│   │   └── [category]/
│   │       └── page.tsx    # Category pages
│   └── admin/
│       ├── page.tsx        # Admin panel (list)
│       └── create/
│           └── page.tsx    # Admin panel (create)
├── components/
│   └── ui/
│       ├── header.tsx              # Sticky header with navigation
│       ├── footer.tsx               # Footer component
│       ├── breaking-news-ticker.tsx # Scrolling ticker
│       ├── news-card.tsx            # News card component
│       ├── news-grid.tsx            # News grid layout
│       ├── pagination.tsx           # Pagination component
│       ├── share-buttons.tsx        # Social share buttons
│       ├── dark-mode-toggle.tsx    # Dark mode toggle
│       ├── skeleton-loader.tsx     # Loading skeleton
│       └── button.tsx               # Button component
├── store/
│   ├── index.ts            # Redux store configuration
│   ├── StoreProvider.tsx   # Redux provider wrapper
│   ├── newsSlice.ts        # News state slice
│   └── hooks.ts            # Typed Redux hooks
├── lib/
│   └── utils.ts            # Utility functions
└── data/
    └── sample-news.json    # Sample news data
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Add Bengali Font (Optional):**

If you want to use SolaimanLipi font, download it and place it in:

```
src/fonts/SolaimanLipi.ttf
```

The Noto Sans Bengali font will be automatically loaded from Google Fonts.

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Available Routes

- `/` - Home page with latest news
- `/news/[slug]` - Single news article page
- `/category/[category]` - Category pages (national, international, sports, etc.)
- `/admin` - Admin panel (list all news)
- `/admin/create` - Admin panel (create new news)

## API Endpoints

### GET /api/news

Query parameters:

- `page` (optional): Page number (default: 1)
- `category` (optional): Filter by category slug

Response:

```json
{
  "news": [...],
  "featuredNews": {...},
  "currentPage": 1,
  "totalPages": 2,
  "totalItems": 12
}
```

### GET /api/news/[slug]

Response:

```json
{
  "news": {...},
  "relatedNews": [...]
}
```

## Customization

### Adding Categories

Edit `src/components/ui/header.tsx` to add/modify categories:

```typescript
const categories = [
  { name: "National", slug: "national" },
  // Add more categories here
];
```

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

### Dark Mode

Dark mode is automatically handled via CSS variables. Toggle using the dark mode button in the header.

## Admin Panel

The admin panel is ready for CRUD operations. Currently, it's set up with a basic structure. To make it fully functional:

1. Connect to a backend API
2. Implement authentication
3. Add image upload functionality
4. Add edit functionality

## SEO

- Dynamic metadata for each news article
- Open Graph tags for social sharing
- Twitter Card support
- Slug-based URLs

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
vercel
```

## Notes

- Images are currently using placeholder.com URLs. Replace them with actual news images.
- The sample data is in Bengali. Replace with your actual news content.
- Font loading: Noto Sans Bengali loads from Google Fonts automatically. SolaimanLipi requires manual font file placement.

## License

This project is open source and available for your use.

## Support

For issues or questions, please open an issue on the repository.
