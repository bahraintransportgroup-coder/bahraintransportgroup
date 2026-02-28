'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Briefcase, Car } from 'lucide-react';

export function InternalLinks() {
    const pathname = usePathname();

    if (!pathname) return null;

    const isHome = pathname === '/';
    const isService = ['/airport-transfer', '/saudi-causeway', '/city-taxi', '/student-transport', '/pet-transport', '/corporate-travel', '/fare-calculator'].includes(pathname);
    const isLocation = pathname.includes('/locations/');
    const isRoute = pathname.includes('/routes/') || pathname.includes('-to-');

    // Only display the block on home, services, routes, and location pages (SILO structure)
    if (!isHome && !isService && !isLocation && !isRoute) return null;

    return (
        <section className="bg-slate-50 border-t border-slate-200 py-12 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900">Explore Bahrain Transport Group</h3>
                    <p className="text-slate-500 mt-2 text-sm">Discover our top-rated transportation services across the Kingdom.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Main Hub - 2 Links to Home (For Silo Architecture) */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5 text-amber-600" />
                            Main Hub
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Bahrain Transport Group
                                </Link>
                                <p className="text-xs text-slate-400 ml-5 mt-1">Our official home for all bookings & schedules.</p>
                            </li>
                            <li>
                                <Link href="/" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Reliable Taxi Bahrain
                                </Link>
                                <p className="text-xs text-slate-400 ml-5 mt-1">Return to the top rated local cab service platform.</p>
                            </li>
                            {(isLocation || isRoute || isService) && (
                                <li className="pt-2">
                                    <Link href="/locations" className="text-amber-600 font-medium hover:underline flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg">
                                        View All Target Locations
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Premium Services - 5 Links to Service Pages */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-amber-600" />
                            Premium Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/airport-transfer" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Bahrain Airport Transfers
                                </Link>
                            </li>
                            <li>
                                <Link href="/saudi-causeway" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Saudi Causeway Taxi
                                </Link>
                            </li>
                            <li>
                                <Link href="/city-taxi" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Local City Taxi Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/corporate-travel" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    VIP Corporate Transit
                                </Link>
                            </li>
                            <li>
                                <Link href="/pet-transport" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Pet-Friendly Cabs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Top Service Areas - 5 Links to Location Pages */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-amber-600" />
                            Top Service Areas
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/locations/manama" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Taxi Service in Manama
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/muharraq" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Taxi Service in Muharraq
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/riffa" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Riffa Local Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/juffair" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Juffair Transit & Cab
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/saar" className="text-slate-600 hover:text-amber-600 transition-colors flex items-center before:content-['›'] before:text-amber-500 before:mr-2 before:text-lg font-medium">
                                    Saar Area Taxi Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
