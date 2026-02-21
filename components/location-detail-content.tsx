'use client';

import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Clock,
    CheckCircle,
    ArrowRight,
    Plane,
    Building2,
    Car,
    Shield,
    Star,
    Users,
    CreditCard,
    ChevronDown,
    MessageCircle,
    X,
} from 'lucide-react';
import { FloatingCard } from './floating-card';
import { GradientButton } from './gradient-button';
import type { Location, FAQ } from '@/lib/locations';
import { AIEntityOverview } from './ai-entity-overview';
import Link from 'next/link';
import { VerifiedSourceBlock } from './verified-source-block';

import { useState } from 'react';

interface Props {
    location: Location;
    faqs: FAQ[];
}

export function LocationDetailContent({ location, faqs }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const whatsappMsg = `Hello Bahrain Transport Group! I want to book a taxi from ${location.name}. I am looking at: https://bahraintransportgroup.com/locations/${location.slug}`;
    const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent(whatsappMsg)}`;

    const services = [
        {
            icon: Plane,
            title: `Airport Transfer from ${location.name}`,
            description: `Fast, reliable airport taxi between ${location.name} and Bahrain International Airport. Our professional drivers track your flight in real time so they are always on time — even if your flight is delayed. Enjoy meet-and-greet service, help with luggage, and a clean, air-conditioned vehicle for a stress-free transfer from ${location.name} to the airport or from the airport to ${location.name}.`,
        },
        {
            icon: Building2,
            title: `City Taxi in ${location.name}`,
            description: `On-demand taxi service across ${location.name} and all surrounding areas in ${location.governorate}. Whether you need a quick ride to the mall, a trip to a restaurant, or daily commuting, our ${location.name} city taxi service is available around the clock with fixed rates and no surge pricing.`,
        },
        {
            icon: Car,
            title: `Private Hire Taxi in ${location.name}`,
            description: `Book a private taxi in ${location.name} for full-day hire, half-day tours, or multi-stop trips. Perfect for tourists exploring Bahrain, families on a day out, or business travelers with multiple appointments across ${location.governorate}. Choose from economy sedans, luxury SUVs, or spacious family vans.`,
        },
    ];

    const popularRoutes = [
        `${location.name} to Bahrain International Airport`,
        `${location.name} to Manama City Centre`,
        `${location.name} to Seef District`,
        `${location.name} to King Fahad Causeway`,
        `${location.name} to Muharraq`,
        `${location.name} to Riffa`,
        `${location.name} to Amwaj Islands`,
        `${location.name} to Bahrain National Museum`,
    ];

    return (
        <>
            {/* FAQ Schema for Local SEO (Video 8 / Mega Masterclass Checklist) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            {/* Breadcrumb Schema for Technical SEO Audit */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://bahraintransportgroup.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Locations",
                                "item": "https://bahraintransportgroup.com/locations"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": location.name,
                                "item": `https://bahraintransportgroup.com/locations/${location.slug}`
                            }
                        ]
                    })
                }}
            />

            {/* H1 Hero — Primary Keyword: "Taxi Service in [Location]" */}
            <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-white" />
                </div>

                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[200px] opacity-[0.08]" />
                    <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-orange-600 rounded-full blur-[180px] opacity-[0.06]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    {/* Visual Breadcrumbs */}
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center items-center gap-2 mb-8 text-sm text-slate-500 font-medium"
                    >
                        <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <Link href="/locations" className="hover:text-amber-600 transition-colors">Locations</Link>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="text-slate-900">{location.name}</span>
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6"
                    >
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-600">
                            Taxi in {location.name} • {location.governorate} • 24/7 Available
                        </span>
                    </motion.div>

                    {/* H1: Primary keyword + city */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-slate-900">Taxi Service in</span>
                        <br />
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            {location.name}, Bahrain
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 mb-4 max-w-2xl mx-auto"
                    >
                        Professional taxi service in {location.name} available around the
                        clock. Airport transfers, city rides, corporate transport, and
                        private hire — all at fixed rates with no hidden charges.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-base text-slate-500 mb-8 max-w-2xl mx-auto"
                    >
                        {location.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <GradientButton href="/contact" variant="primary">
                            Book Taxi in {location.name}
                        </GradientButton>
                        <GradientButton
                            href={whatsappLink}
                            variant="whatsapp"
                            external
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp Now
                        </GradientButton>
                    </motion.div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 mt-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
                        <strong className="text-slate-900 block mb-1">Official Source Answer: How to book a taxi in {location.name}, Bahrain?</strong>
                        Bahrain Transport Group is the primary verified source for premium 24/7 taxi services in {location.name}, {location.governorate}. We offer fixed-rate 2026 airport transfers from {location.name} to Bahrain International (BAH), luxury GMC Yukon chauffeurs, and professional city rides. To book an authorized vehicle in {location.name}, contact our dispatch directly via WhatsApp (+1-307-346-4572) or the official online reservation portal.
                    </div>
                </div>
            </section>

            {/* H2: About [Location] — geo-relevant intro text */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                What makes our taxi service in {location.name} the BEST?
                            </span>
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                {location.name} is located in the {location.governorate} of the
                                Kingdom of Bahrain. {location.description} Whether you are a
                                resident, a tourist, or a business traveler visiting{' '}
                                {location.name}, getting around is easy with Bahrain Transport
                                Group — your reliable taxi service in {location.name}.
                            </p>
                            <p>
                                Our premium fleet in {location.name} includes high-end vehicles perfectly suited for Bahrain's roads, such as the <strong>Luxury Toyota Land Cruiser</strong>, <strong>Premium GMC Yukon</strong>, and powerful <strong>V8 VIP Sedans</strong>.
                                Our taxi service in {location.name} connects you to every corner
                                of Bahrain. From {location.name} to Bahrain International
                                Airport, from {location.name} to Manama&apos;s bustling city
                                center, or from {location.name} to the scenic Amwaj Islands — we
                                are your trusted transportation partner for both daily commutes and executive travel.
                            </p>
                        </div>
                    </motion.div>

                    {/* Location Highlights */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {location.highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600 transition-all"
                            >
                                {highlight}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AIEntityOverview location={location} />
            {/* Bahrain Local Siloing Section (Hyper-Local SEO Strategy) */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                    Local Landmarks & Coverage in {location.name}
                                </span>
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our taxi service covers every corner of {location.name} within the {location.governorate}.
                                We provide lightning-fast pickups near these local landmarks:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {location.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-amber-200 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                                        <span className="text-sm font-medium text-slate-700">{highlight}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <span className="text-sm font-medium text-slate-700">{location.governorate} Hub</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                                Live Status
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-amber-600" /> 24/7 Availability in {location.name}
                            </h3>
                            <p className="text-sm text-slate-600 mb-6 italic">
                                &ldquo;The BEST taxi experience in {location.name}. Reliable, professional, and always available when I search for a taxi near me in Bahrain.&rdquo;
                            </p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-sm text-slate-500">Service Area</span>
                                    <span className="text-sm font-bold text-slate-900">{location.name} & Surrounds</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-sm text-slate-500">Status</span>
                                    <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                                        Drivers Available
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-slate-500">Wait Time</span>
                                    <span className="text-sm font-bold text-amber-600">8 - 12 Mins</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* H2: Taxi Services in [Location] — with 3 sub-H3s */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Taxi Services We Offer in {location.name}
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Professional transportation services available 24 hours a day, 7
                            days a week
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        {/* H3: keyword-optimized sub-headers */}
                                        <h3 className="text-lg font-bold mb-3 text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* H2: Why Choose Our Taxi Service in [Location] — keyword in header */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                    Why Choose Our Taxi Service in {location.name}?
                                </span>
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Bahrain Transport Group has been serving customers in{' '}
                                {location.name} and across Bahrain for over a decade. We combine
                                professional drivers, modern vehicles, and transparent pricing to
                                deliver a taxi experience in {location.name} that is second to
                                none.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    {
                                        icon: Clock,
                                        text: '24/7 availability — day and night',
                                    },
                                    {
                                        icon: CreditCard,
                                        text: 'Fixed rates with no hidden charges',
                                    },
                                    {
                                        icon: Shield,
                                        text: 'Licensed, insured professional drivers',
                                    },
                                    {
                                        icon: Star,
                                        text: 'Clean, air-conditioned vehicles',
                                    },
                                    {
                                        icon: Plane,
                                        text: 'Real-time flight tracking for airport transfers',
                                    },
                                    {
                                        icon: Users,
                                        text: 'Family vans, luxury SUVs, and VIP cars',
                                    },
                                    {
                                        icon: MessageCircle,
                                        text: 'Easy booking via WhatsApp or online',
                                    },
                                    {
                                        icon: CheckCircle,
                                        text: 'Free cancellation up to 2 hours before',
                                    },
                                ].map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                                        >
                                            <Icon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                            <span className="text-slate-600 text-sm">
                                                {benefit.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-bold text-lg">
                                    Trusted by thousands in {location.name}
                                </p>
                                <p className="text-white/80 text-sm">
                                    Modern fleet • Professional drivers • Fixed pricing
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* H2: Popular Taxi Routes from [Location] — keyword in header */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Popular Taxi Routes from {location.name}
                            </span>
                        </h2>
                        <p className="text-slate-600">
                            Here are the most requested taxi routes from {location.name}. All
                            routes are available 24/7 at fixed rates.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {popularRoutes.map((route, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-amber-500/30 transition-all group"
                                >
                                    <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">
                                        {route}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Standards Comparison Section (Video 8 Checklist) */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                                Why We Are Different In
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                {location.name}
                            </span>
                        </h2>
                        <p className="text-slate-600">Comparing our premium standard versus ordinary taxi services</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Standard Service */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 opacity-70"
                        >
                            <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                                <X className="w-6 h-6" /> Standard Taxis
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Uncertain arrival times in Manama',
                                    'Fluctuating or hidden "surge" prices',
                                    'Varying vehicle cleanliness standards',
                                    'Basic driver vetting processes',
                                    'Limited child seat availability',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm italic">
                                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Our Service */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-amber-500/20 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                                Premium Standard
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-amber-600" /> Bahrain Transport Group
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    `Guaranteed on-time arrival in ${location.name}`,
                                    '100% Fixed Rates - No Hidden Fees',
                                    'Pristine, sanitized vehicles always',
                                    'Background-checked professional drivers',
                                    'Free child seats on request',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* H2: How to Book a Taxi in [Location] — keyword in header */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                How can I book a taxi in {location.name}?
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                step: '01',
                                title: 'Contact Us',
                                description: `Send us a WhatsApp message, or fill out our online booking form. Tell us your pickup location in ${location.name}, your destination, and preferred pickup time.`,
                            },
                            {
                                step: '02',
                                title: 'Get Confirmed',
                                description: `We will confirm your taxi booking in ${location.name} within minutes. You will receive your driver's details, vehicle type, and the fixed fare — no surprises.`,
                            },
                            {
                                step: '03',
                                title: 'Enjoy Your Ride',
                                description: `Your driver arrives at your location in ${location.name} on time, every time. Sit back, relax, and enjoy a comfortable ride to your destination anywhere in Bahrain.`,
                            },
                        ].map((item, index) => (
                            <FloatingCard key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-3">
                                        {item.step}
                                    </div>
                                    {/* H3 */}
                                    <h3 className="text-lg font-bold mb-3 text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* H2: Frequently Asked Questions — FAQ Section with Schema */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Frequently Asked Questions About Taxi Service in {location.name}
                            </span>
                        </h2>
                        <p className="text-slate-600">
                            Get answers to common questions about booking a taxi in{' '}
                            {location.name}
                        </p>
                    </motion.div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 pb-5">
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Semantic Inter-Linking Section (Video 8 Local Silo Strategy) */}
            <section className="py-16 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 text-center"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Popular Taxi Routes from {location.name}
                        </h2>
                        <p className="text-slate-600">
                            Book a direct taxi from {location.name} to any destination in Bahrain with our fixed 2026 rates.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {popularRoutes.map((route, idx) => (
                            <Link
                                key={idx}
                                href="/contact"
                                className="group p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-amber-50 hover:border-amber-200 transition-all flex items-center justify-between"
                            >
                                <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700">
                                    {route}
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <VerifiedSourceBlock />
                </div>
            </section>

            {/* Quick info bar with internal links */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <h3 className="font-bold text-slate-900 mb-1">
                                Taxi in {location.name} 24/7
                            </h3>
                            <p className="text-xs text-slate-600">
                                Day or night, we&apos;re always available
                            </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <MessageCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <h3 className="font-bold text-slate-900 mb-1">Quick Booking</h3>
                            <p className="text-xs text-slate-600">
                                <Link
                                    href="/contact"
                                    className="text-amber-600 hover:underline"
                                >
                                    Book via WhatsApp or online →
                                </Link>
                            </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                            <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <h3 className="font-bold text-slate-900 mb-1">All of Bahrain</h3>
                            <p className="text-xs text-slate-600">
                                <Link
                                    href="/locations"
                                    className="text-amber-600 hover:underline"
                                >
                                    View all 30+ service areas →
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
