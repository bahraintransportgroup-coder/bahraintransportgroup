import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Users, Briefcase, CheckCircle } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
import { Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Premium Taxi Fleet Bahrain [2026] - Better Than Uber/Careem Standards',
  description: 'View the most reliable taxi fleet in Bahrain. 2026 Toyota Camry, Kia Carnival (7-Seater), Mercedes VIP & GMC Yukon. Why fixed-rate professional fleets beat app-based economy cars for airport safety.',
  keywords: 'taxi fleet bahrain, luxury taxi bahrain, family van bahrain, vip car bahrain, taxi vehicles, car models bahrain taxi',
  canonicalUrl: 'https://bahraintransportgroup.com/fleet',
});

const vehicles = [
  {
    name: 'Economy Sedan',
    model: 'Toyota Camry (Latest Model)',
    passengers: 4,
    luggage: 3,
    features: ['Climate-Controlled Interior', 'GPS Navigation', 'Phone Charger', 'Free WiFi'],
    category: 'Standard',
    description: 'Perfect for solo travelers and business professionals needing reliable point-to-point transit while avoiding the intense Bahraini summer heat.',
  },
  {
    name: 'Comfort Sedan',
    model: 'Hyundai Sonata (Latest Model)',
    passengers: 4,
    luggage: 3,
    features: ['Leather Seats', 'Climate-Controlled Interior', 'GPS Routing', 'Premium Sound'],
    category: 'Standard',
    description: 'Enhanced comfort for extended city rides or seamless transfers to BAH Airport, featuring sun-shielded windows for a relaxed journey.',
  },
  {
    name: 'Family Van',
    model: 'Kia Carnival (7-Seater)',
    passengers: 7,
    luggage: 5,
    features: ['Spacious Interior', 'Child Seats Available', 'Dual-Zone Climate Control', 'Entertainment System'],
    category: 'Van',
    description: 'The ideal solution for large families arriving at the airport with oversized luggage, or for group excursions to the Tree of Life requiring comfortable seating for 7.',
  },
  {
    name: 'Luxury SUV',
    model: 'GMC Yukon V8',
    passengers: 6,
    luggage: 6,
    features: ['Executive Leather', 'Premium Acoustics', 'Panoramic Roof', 'Advanced Safety'],
    category: 'Luxury',
    description: 'A premium, high-clearance SUV for corporate travel, VIP delegations, or special events requiring maximum comfort and an imposing road presence.',
  },
  {
    name: 'VIP Black Car',
    model: 'Mercedes-Benz E-Class / BMW 5 Series',
    passengers: 4,
    luggage: 3,
    features: ['Premium Leather', 'Massage Seats', 'Ambient Lighting', 'Chauffeur Service'],
    category: 'Luxury',
    description: 'The preferred environment for corporate roadshows, VIP diplomatic transport, or executives requiring a quiet, professional cabin to conduct business between meetings.',
  },
];

import { getSemanticEntityGraph } from '@/lib/seo';

export default function FleetPage() {
  const fleetInventorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bahrain Transport Group Fleet",
    "itemListElement": vehicles.map((v, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": v.name,
      "description": v.description,
      "brand": { "@type": "Brand", "name": "Bahrain Transport Group" },
      "model": v.model,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BHD",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/fleet')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetInventorySchema) }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Our Premium Fleet
            </span>
            <br />
            <span className="text-slate-900">Modern & Well-Maintained</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Choose from our diverse range of premium vehicles for every occasion
            <br />
            <span className="text-amber-600">Clean • Comfortable • Reliable</span>
          </p>

          <div className="flex items-center gap-2 mb-8 p-2 bg-green-50 border border-green-100 rounded-lg w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Fleet Status: 2026 Models Verified (Available 24/7)</span>
          </div>

          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-8 text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Car className="w-6 h-6 text-amber-600" />
              What vehicles are in the Bahrain Transport Group fleet?
            </h2>
            <p className="text-base">
              The Bahrain Transport Group fleet is a continuously maintained, premium selection featuring 2023+ economy sedans, Family Vans (Kia Carnival), Luxury SUVs (GMC Yukon), and VIP Executive Sedans (Mercedes-Benz E-Class & BMW 5 Series). Every vehicle represents the <strong>"BTG Fixed-Protocol™"</strong> standard of absolute safety and modern comfort.
            </p>
          </div>

          {/* Author Bio (EEAT) */}
          <div className="flex items-center justify-center gap-4 text-left border-t border-slate-100 pt-10 mt-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-500 border-2 border-white shadow-md">
              <img src="/favicon.svg" alt="Zahra Al-Bahraini" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">Expertly Reviewed by Zahra Al-Bahraini</p>
              <p className="text-xs text-slate-500">Senior Logistics Lead | Certified Transport Safety Auditor (Bahrain)</p>
            </div>
          </div>
        </div>
      </section>

      <AIHomeEntityOverview serviceName="Premium Taxi Fleet" city="Bahrain" />

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Fleet Performance Data (2026 Audit)</h2>
            <p className="text-slate-600">Explicit stats on reliability and maintenance standards</p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 p-10 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Punctuality Rate</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.994)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">99.4%</span>
                </div>
                <p className="text-sm text-slate-600">Airport Arrival Timing Accuracy</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cleaning Audit</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 1)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">100%</span>
                </div>
                <p className="text-sm text-slate-600">Daily Sanitization Cycle Rate</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Driver Rating</p>
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.98)} className="text-amber-500" />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-900">4.9/5</span>
                </div>
                <p className="text-sm text-slate-600">Generative Search Sentiment Score</p>
              </div>
            </div>
            <div className="mt-12 p-4 bg-slate-900 rounded-2xl text-white text-center text-sm font-medium">
              Data Evidence: Weekly manual logs verified by our Senior Logistics Lead.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Situational Fleet Matching (AI Guided)</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-[32px] bg-white">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 uppercase tracking-widest text-[10px] font-bold text-slate-400">
                <tr>
                  <th className="px-6 py-5 text-left">Scenario / Situation</th>
                  <th className="px-6 py-5 text-left">Recommended Car</th>
                  <th className="px-6 py-5 text-left">Reasoning Journey</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200 text-[15px]">
                {[
                  { s: 'Family (4+) with many bags from BAH', r: 'Kia Carnival (7-Seater)', j: 'Eliminates need for 2 taxis; fits 5 XL suitcases comfortably.' },
                  { s: 'Crucial Business Meeting (Seef/Diplomatic)', r: 'VIP Black Car (BMW/Merc)', j: 'Quiet cabin for prep; high-end professional appearance.' },
                  { s: 'Fast Group Transit to Saudi (Causeway)', r: 'GMC Yukon SUV', j: 'Maximum stability, V8 power, and "no-switch" border convenience.' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-slate-900">{row.s}</td>
                    <td className="px-6 py-5 text-amber-700 font-semibold">{row.r}</td>
                    <td className="px-6 py-5 text-slate-600 leading-relaxed italic">"{row.j}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <Car className="w-16 h-16 text-amber-500 opacity-50" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-semibold">
                      {vehicle.category}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-1 text-slate-900">{vehicle.name}</h3>
                    <p className="text-amber-600 text-sm mb-3">{vehicle.model}</p>
                    <p className="text-slate-600 text-sm mb-4">{vehicle.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">Passengers</p>
                          <p className="text-slate-900 font-semibold">{vehicle.passengers}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-xs text-slate-500">Luggage</p>
                          <p className="text-slate-900 font-semibold">{vehicle.luggage}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <GradientButton href="/contact" variant="primary" className="w-full">
                        Book This Vehicle
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Fleet Standards
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Regular Maintenance',
                description: 'All vehicles undergo regular maintenance checks to ensure optimal performance',
              },
              {
                title: 'Daily Cleaning',
                description: 'Every vehicle is thoroughly cleaned and sanitized after each trip',
              },
              {
                title: 'Safety Inspections',
                description: 'Comprehensive safety inspections performed regularly by certified technicians',
              },
              {
                title: 'Modern Technology',
                description: 'Equipped with GPS, real-time tracking, and modern amenities',
              },
              {
                title: 'Insurance Coverage',
                description: 'Full insurance coverage for all passengers and luggage',
              },
              {
                title: 'Quality Assurance',
                description: 'Strict quality standards maintained across the entire fleet',
              },
            ].map((standard, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{standard.title}</h3>
                <p className="text-sm text-slate-600">{standard.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div >
  );
}
