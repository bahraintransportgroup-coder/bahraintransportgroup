import Link from 'next/link';
import { GradientButton } from '@/components/gradient-button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | Bahrain Transport Group',
    description: 'The page you are looking for does not exist.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="bg-white min-h-[80vh] flex items-center justify-center pt-20">
            <div className="max-w-xl mx-auto px-4 text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <MapPin className="w-12 h-12 text-amber-600" />
                </div>
                <h1 className="text-7xl font-bold text-slate-900 mb-4 tracking-tighter">404</h1>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-6">
                    Destination Not Found
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Bahrain Transport Group's route map doesn't currently include this destination. The requested page might have been retired or moved as part of the 2026 infrastructure update.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <GradientButton href="/" variant="primary">
                        Return to Homepage
                    </GradientButton>
                    <Link href="/locations" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        View Valid Service Areas <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
