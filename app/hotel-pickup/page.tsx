import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Hotel, Clock, Shield, MapPin, Luggage, Star } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Hotel Pickup & Drop-Off Taxi Bahrain | Fixed-Rate Transfers',
    description: 'Book a reliable hotel pickup and drop-off taxi anywhere in Bahrain. Fixed-rate transfers to the Diplomatic Area, Zallaq resorts, Amwaj Islands, and Seef District hotels, 24/7.',
    keywords: 'hotel pickup bahrain, hotel taxi bahrain, hotel transfer manama, resort taxi bahrain, amwaj islands hotel taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/hotel-pickup',
});

const features = [
    {
        icon: Clock,
        title: 'On-Time, Every Time',
        description: 'Drivers stationed near your hotel in advance, tracking your schedule so you never wait in the lobby.',
    },
    {
        icon: Luggage,
        title: 'Luggage Handled',
        description: 'Bellhop-style assistance from the lobby to the vehicle, ideal for guests with multiple suitcases.',
    },
    {
        icon: Shield,
        title: 'Vetted Drivers',
        description: 'Uniformed, background-checked chauffeurs who know every major hotel entrance and service road.',
    },
    {
        icon: MapPin,
        title: 'Every Hotel Covered',
        description: 'From the Diplomatic Area and Seef District to Zallaq resorts and Amwaj Islands residences.',
    },
];

const hotelAreas = [
    { name: 'Diplomatic Area & Seef', description: 'Five-star business hotels including Four Seasons, Ritz-Carlton, and Downtown Rotana.' },
    { name: 'Zallaq & Durrat Al Bahrain', description: 'Beach resorts and villas requiring longer-distance, comfort-focused transfers.' },
    { name: 'Amwaj Islands', description: 'Waterfront residences and serviced apartments popular with long-stay guests.' },
    { name: 'Juffair & Adliya', description: 'Boutique hotels and serviced apartments close to Manama nightlife and dining.' },
];

export default function HotelPickupPage() {
    const whatsappMsg = `Hello Bahrain Transport Group! I would like to book a hotel pickup/drop-off. My hotel is: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'Can you pick me up directly from my hotel lobby?',
            answer: 'Yes. Our drivers check in with hotel concierge or wait at the main entrance depending on the property\'s protocol, and track your pickup time so the vehicle is ready when you are.',
        },
        {
            question: 'Do you offer hotel-to-hotel transfers, not just airport trips?',
            answer: 'Yes. Bahrain Transport Group handles hotel-to-hotel and hotel-to-anywhere transfers across the Kingdom, not only airport routes, all on the same 100% fixed-rate pricing.',
        },
        {
            question: 'Can I book a round trip for my entire hotel stay?',
            answer: 'Yes, guests can pre-book multiple pickups and drop-offs for their full stay in one conversation with our 24/7 WhatsApp dispatch team, including a fixed daily rate.',
        },
    ];

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/hotel-pickup', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Hotel className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Hotel Pickup
                        </span>
                        <br />
                        <span className="text-slate-900">& Drop-Off Service</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Direct, uninterrupted transfers to and from any hotel in Bahrain, from Diplomatic Area business towers to Zallaq resorts and Amwaj Islands residences. No lobby waiting, no surge pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Book Hotel Transfer via WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Hotel className="w-6 h-6 text-amber-600" />
                            How do I book a hotel pickup in Bahrain?
                        </h2>
                        <p>
                            Message our 24/7 WhatsApp dispatch with your hotel name and pickup time. Bahrain Transport Group provides <strong>fixed-rate</strong> transfers between any hotel and destination in the Kingdom, with drivers confirmed in advance so you are never left waiting at the lobby.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Hotel Pickup & Drop-Off" city="Bahrain" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Why Hotels Recommend BTG
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-amber-100 flex items-center justify-center mb-4 shadow-sm">
                                            <Icon className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm">{feature.description}</p>
                                    </div>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Hotel Zones We Cover
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hotelAreas.map((area, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{area.name}</h3>
                                        <p className="text-slate-600">{area.description}</p>
                                    </div>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                                <p className="text-slate-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
