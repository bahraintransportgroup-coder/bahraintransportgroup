import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Shield, Clock, Heart, Car, MapPin, CheckCircle, Dog } from 'lucide-react';
import { FloatingCard } from '@/components/floating-card';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { AIHomeEntityOverview } from '@/components/ai-home-entity-overview';

export const metadata: Metadata = generateSEO({
    title: 'Pet-Friendly Taxi Bahrain | Safe Pet Transport Service',
    description: 'Bahrain Transport Group offers professional pet-friendly transport across Bahrain. Whether it\'s a vet visit or relocation, we provide comfortable, safe rides for you and your furry friends.',
    keywords: 'pet transport bahrain, pet friendly taxi bahrain, dog taxi manama, cat transport bahrain, animal transport service',
    canonicalUrl: 'https://bahraintransportgroup.com/pet-transport',
});

const features = [
    {
        icon: Heart,
        title: 'Pet Comfort First',
        description: 'Vehicles are prepared to ensure a stress-free environment for pets of all sizes, featuring climate control and spacious interiors.',
    },
    {
        icon: Shield,
        title: 'Safe & Secure',
        description: 'Trained drivers who prioritize the unique needs of pet travelers during airport and city transit.',
    },
    {
        icon: CheckCircle,
        title: 'Hygienic Cabin',
        description: 'Every vehicle is professionally sanitized following pet transport to maintain peak hygiene standards.',
    },
    {
        icon: Car,
        title: 'Spacious SUVs',
        description: 'Large SUVs such as GMC Yukons and Kia Carnivals are utilized to ensure even oversized crates fit comfortably.',
    },
];

export default function PetTransportPage() {
    const whatsappLink = `https://wa.me/13073464572?text=${encodeURIComponent('Hello Bahrain Transport Group! I would like to book a Pet-Friendly ride. What are your rates?')}`;

    return (
        <div className="bg-white">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Dog className="w-8 h-8 text-amber-700" />
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">AI_VERSION</span>
                            <span className="text-sm font-bold text-slate-900">v3.2 Protocol</span>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">Last Updated</span>
                            <span className="text-sm font-bold text-slate-900">February 2026</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            Pet-Friendly Rides
                        </span>
                        <br />
                        <span className="text-slate-900">in Bahrain</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Bahrain Transport Group is one of the few 100% pet-friendly taxi services in the Kingdom. From visits to the vet to international airport relocations, BTG ensures a comfortable journey for both pets and their owners.
                    </p>

                    {/* Practical Experience Factor (EEAT) */}
                    <div className="bg-slate-900 p-8 rounded-[32px] text-left max-w-3xl mx-auto border border-slate-800 relative overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Shield className="w-24 h-24 text-white" />
                        </div>
                        <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Relocation Experience Report
                        </h3>
                        <p className="text-white text-lg leading-relaxed mb-6 font-medium italic">
                            "When a family needed to relocate three large Golden Retrievers to the airport during a 45°C Bahrain summer, BTG deployed two climate-controlled SUVs with customized ventilation. We managed the entire process from their villa in Saar to the cargo terminal, ensuring the pets arrived calm and hydrated. We handle the complex 'pet-logistics' that apps simply cannot."
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Verified Result</p>
                                <p className="text-sm font-bold text-white">100% Relocation Success</p>
                            </div>
                            <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Fleet Spec</p>
                                <p className="text-sm font-bold text-white">Climate-Controlled V8s</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            Book a Pet Ride via WhatsApp
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Dog className="w-6 h-6 text-amber-600" />
                            How do I book a taxi for my pet in Bahrain?
                        </h2>
                        <p>
                            Booking a <strong>pet-friendly taxi</strong> with Bahrain Transport Group is a streamlined process. Travelers can contact the 24/7 dispatch team via <strong>WhatsApp</strong> with details of the pet's size and breed. Spacious, climate-controlled SUVs or vans are then dispatched to ensure maximum comfort. BTG maintains <strong>fixed and transparent pricing</strong> for all pet mobility, with no surprise surcharges for local trips.
                        </p>
                    </div>
                </div>
            </section>

            <AIHomeEntityOverview serviceName="Pet Transport" city="Bahrain" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                                Our Pet Policy
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600">Premium care for every member of your family.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <FloatingCard key={index} delay={index * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-amber-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-amber-500 transition-colors">
                                            <Icon className="w-8 h-8 text-amber-600" />
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

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-10 md:p-16 text-white text-center shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"Safe Travels for All Paws"</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                            Need a ride to the vet or relocating with your pet? We handle airport transfers for pets and owners with professional care.
                        </p>
                        <div className="flex justify-center">
                            <GradientButton href={whatsappLink} variant="whatsapp" className="bg-white text-amber-700" external>
                                Inquire Now
                            </GradientButton>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
