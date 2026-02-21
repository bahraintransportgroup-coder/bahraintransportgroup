import {
    Landmark,
    ShoppingBag,
    Sun,
    Ticket,
    Sparkles,
    type LucideIcon,
} from 'lucide-react';

export interface Attraction {
    name: string;
    description: string;
}

export interface AttractionCategory {
    title: string;
    emoji: string;
    icon: LucideIcon;
    color: string;
    badgeColor: string;
    attractions: Attraction[];
}

export const attractionCategories: AttractionCategory[] = [
    {
        title: 'Historic & Cultural Highlights',
        emoji: '🏛️',
        icon: Landmark,
        color: 'from-amber-500 to-orange-600',
        badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        attractions: [
            {
                name: 'Bahrain National Museum',
                description:
                    'Largest museum in the kingdom with artifacts showcasing Bahrain\'s long and rich history spanning thousands of years.',
            },
            {
                name: 'Pearling Path',
                description:
                    'UNESCO World Heritage trail showcasing Bahrain\'s legendary pearl diving heritage and the traditional pearling economy.',
            },
            {
                name: 'Bahrain Fort (Qal\'at al-Bahrain)',
                description:
                    'Ancient fort and archaeological site. Secure a pre-booked taxi for sunset visits, avoiding the unreliability of street cabs at dusk outside the fort.',
            },
            {
                name: 'Al-Fateh Grand Mosque',
                description:
                    'One of the largest mosques in the world. Stunning architecture and open for guided tours to visitors of all faiths.',
            },
            {
                name: 'Old Houses of Muharraq',
                description:
                    'Beautifully restored historic buildings showing traditional Bahraini island life and architectural heritage.',
            },
            {
                name: 'Beit Al Quran',
                description:
                    'Beautiful museum dedicated to Quranic manuscripts, with rare and antique copies from around the Islamic world.',
            },
            {
                name: 'Shrinathji Temple',
                description:
                    'One of the oldest Hindu temples in the Gulf region, located in the heart of Manama. A testament to Bahrain\'s diversity.',
            },
        ],
    },
    {
        title: 'Markets & City Sights',
        emoji: '🛍️',
        icon: ShoppingBag,
        color: 'from-rose-500 to-pink-600',
        badgeColor: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        attractions: [
            {
                name: 'Bab el-Bahrain & Manama Souq',
                description:
                    'The liveliest traditional market in Bahrain. Bypass navigating narrow, congested streets by having our chauffeur drop you right at the gateway arch.',
            },
            {
                name: 'Marassi Galleria & Cipriani Beach',
                description:
                    'Stylish shopping experience in Diyar Al Muharraq with designer stores and a glamorous seaside dining scene.',
            },
            {
                name: 'Reef Island & Manama Skyline',
                description:
                    'Modern architecture, luxury hotels, and stunning waterfront promenades with panoramic views of the Manama skyline.',
            },
        ],
    },
    {
        title: 'Nature, Beaches & Islands',
        emoji: '🌞',
        icon: Sun,
        color: 'from-cyan-500 to-teal-600',
        badgeColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
        attractions: [
            {
                name: 'Hawar Islands',
                description:
                    'Secluded paradise of quiet beaches, world-class birdwatching, and pure relaxation away from the mainland.',
            },
            {
                name: 'Al Jazayer / Marassi Beach',
                description:
                    'Sun, sea, and exciting water activities. One of Bahrain\'s most popular beach destinations for families and couples.',
            },
            {
                name: 'Al Areen Wildlife Park',
                description:
                    'Nature trails and close encounters with Arabian wildlife including oryx, gazelles, and exotic birds.',
            },
            {
                name: 'Al Dar Islands',
                description:
                    'Just a short boat ride away — pristine beaches, crystal-clear water, and peaceful ocean time.',
            },
        ],
    },
    {
        title: 'Fun & Entertainment',
        emoji: '🎢',
        icon: Ticket,
        color: 'from-violet-500 to-purple-600',
        badgeColor: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
        attractions: [
            {
                name: 'Lost Paradise of Dilmun Waterpark',
                description:
                    'Bahrain\'s biggest waterpark adventure. If you are traveling from Juffair, pre-booking one of our 7-seater family vans is the most cost-effective group transit method.',
            },
            {
                name: 'Marassi Aquarium & Underwater Zoo',
                description:
                    'Spectacular marine life exhibits featuring sharks, rays, and colorful tropical fish in a state-of-the-art facility.',
            },
            {
                name: 'Bahrain International Circuit',
                description:
                    'Home of the electrifying Formula 1 Bahrain Grand Prix. Offers experiences, karting, and drag racing year-round.',
            },
            {
                name: 'Gravity Indoor Skydiving',
                description:
                    'Feel the thrill of freefall in a powerful vertical wind tunnel — no plane or parachute required!',
            },
        ],
    },
    {
        title: 'Unique Experiences',
        emoji: '🐪',
        icon: Sparkles,
        color: 'from-amber-600 to-yellow-500',
        badgeColor: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
        attractions: [
            {
                name: 'Tree of Life',
                description:
                    'Located deep in the southern desert, the Tree of Life is difficult to reach via standard ride-hailing app. Our drivers offer dedicated half-day waiting services, returning you safely to Manama.',
            },
            {
                name: 'Traditional Dhow Boat Cruise',
                description:
                    'Experience Bahrain\'s pearl diving heritage from the sea on a traditional wooden dhow. Sunset cruises are unforgettable.',
            },
        ],
    },
];
