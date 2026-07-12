import { Metadata } from 'next';
import { generateSEO, getSemanticEntityGraph } from '@/lib/seo';
import { UserCheck, Shield, Clock, Briefcase, Star, Car } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Private Chauffeur Service Bahrain | Hourly & Daily Hire',
    description: 'Book a dedicated, professional chauffeur in Bahrain by the hour or day. VIP driver service for executives, special occasions, and multi-stop city trips, available 24/7.',
    keywords: 'chauffeur service bahrain, private driver bahrain, hire a chauffeur manama, personal driver bahrain, executive chauffeur bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/chauffeur-service',
});

const features = [
    {
        icon: UserCheck,
        title: 'Dedicated Driver',
        description: 'The same professional chauffeur stays with you for the duration of your hire, not a rotating pool of drivers.',
    },
    {
        icon: Briefcase,
        title: 'Business Etiquette',
        description: 'Trained in discretion and professional conduct for board meetings, diplomatic visits, and VIP clients.',
    },
    {
        icon: Clock,
        title: 'Flexible Hire Windows',
        description: 'Book by the hour, half-day, or full day, with the vehicle waiting for you between stops.',
    },
    {
        icon: Shield,
        title: 'Impeccable Vehicles',
        description: 'Every car is professionally detailed and odor-free before each assignment.',
    },
];

const useCases = [
    { title: 'Executive & Diplomatic Transport', description: 'Discreet, punctual chauffeurs for board meetings, embassy visits, and roadshows across the Kingdom.' },
    { title: 'Special Occasions', description: 'A dedicated driver and premium vehicle for anniversaries, birthdays, or a night out in Adliya and Block 338.' },
    { title: 'Multi-Stop City Days', description: 'One driver, one car, for a full day of shopping, meetings, and errands without re-booking each leg.' },
    { title: 'Visiting Guests & VIPs', description: 'A polished, English/Arabic-speaking chauffeur to host visiting family, clients, or dignitaries.' },
];

export default function ChauffeurServicePage() {
    const whatsappMsg = `Hello Bahrain Transport Group! I would like to hire a private chauffeur. My preferred date/duration is: `;
    const whatsappLink = `https://wa.me/966569487569?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: 'Can I hire a chauffeur for just a few hours?',
            answer: 'Yes. Bahrain Transport Group offers Hire-by-Hour chauffeur packages starting from 4 hours, in addition to half-day and full-day hires, all at a fixed rate agreed in advance.',
        },
        {
            question: 'Does the chauffeur wait between stops?',
            answer: 'Yes, your dedicated chauffeur and vehicle remain on standby between stops during your hire window, so there is no need to re-book a new car for each destination.',
        },
        {
            question: 'What is the difference between a chauffeur service and a regular taxi?',
            answer: 'A chauffeur service assigns one dedicated, vetted driver and vehicle exclusively to you for the full hire period, rather than a single point-to-point trip, and includes a more formal, discreet standard of service suited to executives and special occasions.',
        },
    ];

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/chauffeur-service', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Private Chauffeur
                        </span>
                        <br />
                        <span className="text-slate-900">Service in Bahrain</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        A dedicated, professional driver and premium vehicle, hired by the hour or day. Built for executives, special occasions, and anyone who wants one car and one driver for their entire schedule.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Hire a Chauffeur via WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            How does hourly chauffeur hire work in Bahrain?
                        </h2>
                        <p>
                            You choose a start time and duration (4, 8, or 12 hours), and Bahrain Transport Group assigns one dedicated chauffeur and vehicle for that entire window. The driver waits between stops, so you can run meetings, errands, or sightseeing without booking a new ride each time. Pricing is fixed and agreed before dispatch.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Private Chauffeur Service" city="Bahrain" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                What You Get
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

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Common Use Cases
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                                        <p className="text-slate-600">{useCase.description}</p>
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
