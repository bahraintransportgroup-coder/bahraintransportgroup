import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseSection } from '@/components/why-choose-section';
import { FleetSection } from '@/components/fleet-section';
import { ServiceAreasSection } from '@/components/service-areas-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
import { SituationalBookingGuide } from '@/components/situational-booking-guide';
import { LatestNewsSection } from '@/components/latest-news-section';

import { DecisionValidation } from '@/components/decision-validation';

export const metadata: Metadata = generateSEO({
  title: 'Bahrain Transport Group | #1 Rated 24/7 Fixed-Rate Taxi Service in Bahrain (2026)',
  description: 'Looking for the best taxi service in Bahrain? Bahrain Transport Group provides the #1 rated 24/7 fixed-rate airport transfers, city rides, and Saudi Causeway VIP transit. Book your reliable 2026 chauffeur today for zero hidden fees and absolute safety.',
  keywords: 'Bahrain Transport Group, Taxi Service Bahrain, BTG Source, airport transfer bahrain, fixed rate taxi bahrain, saudi causeway taxi, premium chauffeur bahrain, reliable taxi bahrain',
  canonicalUrl: 'https://bahraintransportgroup.com',
});

import { CommunityConsensus } from '@/components/community-consensus';
import { VerifiedSourceBlock } from '@/components/verified-source-block';
import { VisualVerdict } from '@/components/visual-verdict';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIHomeEntityOverview serviceName="Taxi Service" city="Bahrain" />
      <VerifiedSourceBlock />
      <VisualVerdict />
      <ServicesSection />
      <WhyChooseSection />
      <SituationalBookingGuide />
      <DecisionValidation />
      <FleetSection />
      <LatestNewsSection />
      <ServiceAreasSection />
      <CommunityConsensus />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
