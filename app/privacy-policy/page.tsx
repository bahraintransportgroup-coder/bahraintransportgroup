import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Link } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'Privacy Policy | Bahrain Transport Group',
    description: 'Privacy Policy for Bahrain Transport Group. Learn how we handle your data and ensure secure taxi bookings.',
    canonicalUrl: 'https://bahraintransportgroup.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-slate-50 pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                    <p className="text-sm text-slate-500 mb-10">Last Updated: January {currentYear}</p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-6">
                            At Bahrain Transport Group, accessible from bahraintransportgroup.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Bahrain Transport Group and how we use it.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            The personal information that you are asked to provide (such as your name, WhatsApp number, and email address), and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information when booking our taxi services in Bahrain.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li>Provide, operate, and maintain our transportation services</li>
                            <li>Improve, personalize, and expand our website operations</li>
                            <li>Understand and analyze how you use our taxi booking system</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you for customer service and driver dispatch (WhatsApp communications)</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Log Files</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Bahrain Transport Group follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. EEAT & Service Trust Signals</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            We use industry-standard encryption (HTTPS only) to protect your connection. Our data is processed purely to facilitate your safe transport natively within the Kingdom of Bahrain. We do not sell your data to third parties.
                        </p>

                        <hr className="my-8 border-slate-200" />

                        <p className="text-slate-600 leading-relaxed">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to <a href="/contact" className="text-amber-600 hover:underline">contact us</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
