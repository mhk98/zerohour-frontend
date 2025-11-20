# Instructions for Running Locally

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

## Step 3: Open Browser

Navigate to: **http://localhost:3000**

## Step 4: Explore the Website

- **Home Page**: `/` - See latest news with featured article
- **Category Pages**: `/category/national`, `/category/international`, etc.
- **News Detail**: `/news/[slug]` - Click on any news card
- **Admin Panel**: `/admin` - View and manage news (basic structure)

## Features to Test

1. ✅ **Responsive Design**: Resize browser to see mobile/tablet/desktop layouts
2. ✅ **Dark Mode**: Click the moon/sun icon in header
3. ✅ **Breaking News Ticker**: Scrolls automatically at top
4. ✅ **Pagination**: Navigate through news pages
5. ✅ **Category Filter**: Click categories in header
6. ✅ **Share Buttons**: Test on single news page
7. ✅ **Animations**: Scroll to see fade-in animations
8. ✅ **Loading States**: Skeleton loaders appear while fetching

## Notes

- Images use placeholder.com URLs - replace with actual news images
- Sample data is in Bengali - replace with your content
- Admin panel is basic structure - connect to backend for full CRUD

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Font Issues
- Noto Sans Bengali loads automatically from Google Fonts
- SolaimanLipi requires font file at `src/fonts/SolaimanLipi.ttf` (optional)

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

