import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Dammam Taxi Service | Fixed Rate No-Switch Transfer',
    description: 'Book a direct, fixed-rate taxi from Bahrain to Dammam. No car switch at the Saudi border. Professional chauffeurs, VIP fleet, 24/7 service. Book on WhatsApp.',
    keywords: 'taxi bahrain to dammam, bahrain to saudi taxi price, dammam airport transfer from bahrain, king fahad causeway taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/routes/bahrain-to-dammam-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/13073464572?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Dammam.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Dammam</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The ultimate fixed-rate, door-to-door transfer between the Kingdom of Bahrain and Dammam/Khobar.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            Why Book This Route?
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Zero-Switch Promise</span>
                                    <span className="text-sm text-slate-600">Stay in the same vehicle from Bahrain to your Dammam doorstep.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">All-Inclusive Fixed Fare</span>
                                    <span className="text-sm text-slate-600">Tolls, border fees, and insurance are already included in your quote.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">24/7 Border Expertise</span>
                                    <span className="text-sm text-slate-600">Drivers who know the Saudi Causeway protocols to minimize wait times.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Don't deal with metered anxiety or app surge pricing at the border. Get a locked-in price right now via WhatsApp.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Dammam Quote Now
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-amber-500/30">The Dammam Transfer Protocol</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Traveling from <strong>Bahrain to Dammam</strong> via the King Fahad Causeway doesn't have to be a multi-step headache. While standard ride-hailing apps often require a car switch at the border island, Bahrain Transport Group provides a unified experience.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Your professional chauffeur will meet you at your hotel in Manama, Seef, or the Airport, manage all passport and toll booth protocols, and drive you directly to your Dammam destination (King Fahd International Airport, Eastern Province offices, or residential villas) within 1.5 to 2 hours, depending on border traffic.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-8">
                        <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2 italic">
                            <Shield className="w-5 h-5" /> Professional Cross-Border Compliance
                        </h4>
                        <p className="text-sm text-amber-800">
                            Our fleet holds specific commercial permits and GCC-wide insurance required for legal cross-border commercial transit. We ensure that your journey is not only comfortable but fully compliant with both Bahraini and Saudi transport regulations.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
