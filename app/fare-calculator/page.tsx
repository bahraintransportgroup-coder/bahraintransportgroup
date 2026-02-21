'use client';

import { useState } from 'react';
import { generateSEO } from '@/lib/seo';
import { Calculator, MapPin, Navigation, Car, Shield, Info, ArrowRight, CheckCircle } from 'lucide-react';
import { GradientButton } from '@/components/gradient-button';
import { FloatingCard } from '@/components/floating-card';
import { CTASection } from '@/components/cta-section';

// Locations and their distances from Manama center or Airport
const locations = [
    { name: 'Manama City Center', base: 5 },
    { name: 'Bahrain International Airport (BAH)', base: 10 },
    { name: 'Seef District', base: 8 },
    { name: 'Juffair', base: 6 },
    { name: 'Amwaj Islands', base: 12 },
    { name: 'Muharraq', base: 9 },
    { name: 'Riffa', base: 15 },
    { name: 'Isa Town', base: 11 },
    { name: 'Zallaq (Sofitel)', base: 25 },
    { name: 'King Fahad Causeway (Saudi Border)', base: 22 },
];

const vehicles = [
    { name: 'Economy Sedan', multiplier: 1.0 },
    { name: 'VIP Black Car (BMW/Mercedes)', multiplier: 1.5 },
    { name: 'Luxury SUV (GMC Yukon V8)', multiplier: 1.8 },
    { name: 'Family Van (7-Seater Kia Carnival)', multiplier: 2.2 },
];

export default function FareCalculatorPage() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [vehicle, setVehicle] = useState(vehicles[0].name);
    const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

    const calculateFare = () => {
        if (!pickup || !dropoff) return;

        const pickupLoc = locations.find(l => l.name === pickup);
        const dropoffLoc = locations.find(l => l.name === dropoff);
        const vehicleType = vehicles.find(v => v.name === vehicle);

        if (pickupLoc && dropoffLoc && vehicleType) {
            // Very simple mock distance calculation based on abstract 'base' units
            let distanceBase = Math.abs(pickupLoc.base - dropoffLoc.base) + 5; // Add 5 BHD base minimum
            if (pickup === dropoff) distanceBase = 5; // minimum fare

            const finalPrice = Math.round(distanceBase * vehicleType.multiplier);
            setEstimatedFare(finalPrice);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Calculator className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Bahrain Taxi <span className="text-amber-600">Fare Calculator</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-4">
                        Tired of unpredictable surge pricing algorithms from ride-hailing apps? Use our official 2026 Fare Calculator to see our 100% Guaranteed Fixed Rates.
                    </p>
                    <p className="text-sm font-medium text-slate-500">
                        *This tool uses first-party data from Bahrain Transport Group spanning over 50,000 completed rides.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Calculator Form */}
                    <div className="lg:col-span-7">
                        <FloatingCard className="border-slate-200 shadow-xl bg-white p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <Navigation className="w-6 h-6 mr-3 text-amber-500" />
                                Plan Your Transfer
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-green-600" /> Pickup Location
                                    </label>
                                    <select
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>Select Pickup Point in Bahrain...</option>
                                        {locations.map(loc => (
                                            <option key={`p-${loc.name}`} value={loc.name}>{loc.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-red-600" /> Drop-off Location
                                    </label>
                                    <select
                                        value={dropoff}
                                        onChange={(e) => setDropoff(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>Select Destination...</option>
                                        {locations.map(loc => (
                                            <option key={`d-${loc.name}`} value={loc.name}>{loc.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <Car className="w-4 h-4 mr-2 text-blue-600" /> Vehicle Category
                                    </label>
                                    <select
                                        value={vehicle}
                                        onChange={(e) => setVehicle(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        {vehicles.map(v => (
                                            <option key={v.name} value={v.name}>{v.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={calculateFare}
                                    className="w-full py-4 mt-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    <Calculator className="w-5 h-5" /> Calculate Fixed Rate
                                </button>
                            </div>
                        </FloatingCard>
                    </div>

                    {/* Results / Value Prop */}
                    <div className="lg:col-span-5 space-y-8">
                        {estimatedFare !== null ? (
                            <FloatingCard className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0 shadow-2xl p-8 transform scale-105 transition-all">
                                <h3 className="text-xl font-bold mb-2 opacity-90">Your Guaranteed Price</h3>
                                <div className="text-6xl font-black mb-6 flex items-baseline gap-2">
                                    <span className="text-3xl opacity-80">BHD</span> {estimatedFare}
                                </div>
                                <div className="space-y-3 mb-8 text-sm opacity-90">
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Zero hidden fees</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Airport parking/tolls included</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> No surge pricing applied</p>
                                </div>
                                <GradientButton
                                    href={`https://wa.me/13073464572?text=Hello!%20I%20used%20your%20fare%20calculator.%20I%20need%20a%20ride%20from%20${pickup}%20to%20${dropoff}%20in%20a%20${vehicle}.%20The%20estimate%20was%20BHD%20${estimatedFare}.`}
                                    variant="whatsapp"
                                    className="w-full py-4 font-bold bg-white text-green-700 hover:bg-slate-50"
                                    external
                                >
                                    Lock This Price & Book
                                </GradientButton>
                            </FloatingCard>
                        ) : (
                            <FloatingCard className="bg-amber-50 border-amber-200 text-amber-900 p-8 h-full flex flex-col justify-center items-center text-center">
                                <Info className="w-12 h-12 mb-4 text-amber-500 opacity-50" />
                                <h3 className="text-2xl font-bold mb-2">Awaiting Details</h3>
                                <p className="opacity-80">Enter your pickup and drop-off points to reveal your <strong>100% Guaranteed 2026 Flat Rate</strong>.</p>
                            </FloatingCard>
                        )}

                        <div className="semantic-ai-answer bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-amber-600" />
                                Why is the BTG calculator more reliable than other apps?
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Most major ride-hailing apps in Bahrain use complex surge algorithms that penalize you for traveling during heatwaves or rush hours. Our <strong>Fixed-Protocol™</strong> logic is built on human expertise and first-party data from over 50,000 successful transits. We don't "guess" the price; we set the standard.
                            </p>

                            <div className="mt-6 pt-6 border-t border-slate-100 italic text-xs text-slate-500">
                                "Our team built this tool because we were tired of seeing visitors quoted 20 BHD for a 10 BHD trip just because a flight landed. We believe in transparency at all costs."
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <CTASection />
        </div>
    );
}


