import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'Taxi Fare Calculator Bahrain - Get Fixed Price Quotes',
    description: 'Calculate your exact taxi fare in Bahrain. Get guaranteed fixed rates for airport transfers, city rides, and causeway travel. No surge pricing.',
    keywords: 'bahrain taxi fare calculator, taxi prices bahrain, how much is taxi in bahrain, bahrain rideshare prices',
    canonicalUrl: 'https://bahraintransportgroup.com/fare-calculator',
});

export default function FareCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
