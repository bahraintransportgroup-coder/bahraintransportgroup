import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'Terms and Conditions | Bahrain Transport Group',
    description: 'Terms and Conditions for Bahrain Transport Group. View cancellation policies, booking terms, and usage restrictions.',
    canonicalUrl: 'https://bahraintransportgroup.com/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-slate-50 pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
                    <p className="text-sm text-slate-500 mb-10">Last Updated: January {currentYear}</p>

                    <div className="prose prose-slate max-w-none">

                        <p className="text-slate-600 leading-relaxed mb-6">
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Bahrain Transport Group if you do not agree to take all of the terms and conditions stated on this page.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Taxi Booking Reservations</h2>
                        <ul className="list-disc pl-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li>All bookings are confirmed once our WhatsApp dispatch replies to you affirmatively.</li>
                            <li>Pricing is quoted 100% fixed at the time of reservation.</li>
                            <li>We reserve the right to cancel bookings if passenger information is falsified or hostile.</li>
                            <li>Wait periods exceeding 15 minutes at standard pickup locations (non-airport) may incur a small surcharge which will be communicated transparently.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Airport Transfer Wait Times</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            For Airport Arrivals at Bahrain International Airport, our drivers monitor flight statuses in real-time. There is no surcharge for delayed flights. We offer 45 minutes of free waiting time from the moment the flight successfully lands on the tarmac.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Consumer Protection & EEAT Cancellation Policy</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            We pride ourselves on an honest, transparent refund & cancellation policy to build trust with local passengers and international visitors:
                        </p>
                        <ul className="list-disc pl-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li><strong>Free Cancellation:</strong> Available up to exactly 2 hours before the scheduled dispatch time.</li>
                            <li><strong>Late Cancellation:</strong> May result in a localized non-refundable booking deposit for future uses.</li>
                            <li><strong>No-Shows:</strong> If a passenger fails to arrive without contacting our operator, full price is owed natively or a strike penalty placed against the mobile number.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Liability Limitations</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            While we always ensure the utmost safety by utilizing registered, verified drivers and fully insured luxury vehicles, Bahrain Transport Group is not responsible for missed flights due to exceptional uncontrollable circumstances (Force Majeure such as severe weather hazards or sudden, unpredictable severe roadblocks on major highways).
                        </p>

                        <hr className="my-8 border-slate-200" />

                        <p className="text-slate-600 leading-relaxed">
                            Questions regarding these terms? <a href="/contact" className="text-amber-600 hover:underline">Reach out to our operations team</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
