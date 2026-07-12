import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'الشروط والأحكام | بحرين ترانسبورت جروب',
    description: 'الشروط والأحكام الخاصة ببحرين ترانسبورت جروب. اطّلع على سياسات الإلغاء وشروط الحجز وقيود الاستخدام.',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div dir="rtl" className="bg-slate-50 pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">الشروط والأحكام</h1>
                    <p className="text-sm text-slate-500 mb-10">آخر تحديث: يناير {currentYear}</p>

                    <div className="prose prose-slate max-w-none">

                        <p className="text-slate-600 leading-relaxed mb-6">
                            من خلال الوصول إلى هذا الموقع الإلكتروني، نفترض أنك توافق على هذه الشروط والأحكام. لا تستمر في استخدام بحرين ترانسبورت جروب إذا كنت لا توافق على قبول جميع الشروط والأحكام المذكورة في هذه الصفحة.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. حجوزات التاكسي</h2>
                        <ul className="list-disc pr-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li>تُعتبر جميع الحجوزات مؤكدة بمجرد رد مركز الإرسال عبر واتساب لدينا بالإيجاب.</li>
                            <li>يتم تحديد الأسعار بشكل ثابت 100% وقت الحجز.</li>
                            <li>نحتفظ بالحق في إلغاء الحجوزات إذا كانت معلومات الراكب مزورة أو غير لائقة.</li>
                            <li>قد تترتب على فترات الانتظار التي تتجاوز 15 دقيقة في مواقع الاستلام القياسية (غير المطار) رسوم إضافية بسيطة سيتم إبلاغك بها بشفافية.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. أوقات انتظار نقل المطار</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            بالنسبة لوصول الركاب في مطار البحرين الدولي، يراقب سائقونا حالة الرحلات في الوقت الفعلي. لا توجد رسوم إضافية للرحلات المتأخرة. نقدم 45 دقيقة من الانتظار المجاني من لحظة هبوط الطائرة بنجاح على المدرج.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. حماية المستهلك وسياسة الإلغاء (EEAT)</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            نفتخر بسياسة استرداد وإلغاء صادقة وشفافة لبناء الثقة مع الركاب المحليين والزوار الدوليين:
                        </p>
                        <ul className="list-disc pr-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li><strong>الإلغاء المجاني:</strong> متاح حتى ساعتين بالضبط قبل موعد الإرسال المحدد.</li>
                            <li><strong>الإلغاء المتأخر:</strong> قد يؤدي إلى وديعة حجز محلية غير قابلة للاسترداد للاستخدامات المستقبلية.</li>
                            <li><strong>عدم الحضور:</strong> إذا فشل الراكب في الحضور دون التواصل مع مشغلنا، يُستحق السعر الكامل محلياً أو يتم فرض عقوبة إنذار على رقم الهاتف المحمول.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. حدود المسؤولية</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            بينما نضمن دائماً أقصى درجات السلامة من خلال استخدام سائقين مسجلين وموثقين ومركبات فاخرة مؤمّنة بالكامل، فإن بحرين ترانسبورت جروب غير مسؤولة عن الرحلات الجوية الفائتة بسبب ظروف استثنائية خارجة عن السيطرة (قوة قاهرة مثل المخاطر الجوية الشديدة أو حواجز طرق مفاجئة وغير متوقعة على الطرق السريعة الرئيسية).
                        </p>

                        <hr className="my-8 border-slate-200" />

                        <p className="text-slate-600 leading-relaxed">
                            أسئلة بخصوص هذه الشروط؟ <a href="/ar/contact" className="text-amber-600 hover:underline">تواصل مع فريق العمليات لدينا</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
