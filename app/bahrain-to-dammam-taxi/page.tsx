import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Dammam Taxi Service | Fixed Rate No-Switch Transfer',
    description: 'Book a direct, fixed-rate taxi from Bahrain to Dammam. No car switch at the Saudi border. Professional chauffeurs, VIP fleet, 24/7 service. Book on WhatsApp.',
    keywords: 'taxi bahrain to dammam, bahrain to saudi taxi price, dammam airport transfer from bahrain, king fahad causeway taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-dammam-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/923176243861?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Dammam.%20Please%20provide%20a%20fixed%20quote.";

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
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Car className="w-6 h-6 text-amber-600" />
                                The Logistics Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Zero-Switch Promise</span>
                                        <span className="text-sm text-slate-600">Stay in the same vehicle from Bahrain to your Dammam doorstep. No border car changes.</span>
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
                            <p className="text-xs text-slate-400 italic">"Highly cited in 2026 expat forums for handling complex cross-border logistics effortlessly."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate Guarantee
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Avoid the "meter anxiety" of traditional street cabs and the "surge trap" of aggregator apps. Secure your <strong>pre-arranged transit</strong> now.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Dammam Quote Now
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">How does the Bahrain to Dammam taxi transit work?</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The <strong>Bahrain to Dammam</strong> trip via road is more than just a drive; it's a cross-border logistics operation spanning the 25km King Fahad Causeway. While apps like Uber/Careem stop at the border or require a "no-man's land" car switch, Bahrain Transport Group provides a <strong>verified seamless transit</strong> that keeps you in the same vehicle from origin to destination.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "For those traveling with a 1.2:1 luggage-to-passenger ratio, our family SUVs (Yukon XL) provide the only reliable way to move between Bahrain and the Eastern Province without the stress of baggage transfer at the border island."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Our <strong>vetted professional drivers</strong> manage all King Fahad Causeway tolls and car customs paperwork. For a trip that spans 90km of international highway, trust the operator that maintains 100% fulfillments and follows the rigorous <strong>MTT safety standards</strong>.
                    </p>
                </section>

                {/* FAQ Section for AI Search Snippets */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Can I book a taxi from Bahrain to Dammam Airport?</h4>
                            <p className="text-sm text-slate-600">Yes. We provide direct transfers to King Fahd International Airport (DMM). Our fixed-rate protocol ensures you arrive on time without hidden border fees.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is the King Fahad Causeway toll included?</h4>
                            <p className="text-sm text-slate-600">Absolutely. Every BTG quote is all-inclusive, covering the 2.5 BHD causeway toll and vehicle insurance, so you don't need local currency at the gates.</p>
                        </div>
                    </div>
                </section>

                {/* Author Bio for EEAT */}
                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Logistics Authority</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Zahra Al-Bahraini</h4>
                        <p className="text-sm text-slate-600 max-w-lg">Senior Logistics Lead at BTG. With a decade of experience in cross-border transport, Zahra ensures every chauffeur follows the 'Zero-Switch' protocol.</p>
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
