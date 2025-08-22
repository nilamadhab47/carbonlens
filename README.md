# CarbonLens Landing Page

A modern, high-conversion landing page for CarbonLens - an AI tool that auto-generates ESG/BRSR/CSRD carbon reports using NASA Harvest satellite data, open data sources, and LLMs.

## 🚀 Features

### Design & UX
- **Dark, premium aesthetic** with emerald→teal gradient accents
- **Neomorphic design** with soft shadows and glassmorphism effects
- **Responsive design** optimized for all devices
- **Accessibility-first** with semantic HTML and focus states
- **Reduced motion support** for accessibility preferences

### Technical Stack
- **Framework**: Next.js 15 with App Router + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom theming
- **Animations**: Framer Motion (page transitions, reveals) + Anime.js (counters, particles)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings) + Inter (body)

### Landing Page Sections
1. **Hero Section** - Animated background with floating particles
2. **Product Explainer** - 3-step process with code preview
3. **Features Grid** - BRSR/CSRD specific capabilities
4. **Animated Metrics** - Count-up animations with impact stats
5. **Comparison Table** - CarbonLens vs consultants vs DIY
6. **Use Cases** - Industry-specific examples
7. **Testimonials** - Social proof from pilot customers
8. **Pricing** - Founder Pilot Program details
9. **FAQ** - Comprehensive Q&A section
10. **Lead Form** - Demo request with validation
11. **Footer** - Complete with trust badges

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO & fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Sticky navigation
│   ├── hero.tsx            # Hero section with animations
│   ├── features.tsx        # Feature grid
│   ├── metrics.tsx         # Animated statistics
│   ├── comparison.tsx      # Comparison table
│   ├── use-cases.tsx       # Industry use cases
│   ├── testimonials.tsx    # Customer testimonials
│   ├── pricing.tsx         # Pilot program pricing
│   ├── faq.tsx             # FAQ accordion
│   ├── lead-form.tsx       # Demo request form
│   └── footer.tsx          # Site footer
├── lib/
│   ├── site-data.ts        # Site configuration & content
│   ├── animations.ts       # Framer Motion variants
│   ├── anime-utils.ts      # Anime.js utilities
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Brand Colors
The design uses a custom emerald→teal gradient. Update colors in:
- `tailwind.config.ts` - Color definitions
- `app/globals.css` - CSS custom properties

### Content Updates
All content is centralized in `lib/site-data.ts`:
- Site metadata
- Navigation items
- Feature descriptions
- Testimonials
- FAQ items
- Pricing details

### Animation Settings
- Framer Motion variants: `lib/animations.ts`
- Anime.js utilities: `lib/anime-utils.ts`
- Reduced motion support built-in

## 🔧 SEO Configuration

### Built-in SEO Features
- **Next SEO** integration with JSON-LD structured data
- **Open Graph** tags for social sharing
- **Twitter Cards** configuration
- **Semantic HTML** structure
- **Meta descriptions** and keywords
- **Canonical URLs** and sitemaps ready

### SEO Checklist
- [ ] Update `siteConfig` in `lib/site-data.ts`
- [ ] Add real OG images to `/public/`
- [ ] Configure Google Analytics/Plausible
- [ ] Set up Google Search Console
- [ ] Add robots.txt and sitemap.xml
- [ ] Test with Lighthouse and PageSpeed Insights

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Create `.env.local` for:
```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain

# Form handling (optional)
FORM_WEBHOOK_URL=your_webhook_url
```

### Performance Optimizations
- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Reduced motion support
- Optimized bundle size

## 🎯 Conversion Optimization

### High-Converting Elements
- **Clear value proposition** in hero section
- **Social proof** with testimonials and trust badges
- **Urgency** with limited pilot program spots
- **Multiple CTAs** throughout the page
- **Risk reduction** with pilot program benefits
- **Authority** with NASA/GHG Protocol alignment

### A/B Testing Ready
- Component-based architecture for easy testing
- Analytics hooks prepared
- Form conversion tracking ready

## 📊 Analytics Integration

### Supported Platforms
- Google Analytics 4
- Plausible Analytics
- Custom event tracking

### Key Metrics to Track
- Hero CTA clicks
- Form submissions
- Section scroll depth
- Feature engagement
- Pricing section views

## 🔒 Security & Privacy

### Built-in Security
- Form validation with Zod
- XSS protection
- CSRF protection ready
- Privacy-compliant analytics hooks

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for CarbonLens.

## 🆘 Support

For technical issues or customization requests:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with 🌱 for a sustainable future**
