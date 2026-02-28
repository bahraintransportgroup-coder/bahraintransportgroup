'use client';

import { useState } from 'react';
import { GradientButton } from './gradient-button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export function BookingForm() {
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
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error: dbError } = await supabase.from('booking_requests').insert([
        {
          ...formData,
          passengers: parseInt(formData.passengers),
          status: 'pending',
        },
      ]);

      if (dbError) throw dbError;

      // Send email notification
      const emailResponse = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.warn('Database save successful, but email notification failed.');
      }

      toast.success('Booking request submitted successfully! We will contact you shortly.');
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
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit booking. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Full Name</label>
          <Input
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Email</label>
          <Input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Phone Number</label>
          <Input
            type="tel"
            required
            placeholder="+92 317 624 3861"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Service Type</label>
          <Select
            required
            value={formData.service_type}
            onValueChange={(value) => setFormData({ ...formData, service_type: value })}
          >
            <SelectTrigger className="bg-white border-slate-200 text-slate-900">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="airport_transfer">Airport Transfer</SelectItem>
              <SelectItem value="city_taxi">City Taxi</SelectItem>
              <SelectItem value="corporate_taxi">Corporate Taxi</SelectItem>
              <SelectItem value="hotel_pickup">Hotel Pickup</SelectItem>
              <SelectItem value="chauffeur">Chauffeur Service</SelectItem>
              <SelectItem value="family_van">Family Van</SelectItem>
              <SelectItem value="vip_car">VIP Car</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Pickup Location</label>
          <Input
            required
            placeholder="e.g., Manama City Centre"
            value={formData.pickup_location}
            onChange={(e) => setFormData({ ...formData, pickup_location: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Drop-off Location</label>
          <Input
            required
            placeholder="e.g., Bahrain Airport"
            value={formData.dropoff_location}
            onChange={(e) => setFormData({ ...formData, dropoff_location: e.target.value })}
            className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Pickup Date</label>
          <Input
            type="date"
            required
            value={formData.pickup_date}
            onChange={(e) => setFormData({ ...formData, pickup_date: e.target.value })}
            className="bg-white border-slate-200 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Pickup Time</label>
          <Input
            type="time"
            required
            value={formData.pickup_time}
            onChange={(e) => setFormData({ ...formData, pickup_time: e.target.value })}
            className="bg-white border-slate-200 text-slate-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-900">Number of Passengers</label>
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
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-slate-900">Additional Notes</label>
        <Textarea
          placeholder="Any special requirements or additional information..."
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
        {loading ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
