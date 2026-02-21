import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { CTASection } from '@/components/cta-section';
import { AttractionsContent } from '@/components/attractions-content';

export const metadata: Metadata = generateSEO({
    title: 'Things to Do in Bahrain - Top Attractions & Tourist Guide',
    description:
        'Discover the best things to do in Bahrain. Historic sites, beaches, waterparks, shopping, and unique experiences. Book a taxi to any attraction with Bahrain Transport Group.',
    keywords:
        'things to do in bahrain, bahrain attractions, bahrain tourist guide, bahrain national museum, bahrain fort, tree of life bahrain, bahrain f1, lost paradise of dilmun, manama souq, hawar islands',
    canonicalUrl: 'https://bahraintransportgroup.com/things-to-do',
});

export default function ThingsToDoPage() {
    return (
        <div className="bg-white">
            <AttractionsContent />
            <CTASection />
        </div>
    );
}
