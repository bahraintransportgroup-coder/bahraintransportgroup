import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { Plane, Ship, MapPin } from 'lucide-react';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = generateSEO({
    title: 'Bahrain to Saudi Arabia Airports | Full Taxi & Charter Directory',
    description: 'Directory of taxi and long-distance charter transfers from Bahrain to every major Saudi Arabia airport: Dammam, Riyadh, Jeddah, Medina, Abha, Tabuk, and more.',
    keywords: 'bahrain to saudi arabia airport taxi, bahrain saudi airport transfer directory, taxi bahrain saudi arabia airports',
    canonicalUrl: 'https://bahraintransportgroup.com/saudi-arabia-airports',
});

const directRoutes = [
    { name: 'Dammam (King Fahd) International Airport', code: 'DMM', distance: '~130km', href: '/bahrain-to-dammam-airport-taxi' },
    { name: 'Riyadh (King Khalid) International Airport', code: 'RUH', distance: '~480km', href: '/bahrain-to-riyadh-airport-taxi' },
    { name: 'Al-Qassim (Prince Nayef bin Abdulaziz) Airport', code: 'ELQ', distance: '~800km', href: '/bahrain-to-qassim-airport-taxi' },
    { name: 'Hail International Airport', code: 'HAS', distance: '~950km', href: '/bahrain-to-hail-airport-taxi' },
];

const charterRoutes = [
    { name: 'Jeddah (King Abdul Aziz) International Airport', code: 'JED', distance: '~1,300km', href: '/bahrain-to-jeddah-airport-taxi' },
    { name: 'Jeddah Islamic Port', code: '', distance: '~1,300km', href: '/bahrain-to-jeddah-port-taxi' },
    { name: 'Medina International Airport', code: 'MED', distance: '~1,300km', href: '/bahrain-to-medina-airport-taxi' },
    { name: 'Taif Regional Airport', code: 'TIF', distance: '~1,250km', href: '/bahrain-to-taif-airport-taxi' },
    { name: 'Yanbu Airport', code: 'YNB', distance: '~1,150km', href: '/bahrain-to-yanbu-airport-taxi' },
    { name: 'Al-Jawf Domestic Airport', code: 'AJF', distance: '~1,450km', href: '/bahrain-to-aljawf-airport-taxi' },
    { name: 'Al-Baha Domestic Airport', code: 'ABT', distance: '~1,550km', href: '/bahrain-to-albaha-airport-taxi' },
    { name: 'Al Ula International Airport', code: 'ULH', distance: '~1,600km', href: '/bahrain-to-alula-airport-taxi' },
    { name: 'Abha International Airport', code: 'AHB', distance: '~1,650km', href: '/bahrain-to-abha-airport-taxi' },
    { name: 'Tabuk Regional Airport', code: 'TUU', distance: '~1,750km', href: '/bahrain-to-tabuk-airport-taxi' },
    { name: 'Jizan Regional Airport', code: 'GIZ', distance: '~1,850km', href: '/bahrain-to-jizan-airport-taxi' },
];

export default function SaudiArabiaAirportsPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Bahrain to <span className="text-amber-600">Saudi Arabia Airports</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Every major Saudi Arabia airport, reachable by road via the King Fahad Causeway. Nearby airports get a direct, fixed-rate transfer; further ones are offered as a long-distance charter or, more commonly, a flight plus local pickup.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Plane className="w-6 h-6 text-amber-600" /> Direct Fixed-Rate Transfers
                    </h2>
                    <p className="text-slate-500 mb-6 text-sm">Same-day road transfer, no flight needed.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {directRoutes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-amber-400 hover:bg-amber-50/50 transition-all group"
                            >
                                <div>
                                    <p className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{route.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{route.code && `${route.code} • `}{route.distance} from Bahrain</p>
                                </div>
                                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Ship className="w-6 h-6 text-amber-600" /> Long-Distance Charter (Custom Quote)
                    </h2>
                    <p className="text-slate-500 mb-6 text-sm">1,100km+ from Bahrain — road charter available, or ask about flight + local pickup at your arrival airport.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {charterRoutes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:border-amber-400 hover:bg-amber-50/50 transition-all group"
                            >
                                <div>
                                    <p className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{route.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{route.code && `${route.code} • `}{route.distance} from Bahrain</p>
                                </div>
                                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <CTASection />
        </div>
    );
}
