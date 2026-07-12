import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Riyadh Airport Taxi | King Khalid International (RUH) Transfer',
    description: 'Book a direct, fixed-rate taxi from Bahrain to King Khalid International Airport (RUH) in Riyadh. No car switch, flight-time buffer, 24/7 dispatch.',
    keywords: 'bahrain to riyadh airport taxi, king khalid international airport transfer, ruh airport taxi from bahrain, bahrain to ruh taxi price',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-riyadh-airport-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Riyadh%20Airport%20(RUH).%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Riyadh Airport</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Fixed-rate, door-to-terminal transfer to King Khalid International Airport (RUH), roughly 480km from Bahrain via the King Fahad Causeway.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                The Riyadh Airport Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Direct to Terminal</span>
                                        <span className="text-sm text-slate-600">No car switch at the causeway. Same vehicle for the full ~480km journey to the RUH terminal curb.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Flight-Time Buffer</span>
                                        <span className="text-sm text-slate-600">Departure time is planned backward from your flight, with a border-delay buffer built in.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">All-Inclusive Fixed Fare</span>
                                        <span className="text-sm text-slate-600">Tolls, customs facilitation, and border insurance are already included in your quote.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"For a 5.5-hour corridor like Riyadh, we recommend departing at least 8 hours before your flight to account for the causeway and border processing."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Avoid the risk of arriving late for an international flight out of RUH. Secure your <strong>pre-arranged airport transit</strong> now.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get RUH Airport Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Bahrain to Riyadh Airport transfer work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        <strong>King Khalid International Airport (RUH)</strong> sits north of Riyadh, roughly 480km from Manama by road. Bahrain Transport Group treats this as a dedicated airport-drop protocol: pickup time is calculated backward from your flight departure, including the King Fahad Causeway crossing and typical border processing time, so you land at the terminal with time to spare.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "For a 6 AM flight out of RUH, we schedule pickup from Bahrain the previous evening. This 5.5-hour corridor is best driven with an early departure to avoid Riyadh's daytime traffic near the airport."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our vetted professional drivers handle all causeway tolls and customs paperwork, and adjust your pickup window if your flight schedule changes.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">How early should I leave Bahrain for a flight from RUH?</h4>
                            <p className="text-sm text-slate-600">We recommend departing at least 8 hours before your scheduled departure, to account for the ~480km drive, border processing, and airport check-in.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is this different from your Bahrain-to-Riyadh city taxi?</h4>
                            <p className="text-sm text-slate-600">This route is optimized specifically for a terminal drop at King Khalid International Airport rather than a city-center destination. See our <Link href="/manama-to-riyadh-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Bahrain to Riyadh city taxi</Link> page for downtown trips.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Logistics Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. Zahra builds every long-corridor airport pickup time around flight departure, not the other way around.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Flying from a different Saudi city? See our full <Link href="/saudi-arabia-airports" className="text-amber-600 font-semibold hover:text-amber-700">Saudi Arabia airport transfer</Link> directory.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
