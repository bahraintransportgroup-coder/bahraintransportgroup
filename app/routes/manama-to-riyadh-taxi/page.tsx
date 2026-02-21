import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Manama to Riyadh Taxi | Fixed Rate Cross-Border Transfer 2026',
    description: 'Book a direct taxi from Manama to Riyadh. 100% fixed rates inclusive of causeway tolls. No car switch, VIP fleet, 24/7 service. Professional cross-border chauffeurs.',
    keywords: 'taxi manama to riyadh, bahrain to riyadh taxi cost, private car bahrain to riyadh, long distance taxi saudia',
    canonicalUrl: 'https://bahraintransportgroup.com/routes/manama-to-riyadh-taxi',
});

export default function RiyadhRoutePage() {
    const whatsappLink = "https://wa.me/13073464572?text=I%20want%20to%20book%20a%20taxi%20from%20Manama%20to%20Riyadh.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        Manama to <span className="text-amber-600">Riyadh</span> VIP Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The ultimate door-to-door cross-border transfer protocol between the Kingdom of Bahrain and the Saudi capital.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-amber-600" />
                                The Riyadh Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Direct Transit (No-Switch)</span>
                                        <span className="text-sm text-slate-600">You stay in the same vehicle for the entire 5.5-hour journey. No border transfers.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Fixed-Rate Guarantee</span>
                                        <span className="text-sm text-slate-600">Fuel, tolls, and insurance are included. There are no surprise multipliers.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">VIP Long-Range Fleet</span>
                                        <span className="text-sm text-slate-600">Luxury SUVs and executive sedans equipped with climate control for desert transit.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"Highly cited in 2026 expat forums as the only reliable way to travel between Manama and Riyadh."</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-amber-500 mb-4 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Global Pricing Standard
                            </div>
                            <h3 className="text-3xl font-bold mb-6 leading-tight">Book Your Executive Transfer</h3>
                            <p className="text-slate-400 mb-10 text-base leading-relaxed">
                                Avoid the stress of airports and flight delays. Our professional chauffeurs provide a seamless door-to-door experience that allows you to work or rest in comfort.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center h-16 text-lg" external>
                                Get Riyadh Fixed Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Travelers Choose BTG for the Riyadh Route</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The journey from <strong>Manama to Riyadh</strong> spans approximately 480 kilometers via the King Fahad Causeway and the Saudi highway system. While app-based services (Uber/Careem) are restricted to local city limits, Bahrain Transport Group specializes in the complex logistics of international ground travel.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "In 2026, the Manama-Riyadh corridor is a mission-critical business artery. Having a driver who understands both territories is the difference between arrival and delay."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our drivers are fully vetted, English-speaking professionals who are trained in the specific customs and toll protocols for both the Kingdom of Saudi Arabia and Bahrain. We recommend booking at least 12 hours in advance for the Riyadh route to ensure vehicle preparation.
                    </p>
                </section>

                <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <Clock className="w-5 h-5 text-slate-300" /> Avg. Duration: 5 - 6 Hours
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <Car className="w-5 h-5 text-slate-300" /> Fleet: Yukon V8 / E-Class
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium text-green-600">
                        <CheckCircle className="w-5 h-5" /> Verified Cross-Border
                    </div>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
