import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { CTASection } from '@/components/cta-section';
import { LocationsContent } from '@/components/locations-content';

export const metadata: Metadata = generateSEO({
    title: 'Taxi Service Areas in Bahrain - All Locations Covered',
    description:
        'Bahrain Transport Group covers every governorate and city in Bahrain. Manama, Muharraq, Riffa, Saar, Amwaj Islands, Budaiya, Isa Town, and 30+ more areas. Book your ride now!',
    keywords:
        'taxi service bahrain locations, taxi manama, taxi muharraq, taxi riffa, taxi saar, taxi amwaj islands, bahrain taxi locations, taxi isa town, taxi budaiya, taxi service areas bahrain',
    canonicalUrl: 'https://bahraintransportgroup.com/locations',
});

export default function LocationsPage() {
    return (
        <div className="bg-white">
            <LocationsContent />
            <CTASection />
        </div>
    );
}
