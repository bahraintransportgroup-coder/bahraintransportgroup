'use client';

import { useEffect, useState } from 'react';
import type { Testimonial } from '@/lib/types';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    setLoading(true);
    const res = await fetch('/api/testimonials');
    const { data } = await res.json();
    setTestimonials(data || []);
    setLoading(false);
  }

  async function toggleApproval(id: string, current: boolean) {
    await fetch(`/api/testimonials/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_approved: !current }),
    });
    setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, is_approved: !current } : t)));
  }

  async function deleteTestimonial(id: string) {
    if (!confirm('Delete this review?')) return;
    await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  }

  const filtered = testimonials.filter((t) => {
    if (filter === 'approved') return t.is_approved;
    if (filter === 'pending') return !t.is_approved;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Testimonials</h2>
          <p className="text-gray-400 mt-1">{testimonials.length} total reviews</p>
        </div>
        <div className="flex gap-2">
          {(['all', 'approved', 'pending'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                filter === f ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading reviews...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No reviews found</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((t) => (
            <div key={t.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  {t.location && <p className="text-gray-500 text-xs">{t.location}</p>}
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${t.is_approved ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                  {t.is_approved ? 'Approved' : 'Pending'}
                </span>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`w-4 h-4 ${s <= t.rating ? 'text-amber-500' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.review}</p>

              <div className="flex gap-3 pt-3 border-t border-gray-800">
                <button
                  onClick={() => toggleApproval(t.id, t.is_approved)}
                  className={`text-sm font-medium transition-colors ${t.is_approved ? 'text-yellow-400 hover:text-yellow-300' : 'text-green-400 hover:text-green-300'}`}
                >
                  {t.is_approved ? 'Unapprove' : 'Approve'}
                </button>
                <button
                  onClick={() => deleteTestimonial(t.id)}
                  className="text-sm text-red-500 hover:text-red-400 transition-colors ml-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
