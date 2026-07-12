'use client';

import { useState } from 'react';
import { Calculator, MapPin, Navigation, Car, Shield, Info, CheckCircle } from 'lucide-react';
import { GradientButton } from '@/components/gradient-button';
import { FloatingCard } from '@/components/floating-card';
import { CTASection } from '@/components/cta-section';

const locations = [
    { name: 'مركز مدينة المنامة', base: 5 },
    { name: 'مطار البحرين الدولي', base: 10 },
    { name: 'ضاحية السيف', base: 8 },
    { name: 'الجفير', base: 6 },
    { name: 'جزر أمواج', base: 12 },
    { name: 'المحرق', base: 9 },
    { name: 'الرفاع', base: 15 },
    { name: 'مدينة عيسى', base: 11 },
    { name: 'الزلاق (سوفيتيل)', base: 25 },
    { name: 'جسر الملك فهد (الحدود السعودية)', base: 22 },
];

const vehicles = [
    { name: 'سيدان اقتصادية', multiplier: 1.0 },
    { name: 'سيارة VIP فاخرة (BMW/مرسيدس)', multiplier: 1.5 },
    { name: 'دفع رباعي فاخر (GMC يوكن)', multiplier: 1.8 },
    { name: 'فان عائلي (كيا كارنفال 7 مقاعد)', multiplier: 2.2 },
];

export default function ArabicFareCalculatorPage() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [vehicle, setVehicle] = useState(vehicles[0].name);
    const [estimatedFare, setEstimatedFare] = useState<number | null>(null);

    const calculateFare = () => {
        if (!pickup || !dropoff) return;
        const pickupLoc = locations.find(l => l.name === pickup);
        const dropoffLoc = locations.find(l => l.name === dropoff);
        const vehicleType = vehicles.find(v => v.name === vehicle);

        if (pickupLoc && dropoffLoc && vehicleType) {
            let distanceBase = Math.abs(pickupLoc.base - dropoffLoc.base) + 5;
            if (pickup === dropoff) distanceBase = 5;
            const finalPrice = Math.round(distanceBase * vehicleType.multiplier);
            setEstimatedFare(finalPrice);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
                        <Calculator className="w-8 h-8 text-amber-700" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        حاسبة أجرة <span className="text-amber-600">تاكسي البحرين</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-4">
                        تعبت من أسعار تطبيقات النقل المتغيرة؟ استخدم حاسبة الأجرة الرسمية لعام 2026 لمعرفة سعرنا الثابت المضمون 100%.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                        <FloatingCard className="border-slate-200 shadow-xl bg-white p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <Navigation className="w-6 h-6 ml-3 text-amber-500" />
                                خطط لرحلتك
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="pickup" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <MapPin className="w-4 h-4 ml-2 text-green-600" /> موقع الانطلاق
                                    </label>
                                    <select
                                        id="pickup"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>اختر نقطة الانطلاق...</option>
                                        {locations.map(loc => <option key={`p-${loc.name}`} value={loc.name}>{loc.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="dropoff" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <MapPin className="w-4 h-4 ml-2 text-red-600" /> موقع الوصول
                                    </label>
                                    <select
                                        id="dropoff"
                                        value={dropoff}
                                        onChange={(e) => setDropoff(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        <option value="" disabled>اختر الوجهة...</option>
                                        {locations.map(loc => <option key={`d-${loc.name}`} value={loc.name}>{loc.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vehicle" className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                                        <Car className="w-4 h-4 ml-2 text-blue-600" /> فئة المركبة
                                    </label>
                                    <select
                                        id="vehicle"
                                        value={vehicle}
                                        onChange={(e) => setVehicle(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                    >
                                        {vehicles.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
                                    </select>
                                </div>
                                <button
                                    onClick={calculateFare}
                                    className="w-full py-4 mt-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    <Calculator className="w-5 h-5" /> احسب السعر الثابت
                                </button>
                            </div>
                        </FloatingCard>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        {estimatedFare !== null ? (
                            <FloatingCard className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0 shadow-2xl p-8">
                                <h3 className="text-xl font-bold mb-2 opacity-90">سعرك المضمون</h3>
                                <div className="text-6xl font-black mb-6 flex items-baseline gap-2">
                                    <span className="text-3xl opacity-80">دينار</span> {estimatedFare}
                                </div>
                                <div className="space-y-3 mb-8 text-sm opacity-90">
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> بدون رسوم مخفية</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> رسوم الركن والمطار مشمولة</p>
                                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> بدون تسعير مفاجئ</p>
                                </div>
                                <GradientButton
                                    href={`https://wa.me/966569487569?text=${encodeURIComponent(`مرحباً! استخدمت حاسبة الأجرة لديكم. أحتاج رحلة من ${pickup} إلى ${dropoff} بسيارة ${vehicle}. السعر التقديري كان ${estimatedFare} دينار.`)}`}
                                    variant="whatsapp"
                                    className="w-full py-4 font-bold bg-white text-green-700 hover:bg-slate-50"
                                    external
                                >
                                    احجز بهذا السعر الآن
                                </GradientButton>
                            </FloatingCard>
                        ) : (
                            <FloatingCard className="bg-amber-50 border-amber-200 text-amber-900 p-8 h-full flex flex-col justify-center items-center text-center">
                                <Info className="w-12 h-12 mb-4 text-amber-500 opacity-50" />
                                <h3 className="text-2xl font-bold mb-2">بانتظار التفاصيل</h3>
                                <p className="opacity-80">أدخل موقع الانطلاق والوصول لمعرفة سعرك الثابت المضمون لعام 2026.</p>
                            </FloatingCard>
                        )}

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-amber-600" />
                                لماذا حاسبة BTG أكثر موثوقية من التطبيقات الأخرى؟
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                معظم تطبيقات النقل تستخدم خوارزميات تسعير معقدة تزيد السعر وقت الذروة أو وصول الرحلات. نظامنا الثابت مبني على خبرة بشرية وبيانات حقيقية من أكثر من 50,000 رحلة مكتملة.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <CTASection locale="ar" />
        </div>
    );
}
