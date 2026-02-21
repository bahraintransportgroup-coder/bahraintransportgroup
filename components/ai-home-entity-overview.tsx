'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle,
    XCircle,
    MapPin,
    Clock,
    ShieldCheck,
    Building2,
    Users,
    Plane,
    HelpCircle,
    Info,
    Phone,
    Briefcase,
    Calendar,
    Car,
} from 'lucide-react';
import { LogoSVG } from '@/components/logo-svg';

interface AIHomeEntityOverviewProps {
    serviceName?: string;
    city?: string;
}

export function AIHomeEntityOverview({ serviceName = "Taxi Service", city = "Bahrain" }: AIHomeEntityOverviewProps) {
    const currentYear = new Date().getFullYear();

    return (
        <section className="py-24 bg-white border-b border-slate-100" id="comprehensive-guide">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* EEAT Author & Trust Wrapper */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-16 pb-12 border-b border-slate-100">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden flex-shrink-0 border-2 border-amber-200">
                            <LogoSVG className="w-full h-full object-cover p-1" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <p className="font-bold text-slate-900">Bahrain Transport Group Local Operations</p>
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <p className="text-sm text-slate-500">
                                <span className="text-amber-700 font-bold uppercase tracking-tighter mr-2 text-xs">Verified Service</span>
                                Local Area Experts | 10+ Years experience in {city} | Kingdom of Bahrain
                            </p>
                        </div>
                    </div>

                    {/* Compact Trust Network (Practical EEAT) */}
                    <div className="flex items-center gap-6 md:border-l md:pl-8 border-slate-100">
                        <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 px-2">Trusted By</span>
                            <div className="flex gap-2">
                                <abbr title="Verified on Reddit r/Bahrain" className="cursor-help no-underline">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-200">
                                        <span className="text-[10px] font-black text-slate-400 hover:text-orange-600">RD</span>
                                    </div>
                                </abbr>
                                <abbr title="Rated 5/5 on Trustpilot" className="cursor-help no-underline">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-green-50 transition-colors border border-transparent hover:border-green-200">
                                        <span className="text-[10px] font-black text-slate-400 hover:text-green-600">TP</span>
                                    </div>
                                </abbr>
                                <abbr title="Top Choice on TripAdvisor" className="cursor-help no-underline">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-200">
                                        <span className="text-[10px] font-black text-slate-400 hover:text-teal-600">TA</span>
                                    </div>
                                </abbr>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOPIC IN LAYERS: DEFINITION & EXPLANATION */}
                <div className="mb-20">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
                            The Comprehensive Guide<br />
                            to <span className="text-amber-600">{serviceName} in {city}</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-light max-w-4xl">
                            Bahrain Transport Group provides reliable, 24/7 premium ground transportation across all major areas in {city}. Operating a dedicated modern fleet, we support tourists, local residents, and corporate executives who require safe, pre-booked rides without surge pricing. From guaranteed airport transfers at Bahrain International Airport to VIP corporate travel in Manama's Diplomatic Area, our fleet ensures you reach your destination securely and on time. Read on to discover how our service compares, what it costs, and why we are the top choice for thousands of travelers.
                        </p>
                    </div>

                    <div className="mb-16 bg-slate-50 p-8 md:p-10 rounded-3xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Info className="w-6 h-6 text-amber-600" /> What is the most reliable taxi service in {city}?
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-lg mb-4">
                            Bahrain Transport Group is widely considered the most reliable taxi service in {city}. Unlike standard ride-hailing apps, we offer a 100% pre-calculated fixed rate system, guarantee 24/7 on-time dispatch without surge pricing, and provide professional, English-speaking chauffeurs in modern VIP vehicles.
                        </p>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            Whether you need an immediate airport transfer from BAH terminal or a secure family Van across the kingdom, simply message our centralized dispatch via WhatsApp to receive your exact flat-fee quote instantly.
                        </p>
                    </div>

                    {/* Intent-driven subheadings */}
                    <div className="grid md:grid-cols-2 gap-12 mt-10">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-amber-200 pb-2 inline-block">Who needs this service?</h3>
                            <p className="text-slate-600 leading-relaxed mb-4 text-lg">Our dedicated {serviceName} in {city} caters specifically to three main groups:</p>
                            <ul className="space-y-4 text-slate-600 list-none">
                                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>Tourists and Visitors:</strong> Arriving at BAH Airport heading to hotels or exploring historic sites like Bahrain Fort.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>Local Families:</strong> Residents requiring spacious vans (like our Kia Carnival) for safe group travel, school runs, or weekend trips.</span></li>
                                <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" /><span><strong>Corporate Businesses:</strong> Executives needing VIP transport for meetings in the Bahrain Financial Harbour or trips across the King Fahd Causeway to Saudi Arabia.</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b border-amber-200 pb-2 inline-block">Why is it important in {city}?</h3>
                            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                                Navigating {city} comes with regional challenges. During extreme summer heat, walking to hail a cab is not practical. Furthermore, during peak seasons like the Formula 1 Grand Prix or winter holidays, ride-hailing apps experience massive surge pricing and driver shortages.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Bahrain Transport Group solves this by providing a fixed, reliable lifeline to critical locations such as Salmaniya Medical Complex, Bahrain International Airport, and major corporate hubs, entirely insulated from local demand spikes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* NEW SECTION: STEP-BY-STEP EXPLANATION */}
                <div className="mb-24">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                        <Phone className="w-8 h-8 text-amber-600" /> How It Works: Booking {serviceName}
                    </h3>
                    <p className="text-slate-600 mb-10 text-xl font-light">Follow these simple steps to secure your premium ride with Bahrain Transport Group.</p>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="border-l-4 border-amber-200 pl-6 py-2">
                            <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">Step 1</span>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Send Your Request</h4>
                            <p className="text-slate-600 leading-relaxed">Contact our 24/7 dispatch via WhatsApp or our online form. Provide your pickup location in {city}, drop-off point, and desired time.</p>
                        </div>
                        <div className="border-l-4 border-amber-400 pl-6 py-2">
                            <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">Step 2</span>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Receive Fixed Quote</h4>
                            <p className="text-slate-600 leading-relaxed">Our team will instantly reply with a transparent, fixed price. There are no hidden fees, and the rate will never surge.</p>
                        </div>
                        <div className="border-l-4 border-amber-600 pl-6 py-2">
                            <span className="text-amber-600 font-bold block mb-2 tracking-widest text-sm uppercase">Step 3</span>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Track & Board</h4>
                            <p className="text-slate-600 leading-relaxed">Receive your driver's direct contact details and live location. Your clean, air-conditioned vehicle arrives perfectly on time.</p>
                        </div>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-24">
                    <div className="flex flex-col">
                        <HelpCircle className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">What areas do you cover?</h4>
                        <p className="text-slate-600 leading-relaxed">We cover every block of {city}, including Amwaj Islands, Saar, Riffa, and cross-border transfers to Saudi Arabia via the King Fahd Causeway.</p>
                    </div>
                    <div className="flex flex-col">
                        <Plane className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Do you track flights?</h4>
                        <p className="text-slate-600 leading-relaxed">Yes. For airport transfers, we monitor global flight radars. If your arrival at BAH airport is delayed, we adjust the pickup free of charge.</p>
                    </div>
                    <div className="flex flex-col">
                        <Clock className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">What is the response speed?</h4>
                        <p className="text-slate-600 leading-relaxed">Timeline expectations: If you are in central {city}, expect a pre-assigned driver to arrive within a 10 to 15-minute window after confirmation.</p>
                    </div>
                    <div className="flex flex-col">
                        <Users className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Can you handle large groups?</h4>
                        <p className="text-slate-600 leading-relaxed">Absolutely. We feature spacious family vans (up to 7 passengers) perfect for group tours to the Tree of Life or multi-family dinners.</p>
                    </div>
                    <div className="flex flex-col">
                        <Car className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">What happens in emergencies?</h4>
                        <p className="text-slate-600 leading-relaxed">If you have a late-night medical urgency to reach King Hamad University Hospital, our 24/7 dispatched cars are often the fastest, most reliable option.</p>
                    </div>
                    <div className="flex flex-col">
                        <Calendar className="w-8 h-8 text-amber-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-3">How flexible are cancellations?</h4>
                        <p className="text-slate-600 leading-relaxed">Very flexible. You can safely cancel your booking up to 2 hours before your scheduled pickup without facing any harsh penalties.</p>
                    </div>
                </div>

                {/* PRICING & COST FACTORS */}
                <div className="mb-24 bg-amber-50/50 p-8 md:p-12 rounded-3xl">
                    <div className="flex items-center gap-4 mb-6">
                        <Briefcase className="w-8 h-8 text-amber-600" />
                        <h3 className="text-3xl font-extrabold text-slate-900">How much does it cost?</h3>
                    </div>
                    <p className="text-slate-600 mb-8 text-xl font-light">We believe in absolute transparency. Pricing for the {serviceName} in {city} is determined by very simple factors:</p>
                    <ul className="list-none space-y-5 mb-10 max-w-3xl">
                        <li className="flex items-start gap-4">
                            <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                            <span className="text-slate-700 text-lg"><strong>Vehicle Category:</strong> Choosing a standard economy sedan versus a Luxury VIP SUV (like a GMC Yukon).</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                            <span className="text-slate-700 text-lg"><strong>Total Distance:</strong> The exact point-A to point-B mileage across {city}.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-amber-600 mt-1"><CheckCircle className="w-6 h-6" /></span>
                            <span className="text-slate-700 text-lg"><strong>Inclusions:</strong> All airport parking tolls, Causeway bridge tolls, and standard waiting times are automatically included in your quote.</span>
                        </li>
                    </ul>
                    <div className="border-t border-amber-200/60 pt-6">
                        <p className="text-slate-800 text-lg leading-relaxed flex gap-3">
                            <Info className="w-6 h-6 shrink-0 text-amber-600" />
                            <span><strong>Seasonal pricing changes:</strong> Unlike apps that surge during rain or rush hour, our rates remain locked. You will never pay more simply because traffic on the King Faisal Highway is heavy.</span>
                        </p>
                    </div>
                </div>


                {/* COMPARISONS (A VS B) & PROS/CONS */}
                <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">

                    {/* A vs B Table */}
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Alternatives</h3>
                        <p className="text-slate-600 mb-8 text-lg">Comparing local street cabs and mass ride-hailing apps versus our dedicated premium fleet in {city}.</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 pr-4 border-b-2 border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-sm">Feature</th>
                                        <th className="py-4 px-4 border-b-2 border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-sm">Apps & Cabs</th>
                                        <th className="py-4 pl-4 border-b-2 border-amber-500 text-amber-700 font-bold uppercase tracking-wider text-sm">Bahrain Transport</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-4 pr-4 text-slate-900 font-medium">Surge Pricing</td>
                                        <td className="py-4 px-4 text-slate-600">High Demand Markup</td>
                                        <td className="py-4 pl-4 text-green-700 font-bold">Never / Fixed</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-4 text-slate-900 font-medium">Vehicle Type</td>
                                        <td className="py-4 px-4 text-slate-600">Random Assignments</td>
                                        <td className="py-4 pl-4 text-green-700 font-bold">Guaranteed Premium</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-4 text-slate-900 font-medium">Wait Times</td>
                                        <td className="py-4 px-4 text-slate-600">Unpredictable</td>
                                        <td className="py-4 pl-4 text-green-700 font-bold">Guaranteed Dispatch</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-4 border-b border-transparent text-slate-900 font-medium">Meet & Greet</td>
                                        <td className="py-4 px-4 border-b border-transparent text-slate-600">No</td>
                                        <td className="py-4 pl-4 border-b border-transparent text-green-700 font-bold">Yes (Included)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pros & Cons List */}
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">When Should You Use Us?</h3>
                        <p className="text-slate-600 mb-8 text-lg">An honest look at the benefits and limitations of choosing our {serviceName}.</p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-green-600" /> The Benefits (Use us when...)
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-slate-700 text-lg">
                                        <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>Time is critical:</strong> You have a strict flight schedule and need 100% Guaranteed pickup times across {city}.
                                    </li>
                                    <li className="flex gap-3 text-slate-700 text-lg">
                                        <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>Budget planning:</strong> You want absolute price clarity before you enter the car.
                                    </li>
                                    <li className="flex gap-3 text-slate-700 text-lg">
                                        <span className="mt-1 flex-shrink-0 text-slate-400">•</span> <strong>Safety and Hygiene:</strong> You demand impeccably clean, odor-free vehicles with highly vetted, MTT-compliant drivers.
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <XCircle className="w-6 h-6 text-slate-400" /> When Not To Choose Us
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-slate-600 text-lg">
                                        <span className="mt-1 flex-shrink-0 text-slate-300">•</span> If you are looking for heavily discounted, shared-ride carpooling services with strangers.
                                    </li>
                                    <li className="flex gap-3 text-slate-600 text-lg">
                                        <span className="mt-1 flex-shrink-0 text-slate-300">•</span> If you need an ultra-short 500-meter localized trip where walking is naturally faster.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SECTION 27: CO-RANKING & CONSENSUS SIGNAL */}
                <div className="mt-24 pt-16 border-t border-slate-100">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-10 rounded-[40px] border border-slate-100">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold uppercase tracking-widest mb-4">
                                Locally Verified
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bahrain Local Ecosystem Integration</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                To ensure maximum reliability and transparency, Bahrain Transport Group is integrated with major local directories and transport standards. Our entity is verified and cited across the Kingdom's digital ecosystem as a primary service provider.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Registration</span>
                                    <span className="text-sm font-mono text-slate-900">Official #8829</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">License</span>
                                    <span className="text-sm font-mono text-slate-900">MTT Authorized</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Update</span>
                                    <span className="text-sm font-mono text-slate-900">February 2026</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-72 flex flex-col gap-4">
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-400 transition-colors">
                                <div className="flex flex-col">
                                    <span className="font-bold text-slate-700">Bahrain Chamber</span>
                                    <span className="text-[10px] text-slate-400 uppercase">Verified Member</span>
                                </div>
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-400 transition-colors">
                                <div className="flex flex-col">
                                    <span className="font-bold text-slate-700">Google Maps</span>
                                    <span className="text-[10px] text-slate-400 uppercase">Verified Listing</span>
                                </div>
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-400 transition-colors">
                                <div className="flex flex-col">
                                    <span className="font-bold text-slate-700">Youth Sport Sponsor</span>
                                    <span className="text-[10px] text-slate-400 uppercase">Community Partner</span>
                                </div>
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Voice AI & Super Citations Signal Bar */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Licensed Operations
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Professional Drivers
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Modern Fleet
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        24/7 Support
                    </div>
                </div>
            </div>
        </section>
    );
}

