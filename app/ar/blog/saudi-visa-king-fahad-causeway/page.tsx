import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { GradientButton } from '@/components/gradient-button';
import { CTASection } from '@/components/cta-section';
import { Shield, Info, MapPin, CheckCircle, FileText } from 'lucide-react';
import { BlogStructuredData } from '@/components/blog-structured-data';

export const metadata: Metadata = generateSEO({
    title: 'التأشيرة السعودية وقواعد الدخول عبر جسر الملك فهد 2026 | دليل BTG',
    description: 'دليل أساسي لمتطلبات التأشيرة السعودية، ورسوم جسر الملك فهد، وإجراءات الدخول للمسافرين العابرين من البحرين إلى السعودية براً.',
    keywords: 'تأشيرة سعودية لمقيمي البحرين, قواعد جسر الملك فهد 2026, رحلة برية من البحرين إلى السعودية, رسوم عبور الجسر',
    canonicalUrl: 'https://bahraintransportgroup.com/ar/blog/saudi-visa-king-fahad-causeway',
});

export default function VisaGuidePage() {
    return (
        <div className="bg-white" dir="rtl">
            <BlogStructuredData
                title="التأشيرة السعودية وقواعد الدخول عبر جسر الملك فهد 2026 | دليل BTG"
                description="دليل أساسي لمتطلبات التأشيرة السعودية، ورسوم جسر الملك فهد، وإجراءات الدخول للمسافرين العابرين من البحرين إلى السعودية براً."
                url="https://bahraintransportgroup.com/ar/blog/saudi-visa-king-fahad-causeway"
                datePublished="2026-02-01"
                dateModified="2026-06-22"
            />
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-0">
                <header className="mb-12">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full uppercase tracking-wider mb-6">
                        بروتوكول الحدود
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        جسر الملك فهد: <span className="text-amber-600">دليل التأشيرة السعودية</span> والدخول 2026
                    </h1>
                </header>

                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        عبور جسر الملك فهد الممتد لـ25 كيلومتراً يتطلب أكثر من مجرد سيارة. لضمان انتقال سلس بين مملكة البحرين والمنطقة الشرقية في السعودية، فهم أحدث بروتوكولات التأشيرة وجمارك السيارات <strong>أمر ضروري</strong>.
                    </p>

                    <div className="bg-slate-50 border-r-4 border-amber-500 p-8 rounded-l-3xl mb-12">
                        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5" /> سر العبور الاحترافي
                        </h2>
                        <p className="text-slate-700 italic">
                            "يواجه معظم المسافرين صعوبة في التأمين ودفع رسوم العبور عند الحدود. أكثر الطرق كفاءة للعبور هي استخدام <strong>خدمة سائق محترف مدقق مسبقاً</strong> يتولى جميع الرسوم المتعلقة بالمركبة داخلياً."
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">1. متطلبات التأشيرة لعام 2026</h2>
                    <p>
                        سواء كنت من مواطني دول مجلس التعاون الخليجي، أو مقيماً مغترباً بتصريح إقامة، أو سائحاً، يجب معالجة تأشيرتك قبل الوصول إلى جزيرة الجسر.
                    </p>
                    <ul>
                        <li><strong>مواطنو دول مجلس التعاون الخليجي:</strong> يلزم فقط بطاقة الهوية/جواز السفر.</li>
                        <li><strong>حاملو التأشيرة الإلكترونية:</strong> تأكد من أن تأشيرتك متعددة الدخول فعّالة عبر بوابة أبشر الرسمية.</li>
                        <li><strong>المقيمون المغتربون:</strong> يتطلب تأشيرة خروج وعودة سارية المفعول عند المغادرة من البحرين.</li>
                    </ul>

                    {/* REVERSE SILO LINK - Target Page: Dammam Taxi */}
                    <div className="my-12 p-8 bg-amber-600 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">هل تحتاج إلى عبور حدودي خالٍ من التوتر؟</h3>
                            <p className="text-amber-100 mb-8 max-w-lg">
                                تجاوز الأوراق الرسمية وطوابير التأمين. تشمل خدمة <strong>تاكسي البحرين إلى الدمام</strong> لدينا جميع الرسوم والتأمين على المركبة وسائقين محترفين يتولون اللوجستيات نيابة عنك.
                            </p>
                            <Link href="/ar/bahrain-to-dammam-taxi">
                                <span className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all inline-block shadow-lg">
                                    شاهد أسعار الدمام الثابتة ←
                                </span>
                            </Link>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">2. إجراءات العبور والرسوم</h2>
                    <p>
                        رسوم العبور الحالية للمركبات الصغيرة هي 2.5 دينار بحريني (أو 25 ريال سعودي). ومع ذلك، فإن نظام إدارة الطوابير للسيارات الخاصة قد يستغرق بين 60 و180 دقيقة خلال ساعات الذروة في عطلة نهاية الأسبوع.
                    </p>
                    <p>
                        <strong>بروتوكول الرسوم الثابتة</strong> لدينا يعني أنك لست بحاجة لحمل عملة محلية لدفع الرسوم. نتولى مدفوعات المحفظة الإلكترونية عند البوابات، مما يضمن مرورك عبر ممرات العبور بأسرع وقت ممكن تقنياً.
                    </p>
                </div>
            </article>
            <CTASection locale="ar" />
        </div>
    );
}
