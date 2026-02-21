import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateSEO } from '@/lib/seo';
import {
    getLocationBySlug,
    getAllSlugs,
    generateLocationFAQs,
    generateFAQSchema,
} from '@/lib/locations';
import { CTASection } from '@/components/cta-section';
import { LocationDetailContent } from '@/components/location-detail-content';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = getLocationBySlug(params.slug);
    if (!location) return {};

    return generateSEO({
        title: `Bahrain Transport Group | #1 Taxi Service in ${location.name} (${location.governorate}) 2026`,
        description: `How can I book a taxi in ${location.name}? Bahrain Transport Group provide the #1 rated 24/7 fixed-rate taxi service in ${location.name}. Fast airport transfers, city rides, and VIP chauffeurs for ${location.governorate}. Book your reliable 2026 ride now!`,
        keywords: `taxi ${location.name.toLowerCase()}, ${location.name.toLowerCase()} taxi service, taxi in ${location.name.toLowerCase()} bahrain, BTG Source ${location.name}, airport transfer ${location.name.toLowerCase()}, ${location.name.toLowerCase()} to bahrain airport, bahrain taxi ${location.name.toLowerCase()}, taxi near ${location.name.toLowerCase()}, cab service ${location.name.toLowerCase()}`,
        canonicalUrl: `https://bahraintransportgroup.com/locations/${location.slug}`,
    });
}

export default function LocationPage({ params }: Props) {
    const location = getLocationBySlug(params.slug);
    if (!location) notFound();

    const faqs = generateLocationFAQs(location);
    const faqSchema = generateFAQSchema(faqs);

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <LocationDetailContent location={location} faqs={faqs} />
            <CTASection />
        </div>
    );
}
