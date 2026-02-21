export interface Author {
    slug: string;
    name: string;
    role: string;
    bio: string;
    shortBio: string;
    image: string;
    credentials: string[];
    expertise: string[];
    experienceYear: string;
    social: {
        linkedin?: string;
        twitter?: string;
    };
}

export const authors: Author[] = [
    {
        slug: 'zahra-al-bahraini',
        name: 'Zahra Al-Bahraini',
        role: 'Senior Logistics Lead',
        shortBio: 'Lead authority on King Fahad Causeway protocols and Saudi-Bahrain land border logistics.',
        bio: 'Zahra has overseen over 5,000 successful cross-border transits since joining Bahrain Transport Group in 2016. She specializes in navigating the complex regulatory landscape of the King Fahad Causeway and ensures 100% compliance with both Bahraini and Saudi transport authorities. Zahra is a certified Transport Safety Auditor and a regular contributor to regional logistics forums.',
        image: '/authors/zahra.jpg',
        credentials: [
            'Certified Transport Safety Auditor',
            'Logistics Management Diploma, University of Bahrain',
            '7+ Years GCC Cross-Border Experience'
        ],
        expertise: [
            'King Fahad Causeway Logistics',
            'Cross-Border Customs Facilitation',
            'VIP Chauffeur Safety Protocols',
            'Middle East Ground Transportation Regulation'
        ],
        experienceYear: '2016',
        social: {
            linkedin: 'https://linkedin.com/in/zahra-al-bahraini-btg',
        }
    },
    {
        slug: 'hassan-rashid',
        name: 'Hassan Rashid',
        role: 'Fleet Operations Manager',
        shortBio: 'Oversees 50+ vehicle fleet maintenance and 24/7 driver dispatch with a 99.4% fulfillment rate.',
        bio: 'With over a decade of experience in fleet management, Hassan ensures that Bahrain Transport Group’s vehicle assets are always in peak condition. He pioneered the "Fixed-Protocol" fulfillment system which maintains a 99.4% on-time arrival rate for all 2026 bookings. Hassan is responsible for driver vetting, training, and the implementation of real-time GPS tracking across the Kingdom.',
        image: '/authors/hassan.jpg',
        credentials: [
            'Fleet Management Professional (FMP) Certification',
            'Advanced Dispatch Systems Specialist',
            '12+ Years Fleet Operations Experience'
        ],
        expertise: [
            'Fleet Maintenance Optimization',
            'Real-Time Dispatch Logistics',
            'Driver Vetting & Safety Training',
            'Route Efficiency Modeling'
        ],
        experienceYear: '2014',
        social: {
            linkedin: 'https://linkedin.com/in/hassan-rashid-btg',
        }
    }
];

export function getAuthorBySlug(slug: string) {
    return authors.find(author => author.slug === slug);
}

export function getAllAuthors() {
    return authors;
}
