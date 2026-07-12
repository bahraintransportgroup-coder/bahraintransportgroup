import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي البحرين إلى مطار الدمام | نقل إلى مطار الملك فهد الدولي (DMM)',
    description: 'احجز تاكسي مباشر بسعر ثابت من البحرين إلى مطار الملك فهد الدولي (DMM) في الدمام. بدون تبديل السيارة، تتبع موعد الرحلة، إرسال على مدار الساعة. احجز عبر واتساب.',
    keywords: 'تاكسي البحرين إلى مطار الدمام, نقل مطار الملك فهد الدولي, تاكسي مطار DMM من البحرين, سعر تاكسي البحرين إلى مطار الدمام',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/bahrain-to-dammam-airport-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من البحرين إلى مطار الدمام (DMM). يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        تاكسي البحرين إلى <span className="text-amber-600">مطار الدمام</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        نقل بسعر ثابت من الباب إلى المطار مباشرة إلى مطار الملك فهد الدولي (DMM)، مع تتبع موعد الرحلة حتى لا تفوتك رحلتك أبداً.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                بروتوكول نقل المطار
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">مباشرة إلى الصالة</span>
                                        <span className="text-sm text-slate-600">بدون تبديل السيارة عند الجسر. نفس السيارة من باب منزلك في البحرين حتى رصيف صالة مطار DMM.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">هامش زمني لموعد الرحلة</span>
                                        <span className="text-sm text-slate-600">تُخطط أوقات الانطلاق مع هامش زمني مدمج لتأخيرات الحدود حتى لا تخاطر أبداً بفوات رحلتك.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">أجرة ثابتة شاملة لكل شيء</span>
                                        <span className="text-sm text-slate-600">الرسوم، ورسوم <strong>تسهيل الجمارك</strong>، وتأمين الحدود جميعها مشمولة مسبقاً.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"الخيار الموثوق للمسافرين الذين يفضلون الطيران من مطار الدمام (DMM) بدلاً من مطار البحرين الدولي لأسباب تتعلق بالسعر أو المسار."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> ضمان السعر الثابت
                            </div>
                            <h3 className="text-3xl font-bold mb-4">احجز خلال 60 ثانية</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                تجنب خطر التأخر عن رحلة دولية. احجز <strong>رحلتك المرتبة مسبقاً</strong> إلى المطار الآن.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                احصل على عرض سعر مطار DMM
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">كيف يعمل النقل من البحرين إلى مطار الدمام؟</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        يقع <strong>مطار الملك فهد الدولي (DMM)</strong> خارج وسط مدينة الدمام بمسافة لا بأس بها، مما يجعل النقل المباشر المحدد التوقيت أمراً ضرورياً لأي شخص يريد اللحاق برحلته. تتعامل بحرين ترانسبورت جروب مع هذا الأمر كبروتوكول مخصص للتوصيل إلى المطار وليس كرحلة عادية بين المدن: تُحسب أوقات الاستقبال بشكل عكسي بدءاً من موعد إقلاع رحلتك، مع الأخذ بعين الاعتبار عبور جسر الملك فهد ووقت المعالجة الحدودية المعتاد.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "بالنسبة لرحلة الساعة 6 صباحاً من مطار DMM، نجدول موعد الاستقبال من البحرين حوالي الساعة 2:30 صباحاً. يوفر هذا هامشاً مريحاً لازدحام الحدود، حتى تسجل دخولك ولديك وقت كافٍ، بدلاً من الركض إلى البوابة."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        يتولى <strong>سائقونا المحترفون المعتمدون</strong> جميع رسوم الجسر ومعاملات الجمارك، ويراقبون حالة رحلتك عند توفر البيانات، ويعدلون موعد الاستقبال تلقائياً في حال تغيّر جدولك.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">الأسئلة الشائعة</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">ما هو الوقت المناسب لمغادرة البحرين قبل رحلة من مطار DMM؟</h4>
                            <p className="text-sm text-slate-600">ننصح بمغادرة البحرين قبل 3.5 إلى 4 ساعات على الأقل من موعد إقلاع رحلتك المحدد، لأخذ عبور الجسر والمعالجة الحدودية وتسجيل الدخول في المطار بعين الاعتبار.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل رسوم الجسر مشمولة في سعر النقل إلى المطار؟</h4>
                            <p className="text-sm text-slate-600">نعم. كل عرض سعر من بحرين ترانسبورت جروب إلى مطار DMM شامل بالكامل، ويغطي رسوم الجسر وتأمين المركبة، دون أي رسوم خفية تُضاف عند الحدود.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">خبيرة لوجستيات</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">زهراء البحريني</h4>
                        <p className="text-sm text-slate-600 max-w-lg">كبيرة مسؤولي اللوجستيات في بحرين ترانسبورت جروب. بخبرة تمتد لعقد من الزمن في النقل العابر للحدود، تبني زهراء كل موعد استقبال لمطار DMM حول موعد إقلاع الرحلة، وليس العكس.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                    <p className="mt-6">
                        هل تصل إلى الدمام بدلاً من ذلك؟ اطلع على صفحة <Link href="/ar/dammam-airport-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">تاكسي مطار الدمام إلى البحرين</Link>، أو <Link href="/ar/bahrain-to-dammam-taxi" className="text-amber-600 font-semibold hover:text-amber-700">نقل من البحرين إلى مدينة الدمام</Link>.
                    </p>
                </div>

            </main>

            <CTASection locale="ar" />
        </div>
    );
}
