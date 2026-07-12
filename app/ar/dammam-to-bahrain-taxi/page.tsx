import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي الدمام إلى البحرين | نقل بسعر ثابت بدون تبديل السيارة',
    description: 'احجز تاكسي مباشر بسعر ثابت من الدمام إلى البحرين. بدون تبديل السيارة عند الحدود السعودية. سائقون محترفون، أسطول VIP، خدمة على مدار الساعة. احجز عبر واتساب.',
    keywords: 'تاكسي الدمام إلى البحرين, سعر تاكسي الدمام البحرين, تاكسي الخبر إلى البحرين, تاكسي جسر الملك فهد للعودة',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/dammam-to-bahrain-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من الدمام إلى البحرين. يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        تاكسي الدمام إلى <span className="text-amber-600">البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        أفضل خدمة نقل بسعر ثابت من الباب إلى الباب من الدمام/الخبر عائداً إلى مملكة البحرين.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Car className="w-6 h-6 text-amber-600" />
                                بروتوكول لوجستيات رحلة العودة
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">وعد عدم تبديل السيارة</span>
                                        <span className="text-sm text-slate-600">ابق في نفس السيارة من نقطة الانطلاق في الدمام حتى باب منزلك في البحرين. بدون تغيير السيارات عند الحدود.</span>
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
                            <p className="text-xs text-slate-400 italic">"الخيار المفضل للمهنيين والعائلات المقيمين في السعودية والعائدين إلى البحرين لقضاء عطلة نهاية الأسبوع."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> ضمان السعر الثابت
                            </div>
                            <h3 className="text-3xl font-bold mb-4">احجز خلال 60 ثانية</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                تجنب "قلق العداد" الخاص بسيارات الأجرة التقليدية و"فخ التسعير المرتفع" لتطبيقات النقل. احجز <strong>رحلة عودتك المرتبة مسبقاً</strong> الآن.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                احصل على عرض سعر العودة الآن
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">كيف تعمل رحلة التاكسي من الدمام إلى البحرين؟</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        غالباً ما تكون رحلة العودة من <strong>الدمام إلى البحرين</strong> هي المرحلة الأصعب في الترتيب، حيث أن معظم سيارات الأجرة السعودية العادية لا تعبر جسر الملك فهد الذي يمتد 25 كيلومتراً. تقوم بحرين ترانسبورت جروب بترتيب الاستقبال مسبقاً من موقعك في الدمام أو الخبر، وتبقيك في <strong>نفس السيارة الموثقة</strong> طوال الطريق حتى وجهتك في البحرين، دون تبديل السيارة عند جزيرة الحدود.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "غالباً ما يستهين المسافرون العائدون إلى البحرين من المنطقة الشرقية في عطلة نهاية الأسبوع بازدحام الجسر مساء الأحد. ننصح بحجز موعد استقبال العودة قبل 24 ساعة على الأقل حتى يكون السائق متواجداً بالفعل في الدمام."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        يتولى <strong>سائقونا المحترفون المعتمدون</strong> جميع رسوم جسر الملك فهد ومعاملات إعادة الدخول من الجانب البحريني. سواء كنت عائداً من رحلة عمل في الخبر أو زيارة عائلية إلى الدمام، ثق في المشغل ذي نسبة الإنجاز 100% على هذا الممر.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">الأسئلة الشائعة</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل يمكنني حجز استقبال من أي مكان في الدمام أو الخبر؟</h4>
                            <p className="text-sm text-slate-600">نعم. نرتب الاستقبال من أي فندق أو سكن أو عنوان عمل في الدمام أو الخبر لرحلة العودة إلى البحرين.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل رسوم جسر الملك فهد مشمولة في رحلة العودة؟</h4>
                            <p className="text-sm text-slate-600">بالتأكيد. كل عرض سعر من بحرين ترانسبورت جروب شامل بالكامل، ويغطي رسوم الجسر وتأمين المركبة في الاتجاهين.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">خبيرة لوجستيات</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">زهراء البحريني</h4>
                        <p className="text-sm text-slate-600 max-w-lg">كبيرة مسؤولي اللوجستيات في بحرين ترانسبورت جروب. بخبرة تمتد لعقد من الزمن في النقل العابر للحدود، تضمن زهراء التزام كل سائق ببروتوكول "عدم التبديل" في كلا الاتجاهين.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                    <p className="mt-6">
                        هل تسافر بالاتجاه المعاكس؟ اطلع على صفحة <Link href="/ar/bahrain-to-dammam-taxi" className="text-amber-600 font-semibold hover:text-amber-700">تاكسي البحرين إلى الدمام</Link>، أو احجز <Link href="/ar/dammam-airport-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">نقلاً مباشراً من مطار الدمام (DMM) إلى البحرين</Link>.
                    </p>
                </div>

            </main>

            <CTASection locale="ar" />
        </div>
    );
}
