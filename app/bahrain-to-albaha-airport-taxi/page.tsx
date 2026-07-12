import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane, Info } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Al-Baha Airport Taxi | Long-Distance Charter',
    description: 'Long-distance private charter from Bahrain to Al-Baha Domestic Airport (ABT), approximately 1,550km. Custom quote, advance booking, or flight + local pickup.',
    keywords: 'bahrain to al-baha airport taxi, al baha domestic airport transfer, abt airport taxi from bahrain, bahrain to al baha taxi price',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-albaha-airport-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20a%20quote%20for%20a%20long-distance%20transfer%20from%20Bahrain%20to%20Al-Baha%20Airport%20(ABT).";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Al-Baha Airport</span> Charter
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A long-distance private charter to Al-Baha Domestic Airport (ABT), approximately 1,550km from Bahrain.
                    </p>
                </header>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start max-w-2xl mx-auto">
                    <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">
                        <strong>Honest note:</strong> Al-Baha is roughly a 16-hour drive from Bahrain. We strongly recommend flying and letting us handle the <strong>local pickup at ABT</strong>. The road charter is reserved for groups or specific overland requests.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Plane className="w-6 h-6 text-amber-600" />
                            The Al-Baha Charter Protocol
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Multi-Day Dedicated Charter</span>
                                    <span className="text-sm text-slate-600">One vehicle and driver, with an overnight stop planned into the route.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">72 Hours' Notice</span>
                                    <span className="text-sm text-slate-600">Advance scheduling is required for this distance.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Custom Fixed Quote</span>
                                    <span className="text-sm text-slate-600">Priced individually, including any overnight accommodation for the driver.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Custom Charter Quote
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Two Ways to Travel</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Tell us your dates: we'll quote the full road charter, or arrange a fixed-rate <strong>local pickup from ABT</strong> if you're flying in — the recommended option for this distance.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Al-Baha Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Is driving to Al-Baha actually recommended?</h4>
                            <p className="text-sm text-slate-600">For most travelers, no — at ~1,550km, flying is far more practical. We offer the road option mainly for groups or specific overland needs.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Do you offer pickup if I fly into Al-Baha?</h4>
                            <p className="text-sm text-slate-600">Yes, we can arrange a fixed-rate local chauffeur waiting for you at ABT.</p>
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
                        View our full <Link href="/saudi-arabia-airports" className="text-amber-600 font-semibold hover:text-amber-700">Saudi Arabia airport transfer directory</Link>.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
