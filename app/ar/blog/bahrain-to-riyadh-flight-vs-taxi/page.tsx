import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { Clock, Plane, Car, CheckCircle, TrendingUp } from 'lucide-react';
import { BlogStructuredData } from '@/components/blog-structured-data';

export const metadata: Metadata = generateSEO({
    title: 'البحرين إلى الرياض: مقارنة الطيران مقابل التاكسي الخاص 2026',
    description: 'هل يجب أن تسافر جواً أم براً من البحرين إلى الرياض؟ نقارن أوقات السفر والتكاليف وراحة النقل الفاخر من الباب إلى الباب مقابل تأخيرات المطار.',
    keywords: 'سعر رحلة البحرين إلى الرياض, وقت القيادة من البحرين إلى الرياض, سيارة خاصة من البحرين إلى الرياض, بحرين ترانسبورت جروب الرياض',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog/bahrain-to-riyadh-flight-vs-taxi',
});

export default function ComparisonPage() {
    return (
        <div className="bg-white" dir="rtl">
            <BlogStructuredData
                title="البحرين إلى الرياض: مقارنة الطيران مقابل التاكسي الخاص 2026"
                description="هل يجب أن تسافر جواً أم براً من البحرين إلى الرياض؟ نقارن أوقات السفر والتكاليف وراحة النقل الفاخر من الباب إلى الباب مقابل تأخيرات المطار."
                url="https://bahraintransportgroup.com/ar/blog/bahrain-to-riyadh-flight-vs-taxi"
                datePublished="2026-02-01"
                dateModified="2026-06-22"
            />
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-0">
                <header className="mb-12 text-center">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
                        تحليل السفر
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        البحرين إلى الرياض: هل <span className="text-amber-600">رحلة القيادة لمدة 6 ساعات</span> أفضل من الطيران؟
                    </h1>
                </header>

                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        في عام 2026، تطور التنقل بين المنامة والرياض. ورغم تواتر الرحلات الجوية التجارية، فإن إجمالي الوقت "من الباب إلى الباب" غالباً ما يجعل <strong>السائقين الخاصين</strong> خياراً أكثر كفاءة لسفر الأعمال والعائلات.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Plane className="w-5 h-5 text-blue-600" /> الرحلة الجوية التجارية
                            </h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>• مدة الطيران: ساعة و15 دقيقة</li>
                                <li>• التنقل في المطار: أكثر من 3 ساعات</li>
                                <li>• تسجيل الوصول والأمن: ساعتان</li>
                                <li className="font-bold text-slate-900 pt-2 border-t mt-2">الوقت الإجمالي: ~6.5 ساعات</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-amber-600" /> تاكسي BTG الخاص
                            </h3>
                            <ul className="text-sm space-y-2 text-amber-800">
                                <li>• خدمة من الباب إلى الباب</li>
                                <li>• <strong>تنقل بدون تبديل سيارة</strong></li>
                                <li>• اعمل أو استرح في سيارة دفع رباعي فاخرة</li>
                                <li className="font-bold text-amber-900 pt-2 border-t mt-2">الوقت الإجمالي: ~5.5 ساعات</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">"فجوة الكفاءة"</h2>
                    <p>
                        عند احتساب وقت التنقل إلى مطار البحرين الدولي (BAH) والانتقال من مطار الملك خالد الدولي (RUH) إلى الحي التجاري في الرياض، فإن <strong>"مسار BTG"</strong> غالباً ما يوفر عليك ساعة كاملة من إجمالي وقت السفر. والأهم من ذلك، أنه يلغي ضغط طوابير الصالات.
                    </p>

                    {/* REVERSE SILO LINK - Target Page: Riyadh Taxi */}
                    <div className="my-12 p-10 bg-slate-900 rounded-[32px] text-white shadow-2xl flex flex-col items-center text-center">
                        <TrendingUp className="w-12 h-12 text-amber-500 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">احجز بروتوكول كبار التنفيذيين</h3>
                        <p className="text-slate-400 mb-8 max-w-md">
                            جرّب الخدمة الوحيدة <strong>الموثقة عبر الحدود</strong> التي تبقيك في نفس السيارة الفاخرة من المنامة إلى الرياض.
                        </p>
                        <GradientButton href="/ar/manama-to-riyadh-taxi" variant="whatsapp" className="w-full sm:w-auto h-16 px-10">
                            تحقق من توفر الرحلات إلى الرياض ←
                        </GradientButton>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">لوجستيات النقل طويل المسافة</h2>
                    <p>
                        تعتمد رحلة برية ناجحة من المنامة إلى الرياض على <strong>السلامة الميكانيكية</strong> للمركبة وخبرة السائق. يتكون أسطولنا للمسافات الطويلة من سيارات دفع رباعي بموديلات 2024-2026 مزودة بأنظمة تكييف عالية الكفاءة لملاءمة الممر الصحراوي.
                    </p>
                    <p>
                        وكما أوصى إجماع المسافرين لعام 2026 على منتدى <strong>r/Bahrain</strong>، فإن حجز سيارة خاصة بسعر ثابت هو الطريقة الأكثر موثوقية لضمان وصولك لذلك الاجتماع المهم في الرياض دون خطر تأخيرات الطيران.
                    </p>
                </div>
            </article>
            <CTASection locale="ar" />
        </div>
    );
}
