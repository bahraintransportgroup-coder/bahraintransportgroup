export interface Location {
    slug: string;
    name: string;
    governorate: string;
    description: string;
    highlights: string[];
}

export interface Governorate {
    name: string;
    emoji: string;
    locations: Location[];
}

export const governorates: Governorate[] = [
    {
        name: 'Capital Governorate',
        emoji: '🏙️',
        locations: [
            {
                slug: 'manama',
                name: 'Manama',
                governorate: 'Capital Governorate',
                description:
                    'Capital city of Bahrain and the main commercial hub. Home to Seef District, Diplomatic Area, and vibrant nightlife in Adliya and Juffair.',
                highlights: ['Seef District', 'Diplomatic Area', 'Financial Hub', 'Bahrain Bay'],
            },
            {
                slug: 'juffair',
                name: 'Juffair',
                governorate: 'Capital Governorate',
                description:
                    'Popular residential and entertainment district known for its restaurants, hotels, and vibrant atmosphere.',
                highlights: ['Hotels', 'Restaurants', 'Nightlife', 'US Naval Base Area'],
            },
            {
                slug: 'seef',
                name: 'Seef',
                governorate: 'Capital Governorate',
                description:
                    'Major commercial and shopping district featuring some of Bahrain\'s largest malls and business centers.',
                highlights: ['City Centre Bahrain', 'Seef Mall', 'Business Towers', 'Shopping'],
            },
            {
                slug: 'sanabis',
                name: 'Sanabis',
                governorate: 'Capital Governorate',
                description:
                    'Mixed residential and commercial area in the capital, conveniently located near key facilities.',
                highlights: ['Residential Area', 'Local Markets', 'Mosques'],
            },
            {
                slug: 'tubli',
                name: 'Tubli',
                governorate: 'Capital Governorate',
                description:
                    'Coastal area in the capital known for Tubli Bay and its proximity to the King Fahad Causeway.',
                highlights: ['Tubli Bay', 'Coastal Views', 'Causeway Access'],
            },
            {
                slug: 'jid-ali',
                name: 'Jid Ali',
                governorate: 'Capital Governorate',
                description:
                    'Residential neighborhood in Manama offering easy access to commercial and industrial areas.',
                highlights: ['Residential', 'Easy Access', 'Local Amenities'],
            },
            {
                slug: 'zinj',
                name: 'Zinj',
                governorate: 'Capital Governorate',
                description:
                    'Central residential area in Manama, well-connected and close to shopping and dining.',
                highlights: ['Central Location', 'Residential', 'Schools', 'Restaurants'],
            },
            {
                slug: 'ras-rumman',
                name: 'Ras Rumman',
                governorate: 'Capital Governorate',
                description:
                    'Historic neighborhood in the heart of Manama with traditional Bahraini character.',
                highlights: ['Historic Area', 'Traditional Market', 'Central Manama'],
            },
        ],
    },
    {
        name: 'Muharraq Governorate',
        emoji: '🕌',
        locations: [
            {
                slug: 'muharraq',
                name: 'Muharraq',
                governorate: 'Muharraq Governorate',
                description:
                    'Historic island city and home to Bahrain International Airport. UNESCO Pearling Path and traditional souqs.',
                highlights: ['Airport', 'Pearling Path', 'Historic Souq', 'Heritage Houses'],
            },
            {
                slug: 'hidd',
                name: 'Hidd',
                governorate: 'Muharraq Governorate',
                description:
                    'Eastern part of Muharraq island with industrial areas and the Hidd Power Company.',
                highlights: ['Industrial Area', 'Residential', 'Eastern Coast'],
            },
            {
                slug: 'galali',
                name: 'Galali',
                governorate: 'Muharraq Governorate',
                description:
                    'Quiet residential village on Muharraq island offering a peaceful retreat from the city bustle.',
                highlights: ['Residential', 'Quiet Village', 'Muharraq Island'],
            },
            {
                slug: 'arad',
                name: 'Arad',
                governorate: 'Muharraq Governorate',
                description:
                    'Known for the stunning Arad Fort and its beautiful waterfront promenade.',
                highlights: ['Arad Fort', 'Waterfront', 'Historic', 'Promenade'],
            },
            {
                slug: 'samaheej',
                name: 'Samaheej',
                governorate: 'Muharraq Governorate',
                description:
                    'Residential area in Muharraq known for its local character and community.',
                highlights: ['Residential', 'Community', 'Local Markets'],
            },
            {
                slug: 'busaiteen',
                name: 'Busaiteen',
                governorate: 'Muharraq Governorate',
                description:
                    'Waterfront area with scenic views of the Manama skyline across the bay.',
                highlights: ['Waterfront', 'Skyline Views', 'Residential'],
            },
            {
                slug: 'amwaj-islands',
                name: 'Amwaj Islands',
                governorate: 'Muharraq Governorate',
                description:
                    'Luxurious man-made islands featuring waterfront living, restaurants, beach clubs, and a vibrant social scene.',
                highlights: ['Luxury Living', 'Beach Clubs', 'Marina', 'The Lagoon'],
            },
            {
                slug: 'diyar-al-muharraq',
                name: 'Diyar Al Muharraq',
                governorate: 'Muharraq Governorate',
                description:
                    'Massive modern development featuring Marassi Galleria, residential communities, and beachfront living.',
                highlights: ['Marassi Galleria', 'Cipriani Beach', 'New Development', 'Shopping'],
            },
        ],
    },
    {
        name: 'Northern Governorate',
        emoji: '🌿',
        locations: [
            {
                slug: 'budaiya',
                name: 'Budaiya',
                governorate: 'Northern Governorate',
                description:
                    'Scenic coastal area known for the Budaiya Highway, beaches, and the Al Jasra Handicraft Centre.',
                highlights: ['Beaches', 'Coastal Road', 'Handicraft Centre', 'Nature'],
            },
            {
                slug: 'diraz',
                name: 'Diraz',
                governorate: 'Northern Governorate',
                description:
                    'Traditional village in the northern region, known for its peaceful atmosphere and local culture.',
                highlights: ['Traditional Village', 'Cultural Heritage', 'Quiet Area'],
            },
            {
                slug: 'saar',
                name: 'Saar',
                governorate: 'Northern Governorate',
                description:
                    'Upscale residential neighbourhood popular with expatriates, featuring the Saar archaeological site.',
                highlights: ['Expat Community', 'Archaeological Site', 'Upscale Living', 'Schools'],
            },
            {
                slug: 'janabiyah',
                name: 'Janabiyah',
                governorate: 'Northern Governorate',
                description:
                    'Residential area with a mix of villas and apartments, close to schools and shopping.',
                highlights: ['Residential', 'Schools', 'Shopping', 'Family-Friendly'],
            },
            {
                slug: 'karranah',
                name: 'Karranah',
                governorate: 'Northern Governorate',
                description:
                    'Northern village with traditional character and local farms.',
                highlights: ['Traditional Village', 'Local Farms', 'Northern Bahrain'],
            },
            {
                slug: 'bani-jamra',
                name: 'Bani Jamra',
                governorate: 'Northern Governorate',
                description:
                    'Known for its textile weaving heritage, Bani Jamra is a culturally rich village in northern Bahrain.',
                highlights: ['Textile Heritage', 'Cultural Village', 'Traditional Crafts'],
            },
            {
                slug: 'barbar',
                name: 'Barbar',
                governorate: 'Northern Governorate',
                description:
                    'Village famous for the Barbar Temple, an important Dilmun-era archaeological site.',
                highlights: ['Barbar Temple', 'Archaeological Site', 'Dilmun Heritage'],
            },
            {
                slug: 'abu-saiba',
                name: 'Abu Saiba',
                governorate: 'Northern Governorate',
                description:
                    'Small residential village in the northern part of Bahrain.',
                highlights: ['Residential', 'Quiet Village', 'Northern Bahrain'],
            },
            {
                slug: 'jasra',
                name: 'Jasra',
                governorate: 'Northern Governorate',
                description:
                    'Coastal village known for the Al Jasra Handicraft Centre and traditional Bahraini crafts.',
                highlights: ['Handicraft Centre', 'Coastal', 'Traditional Crafts', 'Cultural'],
            },
        ],
    },
    {
        name: 'Southern Governorate',
        emoji: '🏜️',
        locations: [
            {
                slug: 'riffa',
                name: 'Riffa',
                governorate: 'Southern Governorate',
                description:
                    'Major city and royal residential area. Home to Riffa Fort, Riffa Views, and the Bahrain International Circuit.',
                highlights: ['Riffa Fort', 'Riffa Views', 'Royal Area', 'F1 Circuit Nearby'],
            },
            {
                slug: 'isa-town',
                name: 'Isa Town',
                governorate: 'Southern Governorate',
                description:
                    'Planned city and educational hub featuring the University of Bahrain and many schools.',
                highlights: ['University of Bahrain', 'Schools', 'Sports Complex', 'Residential'],
            },
            {
                slug: 'sitra',
                name: 'Sitra',
                governorate: 'Southern Governorate',
                description:
                    'Industrial island east of Bahrain, connected by causeways. Home to oil refinery and ports.',
                highlights: ['Industrial Area', 'Ports', 'Eastern Coast', 'Oil Refinery'],
            },
            {
                slug: 'awali',
                name: 'Awali',
                governorate: 'Southern Governorate',
                description:
                    'Historic oil town built for workers of the Bahrain Petroleum Company (BAPCO). Quiet and green.',
                highlights: ['BAPCO', 'Oil Heritage', 'Quiet Town', 'Green Spaces'],
            },
            {
                slug: 'zallaq',
                name: 'Zallaq',
                governorate: 'Southern Governorate',
                description:
                    'Western coastal area known for Al Jazayer Beach and the Lost Paradise of Dilmun Waterpark.',
                highlights: ['Beaches', 'Waterpark', 'Al Jazayer Beach', 'Resorts'],
            },
            {
                slug: 'askar',
                name: 'Askar',
                governorate: 'Southern Governorate',
                description:
                    'Southern residential area with views of the southern coast of Bahrain.',
                highlights: ['Residential', 'Southern Coast', 'Quiet Area'],
            },
            {
                slug: 'jaww',
                name: 'Jaww',
                governorate: 'Southern Governorate',
                description:
                    'Coastal village in southern Bahrain offering a quiet retreat and scenic sea views.',
                highlights: ['Coastal Village', 'Sea Views', 'Southern Bahrain'],
            },
            {
                slug: 'sakhir',
                name: 'Sakhir',
                governorate: 'Southern Governorate',
                description:
                    'Home to the Bahrain International Circuit (F1 Grand Prix), University of Bahrain campus, and Sakhir Air Base.',
                highlights: ['F1 Circuit', 'University', 'Desert Landscape', 'Air Base'],
            },
        ],
    },
];

export function getAllLocations(): Location[] {
    return governorates.flatMap((gov) => gov.locations);
}

export function getLocationBySlug(slug: string): Location | undefined {
    return getAllLocations().find((loc) => loc.slug === slug);
}

export function getAllSlugs(): string[] {
    return getAllLocations().map((loc) => loc.slug);
}

export interface FAQ {
    question: string;
    answer: string;
}

export function generateLocationFAQs(location: Location): FAQ[] {
    return [
        {
            question: `Does Bahrain Transport Group offer taxi services in ${location.name}?`,
            answer: `Yes, Bahrain Transport Group provides professional taxi services in ${location.name}, ${location.governorate}. Our fleet covers all areas within ${location.name} and surrounding neighborhoods. We offer airport transfers, city rides, corporate transport, and private hire — available 24 hours a day, 7 days a week. You can book a taxi in ${location.name} via WhatsApp or through our online booking form.`,
        },
        {
            question: `How much does a taxi ride from ${location.name} to Bahrain International Airport cost?`,
            answer: `Taxi fares from ${location.name} to Bahrain International Airport are fixed and transparent — no surge pricing or hidden charges. The exact fare depends on the distance and vehicle type chosen. For a precise quote on your ${location.name} to airport transfer, contact us via WhatsApp or online. We also offer meet-and-greet service with flight tracking at no extra cost.`,
        },
        {
            question: `Can I book a taxi in ${location.name} for a round trip or full-day hire?`,
            answer: `Absolutely. In addition to one-way taxi rides in ${location.name}, we offer round-trip bookings and full-day private hire with a dedicated driver. This is ideal for tourists exploring ${location.name} and other parts of Bahrain, business travelers with multiple meetings, or families who need transportation throughout the day. Contact us to arrange your custom itinerary.`,
        },
        {
            question: `What areas near ${location.name} does your taxi service cover?`,
            answer: `Our taxi service in ${location.name} extends to all neighboring areas within ${location.governorate} and across the entire Kingdom of Bahrain. Whether you need a ride from ${location.name} to Manama, Muharraq, Riffa, or the King Fahad Causeway, we have you covered. We serve over 30 cities and villages across all four governorates of Bahrain.`,
        },
        {
            question: `Is there a taxi service available late at night in ${location.name}?`,
            answer: `Yes, our taxi service in ${location.name} operates 24/7 including late nights, early mornings, weekends, and public holidays. There are no extra charges for night-time bookings. Whether you need a late-night airport transfer from ${location.name} or an early-morning pickup, our professional drivers are always ready to serve you.`,
        },
    ];
}

export function generateFAQSchema(faqs: FAQ[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
