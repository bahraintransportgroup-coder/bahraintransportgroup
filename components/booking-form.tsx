'use client';

import { useState } from 'react';
import { GradientButton } from './gradient-button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

interface PromoResult {
  valid: boolean;
  discount_type?: 'percentage' | 'fixed';
  discount_value?: number;
  description?: string;
  error?: string;
}

interface BookingFormProps {
  locale?: 'en' | 'ar';
}

const t = {
  en: {
    fullName: 'Full Name', namePh: 'John Doe',
    email: 'Email', emailPh: 'john@example.com',
    phone: 'Phone Number',
    serviceType: 'Service Type', selectService: 'Select service',
    services: {
      airport_transfer: 'Airport Transfer', city_taxi: 'City Taxi', corporate_taxi: 'Corporate Taxi',
      hotel_pickup: 'Hotel Pickup', chauffeur: 'Chauffeur Service', family_van: 'Family Van',
      vip_car: 'VIP Car', saudi_causeway: 'Saudi Causeway Transfer', student_transport: 'Student Transport',
      pet_transport: 'Pet Transport', city_tour: 'Hire-by-Hour / City Tour', wedding_event: 'Wedding / Event Transport',
    },
    pickupLocation: 'Pickup Location', pickupPh: 'e.g., Manama City Centre',
    dropoffLocation: 'Drop-off Location', dropoffPh: 'e.g., Bahrain Airport',
    pickupDate: 'Pickup Date', pickupTime: 'Pickup Time',
    passengers: 'Number of Passengers', passenger: 'Passenger', passengersWord: 'Passengers',
    promoCode: 'Promo Code', optional: '(optional)', promoPh: 'e.g. WELCOME10', checking: 'Checking…',
    discountApplied: 'discount applied at checkout', off: 'off',
    notes: 'Additional Notes', notesPh: 'Any special requirements or additional information...',
    submitting: 'Submitting...', submit: 'Submit Booking Request',
    successMsg: 'Booking request submitted! We\'ll send your quote via WhatsApp shortly.',
    errorMsg: 'Failed to submit booking. Please try again or contact us via WhatsApp.',
    promoError: 'Could not validate code',
  },
  ar: {
    fullName: 'الاسم الكامل', namePh: 'أحمد محمد',
    email: 'البريد الإلكتروني', emailPh: 'ahmed@example.com',
    phone: 'رقم الهاتف',
    serviceType: 'نوع الخدمة', selectService: 'اختر الخدمة',
    services: {
      airport_transfer: 'توصيل المطار', city_taxi: 'تاكسي داخل المدينة', corporate_taxi: 'تاكسي الشركات',
      hotel_pickup: 'استقبال من الفندق', chauffeur: 'خدمة السائق الخاص', family_van: 'فان عائلي',
      vip_car: 'سيارة VIP', saudi_causeway: 'جسر الملك فهد', student_transport: 'نقل الطلاب',
      pet_transport: 'نقل الحيوانات الأليفة', city_tour: 'استئجار بالساعة / جولة المدينة', wedding_event: 'نقل الأعراس / المناسبات',
    },
    pickupLocation: 'موقع الانطلاق', pickupPh: 'مثال: مركز مدينة المنامة',
    dropoffLocation: 'موقع الوصول', dropoffPh: 'مثال: مطار البحرين',
    pickupDate: 'تاريخ الانطلاق', pickupTime: 'وقت الانطلاق',
    passengers: 'عدد الركاب', passenger: 'راكب', passengersWord: 'ركاب',
    promoCode: 'كود الخصم', optional: '(اختياري)', promoPh: 'مثال: WELCOME10', checking: 'جاري التحقق…',
    discountApplied: 'تم تطبيق الخصم عند الدفع', off: 'خصم',
    notes: 'ملاحظات إضافية', notesPh: 'أي متطلبات خاصة أو معلومات إضافية...',
    submitting: 'جاري الإرسال...', submit: 'إرسال طلب الحجز',
    successMsg: 'تم إرسال طلب الحجز! سنرسل لك السعر عبر واتساب قريباً.',
    errorMsg: 'فشل إرسال الحجز. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.',
    promoError: 'تعذر التحقق من الكود',
  },
};

export function BookingForm({ locale = 'en' }: BookingFormProps) {
  const tr = t[locale];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup_location: '',
    dropoff_location: '',
    service_type: '',
    pickup_date: '',
    pickup_time: '',
    passengers: '1',
    message: '',
    promo_code: '',
  });
  const [loading, setLoading] = useState(false);
  const [promoResult, setPromoResult] = useState<PromoResult | null>(null);
  const [promoChecking, setPromoChecking] = useState(false);

  const handlePromoBlur = async () => {
    const code = formData.promo_code.trim();
    if (!code) { setPromoResult(null); return; }
    setPromoChecking(true);
    try {
      const res = await fetch(`/api/promo/validate?code=${encodeURIComponent(code)}`);
      const data: PromoResult = await res.json();
      setPromoResult(data);
    } catch {
      setPromoResult({ valid: false, error: tr.promoError });
    } finally {
      setPromoChecking(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: Record<string, unknown> = { ...formData };
      if (!formData.promo_code.trim()) delete payload.promo_code;

      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');

      toast.success(tr.successMsg);
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickup_location: '',
        dropoff_location: '',
        service_type: '',
        pickup_date: '',
        pickup_time: '',
        passengers: '1',
        message: '',
        promo_code: '',
      });
      setPromoResult(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error(tr.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.fullName}</label>
          <Input
            required
            placeholder={tr.namePh}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.email}</label>
          <Input
            type="email"
            required
            placeholder={tr.emailPh}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.phone}</label>
          <Input
            type="tel"
            required
            placeholder="+966 569487569"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.serviceType}</label>
          <Select
            required
            value={formData.service_type}
            onValueChange={(value) => setFormData({ ...formData, service_type: value })}
          >
            <SelectTrigger className="bg-white border-slate-200 text-slate-900">
              <SelectValue placeholder={tr.selectService} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(tr.services).map(([value, label]) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.pickupLocation}</label>
          <Input
            required
            placeholder={tr.pickupPh}
            value={formData.pickup_location}
            onChange={(e) => setFormData({ ...formData, pickup_location: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.dropoffLocation}</label>
          <Input
            required
            placeholder={tr.dropoffPh}
            value={formData.dropoff_location}
            onChange={(e) => setFormData({ ...formData, dropoff_location: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.pickupDate}</label>
          <Input
            type="date"
            required
            value={formData.pickup_date}
            onChange={(e) => setFormData({ ...formData, pickup_date: e.target.value })}
            className="bg-white border-slate-200 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.pickupTime}</label>
          <Input
            type="time"
            required
            value={formData.pickup_time}
            onChange={(e) => setFormData({ ...formData, pickup_time: e.target.value })}
            className="bg-white border-slate-200 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.passengers}</label>
          <Select
            value={formData.passengers}
            onValueChange={(value) => setFormData({ ...formData, passengers: value })}
          >
            <SelectTrigger className="bg-white border-slate-200 text-slate-900">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? tr.passenger : tr.passengersWord}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">
            {tr.promoCode} <span className="text-slate-400 font-normal">{tr.optional}</span>
          </label>
          <div className="relative">
            <Input
              placeholder={tr.promoPh}
              value={formData.promo_code}
              onChange={(e) => {
                setFormData({ ...formData, promo_code: e.target.value.toUpperCase() });
                setPromoResult(null);
              }}
              onBlur={handlePromoBlur}
              className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 uppercase"
            />
            {promoChecking && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">{tr.checking}</span>
            )}
          </div>
          {promoResult && (
            <p className={`mt-1 text-xs font-medium ${promoResult.valid ? 'text-green-600' : 'text-red-500'}`}>
              {promoResult.valid
                ? `✓ ${promoResult.description || (promoResult.discount_type === 'percentage' ? `${promoResult.discount_value}% ${tr.off}` : `${promoResult.discount_value} BHD ${tr.off}`)} — ${tr.discountApplied}`
                : `✗ ${promoResult.error}`}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-slate-900">{tr.notes}</label>
        <Textarea
          placeholder={tr.notesPh}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 min-h-24"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-[0_0_30px_rgba(251,146,60,0.5)] w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? tr.submitting : tr.submit}
      </button>
    </form>
  );
}
