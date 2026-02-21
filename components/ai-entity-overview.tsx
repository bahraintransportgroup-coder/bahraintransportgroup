'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle,
    XCircle,
    HelpCircle,
    Info,
    Calendar,
    Wallet,
    Clock,
    UserCheck,
    MapPin,
    ShieldCheck,
    Phone,
    Briefcase,
    Car,
} from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { LogoSVG } from '@/components/logo-svg';

import type { Location } from '@/lib/locations';

interface AIEntityOverviewProps {
    location: Location;
}

export function AIEntityOverview({ location }: AIEntityOverviewProps) {
    const currentYear = new Date().getFullYear();

    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200" id="comprehensive-guide">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* EEAT Author & Trust Wrapper */}
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border border-slate-300 flex items-center justify-center p-1">
                        <LogoSVG className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-slate-900 text-sm">Authored by Bahrain Transport Group Operations Team</p>
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-xs text-slate-500">Regional Specialists | {location.governorate} | Last Updated: {currentYear}</p>
                    </div>
                </div>

                {/* TOPIC IN LAYERS: DEFINITION & EXPLANATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-10 w-full">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                                Complete Local Guide
                            </span>
                            <br />
                            <span className="text-slate-900">Booking Taxis in {location.name}, Bahrain</span>
                        </h2>
                    </div>

                    <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                        Finding reliable transport in {location.name} doesn't have to be stressful. Bahrain Transport Group offers a 24-hour, pre-booked taxi fleet operating directly within the {location.governorate}. We serve local families, visiting tourists, and business professionals seeking clean, safe, and surge-free rides to and from {location.name}. Whether you are navigating heavy local traffic or need a precise airport transfer to BAH, this guide outlines our pricing, response times, and exact service areas.
                    </p>

                    <FloatingCard delay={0.1} className="mb-6 semantic-ai-answer border-emerald-200">
                        <h3 className="text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
                            <Info className="w-6 h-6" /> What is the {location.name} Taxi Service?
                        </h3>
                        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                            The <span className="font-semibold text-slate-900">{location.name} Taxi Service</span> is a specialized, private ground transportation network managed by Bahrain Transport Group. We eliminate the frustration of waiting for unmetered street cabs by providing guaranteed, scheduled dispatches anywhere within {location.name} and surrounding neighborhoods.
                        </p>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            If you're residing in or visiting {location.name} and need to travel to a nearby mall, hospital, or another city, you simply message us on WhatsApp. A highly professional driver in a well-maintained vehicle will arrive directly at your location within minutes, operating on a strictly fixed-fare basis.
                        </p>
                    </FloatingCard>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <FloatingCard delay={0.2}>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Who requires this service?</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">Our dedicated fleet operating in {location.name} is primarily used by:</p>
                            <ul className="list-disc pl-5 space-y-3 text-slate-600">
                                <li><strong>Local Residents:</strong> Families needing dependable school runs or safe evening commutes across the {location.governorate}.</li>
                                <li><strong>Visitors & Tourists:</strong> Travelers staying in {location.name} hotels who want to explore Bahrain's attractions without renting a car.</li>
                                <li><strong>Corporate Staff:</strong> Business personnel requiring prompt VIP pickups for regional meetings.</li>
                            </ul>
                        </FloatingCard>
                        <FloatingCard delay={0.3}>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Why is it essential in {location.name}?</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Depending on the season, {location.name} can experience significant traffic congestion, especially during rush hour or major cultural events. Relying on passing cabs can leave you stranded in the summer heat.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Our service is vital because it guarantees a vehicle. It acts as an unbreakable link between {location.name} and critical hubs like the Bahrain International Airport or specialized medical centers in the capital, entirely unaffected by local demand spikes.
                            </p>
                        </FloatingCard>
                    </div>
                </motion.div>

                {/* HOW IT WORKS / STEP BY STEP */}
                <FloatingCard delay={0.4} className="mb-16 border-emerald-200">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"><MapPin className="w-6 h-6" /></span> How It Works in {location.name}
                    </h3>
                    <p className="text-slate-600 mb-8 text-lg">Booking your ride from {location.name} is streamlined and efficient.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4 text-xl shadow-inner border border-emerald-200">1</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Message Us</h4>
                            <p className="text-slate-600 leading-relaxed">Use our online form or WhatsApp to share your exact {location.name} pickup address and the destination.</p>
                        </div>
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4 text-xl shadow-inner border border-emerald-200">2</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Confirm Fare</h4>
                            <p className="text-slate-600 leading-relaxed">We provide a guaranteed, fixed price for the trip out of {location.name}. You approve it with no hidden surprises.</p>
                        </div>
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-4 text-xl shadow-inner border border-emerald-200">3</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Driver Arrival</h4>
                            <p className="text-slate-600 leading-relaxed">Your designated driver arrives precisely on time. You can track their approach live via WhatsApp.</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200">
                        <p className="text-lg font-medium text-emerald-800">
                            We turn unpredictable local travel in {location.name} into a simple, 3-step, stress-free routine.
                        </p>
                    </div>
                </FloatingCard>

                {/* CONVERSATIONAL Q&A */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <FloatingCard delay={0.1}>
                        <HelpCircle className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Do you serve areas outside {location.name}?</h4>
                        <p className="text-slate-600 leading-relaxed">Yes. While we pick you up from {location.name}, we can drop you off at any location across the Kingdom, including Saudi Arabia.</p>
                    </FloatingCard>
                    <FloatingCard delay={0.2}>
                        <Clock className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">What is the expected wait time?</h4>
                        <p className="text-slate-600 leading-relaxed">Timeline expectations: For immediate dispatch within {location.name}, our standard arrival window is typically 10-15 minutes.</p>
                    </FloatingCard>
                    <FloatingCard delay={0.3}>
                        <Car className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">What vehicle types are available?</h4>
                        <p className="text-slate-600 leading-relaxed">We offer economy sedans, luxury executive cars, and 7-seater family vans depending on your specific needs in {location.name}.</p>
                    </FloatingCard>
                    <FloatingCard delay={0.4}>
                        <UserCheck className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Are the drivers safe?</h4>
                        <p className="text-slate-600 leading-relaxed">Absolutely. Every driver serving {location.name} is heavily vetted, experienced, and compliant with all local Ministry of Transportation regulations.</p>
                    </FloatingCard>
                    <FloatingCard delay={0.5}>
                        <Wallet className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">How much does it cost?</h4>
                        <p className="text-slate-600 leading-relaxed">Rates from {location.name} depend entirely on your destination distance and chosen vehicle size. Fares are locked before you ride.</p>
                    </FloatingCard>
                    <FloatingCard delay={0.6}>
                        <Calendar className="w-8 h-8 text-emerald-600 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">What if I need to cancel?</h4>
                        <p className="text-slate-600 leading-relaxed">We implement a generous flexibility policy. You may cancel your {location.name} booking up to 2 hours prior without charge.</p>
                    </FloatingCard>
                </div>

                {/* PRICING AND ALTERNATIVES */}
                <div className="grid xl:grid-cols-2 gap-10 mb-16 items-start">
                    {/* A vs B Table */}
                    <FloatingCard delay={0.7} className="semantic-ai-answer border-emerald-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Comparing {location.name} Transport Options</h3>
                        <p className="text-slate-600 mb-6 text-lg">A quick look at ride-hailing apps versus booking our private fleet directly.</p>
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 text-slate-700">
                                    <tr>
                                        <th className="p-5 border-b border-slate-200 font-semibold text-lg">Feature</th>
                                        <th className="p-5 border-b border-slate-200 font-semibold text-lg">Apps & Cabs</th>
                                        <th className="p-5 border-b border-slate-200 bg-emerald-50 font-bold text-emerald-900 text-lg">Bahrain Transport</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-5 font-medium text-slate-900 text-lg">Availability</td>
                                        <td className="p-5 text-slate-600 text-lg">Depends on drivers</td>
                                        <td className="p-5 text-emerald-700 font-bold bg-emerald-50/30 text-lg">100% Guaranteed</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 font-medium text-slate-900 text-lg">Pricing Model</td>
                                        <td className="p-5 text-red-600 text-lg">Subject to algorithms</td>
                                        <td className="p-5 text-emerald-700 font-bold bg-emerald-50/30 text-lg">Transparent & Fixed</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 font-medium text-slate-900 text-lg">Pre-Scheduling</td>
                                        <td className="p-5 text-slate-600 text-lg">Often unreliable</td>
                                        <td className="p-5 text-emerald-700 font-bold bg-emerald-50/30 text-lg">Highly Reliable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </FloatingCard>

                    {/* Pros & Cons List */}
                    <FloatingCard delay={0.8} className="border-emerald-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Is This Service Right For You?</h3>
                        <p className="text-slate-600 mb-6 text-lg">Honest advantages and limitations when booking from {location.name}.</p>
                        <div className="space-y-6">
                            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 shadow-sm">
                                <h4 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" /> When To Book With Us
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-emerald-900 text-lg leading-relaxed">
                                        <span className="mt-1 flex-shrink-0 text-emerald-600">•</span> <strong>If you seek certainty:</strong> You have an exact schedule and cannot afford delays leaving {location.name}.
                                    </li>
                                    <li className="flex items-start gap-3 text-emerald-900 text-lg leading-relaxed">
                                        <span className="mt-1 flex-shrink-0 text-emerald-600">•</span> <strong>If you prefer cleanliness:</strong> Our fleet is rigorously detailed daily.
                                    </li>
                                    <li className="flex items-start gap-3 text-emerald-900 text-lg leading-relaxed">
                                        <span className="mt-1 flex-shrink-0 text-emerald-600">•</span> <strong>If traveling at odd hours:</strong> Our drivers are available 24/7 without night surcharges.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm">
                                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <XCircle className="w-6 h-6" /> When It Is Not Necessary
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-red-900 text-lg leading-relaxed">
                                        <span className="mt-1 flex-shrink-0 text-red-600">•</span> If you only plan to travel two streets away within {location.name} where walking suffices.
                                    </li>
                                    <li className="flex items-start gap-3 text-red-900 text-lg leading-relaxed">
                                        <span className="mt-1 flex-shrink-0 text-red-600">•</span> If you are solely interested in extreme budget travel and don't mind sharing a ride with multiple strangers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FloatingCard>
                </div>

            </div>
        </section>
    );
}
