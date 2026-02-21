export type AirportCategory = 'International Airports' | 'Military Air Bases' | 'Helipads & Airfields';

export interface Airport {
    slug: string;
    name: string;
    codes?: string;
    location: string;
    description: string;
    category: AirportCategory;
    isPrimary?: boolean;
}

export const airports: Airport[] = [
    {
        slug: 'bahrain-international-airport',
        name: 'Bahrain International Airport',
        codes: 'BAH / OBBI',
        location: 'Muharraq, near Manama',
        description: 'The primary and only major international airport serving the Kingdom of Bahrain. Hub for Gulf Air and the main gateway for all international arrivals and departures.',
        category: 'International Airports',
        isPrimary: true,
    },
    {
        slug: 'muharraq-airport',
        name: 'Muharraq Airport',
        codes: 'GBQ',
        location: 'Muharraq',
        description: 'A smaller airport/airfield located in Muharraq, used for private and charter flights.',
        category: 'International Airports',
    },
    {
        slug: 'shaikh-isa-air-base',
        name: 'Shaikh Isa Air Base',
        codes: 'OBBS',
        location: 'Near Sitrah',
        description: 'Military base operated by the Bahrain Defense Force, located near Sitrah.',
        category: 'Military Air Bases',
    },
    {
        slug: 'sakhir-air-base',
        name: 'Sakhir Air Base',
        codes: 'OBKH',
        location: 'Sakhir',
        description: 'Airfield used for military purposes and host of the prestigious Bahrain International Airshow.',
        category: 'Military Air Bases',
    },
    {
        slug: 'bahrain-defense-force-heliport',
        name: 'Bahrain Defense Force Heliport',
        location: 'Isa Town',
        description: 'Primary heliport operated by the Bahrain Defense Force.',
        category: 'Helipads & Airfields',
    },
    {
        slug: 'amwaj-heliport',
        name: 'Amwaj Heliport',
        location: 'Amwaj Island',
        description: 'Heliport serving the luxury residential and commercial Amwaj Islands.',
        category: 'Helipads & Airfields',
    },
    {
        slug: 'bic-heliport',
        name: 'Bahrain International Circuit Heliport',
        location: 'Sakhir',
        description: 'Heliport located at the Bahrain International Circuit, heavily used during the F1 Grand Prix.',
        category: 'Helipads & Airfields',
    },
    {
        slug: 'hawar-island-heliport',
        name: 'Hawar Island Heliport',
        location: 'Hawar Island',
        description: 'Heliport serving travel to and from the Hawar Islands.',
        category: 'Helipads & Airfields',
    },
];

export function getAirportBySlug(slug: string): Airport | undefined {
    return airports.find((a) => a.slug === slug);
}

export function getAllAirportSlugs(): string[] {
    return airports.map((a) => a.slug);
}
