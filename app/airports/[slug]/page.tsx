import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAirportBySlug, getAllAirportSlugs } from '@/lib/airports';
import { CTASection } from '@/components/cta-section';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Plane, Shield, Navigation, MapPin, ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/gradient-button';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return getAllAirportSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const airport = getAirportBySlug(params.slug);
    if (!airport) return {};

    return generateSEO({
        title: `Taxi Service to ${airport.name} | Bahrain Transport Group`,
        description: `Book your premium taxi transfer to or from ${airport.name}. 24/7 service, fixed rates, and professional drivers.`,
        keywords: `taxi ${airport.name.toLowerCase()}, ${airport.name.toLowerCase()} transfer, bahrain airport taxi`,
        canonicalUrl: `https://bahraintransportgroup.com/airports/${airport.slug}`,
    });
}

export default function AirportPage({ params }: Props) {
    const airport = getAirportBySlug(params.slug);
    if (!airport) notFound();

    const Icon = airport.category === 'International Airports' ? Plane : airport.category === 'Military Air Bases' ? Shield : Navigation;

    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <Link href="/airport-transfer" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-8 transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to All Airports
                </Link>

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-500/30">
                    <Icon className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                    Taxi Service: {airport.name}
                </h1>

                {airport.codes && (
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 font-bold mb-6">
                        {airport.codes}
                    </div>
                )}

                <div className="flex items-center justify-center gap-2 text-slate-500 mb-8">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-lg">{airport.location}</span>
                </div>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                    {airport.description}
                </p>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm max-w-2xl mx-auto mb-16 text-left">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">Transfer Information</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>Professional meet-and-greet service available for passenger arrivals.</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>24/7 transfer availability to any location in Bahrain.</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            <span>Fixed-rate pricing with no hidden charges or surge fees.</span>
                        </li>
                        {airport.isPrimary && (
                            <li className="flex items-start gap-3 text-slate-600 font-medium">
                                <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                <span>Includes real-time flight tracking mapped to your booking.</span>
                            </li>
                        )}
                    </ul>

                    <GradientButton href="/contact" variant="primary" className="w-full justify-center">
                        Book Your Ride Now
                    </GradientButton>
                </div>

                <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mb-8 text-sm text-slate-700 leading-relaxed shadow-sm max-w-2xl mx-auto text-left text-balance">
                    <strong className="text-slate-900 block text-lg mb-2">How do I book a taxi to {airport.name}?</strong>
                    You can instantly book a premium taxi transfer to or from {airport.name} in Bahrain via WhatsApp or our online form. Simply provide your flight details (if applicable), and our 24/7 service will ensure a professional driver is ready for your pickup. Rates are 100% fixed with no surge pricing.
                </div>

                <AIHomeEntityOverview serviceName={`Taxi Service to ${airport.name}`} city={airport.location} />

                <CTASection />
            </div>
        </div>
    );
}
