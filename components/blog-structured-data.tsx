interface Props {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

export function BlogStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Bahrain Transport Group Editorial Team',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://bahraintransportgroup.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bahrain Transport Group',
      url: 'https://bahraintransportgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bahraintransportgroup.com/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
