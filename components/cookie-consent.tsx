'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'btg-cookie-consent';

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            setVisible(true);
        }
    }, []);

    function accept() {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setVisible(false);
    }

    function decline() {
        localStorage.setItem(CONSENT_KEY, 'declined');
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] bg-slate-900 text-white border-t border-slate-800 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-4">
                <Cookie className="w-8 h-8 text-amber-500 flex-shrink-0 hidden sm:block" />
                <p className="text-sm text-slate-300 flex-1 text-center sm:text-left">
                    We use cookies to improve your experience and understand how our site is used. See our{' '}
                    <Link href="/privacy-policy" className="text-amber-500 underline hover:text-amber-400">
                        Privacy Policy
                    </Link>{' '}
                    for details.
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={decline}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="px-5 py-2 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-slate-900 transition-colors"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
