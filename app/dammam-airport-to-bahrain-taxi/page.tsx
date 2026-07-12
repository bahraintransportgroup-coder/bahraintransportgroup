import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Dammam Airport to Bahrain Taxi | King Fahd International (DMM) Pickup',
    description: 'Book a direct, fixed-rate taxi from King Fahd International Airport (DMM) in Dammam to Bahrain. Flight tracking, meet-and-greet, no car switch, 24/7 dispatch.',
    keywords: 'dammam airport to bahrain taxi, dmm airport pickup to bahrain, king fahd international airport transfer to bahrain, dammam airport taxi price',
    canonicalUrl: 'https://bahraintransportgroup.com/dammam-airport-to-bahrain-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Dammam%20Airport%20(DMM)%20to%20Bahrain.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Dammam Airport to <span className="text-amber-600">Bahrain</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Fixed-rate pickup from King Fahd International Airport (DMM) straight to your Bahrain doorstep, with flight tracking and meet-and-greet.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                The Arrival Pickup Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Flight Tracking</span>
                                        <span className="text-sm text-slate-600">We monitor your DMM arrival time and adjust dispatch automatically for delays.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Meet & Greet</span>
                                        <span className="text-sm text-slate-600">A chauffeur waits at the arrivals hall with a name board, ready to assist with luggage.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Zero-Switch to Bahrain</span>
                                        <span className="text-sm text-slate-600">Stay in the same vehicle across the King Fahad Causeway, straight to your Bahrain address.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"Popular with travelers who find cheaper or more convenient flight connections into DMM instead of Bahrain International Airport."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Land, collect your bags, and find your chauffeur already waiting. Secure your <strong>pre-arranged arrival transit</strong> now.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Arrival Pickup Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Dammam Airport to Bahrain pickup work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Arriving at <strong>King Fahd International Airport (DMM)</strong> without a pre-arranged ride can mean a long wait for a taxi licensed to cross into Bahrain. Bahrain Transport Group solves this by dispatching a chauffeur to meet your flight directly at the arrivals hall, tracking your landing time so the pickup is timed to when you actually clear customs, not a fixed guess.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "Delayed flights are common on this route. Because we track your flight number, a two-hour delay into DMM doesn't cost you anything extra, and your chauffeur is still there when you land."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        From the terminal curb, our <strong>vetted professional drivers</strong> handle the King Fahad Causeway crossing and all Bahrain re-entry paperwork, delivering you directly to your hotel, home, or office without a second vehicle.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">What happens if my flight into DMM is delayed?</h4>
                            <p className="text-sm text-slate-600">We track your flight number and adjust the pickup time automatically at no extra cost, so your chauffeur is waiting whenever you actually land.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Where exactly will the driver meet me?</h4>
                            <p className="text-sm text-slate-600">Your chauffeur waits in the arrivals hall with a name board, ready to help with luggage before walking you to the vehicle.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Logistics Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. Zahra's dispatch team tracks every DMM arrival in real time so no traveler is left waiting at the terminal.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Flying out of Dammam instead? See our <Link href="/bahrain-to-dammam-airport-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Bahrain to Dammam Airport taxi</Link> page, or a <Link href="/dammam-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Dammam city to Bahrain</Link> transfer.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
