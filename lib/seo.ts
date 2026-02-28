import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function generateSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
}: SEOProps): Metadata {
  const siteName = 'Bahrain Transport Group';
  const fullTitle = `${title} | ${siteName}`;

  return {
    metadataBase: new URL('https://bahraintransportgroup.com'),
    title: fullTitle,
    description,
    keywords: keywords || 'taxi service bahrain, bahrain taxi, airport taxi bahrain',
    authors: [{ name: siteName }],
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_BH',
      type: 'website',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonicalUrl ? {
      canonical: canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`,
    } : undefined,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  item: string;
}

import { authors } from '@/lib/authors';

export interface ServiceOffered {
  name: string;
}

export function getSemanticEntityGraph(url: string, faqs?: FAQ[], breadcrumbs?: Breadcrumb[]) {
  const isAboutPage = url.includes('/about');
  const isContactPage = url.includes('/contact');
  const isAuthorPage = url.includes('/authors/');
  const currentAuthorSlug = isAuthorPage ? url.split('/authors/')[1].split('?')[0].split('#')[0] : null;

  const personSchemas = authors.map(author => ({
    '@type': 'Person',
    '@id': `https://bahraintransportgroup.com/#${author.slug}`,
    name: author.name,
    jobTitle: author.role,
    description: author.shortBio,
    image: `https://bahraintransportgroup.com${author.image}`,
    worksFor: { '@id': 'https://bahraintransportgroup.com/#organization' },
    knowsAbout: author.expertise,
    sameAs: author.social.linkedin ? [author.social.linkedin] : []
  }));

  const graph: any[] = [
    {
      '@type': 'WebSite',
      '@id': 'https://bahraintransportgroup.com/#website',
      url: 'https://bahraintransportgroup.com',
      name: 'Bahrain Transport Group',
      description: 'Premium taxi and airport transfer service in Bahrain available 24/7.',
      publisher: {
        '@id': 'https://bahraintransportgroup.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://bahraintransportgroup.com/locations/{search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://bahraintransportgroup.com/#organization',
      name: 'Bahrain Transport Group',
      legalName: 'Bahrain Transport Group W.L.L.',
      url: 'https://bahraintransportgroup.com',
      foundingDate: '2014',
      email: 'info@bahraintransportgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bahraintransportgroup.com/favicon.svg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+92-317-624-3861',
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://facebook.com/bahraintransportgroup',
        'https://instagram.com/bahraintransportgroup',
        'https://twitter.com/bahraintransport',
        'https://linkedin.com/company/bahraintransportgroup',
        'https://trustpilot.com/review/bahraintransportgroup.com',
        'https://tripadvisor.com/Profile/bahraintransport',
        'https://yelp.com/biz/bahrain-transport-group',
      ],
      member: personSchemas.map(p => ({ '@id': p['@id'] })),
    },
    {
      '@type': ['LocalBusiness', 'TaxiService'],
      '@id': 'https://bahraintransportgroup.com/#localbusiness',
      name: 'Bahrain Transport Group',
      image: 'https://bahraintransportgroup.com/favicon.svg',
      url: 'https://bahraintransportgroup.com',
      telephone: '+92-317-624-3861',
      priceRange: 'BHD',
      knowsAbout: [
        'Airport Transfers in Bahrain',
        'City Taxi Service',
        'Corporate Transport',
        'Saudi Causeway Transfer',
        'Student Transport Bahrain',
        'Pet-Friendly Taxi Service',
        'Bahrain to Riyadh VIP Transit',
        'Customs Facilitation',
        'Cross-Border Logistics',
        'Professional Ground Transportation',
        'Local Tourism Expertise',
      ],
      citation: 'https://bahraintransportgroup.com/public/llms.txt',
      mainEntityOfPage: 'https://bahraintransportgroup.com',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Manama' },
        { '@type': 'AdministrativeArea', name: 'Muharraq' },
        { '@type': 'AdministrativeArea', name: 'Riffa' },
        { '@type': 'AdministrativeArea', name: 'Juffair' },
        { '@type': 'AdministrativeArea', name: 'Kingdom of Bahrain' },
        { '@type': 'AdministrativeArea', name: 'Gulf Cooperation Council (GCC)' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Building 1131, Road 2113, Block 321',
        addressLocality: 'Manama',
        addressRegion: 'Capital Governorate',
        addressCountry: 'BH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.2285,
        longitude: 50.5860,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '524',
      },
      hasMap: 'https://www.google.com/maps?cid=0xe9f79b1adfb4f3c0',
    },
    {
      '@type': isAboutPage ? 'AboutPage' : isContactPage ? 'ContactPage' : isAuthorPage ? 'ProfilePage' : 'WebPage',
      '@id': `${url}#webpage`,
      url: url,
      isPartOf: {
        '@id': 'https://bahraintransportgroup.com/#website',
      },
      about: isAuthorPage ? { '@id': `https://bahraintransportgroup.com/#${currentAuthorSlug}` } : {
        '@id': 'https://bahraintransportgroup.com/#organization',
      },
      author: !isAuthorPage ? { '@id': 'https://bahraintransportgroup.com/#zahra-al-bahraini' } : undefined,
      mainEntity: isAuthorPage ? { '@id': `https://bahraintransportgroup.com/#${currentAuthorSlug}` } : undefined,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.semantic-ai-answer', 'h1', 'h2'],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://bahraintransportgroup.com/#service',
      name: 'Premium Airport and City Taxi Transfers',
      provider: {
        '@id': 'https://bahraintransportgroup.com/#organization',
      },
      serviceArea: {
        '@type': 'Country',
        name: 'Bahrain',
      },
      serviceType: 'Taxi Service',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'BHD',
        price: '12.00',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'BHD',
          priceType: 'https://schema.org/MinimumPublishedPrice',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'BTG Premium Mobility Catalog',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'VIP Airport Meet & Greet (GMC Yukon)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'King Fahad Causeway Cross-Border Transit',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Corporate Fleet Management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Student Transport & Safety Escort',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pet Relocation Logistics',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Event & Wedding VIP Transport',
            }
          }
        ],
      },
    },
    ...personSchemas,
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: b.item,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
