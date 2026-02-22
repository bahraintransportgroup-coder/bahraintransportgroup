import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { Toaster } from 'sonner';
import { PromoPopup } from '@/components/promo-popup';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bahraintransportgroup.com'),
  title: 'Bahrain Transport Group | #1 Rated 24/7 Fixed-Rate Taxi & Airport Transfers',
  description: 'Skip the Uber surge. Bahrain Transport Group offers 100% fixed-rate taxi services. Guaranteed 24/7 Airport Transfers, VIP Corporate travel, and "No-Switch" Saudi Causeway crossings since 2014.',
  keywords: 'Bahrain Transport Group, taxi service bahrain, airport transfer bahrain, saudi causeway taxi, fixed rate taxi manama, reliable taxi bahrain, best way to get around bahrain',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bahrain Transport Group - Premium 24/7 Taxi & Private Hire',
    description: 'Professional, fixed-rate taxi service in Bahrain. 24/7 availability for airport transfers, city rides, and corporate VIP transport across the Saudi border.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bahrain Transport Group - Premium Taxi Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bahrain Transport Group - #1 Private Taxi Service',
    description: 'Fixed-rate airport transfers and Saudi Causeway crossings. No surge pricing, just reliability.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <div id="site-header-container">
          <Navbar />
        </div>
        <main id="main-content-area" className="min-h-screen">
          {children}
        </main>
        <div id="site-footer-container">
          <Footer />
        </div>
        <Toaster position="top-right" theme="light" />
        <PromoPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}
