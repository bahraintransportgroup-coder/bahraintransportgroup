import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Khobar Taxi | Fixed Price No-Switch Border Transfer',
    description: 'Direct door-to-door taxi from Bahrain to Khobar. No car switch at the border. Professional chauffeurs, VIP fleet, 24/7 service. Fixed rates including tolls.',
    keywords: 'taxi bahrain to khobar, bahrain to saudi taxi price, king fahad causeway taxi to khobar, khobar transfer from bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/routes/bahrain-to-khobar-taxi',
});

export default function KhobarRoutePage() {
    const whatsappLink = "https://wa.me/13073464572?text=I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Khobar.%20Please%20provide%20a%20fixed%20quote.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Khobar</span> Taxi
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Premium fixed-rate transfers between Bahrain and Khobar. No switches, no hidden fees, just seamless cross-border mobility.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            The Khobar Advantage
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Zero-Switch Standard</span>
                                    <span className="text-sm text-slate-600">Stay in your comfortable BTG vehicle across the entire King Fahad Causeway.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Fixed Quote Policy</span>
                                    <span className="text-sm text-slate-600">The price we quote on WhatsApp is exactly what you pay. No meter stress.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Causeway Experts</span>
                                    <span className="text-sm text-slate-600">Our drivers are vetted for cross-border transit, handling all border island paperwork.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <Shield className="w-4 h-4" /> Secure Your Transfer
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Instant Khobar Booking</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Don't gamble with app drivers who might cancel at the border. Book a professional transfer with a 99.4% punctuality rate.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Book Khobar Taxi
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Seamless Bahrain to Khobar Transit</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Whether you are heading to Khobar for a business meeting at the <strong>Khobar Corniche</strong>, a weekend at <strong>Al Rashid Mall</strong>, or returning to your residence in the Eastern Province, our Bahrain to Khobar taxi service is designed for maximum efficiency.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        Typical transit time is approximately 75 to 90 minutes. We provide a range of vehicles including <strong>Executive Sedans</strong>, <strong>7-Seater Family Vans</strong>, and <strong>Luxury SUVs</strong> (GMC Yukon) specifically for the Saudi route. All rides include complete insurance coverage for both Saudi and Bahraini territories.
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
