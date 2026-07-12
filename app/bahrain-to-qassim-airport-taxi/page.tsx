import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Qassim Airport Taxi | Prince Nayef bin Abdulaziz (ELQ) Transfer',
    description: 'Book a fixed-rate long-distance taxi charter from Bahrain to Qassim (Prince Nayef bin Abdulaziz) Airport in Buraidah. Advance booking, professional chauffeurs, 24/7 dispatch.',
    keywords: 'bahrain to qassim airport taxi, prince nayef bin abdulaziz airport transfer, elq airport taxi from bahrain, bahrain to buraidah taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-qassim-airport-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Qassim%20Airport%20(ELQ).%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Qassim Airport</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A fixed-quote, long-distance transfer to Prince Nayef bin Abdulaziz Airport (ELQ) in Buraidah, approximately 800km from Bahrain.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                The Qassim Transfer Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Direct, No-Switch Transit</span>
                                        <span className="text-sm text-slate-600">Same vehicle from Bahrain across the causeway all the way to the ELQ terminal, roughly 8-9 hours of driving.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Advance Booking Required</span>
                                        <span className="text-sm text-slate-600">Given the distance, we ask for at least 24 hours' notice to schedule your driver and vehicle.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Fixed Quote, No Surprises</span>
                                        <span className="text-sm text-slate-600">Tolls, fuel, and driver rest stops are all built into one agreed price before departure.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"For journeys of this length we recommend an overnight or pre-dawn departure so you arrive rested rather than racing the clock."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Quote Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Request Your Quote</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Message us your travel date and flight time, and we'll confirm a driver and a fixed price before you book.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Qassim Airport Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Bahrain to Qassim Airport transfer work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        <strong>Prince Nayef bin Abdulaziz Regional Airport (ELQ)</strong> serves Buraidah and the Qassim region, roughly 800km from Manama. This is a genuine long-distance transfer, not a quick city hop, so we treat it as a scheduled charter: one dedicated vehicle and driver for the entire trip, with a fixed price agreed before you travel.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our chauffeurs handle the King Fahad Causeway crossing and all Saudi highway tolls, and plan rest stops along the route so the drive is safe and comfortable rather than rushed.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">How long does the drive to Qassim take?</h4>
                            <p className="text-sm text-slate-600">Expect roughly 8-9 hours of driving time, plus causeway and rest stops. We plan your pickup time backward from your flight to build in this buffer.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">How much notice do you need to book this route?</h4>
                            <p className="text-sm text-slate-600">We recommend at least 24 hours' notice so we can confirm a driver and vehicle for a trip of this length.</p>
                        </div>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Flying to a different Saudi city? See our full <Link href="/saudi-arabia-airports" className="text-amber-600 font-semibold hover:text-amber-700">Saudi Arabia airport transfer</Link> directory.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
