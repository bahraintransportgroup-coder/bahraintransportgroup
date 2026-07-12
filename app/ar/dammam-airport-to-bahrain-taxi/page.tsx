import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Plane } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي مطار الدمام إلى البحرين | استقبال من مطار الملك فهد الدولي (DMM)',
    description: 'احجز تاكسي مباشر بسعر ثابت من مطار الملك فهد الدولي (DMM) في الدمام إلى البحرين. تتبع الرحلة، استقبال شخصي، بدون تبديل السيارة، إرسال على مدار الساعة.',
    keywords: 'تاكسي مطار الدمام إلى البحرين, استقبال مطار DMM إلى البحرين, نقل مطار الملك فهد الدولي إلى البحرين, سعر تاكسي مطار الدمام',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/dammam-airport-to-bahrain-taxi',
});

export default function CompactRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من مطار الدمام (DMM) إلى البحرين. يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Plane className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        تاكسي مطار الدمام إلى <span className="text-amber-600">البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        استقبال بسعر ثابت من مطار الملك فهد الدولي (DMM) مباشرة إلى باب منزلك في البحرين، مع تتبع الرحلة وخدمة الاستقبال الشخصي.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-amber-600" />
                                بروتوكول استقبال الوصول
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">تتبع الرحلة</span>
                                        <span className="text-sm text-slate-600">نراقب موعد وصولك إلى مطار DMM ونعدل موعد الإرسال تلقائياً في حال التأخير.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">استقبال شخصي</span>
                                        <span className="text-sm text-slate-600">ينتظرك السائق في صالة الوصول حاملاً لوحة باسمك، وجاهز للمساعدة في حمل الأمتعة.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">بدون تبديل حتى البحرين</span>
                                        <span className="text-sm text-slate-600">ابق في نفس السيارة عبر جسر الملك فهد، مباشرة حتى عنوانك في البحرين.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"خدمة مفضلة لدى المسافرين الذين يجدون رحلات أرخص أو أكثر ملاءمة إلى مطار DMM بدلاً من مطار البحرين الدولي."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> ضمان السعر الثابت
                            </div>
                            <h3 className="text-3xl font-bold mb-4">احجز خلال 60 ثانية</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                اهبط، واستلم أمتعتك، وستجد سائقك في الانتظار بالفعل. احجز <strong>رحلة وصولك المرتبة مسبقاً</strong> الآن.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                احصل على عرض سعر استقبال الوصول
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">كيف يعمل الاستقبال من مطار الدمام إلى البحرين؟</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        قد يعني الوصول إلى <strong>مطار الملك فهد الدولي (DMM)</strong> دون ترتيب مسبق للنقل انتظاراً طويلاً للحصول على تاكسي مرخص للعبور إلى البحرين. تحل بحرين ترانسبورت جروب هذه المشكلة بإرسال سائق لاستقبال رحلتك مباشرة في صالة الوصول، مع تتبع موعد هبوطك حتى يتم توقيت الاستقبال بحسب وقت خروجك الفعلي من الجمارك، وليس بناءً على تخمين ثابت.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "تأخر الرحلات أمر شائع على هذا الخط. ولأننا نتتبع رقم رحلتك، فإن تأخراً لمدة ساعتين إلى مطار DMM لن يكلفك أي رسوم إضافية، وسيظل سائقك في انتظارك عند هبوطك."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        من رصيف الصالة، يتولى <strong>سائقونا المحترفون المعتمدون</strong> عبور جسر الملك فهد وجميع معاملات إعادة الدخول إلى البحرين، ليوصلوك مباشرة إلى فندقك أو منزلك أو مكتبك دون الحاجة لسيارة ثانية.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">الأسئلة الشائعة</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">ماذا يحدث إذا تأخرت رحلتي إلى مطار DMM؟</h4>
                            <p className="text-sm text-slate-600">نتتبع رقم رحلتك ونعدل موعد الاستقبال تلقائياً دون أي تكلفة إضافية، حتى يكون سائقك في الانتظار أياً كان موعد هبوطك الفعلي.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">أين بالتحديد سيقابلني السائق؟</h4>
                            <p className="text-sm text-slate-600">ينتظرك سائقك في صالة الوصول حاملاً لوحة باسمك، وجاهز للمساعدة في حمل الأمتعة قبل مرافقتك إلى السيارة.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">خبيرة لوجستيات</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">زهراء البحريني</h4>
                        <p className="text-sm text-slate-600 max-w-lg">كبيرة مسؤولي اللوجستيات في بحرين ترانسبورت جروب. يتتبع فريق الإرسال بقيادة زهراء كل وصول إلى مطار DMM لحظياً حتى لا يُترك أي مسافر ينتظر في الصالة.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                    <p className="mt-6">
                        هل تطير من الدمام بدلاً من ذلك؟ اطلع على صفحة <Link href="/ar/bahrain-to-dammam-airport-taxi" className="text-amber-600 font-semibold hover:text-amber-700">تاكسي البحرين إلى مطار الدمام</Link>، أو <Link href="/ar/dammam-to-bahrain-taxi" className="text-amber-600 font-semibold hover:text-amber-700">نقل من مدينة الدمام إلى البحرين</Link>.
                    </p>
                </div>

            </main>

            <CTASection locale="ar" />
        </div>
    );
}
