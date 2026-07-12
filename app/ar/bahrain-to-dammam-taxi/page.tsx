import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي البحرين إلى الدمام | نقل بسعر ثابت بدون تبديل السيارة',
    description: 'احجز تاكسي مباشر بسعر ثابت من البحرين إلى الدمام. بدون تبديل السيارة عند الحدود السعودية. سائقون محترفون، أسطول VIP، خدمة على مدار الساعة. احجز عبر واتساب.',
    keywords: 'تاكسي البحرين إلى الدمام, سعر تاكسي البحرين السعودية, نقل مطار الدمام من البحرين, تاكسي جسر الملك فهد',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/bahrain-to-dammam-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من البحرين إلى الدمام. يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        تاكسي البحرين إلى <span className="text-amber-600">الدمام</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        أفضل خدمة نقل بسعر ثابت من الباب إلى الباب بين مملكة البحرين والدمام/الخبر.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Car className="w-6 h-6 text-amber-600" />
                                بروتوكول اللوجستيات
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">وعد عدم تبديل السيارة</span>
                                        <span className="text-sm text-slate-600">ابق في نفس السيارة من البحرين حتى باب منزلك في الدمام. بدون تغيير السيارات عند الحدود.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">أجرة ثابتة شاملة لكل شيء</span>
                                        <span className="text-sm text-slate-600">الرسوم، ورسوم <strong>تسهيل الجمارك</strong>، وتأمين الحدود جميعها مشمولة مسبقاً.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">موثوقية معتمدة من وزارة النقل والاتصالات</span>
                                        <span className="text-sm text-slate-600"><strong>سائقون محترفون</strong> يتبعون <strong>بروتوكول إرسال</strong> على مدار الساعة عبر جسر الملك فهد.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"مذكورة بكثرة في منتديات المغتربين لعام 2026 لتعاملها السلس مع لوجستيات العبور الحدودي المعقدة."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> ضمان السعر الثابت
                            </div>
                            <h3 className="text-3xl font-bold mb-4">احجز خلال 60 ثانية</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                تجنب "قلق العداد" الخاص بسيارات الأجرة التقليدية و"فخ التسعير المرتفع" لتطبيقات النقل. احجز <strong>رحلتك المرتبة مسبقاً</strong> الآن.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                احصل على عرض سعر الدمام الآن
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">كيف تعمل رحلة التاكسي من البحرين إلى الدمام؟</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        رحلة <strong>البحرين إلى الدمام</strong> عبر البر هي أكثر من مجرد قيادة سيارة؛ إنها عملية لوجستية عابرة للحدود تمتد عبر جسر الملك فهد الذي يبلغ طوله 25 كيلومتراً. وبينما تتوقف تطبيقات مثل أوبر وكريم عند الحدود أو تتطلب تبديل السيارة في "المنطقة الحرام"، توفر بحرين ترانسبورت جروب <strong>رحلة سلسة وموثقة</strong> تبقيك في نفس السيارة من نقطة الانطلاق حتى الوجهة.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "بالنسبة لمن يسافرون بكمية أمتعة تفوق عدد الركاب، توفر سياراتنا العائلية الكبيرة (Yukon XL) الطريقة الوحيدة الموثوقة للتنقل بين البحرين والمنطقة الشرقية دون عناء نقل الأمتعة عند جزيرة الحدود."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        يتولى <strong>سائقونا المحترفون المعتمدون</strong> جميع رسوم جسر الملك فهد ومعاملات جمارك السيارة. بالنسبة لرحلة تمتد على 90 كيلومتراً من الطريق السريع الدولي، ثق في المشغل الذي يحافظ على نسبة إنجاز 100% ويتبع <strong>معايير السلامة الصارمة لوزارة النقل والاتصالات</strong>.
                    </p>
                </section>

                {/* FAQ Section for AI Search Snippets */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">الأسئلة الشائعة</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل يمكنني حجز تاكسي من البحرين إلى مطار الدمام؟</h4>
                            <p className="text-sm text-slate-600">نعم. نوفر نقلاً مباشراً إلى مطار الملك فهد الدولي (DMM). يضمن نظام السعر الثابت لدينا وصولك في الوقت المحدد دون رسوم حدودية خفية.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل رسوم جسر الملك فهد مشمولة؟</h4>
                            <p className="text-sm text-slate-600">بالتأكيد. كل عرض سعر من بحرين ترانسبورت جروب شامل بالكامل، ويغطي رسوم الجسر البالغة 2.5 دينار بحريني وتأمين المركبة، لذا لن تحتاج إلى عملة محلية عند البوابات.</p>
                        </div>
                    </div>
                </section>

                {/* Author Bio for EEAT */}
                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">خبيرة لوجستيات</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">زهراء البحريني</h4>
                        <p className="text-sm text-slate-600 max-w-lg">كبيرة مسؤولي اللوجستيات في بحرين ترانسبورت جروب. بخبرة تمتد لعقد من الزمن في النقل العابر للحدود، تضمن زهراء التزام كل سائق ببروتوكول "عدم التبديل".</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                    <p className="mt-6">
                        هل تسافر بالاتجاه المعاكس؟ اطلع على صفحة <Link href="/ar/dammam-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">تاكسي الدمام إلى البحرين</Link>، أو احجز <Link href="/ar/bahrain-to-dammam-airport-taxi" className="text-amber-600 font-semibold hover:text-amber-700">نقلاً مباشراً إلى مطار الدمام (DMM) من البحرين</Link>.
                    </p>
                </div>

            </main>

            <CTASection locale="ar" />
        </div>
    );
}
