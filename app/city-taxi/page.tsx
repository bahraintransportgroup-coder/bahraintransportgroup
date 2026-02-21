import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Clock, DollarSign, MapPin, Zap, Shield, ThumbsUp } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
import Link from 'next/link';

export const metadata: Metadata = generateSEO({
  title: 'BEST City Taxi Service in Bahrain [2026 Rates] - 24/7 Manama, Muharraq & All Bahrain',
  description: 'Affordable city taxi service across Bahrain for 2026. Available 24/7 in Manama, Muharraq, Riffa & all areas. Fast response, professional drivers, clean vehicles. Book now!',
  keywords: 'taxi manama, taxi muharraq, taxi riffa, bahrain taxi service, city taxi bahrain, taxi in bahrain, bahrain cab service',
  canonicalUrl: 'https://bahraintransportgroup.com/city-taxi',
});

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service for all your city travel needs',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Quick pickup within 10 minutes in most areas',
  },
  {
    icon: DollarSign,
    title: 'Affordable Rates',
    description: 'Competitive pricing with no hidden charges',
  },
  {
    icon: Shield,
    title: 'Safe Journey',
    description: 'Licensed drivers and well-maintained vehicles',
  },
  {
    icon: MapPin,
    title: 'All Areas Covered',
    description: 'Service across Manama, Muharraq, Riffa, and beyond',
  },
  {
    icon: ThumbsUp,
    title: 'Easy Booking',
    description: 'Book via WhatsApp or our online form',
  },
];

const cityAreas = [
  {
    name: 'Manama',
    description: 'Capital city point-to-point transport. Safe, spacious transit for shopping excursions to The Avenues Mall, business meetings in the Diplomatic Area, or dining trips to Block 338 in Adliya.',
    highlights: ['Seef District', 'Diplomatic Area', 'Adliya', 'Juffair', 'City Centre'],
  },
  {
    name: 'Muharraq',
    description: 'Historic city and gateway to Bahrain International Airport. Dedicated chauffeur service for reliable daily commutes and efficient door-to-door transit to airport facilities.',
    highlights: ['Old Town', 'Arad', 'Hidd', 'Airport Area', 'Diyar Al Muharraq'],
  },
  {
    name: 'Riffa',
    description: 'Residential area private hire cab services. Dependable daily commutes, safe school transport for children, and reliable rides for medical appointments across the governorate.',
    highlights: ['East Riffa', 'West Riffa', 'Riffa Views', 'Al Aali'],
  },
  {
    name: 'Northern Areas',
    description: 'Covering Budaiya, Saar, Amwaj Islands, and surrounding regions',
    highlights: ['Budaiya', 'Saar', 'Amwaj Islands', 'Janabiyah', 'Barbar'],
  },
];

export default function CityTaxiPage() {
  const pathname = '/city-taxi';
  const whatsappMsg = `Hello Bahrain Transport Group! I want to book a city taxi. I am looking at: https://bahraintransportgroup.com${pathname}`;
  const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              City Taxi Service
            </span>
            <br />
            <span className="text-slate-900">Across Bahrain</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Fast, reliable taxi service in Manama, Muharraq, Riffa & all Bahrain cities
            <br />
            <span className="text-amber-600">Available 24/7 • Affordable Rates • Professional Drivers</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href={whatsappLink} variant="whatsapp" external>
              Book City Taxi via WhatsApp
            </GradientButton>
          </div>

          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
            <strong className="text-slate-900 block mb-1">What areas does Bahrain Transport Group cover for city taxi services?</strong>
            Bahrain Transport Group provides comprehensive, 24/7 city taxi services across the entire Kingdom of Bahrain. We offer fast pickups in Manama, Muharraq, Riffa, Juffair, Seef District, and the Northern Areas. Customers can book a professional, verified driver instantly for private rides, daily commutes, and half-day or full-day tours.
          </div>
        </div>
      </section>

      <AIHomeEntityOverview serviceName="City Taxi Services" city="Bahrain (Manama, Muharraq, Riffa)" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Why Residents and Tourists Rely on Our Private Fleet
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              The most trusted taxi service across Bahrain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FloatingCard key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/50">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Clear & Transparent Pricing (AEO Optimized)
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* AEO Passage 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How Much Does a Taxi Cost in Bahrain?</h3>
              <p className="text-slate-700 mb-4">
                The price of a taxi in Bahrain depends on your specific route. However, unlike standard metered cabs, Bahrain Transport Group operates on a <strong>100% pre-calculated fixed rate system</strong>. This means you are completely protected from surge multipliers during rush hour in Manama or unexpected toll charges.
              </p>
              <p className="text-slate-700">
                For example, a dedicated 4-seater ride from Seef District to Bahrain International Airport (BAH) begins at a highly competitive flat rate. To get an exact, non-changing price quote for your trip, simply forward your pickup and drop-off locations to our dispatch team via WhatsApp.
              </p>
            </div>

            {/* AEO Passage 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Is it cheaper to use Uber or a Taxi in Bahrain?</h3>
              <p className="text-slate-700 mb-4">
                While ride-hailing apps can sometimes offer lower base fares, their final prices frequently increase due to wait times, traffic jams in Juffair, and algorithmic surge pricing during peak hours. Professional services like Bahrain Transport Group offer a superior alternative: luxurious vehicles, guaranteed availability 24/7 without cancellations, and a strictly fixed fare that never changes regardless of traffic conditions.
              </p>
              <div className="mt-4">
                <GradientButton href={whatsappLink} variant="whatsapp" external>
                  Get an Exact Fixed Price on WhatsApp
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Areas We Cover
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive coverage across all Bahrain cities and regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityAreas.map((area, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <Link href={area.name === 'Northern Areas' ? '/locations' : `/locations/${area.name.toLowerCase()}`} className="group inline-block mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{area.name}</h3>
                </Link>
                <p className="text-slate-600 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-amber-600">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-600"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Popular Routes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Manama to Muharraq',
              'Seef to Riffa',
              'Airport to Manama',
              'Amwaj to City Centre',
              'Budaiya to Seef',
              'Riffa to Diplomatic Area',
              'Saar to Juffair',
              'Isa Town to Adliya',
            ].map((route, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center space-x-3"
              >
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-slate-600">{route}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
