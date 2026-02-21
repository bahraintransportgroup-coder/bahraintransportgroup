import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Building2, Briefcase, UserCheck, Shield, Clock, MessageCircle, Star } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Corporate & VIP Chauffeur Bahrain | Executive Business Travel',
    description: 'Premium corporate transportation and VIP chauffeur services in Bahrain. Professional drivers, luxury fleet, and dedicated account management for businesses and diplomatic missions.',
    keywords: 'corporate taxi bahrain, executive chauffeur manama, vip transport bahrain, business travel bahrain, diplomatic transport',
    canonicalUrl: 'https://bahraintransportgroup.com/corporate-travel',
});

const features = [
    {
        icon: Briefcase,
        title: 'Business-Class Cabin',
        description: 'Impeccably maintained luxury sedans and SUVs including Mercedes-Benz and BMW, providing a quiet environment for work or relaxation.',
    },
    {
        icon: UserCheck,
        title: 'Professional Chauffeurs',
        description: 'English and Arabic-speaking chauffeurs, professionally dressed and trained in executive etiquette and discretion.',
    },
    {
        icon: Clock,
        title: 'Reliable Punctuality',
        description: 'On-time arrival guaranteed for board meetings, airport arrivals, and corporate roadshows across the Kingdom.',
    },
    {
        icon: Shield,
        title: 'VIP Security',
        description: 'Priority handling and specialized logistical support for diplomatic missions and high-profile executives.',
    },
];

export default function CorporateTravelPage() {
    const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent('Hello Bahrain Transport Group! I would like to discuss corporate transportation services for my company.')}`;

    return (
        <div className="bg-white">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-full mb-6">
                        <Star className="w-8 h-8 text-amber-500" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                            Corporate & VIP
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">Travel Solutions</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Bahrain Transport Group is the preferred logistical partner for corporate executives, diplomatic missions, and luxury travelers in Bahrain. We offer bespoke chauffeur-driven solutions that reflect your organization's professional standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="primary" external>
                            Open Corporate Account
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-12 text-slate-300 leading-relaxed shadow-xl max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <Building2 className="w-6 h-6 text-amber-500" />
                            Why choose us for corporate transport?
                        </h2>
                        <p>
                            We provide <strong>dedicated account managers</strong>, consolidated invoicing, and a 24/7 priority dispatch line for our corporate partners. Our fleet consists strictly of <strong>late-model executive vehicles</strong>, ensuring your clients and executives travel in absolute comfort. We cover all major business hubs including the <strong>Bahrain Financial Harbour</strong>, <strong>Seef District</strong>, and <strong>Bahrain International Investment Park (BIIP)</strong>.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Corporate Chauffeur Service" city="Manama & Seef" />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                                Executive Mobility Standards
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-slate-900 transition-all duration-300">
                                            <Icon className="w-8 h-8 text-slate-900 group-hover:text-amber-500" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm">{feature.description}</p>
                                    </div>
                                </FloatingCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">Our Fleet for Business</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                            Select from our premium vehicle categories tailored for business requirements.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['VIP Black Car', 'Business SUV', 'Luxury Van'].map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                                <h3 className="font-bold text-slate-900 mb-2">{v}</h3>
                                <p className="text-sm text-slate-500 mb-4">Mercedes/BMW equivalent</p>
                                <Link href="/fleet" className="text-amber-600 text-sm font-semibold hover:underline">View Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}

import Link from 'next/link';
