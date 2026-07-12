import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Dammam Airport Taxi | King Fahd International (DMM) Transfer',
    description: 'Book a direct, fixed-rate taxi from Bahrain to King Fahd International Airport (DMM) in Dammam. No car switch, flight-time tracking, 24/7 dispatch. Book on WhatsApp.',
    keywords: 'bahrain to dammam airport taxi, king fahd international airport transfer, dmm airport taxi from bahrain, bahrain to dmm taxi price',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-dammam-airport-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Dammam%20Airport%20(DMM).%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Dammam Airport</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Fixed-rate, door-to-airport transfer straight to King Fahd International Airport (DMM), with flight-time tracking so you never miss a departure.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                The Airport Transfer Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Direct to Terminal</span>
                                        <span className="text-sm text-slate-600">No car switch at the causeway. Same vehicle from your Bahrain door to the DMM terminal curb.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Flight-Time Buffer</span>
                                        <span className="text-sm text-slate-600">Departure times are planned with a built-in border delay buffer so you never risk missing a flight.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">All-Inclusive Fixed Fare</span>
                                        <span className="text-sm text-slate-600">Tolls, <strong>customs facilitation</strong> fees, and border insurance are already included.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"The reliable option for travelers flying out of DMM instead of Bahrain International Airport for pricing or route reasons."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Avoid the risk of arriving late for an international flight. Secure your <strong>pre-arranged airport transit</strong> now.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get DMM Airport Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Bahrain to Dammam Airport transfer work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        <strong>King Fahd International Airport (DMM)</strong> sits well outside Dammam city center, making a direct, pre-timed transfer essential for anyone catching a flight. Bahrain Transport Group treats this as a dedicated airport-drop protocol rather than a standard city-to-city trip: pickup times are calculated backward from your flight departure, including the King Fahad Causeway crossing and typical border processing time.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "For a 6 AM flight out of DMM, we schedule pickup from Bahrain around 2:30 AM. This builds in a comfortable margin for border traffic, so you're checking in with time to spare, not sprinting to the gate."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our <strong>vetted professional drivers</strong> handle all causeway tolls and customs paperwork, and monitor your flight status where provided, adjusting the pickup window automatically if your schedule changes.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">How early should I leave Bahrain for a DMM flight?</h4>
                            <p className="text-sm text-slate-600">We recommend departing Bahrain at least 3.5 to 4 hours before your scheduled departure time, to account for the causeway crossing, border processing, and airport check-in.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is the causeway toll included in the airport transfer price?</h4>
                            <p className="text-sm text-slate-600">Yes. Every BTG quote to DMM Airport is all-inclusive, covering the causeway toll and vehicle insurance, with no hidden fees added at the border.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Logistics Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. With a decade of experience in cross-border transport, Zahra builds every DMM airport pickup time around flight departure, not the other way around.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Landing in Dammam instead? See our <Link href="/dammam-airport-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Dammam Airport to Bahrain taxi</Link> page, or a <Link href="/bahrain-to-dammam-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Bahrain to Dammam city</Link> transfer.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
