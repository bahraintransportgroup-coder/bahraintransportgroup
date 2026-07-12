import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane, Info } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Kuwait Taxi | Airport Transfer + Kuwait Pickup',
    description: 'Book your fixed-rate transfer to Bahrain International Airport for your Kuwait flight, plus a confirmed local pickup on arrival in Kuwait. 24/7 dispatch on both ends.',
    keywords: 'bahrain to kuwait taxi, taxi bahrain kuwait, kuwait airport pickup, bahrain kuwait transfer service, kwi airport taxi',
    canonicalUrl: 'https://bahraintransportgroup.com/bahrain-to-kuwait-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=I%20want%20to%20book%20a%20Bahrain%20airport%20transfer%20and%20Kuwait%20pickup%20for%20my%20upcoming%20trip.";

    return (
        <div className="bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Bahrain to <span className="text-amber-600">Kuwait</span> Transfer
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Bahrain and Kuwait don't share a land border, so this route runs on both ends of your flight: a fixed-rate transfer to Bahrain International Airport, and a confirmed local pickup waiting for you at Kuwait International Airport (KWI).
                    </p>
                </header>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start max-w-2xl mx-auto">
                    <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">
                        <strong>Honest note:</strong> unlike our Saudi Arabia routes, we do not offer a direct road charter between Bahrain and Kuwait. Bahrain Transport Group handles your Bahrain-side airport transfer, and coordinates with our Kuwait pickup partner for the arrival leg — you fly the middle segment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                How the Bahrain-Kuwait Transfer Works
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Bahrain-Side Pickup</span>
                                        <span className="text-sm text-slate-600">Fixed-rate transfer from anywhere in Bahrain to Bahrain International Airport (BAH), timed to your flight.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">Confirmed Kuwait-Side Pickup</span>
                                        <span className="text-sm text-slate-600">Our Kuwait pickup partner meets you at KWI arrivals with a name board, tracking your flight for delays.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">One Booking, Both Ends</span>
                                        <span className="text-sm text-slate-600">Arrange both legs in a single WhatsApp conversation with a combined fixed quote.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"We coordinate the handover directly with our Kuwait partner, so you're never the one chasing confirmations between two countries."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> Fixed Rate, Both Legs
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Book in 60 Seconds</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Send us your flight details and we'll confirm your Bahrain departure transfer and Kuwait arrival pickup together.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                Get Bahrain-Kuwait Quote
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Can I book a road taxi straight from Bahrain to Kuwait?</h4>
                            <p className="text-sm text-slate-600">No — Bahrain and Kuwait don't share a border, and we don't currently offer a road charter for this route. We handle the Bahrain-side and Kuwait-side transfers around your flight instead.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Who picks me up at Kuwait International Airport?</h4>
                            <p className="text-sm text-slate-600">Our confirmed local pickup partner in Kuwait, coordinated by our dispatch team ahead of your arrival, with your flight tracked for any delays.</p>
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
                        Traveling within Saudi Arabia instead? View our full <Link href="/saudi-arabia-airports" className="text-amber-600 font-semibold hover:text-amber-700">Saudi Arabia airport directory</Link>.
                    </p>
                </div>

            </main>

            <CTASection />
        </div>
    );
}
