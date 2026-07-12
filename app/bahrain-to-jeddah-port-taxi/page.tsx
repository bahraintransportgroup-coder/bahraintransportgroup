import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Ship, Info } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Jeddah Islamic Port Taxi | Long-Distance Charter',
    description: 'Long-distance private charter from Bahrain to Jeddah Islamic Port, approximately 1,300km. Custom quote and advance booking for Hajj/Umrah logistics and port pickups.',
    keywords: 'bahrain to jeddah islamic port taxi, jeddah port transfer, bahrain to jeddah port taxi price, hajj umrah transport bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-jeddah-port-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20a%20quote%20for%20a%20long-distance%20transfer%20from%20Bahrain%20to%20Jeddah%20Islamic%20Port.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Ship className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Jeddah Islamic Port</span> Charter
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A long-distance private charter to Jeddah Islamic Port, approximately 1,300km from Bahrain, often used for Hajj/Umrah logistics and cargo-with-passenger trips.
                    </p>
                </header>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start max-w-2xl mx-auto">
                    <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">
                        <strong>Honest note:</strong> this is roughly a 13-14 hour drive from Bahrain. For most passenger travel we recommend flying into Jeddah and using our <Link href="/bahrain-to-jeddah-airport-taxi" className="underline font-semibold">airport pickup service</Link> instead. The road charter is best suited to group transport, port-side logistics, or travelers who specifically need road transit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Ship className="w-6 h-6 text-amber-600" />
                                The Port Charter Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Dedicated Vehicle & Driver</span>
                                        <span className="text-sm text-slate-600">One vehicle for the full route, with planned rest stops across the peninsula.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">48-72 Hours' Notice</span>
                                        <span className="text-sm text-slate-600">Advance scheduling needed to confirm driver and vehicle for a trip of this length.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Custom Fixed Quote</span>
                                        <span className="text-sm text-slate-600">Priced individually based on vehicle class and passenger/group size.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Custom Charter Quote
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Tell us your travel dates and group size for a fixed, all-inclusive charter price.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Port Charter Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Do you handle group transport for Hajj/Umrah season?</h4>
                            <p className="text-sm text-slate-600">Yes, message us with group size and dates and we'll arrange a multi-vehicle logistics plan with a bulk fixed rate.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is flying and using local pickup faster?</h4>
                            <p className="text-sm text-slate-600">In almost all cases, yes. We recommend it for time-sensitive passenger travel and reserve the road charter for cargo, groups, or specific road-trip requests.</p>
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
                        Flying instead? See our <Link href="/bahrain-to-jeddah-airport-taxi" className="text-amber-600 font-semibold hover:text-amber-700">Jeddah Airport transfer</Link>, or view our full <Link href="/saudi-arabia-airports" className="text-amber-600 font-semibold hover:text-amber-700">Saudi Arabia directory</Link>.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
