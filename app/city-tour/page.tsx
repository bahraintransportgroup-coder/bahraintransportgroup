import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Compass, Clock, MapPin, Camera, Shield, Landmark } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Hire-by-Hour Taxi & City Tour Bahrain | Half & Full-Day Packages',
    description: 'Hire a dedicated driver by the hour to explore Bahrain at your own pace. 4, 8, or 12-hour city tour packages covering the Bahrain National Museum, Bab Al Bahrain, and Qal\'at al-Bahrain fort.',
    keywords: 'bahrain city tour, hire taxi by hour bahrain, manama sightseeing tour, bahrain day tour taxi, half day tour bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/city-tour',
});

const packages = [
    { duration: '4 Hours', title: 'Half-Day Explorer', description: 'Ideal for a focused visit to 2-3 key sites, such as the Bahrain National Museum and Bab Al Bahrain souq.' },
    { duration: '8 Hours', title: 'Full-Day Discovery', description: 'A relaxed full day covering historical sites, Qal\'at al-Bahrain fort, shopping, and a lunch stop of your choice.' },
    { duration: '12 Hours', title: 'Extended Itinerary', description: 'For visitors who want to combine sightseeing with business meetings or family visits across the island.' },
];

const features = [
    {
        icon: Clock,
        title: 'Your Pace, Your Stops',
        description: 'The driver waits at each location; there is no meter running while you sightsee.',
    },
    {
        icon: Compass,
        title: 'Local Route Knowledge',
        description: 'Drivers familiar with Manama\'s museums, souqs, forts, and the best photo stops.',
    },
    {
        icon: Shield,
        title: 'Fixed Package Price',
        description: 'One agreed price for the entire hire window, regardless of traffic or stop count.',
    },
    {
        icon: Camera,
        title: 'Flexible Itinerary',
        description: 'Add or remove stops on the day; the plan adjusts around you, not a fixed script.',
    },
];

export default function CityTourPage() {
    const whatsappMsg = `Hello Bahrain Transport Group! I would like to book a Hire-by-Hour city tour. My preferred duration is: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'Can I book a taxi for a 4-hour city tour of Manama?',
            answer: 'Yes. Bahrain Transport Group offers Hire-by-Hour services with a dedicated driver for 4, 8, or 12 hours, letting you visit the Bahrain National Museum, Bab Al Bahrain, and Qal\'at al-Bahrain fort at your own pace.',
        },
        {
            question: 'Is the price fixed for the whole tour, or does it change with traffic?',
            answer: 'The price is fixed for the entire hire window you book, whether that is 4, 8, or 12 hours, regardless of how many stops you make or how much traffic is encountered.',
        },
        {
            question: 'Can I change my itinerary during the tour?',
            answer: 'Yes, since the vehicle and driver are hired for the full duration, you can adjust stops, add extra locations, or extend the route as long as you remain within your booked hours.',
        },
    ];

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/city-tour', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Landmark className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Hire-by-Hour
                        </span>
                        <br />
                        <span className="text-slate-900">City Tour Taxi</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        One driver, one car, hired for a block of hours so you can explore Manama's museums, souqs, and forts without watching a meter or re-booking between stops.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Book a City Tour via WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Compass className="w-6 h-6 text-amber-600" />
                            Can I book a taxi for a city tour of Manama?
                        </h2>
                        <p>
                            Yes, BTG offers 'Hire-by-Hour' services. You can have a dedicated driver for 4, 8, or 12 hours to visit the Bahrain National Museum, Bab Al Bahrain, and the Qal'at al-Bahrain fort at your own pace, all at one fixed price.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Hire-by-Hour City Tours" city="Bahrain" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Tour Packages
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packages.map((pkg, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold mb-4">{pkg.duration}</span>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{pkg.title}</h3>
                                    <p className="text-slate-600 text-sm">{pkg.description}</p>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Why Hire by the Hour
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
