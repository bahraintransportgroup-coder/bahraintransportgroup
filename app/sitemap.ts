import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/locations';
import { getAllAirportSlugs } from '@/lib/airports';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bahraintransportgroup.com';

    const staticPages = [
        '',
        '/about',
        '/airport-transfer',
        '/city-taxi',
        '/contact',
        '/fleet',
        '/locations',
        '/saudi-causeway',
        '/things-to-do',
        '/blog',
        '/blog/bahrain-taxi-prices',
        '/blog/uber-vs-taxi-bahrain',
        '/blog/bahrain-airport-transfers-guide',
        '/blog/top-5-best-taxi-companies-bahrain',
        '/blog/best-taxi-bahrain-2026',
        '/blog/best-bahrain-to-riyadh-taxi-2026',
        '/blog/uber-vs-careem-vs-btg-bahrain',
        '/blog/saudi-visa-king-fahad-causeway',
        '/blog/bahrain-to-riyadh-flight-vs-taxi',
        '/help-center',
        '/bahrain-to-dammam-taxi',
        '/bahrain-to-khobar-taxi',
        '/manama-to-riyadh-taxi',
        '/fare-calculator',
        '/corporate-travel',
        '/student-transport',
        '/pet-transport',
        '/privacy-policy',
        '/terms-and-conditions',
        '/airports',
        '/routes/bahrain-to-dammam-taxi',
        '/routes/bahrain-to-khobar-taxi',
        '/routes/manama-to-riyadh-taxi',
    ].map((route) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    const locationPages = getAllSlugs().map((slug) => ({
        url: `${baseUrl}/locations/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const airportPages = getAllAirportSlugs().map((slug) => ({
        url: `${baseUrl}/airports/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticPages, ...locationPages, ...airportPages];
}
