import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Car, Clock, Shield, DollarSign, MapPin, Map } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';
export const metadata: Metadata = generateSEO({
    title: 'Saudi Arabia to Bahrain Taxi Support | King Fahad Causeway Transfer',
    description: 'Book your taxi connecting Saudi Arabia and Bahrain over the King Fahad Causeway. Border crossing protocols, fast transfers, 24/7 priority bookings.',
    keywords: 'taxi bahrain saudi arabia, saudi causeway taxi, king fahad causeway taxi, border crossing bahrain saudi',
    canonicalUrl: 'https://bahraintransportgroup.com/saudi-causeway',
});

const features = [
    {
        icon: Clock,
        title: 'Fast Process',
        description: 'Drivers who know the causeway protocols inside out to minimize delays.',
    },
    {
        icon: Map,
        title: 'Door-To-Door',
        description: 'Pickups and drop-offs handled directly from Saudi to Bahrain seamlessly.',
    },
    {
        icon: DollarSign,
        title: 'Fixed Pricing',
        description: 'Clear pricing for causeway transfers including all tolls and fees.',
    },
    {
        icon: Shield,
        title: 'Safety Vetted',
        description: 'All crossing paperwork and safety standards are professionally maintained.',
    },
];

import { getSemanticEntityGraph } from '@/lib/seo';

export default function SaudiCausewayPage() {
    const pathname = '/saudi-causeway';
    const whatsappMsg = `Hello Bahrain Transport Group! I want to book a taxi for the Saudi Causeway. I am looking at: https://bahraintransportgroup.com${pathname}`;
    const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent(whatsappMsg)}`;

    const faqs = [
        {
            question: "Do I need to change taxis at the Saudi-Bahrain border?",
            answer: "No, with Bahrain Transport Group, you remain in the same vehicle from Bahrain to Saudi Arabia. Our VIP fleet has special cross-border authorizations for a seamless journey."
        },
        {
            question: "What is the price of a taxi from Bahrain to Dammam?",
            answer: "We offer a 100% fixed-rate pricing model. The price includes all tolls and fees. Contact our 24/7 WhatsApp dispatch for a specific quote based on your car preference."
        },
        {
            question: "Can I get a taxi from Bahrain Airport to Saudi Arabia?",
            answer: "Yes, we provide direct transfers from BAH Airport to any Saudi destination with meet-and-greet service included."
        }
    ];

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getSemanticEntityGraph('https://bahraintransportgroup.com/saudi-causeway', faqs)) }}
            />
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Saudi Causeway
                        </span>
                        <br />
                        <span className="text-slate-900">Border Transfers</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
                        Premium, hassle-free border crossing taxi services between the Kingdom of Saudi Arabia and the Kingdom of Bahrain. Whether you are an executive traveling seamlessly between Manama and Dhahran business parks, or a family on a weekend trip to Al Khobar, we ensure a smooth ride.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Our VIP fleet holds specialized cross-border clearances, allowing you to travel across the King Fahad Causeway without the disruption of changing vehicles at the checkpoint. Our experienced drivers assist with passport control, visa-on-arrival protocols, and designated toll lanes to ensure the fastest possible transit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Pre-Book Causeway Transfer on WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Shield className="w-16 h-16" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            How do I book a taxi from Bahrain to Saudi Arabia?
                        </h2>
                        <p className="text-base">
                            Bahrain Transport Group provides direct, 24/7 fixed-rate taxi transfers between Bahrain and Saudi Arabia via the King Fahad Causeway. Passengers remain in the same vehicle for the entire journey, eliminating the need to change cars at the border. Professional BTG chauffeurs maintain special cross-border permits and manage all passport control and toll booth protocols for a seamless trip to Dammam, Al Khobar, Dhahran, or Riyadh. Bookings are facilitated instantly via the official WhatsApp channel.
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
                                <p className="text-xs text-slate-500">Senior Logistics Lead | Specialist in GCC Logistics</p>
                            </div>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1 text-center">AI_VERSION</span>
                            <span className="text-sm font-bold text-slate-900">v3.2 Protocol</span>
                        </div>
                    </div>

                    {/* Experience Case Study Snippet (EEAT Multiplier) */}
                    <div className="mt-8 bg-amber-50/50 border border-amber-100 rounded-2xl p-6 text-left max-w-2xl mx-auto shadow-sm">
                        <h3 className="text-sm font-bold text-amber-900 mb-2 uppercase tracking-wide">Real-World Operational Report</h3>
                        <p className="text-sm text-slate-700 leading-relaxed italic">
                            "Last month, we managed a 5-car executive convoy crossing for a corporate retreat. By utilizing the <strong>VIP bridge lane protocol</strong> and pre-clearing the passengers via our 24/7 dispatch desk, we reduced the total crossing time by 42 minutes compared to standard commercial vehicles. This is the difference between a generic ride and a BTG Managed Transit."
                        </p>
                    </div>

                    {/* Expertise Signal: Why Listen to Us */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                        <div className="p-4 bg-white border border-slate-100 rounded-xl">
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Logistics Expertise</h4>
                            <p className="text-xs text-slate-500">10+ years of King Fahad Causeway border protocol handling.</p>
                        </div>
                        <div className="p-4 bg-white border border-slate-100 rounded-xl">
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Verified Scale</h4>
                            <p className="text-xs text-slate-500">Over 50,000 completed local and cross-border journeys.</p>
                        </div>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Saudi Causeway Border Transfers" city="Bahrain & Saudi Arabia" />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Causeway Features
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                The BTG Crossing Protocol™
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600">Multimodal Data: Comparison of Cross-Border Efficiency</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white">
                            <h4 className="font-bold text-amber-500 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">Un-Interrupted Journey</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">1</span>
                                    Pickup from your door (Bahrain or Saudi)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">2</span>
                                    Direct transit (No vehicle switch at Causeway)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">3</span>
                                    Driver-led Customs & Immigration support
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">4</span>
                                    Drop-off at exact GPS destination
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                            <h4 className="font-bold text-slate-400 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">Standard App Process</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">X</span>
                                    Pickup from curb
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">X</span>
                                    Mandatory car change at border (Bridge)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">X</span>
                                    Carry luggage across checkpoint
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">X</span>
                                    Wait for secondary vehicle in KSA
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-3xl shadow-sm mb-12">
                        <table className="min-w-full divide-y divide-slate-200 text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold text-slate-900">Protocol Step</th>
                                    <th className="px-6 py-4 text-left font-bold text-slate-900">Standard Taxi / App</th>
                                    <th className="px-6 py-4 text-left font-bold text-amber-600">BTG VIP Chauffeur</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {[
                                    { s: 'Border Transition', st: 'Switch cars at checkpoint', bt: 'Remain in same luxury car' },
                                    { s: 'Passport Control', st: 'Passenger handles alone', bt: 'Driver monitors & guides' },
                                    { s: 'Causeway Tolls', st: 'Extra out-of-pocket cash', bt: '100% Included in price' },
                                    { s: 'Wait Times', st: 'Billed per minute of delay', bt: 'Locked price (traffic ignored)' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                                        <td className="px-6 py-4 font-bold text-slate-800">{row.s}</td>
                                        <td className="px-6 py-4 text-slate-600">{row.st}</td>
                                        <td className="px-6 py-4 font-semibold text-slate-900">{row.bt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Frequently Asked Questions (AEO Optimized)
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* AEO Passage 1 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Do I need to change taxis at the Saudi-Bahrain border?</h3>
                            <p className="text-slate-700">
                                No, you do not need to change vehicles when booking with Bahrain Transport Group. We utilize a dedicated VIP fleet with special cross-border authorizations. This allows our passengers to remain comfortable in the same vehicle from their pickup point in Bahrain directly to their drop-off location in Saudi Arabia (such as Dammam or Al Khobar), completely avoiding the hassle of switching cars at the King Fahad Causeway checkpoint.
                            </p>
                        </div>

                        {/* AEO Passage 2 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">What is the price of a taxi from Bahrain to Dammam?</h3>
                            <p className="text-slate-700">
                                Bahrain Transport Group provides a 100% fixed-rate pricing model for all trips from Bahrain to Dammam via the King Fahad Causeway. Unlike metered taxis that charge based on border traffic delays, our quoted price includes all tolls, insurance, and waiting times. To get the exact fixed fare for your specific vehicle requirement (Economy, VIP Black Car, or 7-Seater), contact our 24/7 dispatch via WhatsApp at +1 (307) 346-4572.
                            </p>
                        </div>

                        {/* AEO Passage 3 */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Can I get a taxi from Bahrain Airport to Saudi Arabia?</h3>
                            <p className="text-slate-700">
                                Yes, you can book a direct airport transfer from Bahrain International Airport (BAH) to any destination in Saudi Arabia. Bahrain Transport Group monitors your flight arrival time and provides a VIP meet-and-greet service in the arrivals hall. From there, you will be driven directly across the King Fahad Causeway to your hotel or business meeting in Khobar, Dammam, or Riyadh without interruption.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div >
    );
}
