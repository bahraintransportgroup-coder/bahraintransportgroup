import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { Link } from 'lucide-react';

export const metadata: Metadata = generateSEO({
    title: 'سياسة الخصوصية | بحرين ترانسبورت جروب',
    description: 'سياسة الخصوصية الخاصة ببحرين ترانسبورت جروب. تعرف على كيفية تعاملنا مع بياناتك وضمان حجوزات تاكسي آمنة.',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/privacy-policy',
});

export default function PrivacyPolicyPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div dir="rtl" className="bg-slate-50 pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">سياسة الخصوصية</h1>
                    <p className="text-sm text-slate-500 mb-10">آخر تحديث: يناير {currentYear}</p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-6">
                            في بحرين ترانسبورت جروب، التي يمكن الوصول إليها عبر bahraintransportgroup.com، تُعد خصوصية زوارنا إحدى أولوياتنا الرئيسية. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي تجمعها وتسجلها بحرين ترانسبورت جروب وكيفية استخدامنا لها.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. المعلومات التي نجمعها</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها (مثل اسمك، ورقم واتساب الخاص بك، وعنوان بريدك الإلكتروني)، وأسباب طلبها منك، بوضوح في اللحظة التي نطلب فيها منك تقديم معلوماتك الشخصية عند حجز خدمات التاكسي لدينا في البحرين.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. كيف نستخدم معلوماتك</h2>
                        <ul className="list-disc pr-5 text-slate-600 leading-relaxed mb-6 space-y-2">
                            <li>تقديم وتشغيل وصيانة خدمات النقل لدينا</li>
                            <li>تحسين وتخصيص وتوسيع عمليات موقعنا الإلكتروني</li>
                            <li>فهم وتحليل كيفية استخدامك لنظام حجز التاكسي لدينا</li>
                            <li>تطوير منتجات وخدمات وميزات ووظائف جديدة</li>
                            <li>التواصل معك لخدمة العملاء وإرسال السائقين (التواصل عبر واتساب)</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. ملفات السجل</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            تتبع بحرين ترانسبورت جروب إجراءً معيارياً لاستخدام ملفات السجل. تُسجل هذه الملفات بيانات الزوار عند زيارتهم للمواقع الإلكترونية. تشمل المعلومات التي يتم جمعها عناوين بروتوكول الإنترنت (IP)، ونوع المتصفح، ومزود خدمة الإنترنت (ISP)، وطابع التاريخ والوقت، والصفحات المرجعية/صفحات الخروج، وربما عدد النقرات. لا ترتبط هذه المعلومات بأي معلومات يمكن التعرف على هوية الشخص من خلالها.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. إشارات الثقة (EEAT) وموثوقية الخدمة</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            نستخدم تشفيراً بمعايير الصناعة (HTTPS فقط) لحماية اتصالك. تتم معالجة بياناتنا فقط لتسهيل نقلك الآمن داخل مملكة البحرين. لا نبيع بياناتك لأطراف ثالثة.
                        </p>

                        <hr className="my-8 border-slate-200" />

                        <p className="text-slate-600 leading-relaxed">
                            إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا، لا تتردد في <a href="/ar/contact" className="text-amber-600 hover:underline">التواصل معنا</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
