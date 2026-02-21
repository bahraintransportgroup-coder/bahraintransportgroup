import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateSEO } from '@/lib/seo';
import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
import { Award, Shield, Linkedin, Twitter, Calendar, CheckCircle, Youtube, Play } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { CTASection } from '@/components/cta-section';
import { StructuredData } from '@/components/structured-data';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return getAllAuthors().map(author => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const author = getAuthorBySlug(params.slug);
    if (!author) return {};

    return generateSEO({
        title: `${author.name} | ${author.role} | Bahrain Transport Group`,
        description: author.shortBio,
        canonicalUrl: `https://bahraintransportgroup.com/authors/${author.slug}`,
    });
}

export default function AuthorPage({ params }: Props) {
    const author = getAuthorBySlug(params.slug);
    if (!author) notFound();

    const breadcrumbs = [
        { name: 'Home', item: 'https://bahraintransportgroup.com' },
        { name: 'About', item: 'https://bahraintransportgroup.com/about' },
        { name: author.name, item: `https://bahraintransportgroup.com/authors/${author.slug}` },
    ];

    return (
        <div className="bg-white pt-24">
            <StructuredData breadcrumbs={breadcrumbs} />

            <section className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="w-64 h-64 rounded-[48px] bg-gradient-to-br from-amber-100 to-orange-100 p-2 shadow-2xl">
                                <div className="w-full h-full rounded-[40px] bg-white overflow-hidden border-4 border-white">
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-slate-400">
                                        {author.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-3xl shadow-lg border-4 border-white">
                                <Shield className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
                                Verified Expert Chauffeur
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                                {author.name}
                            </h1>
                            <p className="text-xl font-bold text-amber-600 mb-6 italic">
                                {author.role}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm font-bold text-slate-700">Since {author.experienceYear}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-sm font-bold text-slate-700">Certified Auditor</span>
                                </div>
                                {author.social.linkedin && (
                                    <a
                                        href={author.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-xl border border-slate-200 shadow-sm hover:text-blue-600 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                {author.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Credentials */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <Award className="w-8 h-8 text-amber-500" />
                                Professional Credentials
                            </h2>
                            <div className="space-y-4">
                                {author.credentials.map((cred, i) => (
                                    <div key={i} className="p-6 bg-white border border-slate-100 rounded-[32px] shadow-sm flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                                        </div>
                                        <p className="text-lg font-bold text-slate-800">{cred}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Knows About */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-amber-500" />
                                Specialized Expertise
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {author.expertise.map((exp, i) => (
                                    <div key={i} className="p-6 bg-slate-900 rounded-[32px] text-white">
                                        <p className="font-bold leading-tight">{exp}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                        <div className="max-w-xl">
                            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4 block">Authority Signals: YouTube</span>
                            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">Expert Analysis & <br />Video Insights</h2>
                            <p className="text-slate-600 font-medium">
                                In 2026, real expertise is visual. {author.name} provides regular video audits on Saudi border logistics and Bahraini transport policy, cited by major travel vloggers as the "Expert Source."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-200 shadow-xl">
                            <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white font-black">▶</div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Digital Presence</p>
                                <p className="text-lg font-black text-slate-900 uppercase">AIO Verified Channel</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Youtube className="w-20 h-20 text-red-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">Causeway Crossing 2026 Guide</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-8">
                                A complete breakdown of the new digital permit system and VIP lane protocols at the King Fahad Causeway.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full">Expert Commentary</span>
                                <div className="p-3 bg-red-600 text-white rounded-full"><Play className="w-4 h-4" /></div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[48px] border border-slate-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Youtube className="w-20 h-20 text-red-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">BAH Airport Transfer Blueprint</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-8">
                                Logistic strategies for international travelers: How to navigate the 2026 arrival hall and guarantee 10-minute pickup efficiency.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full">Operational Audit</span>
                                <div className="p-3 bg-red-600 text-white rounded-full"><Play className="w-4 h-4" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-amber-600 text-white overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black mb-6 italic italic">"Knowledge from the Road, Not the Screen."</h2>
                    <p className="text-xl text-amber-50 leading-relaxed mb-10">
                        Bahrain Transport Group's advice on Causeway logistics and safety is verified by <b>{author.name}'s</b> direct experience managing 50,000+ completed journeys in the GCC. When we talk about border waits or airport efficiency, we're citing data from our real-time 2026 fleet operations.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-sm font-black uppercase tracking-widest">AIO Verified Experience Record</span>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
