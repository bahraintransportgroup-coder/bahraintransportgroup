'use client';

import { usePathname } from 'next/navigation';
import { getSemanticEntityGraph, FAQ, Breadcrumb } from '@/lib/seo';

interface Props {
    faqs?: FAQ[];
    breadcrumbs?: Breadcrumb[];
}

export function StructuredData({ faqs, breadcrumbs }: Props) {
    const pathname = usePathname();
    const domain = 'https://bahraintransportgroup.com';
    const fullUrl = `${domain}${pathname === '/' ? '' : pathname}`;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getSemanticEntityGraph(fullUrl, faqs, breadcrumbs))
            }}
        />
    );
}
