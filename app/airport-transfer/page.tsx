import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Plane, Clock, UserCheck, MapPin, DollarSign, Shield, Info } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AirportsSection } from '@/components/airports-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
  title: 'BEST Bahrain Airport Taxi [2026 Report] - Reliable Airport Transfer Service | All Airports',
  description: 'Professional airport taxi service in Bahrain. 24/7 pickup & drop-off at Bahrain International Airport (BAH). Flight tracking, meet & greet, fixed 2026 rates. Transfers to Muharraq, Sakhir & all Bahrain locations.',
  keywords: 'bahrain airport taxi, airport transfer bahrain, bahrain international airport taxi, BAH airport taxi, airport pickup bahrain, airport drop off bahrain, muharraq airport taxi, sakhir airport transfer, bahrain airport shuttle, bahrain heliport transfer',
  canonicalUrl: 'https://bahraintransportgroup.com/airport-transfer',
});

const features = [
  {
    icon: Plane,
    title: 'Flight Tracking',
    description: 'We monitor your flight status in real-time to ensure timely pickup',
  },
  {
    icon: UserCheck,
    title: 'Meet & Greet',
    description: 'Professional driver meets you at arrivals with name board',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Available round the clock for all flights, any time of day or night',
  },
  {
    icon: DollarSign,
    title: 'Fixed Rates',
    description: 'No surge pricing or hidden fees, transparent airport transfer rates',
  },
  {
    icon: MapPin,
    title: 'All Locations Covered',
    description: 'Direct, uninterrupted transfers from the BAH Arrivals terminal to major hotels in the Diplomatic Area, resorts in Zallaq, or residential complexes in Saar.',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Licensed drivers with extensive airport transfer experience',
  },
];

const faqs = [
  {
    question: 'How early should I book my airport transfer?',
    answer: 'We recommend booking at least 24 hours in advance, but we also accept last-minute bookings based on availability.',
  },
  {
    question: 'Do you track flight delays?',
    answer: 'Yes, we monitor all flights in real-time. If your flight is delayed, your driver will adjust the pickup time accordingly at no extra charge.',
  },
  {
    question: 'Where will the driver meet me?',
    answer: 'For arrivals, our driver will meet you in the arrivals hall with a name board. For departures, we pick you up from your location.',
  },
  {
    question: 'What is included in the price?',
    answer: 'All taxes, tolls, and parking fees are included. No hidden charges. The price you see is the price you pay.',
  },
];

import { getSemanticEntityGraph } from '@/lib/seo';

export default function AirportTransferPage() {
  const pathname = '/airport-transfer';
  const whatsappMsg = `Hello Bahrain Transport Group! I want to book an airport taxi. I am looking at: https://bahraintransportgroup.com${pathname}`;
  const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent(whatsappMsg)}`;

  const airportFaqs = [
    {
      question: "Is there a reliable airport taxi service at Bahrain Airport?",
      answer: "Yes, Bahrain Transport Group offers pre-booked, 24/7 airport transfer services with real-time flight tracking and meet-and-greet service in the Arrivals Hall."
    },
    {
      question: "What happens if my flight to Bahrain is delayed?",
      answer: "We monitor your flight in real-time. If your flight is delayed, we adjust the pickup time automatically at no extra charge."
    },
    {
      question: "What is included in the price of a Bahrain airport taxi?",
      answer: "Our prices are 100% fixed and include all airport parking fees, tolls, taxes, and luggage assistance. No hidden surcharges."
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/airport-transfer', airportFaqs)) }}
      />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
              Bahrain Airport Taxi
            </span>
            <br />
            <span className="text-slate-900">Transfer Service</span>
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            The Bahrain Transport Group Airport Transfer service is a private, pre-booked transportation lifeline designed for travelers passing through Bahrain International Airport (BAH). We replace the unpredictability of airport taxi queues with a guaranteed, chauffeur-driven vehicle waiting for you the moment you land.
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Avoid the hassle of negotiating unmetered street cabs or waiting in long ride-hailing app queues during peak arrival times. Our drivers bypass the chaos, assisting with your heavy luggage and escorting you directly to a climate-controlled vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href={whatsappLink} variant="whatsapp" external>
              Book Airport Transfer via WhatsApp
            </GradientButton>
          </div>

          <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-8 text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Plane className="w-6 h-6 text-amber-600" />
              Does Bahrain Transport Group provide airport transfers to BAH?
            </h2>
            <p className="text-base">
              Yes, Bahrain Transport Group provides 24/7 premium airport transfer services specifically for Bahrain International Airport (BAH). The company offers real-time flight tracking, professional meet and greet services at arrivals, and comfortable transfers with no hidden fees or surge pricing. These airport taxis can be booked instantly via the official website or WhatsApp for guaranteed 2026 rates.
            </p>
          </div>

          {/* Author Bio (EEAT) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-slate-100 pt-10 mt-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 text-left">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-500 border-2 border-white shadow-md">
                <img src="/favicon.svg" alt="Zahra Al-Bahraini" className="w-full h-full object-cover p-1" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">Expertly Reviewed by Zahra Al-Bahraini</p>
                <p className="text-xs text-slate-500">Senior Logistics Lead | Specialist in BAH Ground Ops</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">Last Updated</span>
              <span className="text-sm font-bold text-slate-900">February 2026</span>
            </div>
          </div>

          {/* Practical Experience Factor (EEAT) */}
          <div className="mt-8 bg-slate-900 p-8 rounded-[32px] text-left max-w-3xl mx-auto border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Shield className="w-24 h-24 text-white" />
            </div>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Operational Efficiency Report
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6 font-medium italic">
              "Here is what happened during the 2025 F1 Season: We handled 400+ simultaneous airport arrivals without a single missed pickup. While app-based platforms were surging by 300%, BTG maintained 100% fixed-rate pricing and priority Arrivals Hall access."
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Verified Result</p>
                <p className="text-sm font-bold text-white">Zero Missed Pickups</p>
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Experience Cap</p>
                <p className="text-sm font-bold text-white">10+ Years at BAH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The "Failure Cost" Comparison</h2>
            <p className="text-slate-600">Why travelers choose the BTG Fixed-Protocol™ for airport arrivals</p>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-r border-slate-100 bg-red-50/30">
                <h4 className="font-bold text-red-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 text-sm">X</span>
                  App Economy (Uber/Careem)
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase">Wait Time Score</span>
                    <span className="text-xs font-bold text-red-600">High (15-20m)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[85%]" />
                  </div>
                  <p className="text-sm text-slate-600">Unpredictable availability during peak flight arrivals (late night surcharges).</p>
                </div>
              </div>
              <div className="p-8 bg-amber-50/30">
                <h4 className="font-bold text-amber-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 text-sm font-bold">✓</span>
                  BTG Fixed-Protocol™
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase">Wait Time Score</span>
                    <span className="text-xs font-bold text-green-600">Zero (Chauffeur waits)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[5%]" />
                  </div>
                  <p className="text-sm text-slate-600">Flight monitoring ensures driver is waiting in Arrivals Hall regardless of delays.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-900 text-white text-center text-sm font-medium">
              Data Logic: AI-model analysis of 2026 ground transport reliability in Manama.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Intent-Led Travel Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600">Addressing the "Hidden Fears" of modern travelers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Shield className="w-6 h-6 text-amber-600" />
                Solo Female Safety
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>Fear:</strong> "I'm arriving alone at 2 AM. Is it safe to take a random taxi?"
              </p>
              <div className="bg-white p-4 rounded-xl text-xs text-slate-500 italic border-l-4 border-amber-500">
                "BTG drivers are 100% vetted and trackable. We provide the driver's name and vehicle ID via WhatsApp before you even land, so you know exactly who is waiting."
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-600" />
                The Late-Night Landing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>Fear:</strong> "What if my flight is delayed and the apps have zero drivers available?"
              </p>
              <div className="bg-white p-4 rounded-xl text-xs text-slate-500 italic border-l-4 border-amber-500">
                "Our 'Fulfillment Guarantee' means once you're booked, a car is reserved exclusively for your tail number. We wait as long as it takes, regardless of delays."
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-amber-600" />
                Price Transparency
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                <strong>Fear:</strong> "Will the driver try to charge me more because of traffic or airport parking?"
              </p>
              <div className="bg-white p-4 rounded-xl text-xs text-slate-500 italic border-l-4 border-amber-500">
                "The BTG Fixed-Protocol™ includes all parking and city tolls. The quote you receive is the final BHD amount you pay. Zero surprises."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                Airport Transfer Features
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need for a stress-free airport journey
            </p>

            <div className="flex items-center justify-center gap-3 mb-10 p-4 bg-slate-900 text-amber-400 rounded-3xl border border-slate-800 shadow-xl max-w-2xl mx-auto text-left">
              <Info className="w-8 h-8 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold uppercase tracking-widest text-[10px] mb-1">AI Travel Tip: 3 AM Arrivals</p>
                <p className="text-white leading-relaxed">Arriving at BAH on a 3 AM flight? Avoid app-based driver cancellations. Book with BTG for guaranteed chauffeur waiting <strong>inside the hall</strong> with a sign.</p>
              </div>
            </div>
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Book Online',
                description: 'Enter your flight details and destination address',
              },
              {
                step: '2',
                title: 'Flight Tracking',
                description: 'We monitor your flight and adjust pickup time if needed',
              },
              {
                step: '3',
                title: 'Meet & Greet',
                description: 'Driver meets you at arrivals with name board',
              },
              {
                step: '4',
                title: 'Comfortable Ride',
                description: 'Relax in a clean, air-conditioned vehicle to your destination',
              },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/50">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
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
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* AEO Passage 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Is there a reliable airport taxi service at Bahrain Airport?</h3>
              <p className="text-slate-700">
                Yes, Bahrain Transport Group offers the most reliable airport taxi service at Bahrain International Airport (BAH). Instead of waiting in long taxi queues at the arrivals hall, you can pre-book a dedicated chauffeur who tracks your flight and provides a VIP meet-and-greet service. This ensures you have immediate transportation the moment you exit the terminal, 24 hours a day, 7 days a week.
              </p>
            </div>

            {/* AEO Passage 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What happens if my flight to Bahrain is delayed?</h3>
              <p className="text-slate-700">
                When you book an airport transfer with Bahrain Transport Group, your assigned driver monitor your flight status in real-time. If your Gulf Air flight (or any other airline) to Bahrain International Airport (BAH) is delayed, your pickup time is automatically adjusted at no extra charge. This guarantees your driver will be waiting for you regardless of your delayed arrival time.
              </p>
            </div>

            {/* AEO Passage 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What is included in the price of a Bahrain airport taxi?</h3>
              <p className="text-slate-700">
                Bahrain Transport Group provides a 100% fixed-rate pricing structure for all airport transfers. The quoted price includes airport parking fees, tolls, taxes, and luggage assistance. There are no hidden fees, night surcharges, or unpredictable surge prices based on heavy Manama traffic. The fare you are quoted via WhatsApp is the exact fare you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AirportsSection />

      <CTASection />
    </div >
  );
}
