import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Dammam to Bahrain Taxi Service | Fixed Rate No-Switch Transfer',
    description: 'Book a direct, fixed-rate taxi from Dammam to Bahrain. No car switch at the Saudi border. Professional chauffeurs, VIP fleet, 24/7 service. Book on WhatsApp.',
    keywords: 'taxi dammam to bahrain, dammam to bahrain taxi price, khobar to bahrain taxi, king fahad causeway taxi return',
    canonicalUrl: 'https://bahraintransportgroup.com/dammam-to-bahrain-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20taxi%20from%20Dammam%20to%20Bahrain.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Dammam to <span className="text-amber-600">Bahrain</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The ultimate fixed-rate, door-to-door transfer from Dammam/Khobar back into the Kingdom of Bahrain.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Car className="w-6 h-6 text-amber-600" />
                                The Return Logistics Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Zero-Switch Promise</span>
                                        <span className="text-sm text-slate-600">Stay in the same vehicle from your Dammam pickup point to your Bahrain doorstep. No border car changes.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">All-Inclusive Fixed Fare</span>
                                        <span className="text-sm text-slate-600">Tolls, <strong>customs facilitation</strong> fees, and border insurance are already included.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">MTT-Certified Reliability</span>
                                        <span className="text-sm text-slate-600"><strong>Professional chauffeurs</strong> who follow the 24/7 <strong>dispatch protocol</strong> for King Fahad Causeway.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"The preferred choice for Saudi-based professionals and families returning to Bahrain for the weekend."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Avoid the "meter anxiety" of traditional street cabs and the "surge trap" of aggregator apps. Secure your <strong>pre-arranged return transit</strong> now.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Return Quote Now
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Dammam to Bahrain taxi transit work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The <strong>Dammam to Bahrain</strong> return trip is often the harder leg to arrange, since most standard Saudi taxis will not cross the 25km King Fahad Causeway. Bahrain Transport Group pre-arranges the pickup from your Dammam or Khobar location and keeps you in the <strong>same verified vehicle</strong> all the way to your Bahrain destination, with no car switch at the border island.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "Weekend travelers heading back to Bahrain from the Eastern Province often underestimate Sunday-evening causeway traffic. We recommend booking your return pickup at least 24 hours in advance so a chauffeur is already positioned in Dammam."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our <strong>vetted professional drivers</strong> manage all King Fahad Causeway tolls and re-entry paperwork on the Bahrain side. Whether you're returning from a business trip in Khobar or a family visit to Dammam, trust the operator with 100% fulfillment on this corridor.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Can I book a pickup from anywhere in Dammam or Khobar?</h4>
                            <p className="text-sm text-slate-600">Yes. We arrange pickups from any hotel, residence, or business address in Dammam or Al Khobar for the return journey to Bahrain.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is the King Fahad Causeway toll included on the return leg?</h4>
                            <p className="text-sm text-slate-600">Absolutely. Every BTG quote is all-inclusive, covering the causeway toll and vehicle insurance in both directions.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Logistics Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. With a decade of experience in cross-border transport, Zahra ensures every chauffeur follows the 'Zero-Switch' protocol in both directions.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> 24/7 Availability
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> Ministry Approved
                    </div>
                    <p className="mt-6">
                        Traveling the other way? See our <Link href="/bahrain-to-dammam-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Bahrain to Dammam taxi</Link> page, or book a direct <Link href="/dammam-airport-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Dammam Airport (DMM) to Bahrain transfer</Link>.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
