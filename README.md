# Bahrain Royal Taxi Website

A premium, fully responsive, SEO-optimized taxi service website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Dark Theme Design**: Glassmorphism effects with anti-gravity floating animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, and structured data
- **6 Main Pages**:
  - Homepage with hero, services, fleet, testimonials
  - Airport Transfer service page
  - City Taxi service page
  - Fleet showcase
  - About Us
  - Contact with booking form

- **Modern Stack**:
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Shadcn UI components
  - Framer Motion for smooth animations
  - Supabase for database

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (for database functionality)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Supabase:
   - Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Database Setup

The database schema includes:
- **testimonials**: Customer reviews and ratings
- **fleet_vehicles**: Vehicle information and specifications
- **service_areas**: Coverage areas in Bahrain
- **booking_requests**: Customer booking submissions

The migration is already created and will be applied to your Supabase instance.

## Customization

### Update Contact Information

Replace placeholder phone numbers and emails in:
- `components/navbar.tsx`
- `components/footer.tsx`
- `app/contact/page.tsx`
- `lib/seo.ts` (for schema)

Search for `+973 XXXX XXXX` and `info@bahrainroyaltaxi.com` to find all instances.

### Update Content

- **Services**: Edit `components/services-section.tsx`
- **Fleet**: Add/modify vehicles in the Supabase `fleet_vehicles` table
- **Testimonials**: Add reviews in the Supabase `testimonials` table
- **Service Areas**: Modify `components/service-areas-section.tsx`

### Styling

The color scheme uses amber/orange gradients. To change:
- Update gradient colors in component files
- Modify Tailwind theme in `tailwind.config.ts`
- Update CSS variables in `app/globals.css`

## SEO Features

- Dynamic meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Local Business structured data (Schema.org)
- FAQ schema on relevant pages
- Optimized images with Next.js Image component
- Semantic HTML structure

## Performance

- Optimized images with automatic WebP conversion
- Code splitting and lazy loading
- Static page generation where possible
- Efficient animation with Framer Motion
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is provided as-is for your taxi service website.

## Support

For issues or questions, please contact the development team.
