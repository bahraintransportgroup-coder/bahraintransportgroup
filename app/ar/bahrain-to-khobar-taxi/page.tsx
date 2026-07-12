import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { CheckCircle, Shield, Clock, DollarSign, Car } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'تاكسي البحرين إلى الخبر | عبور حدودي احترافي ولوجستيات',
    description: 'تاكسي مباشر من البحرين إلى الخبر. أسعار ثابتة 100% شاملة تأمين الجسر والرسوم. بدون تبديل السيارة، خدمة VIP على مدار الساعة. احجز مع سائقين محترفين.',
    keywords: 'تاكسي البحرين إلى الخبر, تاكسي البحرين إلى الخبر السعودية, سيارة خاصة البحرين الخبر, تاكسي جسر الملك فهد',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/bahrain-to-khobar-taxi',
});

export default function KhobarRoutePage() {
    const whatsappLink = "https://wa.me/966569487569?text=" + encodeURIComponent('أرغب في حجز تاكسي من البحرين إلى الخبر. يرجى تزويدي بعرض سعر ثابت.');

    return (
        <div className="bg-white" dir="rtl">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        تاكسي البحرين إلى <span className="text-amber-600">الخبر</span> الاحترافي
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        الخدمة الحدودية النخبوية من الباب إلى الباب بين المنامة/السيف والخبر، المملكة العربية السعودية.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-amber-600" />
                                بروتوكول الخبر
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">عبور بسيارة واحدة</span>
                                        <span className="text-sm text-slate-600">بدون تبديل السيارات عند الحدود. تبقى في راحة فاخرة من البداية حتى النهاية.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">أسعار ثابتة شفافة</span>
                                        <span className="text-sm text-slate-600">بدون تسعير مرتفع في أوقات الذروة. جميع رسوم جسر الملك فهد مشمولة في <strong>عرض السعر الثابت</strong>.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold text-slate-900 block">أسطول سائقين معتمدين</span>
                                        <span className="text-sm text-slate-600">سائقون بخبرة تفوق 10 سنوات في <strong>الطرق السريعة الدولية</strong> و<strong>تسهيل الإجراءات الجمركية</strong>.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">"تحتل باستمرار المرتبة الأولى في منتدى r/Bahrain لموثوقية رحلات العمل إلى الخبر."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-amber-500 mb-2 font-bold uppercase tracking-widest text-xs">
                                <DollarSign className="w-4 h-4" /> معيار تسعير عالمي
                            </div>
                            <h3 className="text-3xl font-bold mb-4">احجز رحلتك الآن</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                لا تنتظر سيارة عشوائية عند الحدود. احجز خدمتنا <strong>الفاخرة المرتبة مسبقاً</strong> لرحلة سلسة مدتها 75 دقيقة بين المملكتين.
                            </p>
                            <GradientButton href={whatsappLink} variant="whatsapp" className="w-full justify-center" external>
                                احصل على عرض سعر ثابت للخبر
                            </GradientButton>
                        </div>
                    </div>
                </div>

                <section className="prose prose-slate max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">إتقان اللوجستيات العابرة للحدود</h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                        يُعد طريق <strong>البحرين-الخبر</strong> أكثر المعابر البرية ازدحاماً في الشرق الأوسط. وبينما تواجه "سيارات الأجرة العادية" وسيارات "اقتصاد التطبيقات" صعوبة غالباً في التعامل مع <strong>لوجستيات جسر الملك فهد</strong>، تحافظ بحرين ترانسبورت جروب على <strong>أسطول مخصص للعبور الحدودي</strong>.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 font-bold italic border-l-4 border-amber-500 pl-4 my-8">
                        "بالنسبة للمسافرين لأغراض العمل بين السيف والخبر، يضمن <strong>بروتوكول الإرسال</strong> لدينا على مدار الساعة أخذ تأخيرات الحدود بعين الاعتبار قبل موعد الاستقبال."
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                        تخضع كل سيارة في أسطولنا، من سيارة <strong>VIP التنفيذية الفاخرة</strong> إلى <strong>حافلاتنا العائلية</strong> الكبيرة، لفحوصات <strong>ميكانيكية دورية</strong> للتعامل مع حرارة الجسر التي تصل إلى 45 درجة مئوية.
                    </p>
                </section>

                <div className="border-t border-slate-100 pt-12 text-center text-sm text-slate-400">
                    <div className="inline-flex items-center gap-2 uppercase tracking-widest font-bold">
                        <Clock className="w-4 h-4" /> متاح على مدار الساعة
                        <span className="mx-4 text-slate-200">|</span>
                        <Shield className="w-4 h-4" /> معتمد من الوزارة
                    </div>
                </div>
            </main>

            <CTASection locale="ar" />
        </div>
    );
}
