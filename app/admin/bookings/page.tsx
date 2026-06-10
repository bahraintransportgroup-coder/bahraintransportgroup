'use client';

import { useEffect, useState } from 'react';
import type { Booking, BookingStatus } from '@/lib/types';

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  confirmed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  completed: 'bg-green-500/10 text-green-400 border-green-500/20',
  cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const ALL_STATUSES: BookingStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    loadBookings();
  }, [filter]);

  async function loadBookings() {
    setLoading(true);
    const url = filter === 'all' ? '/api/bookings' : `/api/bookings?status=${filter}`;
    const res = await fetch(url);
    const { data } = await res.json();
    setBookings(data || []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: BookingStatus) {
    setUpdating(id);
    await fetch(`/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    setUpdating(null);
  }

  async function deleteBooking(id: string) {
    if (!confirm('Delete this booking?')) return;
    await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
    setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Bookings</h2>
          <p className="text-gray-400 mt-1">{bookings.length} total bookings</p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {['all', ...ALL_STATUSES].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                filter === s
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No bookings found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Customer</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3 hidden lg:table-cell">Route</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3 hidden md:table-cell">Service</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3 hidden md:table-cell">Date</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-white font-medium text-sm">{booking.name}</p>
                      <p className="text-gray-500 text-xs">{booking.email}</p>
                      <p className="text-gray-500 text-xs">{booking.phone}</p>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <p className="text-gray-300 text-sm">{booking.pickup_location}</p>
                      <p className="text-gray-500 text-xs">→ {booking.dropoff_location}</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="text-gray-300 text-sm">{booking.service_type}</p>
                      <p className="text-gray-500 text-xs">{booking.passengers} pax</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="text-gray-300 text-sm">{booking.pickup_date || '—'}</p>
                      <p className="text-gray-500 text-xs">{booking.pickup_time || ''}</p>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={booking.status}
                        disabled={updating === booking.id}
                        onChange={(e) => updateStatus(booking.id, e.target.value as BookingStatus)}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border bg-transparent cursor-pointer ${statusColors[booking.status]}`}
                      >
                        {ALL_STATUSES.map((s) => (
                          <option key={s} value={s} className="bg-gray-900 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="text-red-500 hover:text-red-400 transition-colors"
                        title="Delete booking"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
