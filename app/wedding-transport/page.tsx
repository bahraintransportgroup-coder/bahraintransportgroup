import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { Heart, Car, Shield, Clock, Users, Sparkles } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Wedding & Event Transport Bahrain | VIP Car Convoy Service',
    description: 'Book decorated VIP cars and coordinated multi-vehicle convoys for weddings, engagements, and special events in Bahrain. Fixed-rate chauffeur service, 24/7 booking.',
    keywords: 'wedding car bahrain, wedding transport bahrain, event transport manama, wedding convoy bahrain, engagement car hire bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/wedding-transport',
});

const features = [
    {
        icon: Sparkles,
        title: 'Decorated VIP Vehicles',
        description: 'Mercedes-Benz and BMW executive cars, presented and detailed for your event day.',
    },
    {
        icon: Users,
        title: 'Coordinated Convoys',
        description: 'Multiple vehicles dispatched and timed together for the wedding party and guests.',
    },
    {
        icon: Clock,
        title: 'Precise Scheduling',
        description: 'Pickup and arrival times planned around your ceremony and reception timeline.',
    },
    {
        icon: Shield,
        title: 'Discreet, Professional Drivers',
        description: 'Formally dressed chauffeurs experienced with wedding-day logistics and photography stops.',
    },
];

const eventTypes = [
    { title: 'Wedding Day Convoy', description: 'A lead VIP car for the couple plus coordinated vehicles for immediate family, timed to the ceremony schedule.' },
    { title: 'Engagement & Henna Night', description: 'Premium vehicles for the couple and close family across multi-stop celebration venues.' },
    { title: 'Guest Shuttle Service', description: 'Scheduled shuttle transfers between hotels and the event venue for out-of-town guests.' },
    { title: 'Photography Location Transfers', description: 'Standby vehicles for couples doing multiple photo-shoot locations across Manama and the coastline.' },
];

export default function WeddingTransportPage() {
    const whatsappMsg = `Hello Bahrain Transport Group! I would like to book Wedding/Event transport. My event date is: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'Can you arrange multiple cars for a wedding convoy?',
            answer: 'Yes. Bahrain Transport Group coordinates multi-vehicle convoys for the couple, immediate family, and guests, all dispatched and timed together for your event schedule.',
        },
        {
            question: 'Do you provide decorated cars for weddings?',
            answer: 'Yes, our VIP Mercedes-Benz and BMW vehicles can be arranged with decoration for the wedding day, subject to advance request during booking.',
        },
        {
            question: 'How far in advance should I book wedding transport?',
            answer: 'We recommend booking at least 2-3 weeks in advance for weddings to guarantee vehicle availability and allow time to plan convoy logistics, though our 24/7 dispatch can accommodate shorter notice where possible.',
        },
    ];

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/wedding-transport', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Wedding & Event
                        </span>
                        <br />
                        <span className="text-slate-900">VIP Transport</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Decorated executive vehicles and coordinated multi-car convoys for weddings, engagements, and special occasions across the Kingdom of Bahrain, planned around your exact schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Plan Your Event Transport
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            How do I book wedding transport in Bahrain?
                        </h2>
                        <p>
                            Contact our 24/7 WhatsApp dispatch with your event date, venue, and number of vehicles needed. Bahrain Transport Group plans a coordinated convoy of VIP cars, timed to your ceremony and reception schedule, with fixed pricing agreed before the event day.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Wedding & Event Transport" city="Bahrain" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Built for Your Big Day
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
                                Events We Cover
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {eventTypes.map((event, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                    <p className="text-slate-600">{event.description}</p>
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
