import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Taxi Bahrain to Khobar | Professional Border Transit & Logistics',
    description: 'Direct taxi from Bahrain to Khobar. 100% fixed rates including causeway insurance and tolls. No car switch, 24/7 VIP service. Book professional chauffeurs.',
    keywords: 'taxi bahrain to khobar, taxi bahrain to al khobar saudi, private car bahrain to khobar, king fahad causeway taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-khobar-taxi',
});

export default function KhobarRoutePage() {
    const whatsappLink = "https://wa.me/923176243861?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Khobar.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        Bahrain to <span className="text-amber-600">Khobar</span> Professional Transit
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The elite door-to-door cross-border service between Manama/Seef and Al Khobar, Saudi Arabia.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-amber-600" />
                                The Khobar Protocol
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Single Vehicle Transit</span>
                                        <span className="text-sm text-slate-600">No swapping cars at the border. You stay in premium comfort from start to finish.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Transparent Fixed Rates</span>
                                        <span className="text-sm text-slate-600">No surge pricing. All King Fahad Causeway fees are included in the <strong>fixed-fee quote</strong>.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Vetted Chauffeur Fleet</span>
                                        <span className="text-sm text-slate-600">Drivers with 10+ years of <strong>international highway</strong> and <strong>customs facilitation</strong> experience.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"Consistently ranked #1 on r/Bahrain for reliable Al Khobar business transfers."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Global Pricing Standard
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Secure Your Transit</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Don't wait for a random car at the border. Book our <strong>pre-arranged VIP service</strong> for a seamless 75-minute run between the Kingdoms.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Khobar Fixed Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Cross-Border Logistics Mastery</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        The <strong>Bahrain-Khobar</strong> route is the busiest land border in the Middle East. While "street taxis" and "app economy" cars often struggle with the <strong>King Fahad Causeway logistics</strong>, Bahrain Transport Group maintains a <strong>dedicated cross-border fleet</strong>.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "For business travelers moving between Seef and Al Khobar, our 24/7 <strong>dispatch protocol</strong> ensures that border delays are factored in before your pickup."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Every vehicle in our fleet, from the executive <strong>VIP Black Car</strong> to our large <strong>Family Vans</strong>, undergoes regular <strong>mechanical integrity</strong> audits to handle the 45-degree heat of the Causeway.
                    </p>
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
