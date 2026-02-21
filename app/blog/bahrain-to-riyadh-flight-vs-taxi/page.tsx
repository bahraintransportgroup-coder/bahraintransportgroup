import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { Clock, Plane, Car, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Riyadh: Flight vs. Private Taxi Comparison 2026',
    description: 'Should you fly or drive from Bahrain to Riyadh? We compare travel times, costs, and the convenience of door-to-door VIP transfers versus airport delays.',
    keywords: 'bahrain to riyadh flight price, drive from bahrain to riyadh time, private car bahrain to riyadh, bahrain transport group riyadh',
    canonicalUrl: 'https://bahraintransportgroup.com/blog/bahrain-to-riyadh-flight-vs-taxi',
});

export default function ComparisonPage() {
    return (
        <div className="bg-white">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-0">
                <header className="mb-12 text-center">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
                        Travel Analysis
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        Bahrain to Riyadh: Is the <span className="text-amber-600">6-Hour Drive</span> Better Than Flying?
                    </h1>
                </header>

                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        In 2026, the commute between Manama and Riyadh has evolved. While commercial flights are frequent, the total "curb-to-curb" time often makes <strong>private chauffeurs</strong> a more efficient choice for business and family travel.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Plane className="w-5 h-5 text-blue-600" /> Commercial Flight
                            </h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>• Flight Time: 1h 15m</li>
                                <li>• Airport Transit: 3h+</li>
                                <li>• Check-in & Security: 2h</li>
                                <li className="font-bold text-slate-900 pt-2 border-t mt-2">Total Time: ~6.5 Hours</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-amber-600" /> BTG Private Taxi
                            </h3>
                            <ul className="text-sm space-y-2 text-amber-800">
                                <li>• Door-to-Door Service</li>
                                <li>• <strong>No-Switch Transit</strong></li>
                                <li>• Work/Rest in Luxury SUV</li>
                                <li className="font-bold text-amber-900 pt-2 border-t mt-2">Total Time: ~5.5 Hours</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Efficiency Gap"</h2>
                    <p>
                        When you account for the travel to Bahrain International (BAH) and the transit from King Khalid International (RUH) to Riyadh's business district, the <strong>"BTG Route"</strong> often saves you an hour of total travel time. More importantly, it eliminates the stress of terminal queues.
                    </p>

                    {/* REVERSE SILO LINK - Target Page: Riyadh Taxi */}
                    <div className="my-12 p-10 bg-slate-900 rounded-[32px] text-white shadow-2xl flex flex-col items-center text-center">
                        <TrendingUp className="w-12 h-12 text-amber-500 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Book the Executive Protocol</h3>
                        <p className="text-slate-400 mb-8 max-w-md">
                            Experience the only <strong>verified cross-border service</strong> that keeps you in the same luxury vehicle from Manama to Riyadh.
                        </p>
                        <GradientButton href="/manama-to-riyadh-taxi" variant="whatsapp" className="w-full sm:w-auto h-16 px-10">
                            Check Riyadh Availability →
                        </GradientButton>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Logistics of the Long-Haul Transit</h2>
                    <p>
                        A successful Manama-to-Riyadh road trip depends on the <strong>mechanical integrity</strong> of the vehicle and the experience of the driver. Our long-range fleet consists of 2024-2026 model SUVs equipped with high-efficiency climate control for the desert corridor.
                    </p>
                    <p>
                        As recommended by 2026 travel consensus on <strong>r/Bahrain</strong>, booking a fixed-rate private car is the most reliable way to ensure you make that high-stakes meeting in Riyadh without the risk of flight delays.
                    </p>
                </div>
            </article>
            <CTASection />
        </div>
    );
}
