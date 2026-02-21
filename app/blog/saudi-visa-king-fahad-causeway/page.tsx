import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { Shield, Info, MapPin, CheckCircle, FileText } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Saudi Visa & King Fahad Causeway Entry Rules 2026 | BTG Guide',
    description: 'Essential guide for Saudi Visa requirements, King Fahad Causeway tolls, and entry protocols for travelers crossing from Bahrain to Saudi Arabia by road.',
    keywords: 'saudi visa for bahrain residents, king fahad causeway rules 2026, bahrain to saudi road trip, causeway toll fees',
    canonicalUrl: 'https://bahraintransportgroup.com/blog/saudi-visa-king-fahad-causeway',
});

export default function VisaGuidePage() {
    return (
        <div className="bg-white">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-0">
                <header className="mb-12">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
                        Border Protocol
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        King Fahad Causeway: <span className="text-amber-600">Saudi Visa</span> & Entry Guide 2026
                    </h1>
                </header>

                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        Crossing the 25km King Fahad Causeway requires more than just a car. For a seamless transit between the Kingdom of Bahrain and the Eastern Province of Saudi Arabia, understanding the latest visa and car <strong>customs protocols</strong> is essential.
                    </p>

                    <div className="bg-slate-50 border-l-4 border-amber-500 p-8 rounded-r-3xl mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5" /> The Professional Transit Secret
                        </h2>
                        <p className="text-slate-700 italic">
                            "Most travelers struggle with insurance and toll payments at the border. The most efficient way to cross is by using a <strong>pre-vetted professional chauffeur service</strong> that handles all vehicle-related fees internally."
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Visa Requirements for 2026</h2>
                    <p>
                        Whether you are a GCC national, an expat on a residence permit, or a tourist, your visa must be processed before arriving at the causeway island.
                    </p>
                    <ul>
                        <li><strong>GCC Nationals:</strong> Only ID/Passport required.</li>
                        <li><strong>E-Visa Holders:</strong> Ensure your multiple-entry visa is active via the official Absher portal.</li>
                        <li><strong>Expat Residents:</strong> Requires a valid exit-reentry visa if departing from Bahrain.</li>
                    </ul>

                    {/* REVERSE SILO LINK - Target Page: Dammam Taxi */}
                    <div className="my-12 p-8 bg-amber-600 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Need a Stress-Free Border Crossing?</h3>
                            <p className="text-amber-100 mb-8 max-w-lg">
                                Skip the paperwork and insurance queues. Our <strong>Bahrain to Dammam Taxi</strong> service includes all tolls, vehicle insurance, and professional drivers who handle the logistics for you.
                            </p>
                            <Link href="/bahrain-to-dammam-taxi">
                                <span className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all inline-block shadow-lg">
                                    View Dammam Fixed Rates →
                                </span>
                            </Link>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">2. Crossing Protocols & Tolls</h2>
                    <p>
                        Current toll fees for small vehicles are 2.5 BHD (or 25 SAR). However, the queue management system for private cars can take between 60 to 180 minutes during peak weekend hours.
                    </p>
                    <p>
                        Our <strong>fixed-fee protocol</strong> means you don't have to carry local currency for tolls. We manage the E-wallet payments at the gates, ensuring you move through the transit lanes as fast as technically possible.
                    </p>
                </div>
            </article>
            <CTASection />
        </div>
    );
}
