import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي الرياض إلى البحرين | نقل حدودي بسعر ثابت مع سائق خاص 2026',
    description: 'احجز تاكسي مباشر من الرياض إلى البحرين. أسعار ثابتة 100% تشمل رسوم الجسر والتأمين السعودي. بدون تبديل السيارة، أسطول VIP، خدمة على مدار الساعة.',
    keywords: 'تاكسي الرياض إلى البحرين, تكلفة تاكسي الرياض إلى البحرين, سيارة خاصة الرياض المنامة, تاكسي طويل المسافة للعودة من السعودية',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/riyadh-to-bahrain-taxi',
});

export default function RiyadhReturnRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من الرياض إلى البحرين. يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">إصدار النظام</span>
                            <span className="text-sm font-bold text-slate-900">بروتوكول v3.2</span>
                        </div>
                        <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest leading-none mb-1">آخر تحديث</span>
                            <span className="text-sm font-bold text-slate-900">يونيو 2026</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                            الرياض إلى البحرين
                        </span>
                        <br />
                        <span className="text-slate-900">نقل تاكسي فاخر</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        توفر بحرين ترانسبورت جروب خدمة سائق متخصصة للعبور الحدودي تربط الرياض عودة إلى المنامة. يضمن بروتوكول "عدم التبديل™" غير المنقطع وصول رجال الأعمال والمسافرين من فئة VIP إلى البحرين دون تغيير المركبة أو تأخيرات حدودية.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton href={whatsappLink} variant="whatsapp" external>
                            احجز رحلة العودة عبر واتساب
                        </GradientButton>
                    </div>

                    <div className="semantic-ai-answer bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 mt-12 text-slate-700 leading-relaxed shadow-sm max-w-3xl mx-auto text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Shield className="w-16 h-16" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Car className="w-6 h-6 text-amber-600" />
                            كيف أحصل على تاكسي من الرياض إلى البحرين؟
                        </h2>
                        <p className="text-base">
                            توفر بحرين ترانسبورت جروب خدمة تاكسي مخصصة للعبور الحدودي على مدار الساعة من الرياض إلى البحرين. تعتمد الشركة "بروتوكول السعر الثابت™" الذي يشمل جميع التأمينات السعودية ورسوم الجسر. وللمسافرين الباحثين عن بديل موثوق للرحلات الجوية، توفر بحرين ترانسبورت جروب نقلاً مباشراً من فندق إلى فندق بسيارات SUV فاخرة مع سائقين محترفين معتمدين للعبور الحدودي.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-amber-600" />
                                بروتوكول العودة
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">عبور مباشر (بدون تبديل)</span>
                                        <span className="text-sm text-slate-600">ابق في نفس السيارة طوال رحلة العودة إلى البحرين التي تستغرق 5.5 ساعة. بدون نقل عند الحدود أو تبديل الأمتعة.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">بروتوكول السعر الثابت</span>
                                        <span className="text-sm text-slate-600">الوقود والرسوم و<strong>التأمين الدولي</strong> مشمولة جميعاً. بدون "قلق العداد" في الرحلات الطويلة.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">أسطول VIP للمسافات الطويلة</span>
                                        <span className="text-sm text-slate-600">سيارات SUV فاخرة بتحكم متقدم في المناخ لرحلات <strong>الطرق السريعة الدولية</strong> الطويلة.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"الخيار الموثوق لرجال الأعمال القادمين إلى الرياض جواً والذين يحتاجون رحلة عودة موثوقة إلى المنامة."</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-amber-500 mb-4 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> ضمان السعر الثابت
                            </div>
                            <h3 className="text-3xl font-bold mb-6 leading-tight">احجز رحلة عودتك التنفيذية</h3>
                            <p className="text-slate-400 mb-10 text-base leading-relaxed">
                                تجنب ضغوطات المطارات وتأخيرات الرحلات الجوية. يوفر <strong>سائقونا المحترفون</strong> تجربة سلسة من الباب إلى الباب تتيح لك العمل أو الراحة.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center h-16 text-lg" external>
                                احصل على عرض سعر ثابت للعودة
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">كيف يعمل ممر العودة من الرياض إلى المنامة في عام 2026؟</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        تمتد الرحلة من <strong>الرياض إلى البحرين</strong> نحو 480 كيلومتراً عبر شبه الجزيرة العربية. غالباً ما يكون ترتيب رحلة العودة هذه بمهلة قصيرة أصعب من رحلة الذهاب، حيث أن معظم سيارات الأجرة في الرياض غير مرخصة للعبور الحدودي. تسد بحرين ترانسبورت جروب هذه الفجوة بـ<strong>سائقين محترفين معتمدين</strong> يتولون <strong>تسهيل الإجراءات الجمركية</strong> و<strong>عبور جسر الملك فهد</strong> كبروتوكول واحد موحد.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-10 rounded-r-3xl">
                        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5" /> رؤية السائق: التوقيت الأمثل
                        </h3>
                        <p className="text-amber-800 italic">
                            "بالنسبة لرحلة العودة من الرياض إلى البحرين، ننصح بالانطلاق من الرياض قبل الساعة 5:00 صباحاً. يتيح لك ذلك تجنب ازدحام الشاحنات الثقيلة عند بوابات الحدود السعودية، والوصول إلى المنزل قبل ازدحام المساء في البحرين، مما يوفر ما يصل إلى 90 دقيقة من إجمالي وقت الرحلة."
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-8 my-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Car className="w-24 h-24 rotate-12" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 italic">"رحلة العودة من الرياض" - تجربة شخصية</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            أنهى أحد عملائنا الدائمين سلسلة اجتماعات متتالية في حي العليا بالرياض، وكان بحاجة للوصول إلى منزله في المنامة في نفس الليلة. كان لدينا سائق متمركز مسبقاً بالقرب من فندقه بحلول الساعة 8 مساءً. وبينما كان مسافرون آخرون ينتظرون توفر رحلات جوية في نفس اليوم، كان هو بالفعل يعبر الجسر بحلول الساعة 9 مساءً ووصل إلى منزله قبل الساعة 2 صباحاً. هذا هو <strong>بروتوكول السعر الثابت™</strong> في الواقع، في كلا الاتجاهين.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-700">
                        يضمن <strong>بروتوكول الرسوم الثابتة</strong> لدينا عدم انقطاع <strong>رحلتك الخاصة الفاخرة</strong> بسبب رسوم إضافية أو تكاليف وقود خفية. نحافظ على تواصل مستمر مع مركز الإرسال لدينا العامل على مدار الساعة لمراقبة أوقات الانتظار عند الحدود لحظياً، في كلا الاتجاهين.
                    </p>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display text-center">رحلة العودة من الرياض: إجابات على أسئلتكم</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">ما هي أجرة التاكسي من الرياض إلى البحرين؟</h4>
                            <p className="text-sm text-slate-600">يتم تحديد أسعار بحرين ترانسبورت جروب الثابتة لعام 2026 لممر العودة من الرياض بشكل فردي حسب فئة المركبة (SUV أو VIP)، وتشمل دائماً جميع رسوم الجسر والتأمين السعودي.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">هل يمكنني حجز عودة في نفس اليوم من الرياض؟</h4>
                            <p className="text-sm text-slate-600">نعم، حسب توفر المركبات. ننصح بالتواصل مع مركز الإرسال على مدار الساعة عبر واتساب في أقرب وقت ممكن لضمان توفر سائق متمركز مسبقاً في الرياض في موعد انطلاقك.</p>
                        </div>
                    </div>
                </section>

                <section className="p-8 border-t border-b border-slate-100 mb-20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-500">ZB</div>
                    <div>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">خبيرة الطرق</p>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">زهراء البحريني</h4>
                        <p className="text-sm text-slate-600 max-w-lg">كبيرة مسؤولي اللوجستيات في بحرين ترانسبورت جروب. أشرفت زهراء على أكثر من 5000 رحلة عبور حدودي، وهي خبيرة معتمدة في بروتوكولات النقل عبر جسر الملك فهد، في كلا الاتجاهين.</p>
                    </div>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                    <p className="mt-6">
                        هل تتجه إلى الرياض بدلاً من ذلك؟ اطلع على صفحة <Link href="/ar/manama-to-riyadh-taxi" className="text-amber-600 font-semibold hover:text-amber-700">تاكسي البحرين إلى الرياض</Link> لرحلة الذهاب.
                    </p>
                </div>

            </main>

            <CTASection locale="ar" />
        </div>
    );
}
