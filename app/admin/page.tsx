'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Booking } from '@/lib/types';

interface Stats {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  confirmed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  completed: 'bg-green-500/10 text-green-400 border-green-500/20',
  cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const serviceLabels: Record<string, string> = {
  airport_transfer: 'Airport Transfer',
  city_taxi: 'City Taxi',
  corporate_taxi: 'Corporate',
  hotel_pickup: 'Hotel Pickup',
  chauffeur: 'Chauffeur',
  family_van: 'Family Van',
  vip_car: 'VIP Car',
};

function getLast7Days(): string[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split('T')[0];
  });
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then((r) => r.json())
      .then(({ data }) => {
        if (!data) return;
        setBookings(data);
        setStats({
          total: data.length,
          pending: data.filter((b: Booking) => b.status === 'pending').length,
          confirmed: data.filter((b: Booking) => b.status === 'confirmed').length,
          completed: data.filter((b: Booking) => b.status === 'completed').length,
          cancelled: data.filter((b: Booking) => b.status === 'cancelled').length,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const recentBookings = bookings.slice(0, 5);

  // Service type breakdown
  const serviceCounts = bookings.reduce<Record<string, number>>((acc, b) => {
    const key = b.service_type || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxServiceCount = topServices[0]?.[1] || 1;

  // 7-day booking trend
  const days = getLast7Days();
  const dayCounts = days.map((day) => ({
    label: new Date(day).toLocaleDateString('en', { weekday: 'short' }),
    count: bookings.filter((b) => b.created_at?.startsWith(day)).length,
  }));
  const maxDayCount = Math.max(...dayCounts.map((d) => d.count), 1);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-gray-400 mt-1">Overview of all bookings and activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Bookings" value={stats.total} color="amber" loading={loading} />
        <StatCard label="Pending" value={stats.pending} color="yellow" loading={loading} />
        <StatCard label="Confirmed" value={stats.confirmed} color="blue" loading={loading} />
        <StatCard label="Completed" value={stats.completed} color="green" loading={loading} />
      </div>

      {/* Analytics Row */}
      {!loading && bookings.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 7-Day Trend */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Bookings — Last 7 Days</h3>
            <div className="flex items-end gap-2 h-28">
              {dayCounts.map((d) => (
                <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-amber-400 font-bold">{d.count || ''}</span>
                  <div
                    className="w-full rounded-t bg-amber-500/70 hover:bg-amber-500 transition-all"
                    style={{ height: `${(d.count / maxDayCount) * 80}px`, minHeight: d.count ? '4px' : '0' }}
                  />
                  <span className="text-xs text-gray-500">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Breakdown */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Top Services</h3>
            <div className="space-y-3">
              {topServices.map(([key, count]) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-28 truncate">{serviceLabels[key] || key}</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-amber-500 h-2 rounded-full"
                      style={{ width: `${(count / maxServiceCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-6 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recent Bookings */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h3 className="text-white font-semibold">Recent Bookings</h3>
          <Link href="/admin/bookings" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
            View all →
          </Link>
        </div>

        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : recentBookings.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No bookings yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Customer</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Service</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3 hidden md:table-cell">Date</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-white font-medium text-sm">{booking.name}</p>
                      <p className="text-gray-500 text-xs">{booking.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-300 text-sm">{booking.service_type}</p>
                      <p className="text-gray-500 text-xs truncate max-w-[150px]">{booking.pickup_location}</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="text-gray-300 text-sm">{booking.pickup_date || '—'}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[booking.status]}`}>
                        {booking.status}
                      </span>
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

function StatCard({ label, value, color, loading }: { label: string; value: number; color: string; loading: boolean }) {
  const colors: Record<string, string> = {
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    yellow: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    green: 'text-green-400 bg-green-500/10 border-green-500/20',
  };

  return (
    <div className={`bg-gray-900 border rounded-2xl p-5 ${colors[color]?.split(' ').slice(2).join(' ') || 'border-gray-800'}`}>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <p className={`text-3xl font-bold mt-2 ${colors[color]?.split(' ')[0] || 'text-white'}`}>
        {loading ? '...' : value}
      </p>
    </div>
  );
}
