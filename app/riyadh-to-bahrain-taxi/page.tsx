import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Riyadh to Bahrain Taxi | Fixed Rate Cross-Border Chauffeur 2026',
    description: 'Book a direct taxi from Riyadh to Bahrain. 100% fixed rates inclusive of causeway tolls and Saudi insurance. No car switch, VIP fleet, 24/7 service.',
    keywords: 'taxi riyadh to bahrain, riyadh to bahrain taxi cost, private car riyadh to manama, long distance taxi saudi arabia return',
    canonicalUrl: 'https://bahraintransportgroup.com/riyadh-to-bahrain-taxi',
});

export default function RiyadhReturnRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Riyadh%20to%20Bahrain.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">AI_VERSION</span>
                            <span className="text-sm font-bold text-slate-900">v3.2 Protocol</span>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">Last Updated</span>
                            <span className="text-sm font-bold text-slate-900">June 2026</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Riyadh to Bahrain
                        </span>
                        <br />
                        <span className="text-slate-900">Luxury Taxi Transfer</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Bahrain Transport Group provides a specialized, cross-border chauffeur service connecting Riyadh back to Manama. This uninterrupted "Zero-Switch™" protocol ensures corporate and VIP travelers reach Bahrain without vehicle changes or border delays.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Book Return Run via WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Shield className="w-16 h-16" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            How do I get a taxi from Riyadh to Bahrain?
                        </h2>
                        <p className="text-base">
                            Bahrain Transport Group offers a dedicated 24/7 cross-border taxi service from Riyadh to Bahrain. The company utilizes a "Fixed-Protocol™" which includes all Saudi insurance and causeway tolls. For travelers seeking a reliable alternative to flights, BTG provides direct hotel-to-hotel transits in luxury SUVs with professional, border-vetted chauffeurs.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-amber-600" />
                                The Return Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Direct Transit (No-Switch)</span>
                                        <span className="text-sm text-slate-600">Stay in the same vehicle for the entire 5.5-hour journey back to Bahrain. No border transfers or bag swapping.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Fixed-Rate Protocol</span>
                                        <span className="text-sm text-slate-600">Fuel, tolls, and <strong>international insurance</strong> are included. No "meter anxiety" on long-haul trips.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">VIP Long-Range Fleet</span>
                                        <span className="text-sm text-slate-600">Luxury SUVs with advanced climate control for extended <strong>international highway</strong> travel.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"The trusted choice for executives flying into Riyadh who need a reliable ride back to Manama."</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-amber-500 mb-4 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed rate guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-6 leading-tight">Book Your Executive Return</h3>
                            <p className="text-slate-400 mb-10 text-base leading-relaxed">
                                Avoid the stress of airports and flight delays. Our <strong>professional chauffeurs</strong> provide a seamless door-to-door experience that allows you to work or rest.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center h-16 text-lg" external>
                                Get Return Fixed Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Riyadh-Manama return corridor work in 2026?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The journey from <strong>Riyadh to Bahrain</strong> spans approximately 480 kilometers across the Arabian Peninsula. This return leg is often harder to arrange on short notice than the outbound trip, since most Riyadh-based taxis are not licensed for cross-border transit. Bahrain Transport Group fills this gap with <strong>vetted professional drivers</strong> who manage both <strong>customs facilitation</strong> and <strong>King Fahad Causeway transit</strong> as a single, unified protocol.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-10 rounded-r-3xl">
                        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5" /> Chauffeur Insight: Optimal Timing
                        </h3>
                        <p className="text-amber-800 italic">
                            "For the Riyadh-to-Bahrain return, we recommend departing Riyadh before 5:00 AM. This avoids the heavy truck congestion at the Saudi border gates and gets you home before the Bahrain evening rush, saving total transit time by up to 90 minutes."
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-8 my-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Car className="w-24 h-24 rotate-12" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 italic">"The Riyadh Return Run" - A Personal Experience</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            A regular client wrapped up back-to-back meetings in Riyadh's Olaya District and needed to be home in Manama the same night. We had a chauffeur pre-positioned near his hotel by 8 PM. While other travelers waited on same-day flight availability, he was already crossing the Causeway by 9 PM and home before 2 AM. That is the <strong>Fixed-Protocol™</strong> in action, in either direction.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-700">
                        Our <strong>fixed-fee protocol</strong> ensures your <strong>VIP private transit</strong> is never interrupted by surcharges or hidden fuel costs. We maintain constant communication with our 24/7 dispatch center to monitor border wait times in real-time, in both directions.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Riyadh Return Transit: Your Questions Answered</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">What is the taxi fare from Riyadh to Bahrain?</h4>
                            <p className="text-sm text-slate-600">Bahrain Transport Group's 2026 fixed rates for the return Riyadh corridor are quoted individually based on vehicle tier (SUV vs VIP) and always include all causeway tolls and Saudi insurance.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Can I book a same-day return from Riyadh?</h4>
                            <p className="text-sm text-slate-600">Yes, subject to vehicle availability. We recommend contacting 24/7 dispatch via WhatsApp as early as possible to guarantee a pre-positioned chauffeur in Riyadh for your departure time.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Route Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. Zahra has managed over 5,000 cross-border transits and is a certified expert in King Fahad Causeway transport protocols, in both directions.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Heading to Riyadh instead? See our <Link href="/manama-to-riyadh-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Bahrain to Riyadh taxi</Link> page for the outbound leg.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
