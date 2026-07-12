'use client';

import { useEffect, useState } from 'react';
import type { PromoCode } from '@/lib/types';

const emptyForm = {
  code: '',
  discount_type: 'percentage' as 'percentage' | 'fixed',
  discount_value: '',
  description: '',
  max_uses: '',
  expires_at: '',
};

export default function PromoCodesPage() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPromoCodes();
  }, []);

  async function loadPromoCodes() {
    setLoading(true);
    const res = await fetch('/api/admin/promo-codes');
    const { data } = await res.json();
    setPromoCodes(data || []);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const res = await fetch('/api/admin/promo-codes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: form.code.toUpperCase().trim(),
        discount_type: form.discount_type,
        discount_value: Number(form.discount_value),
        description: form.description || null,
        max_uses: form.max_uses ? Number(form.max_uses) : null,
        expires_at: form.expires_at || null,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      setError(result.error || 'Failed to create promo code');
      setSaving(false);
      return;
    }

    setForm(emptyForm);
    setShowForm(false);
    setSaving(false);
    loadPromoCodes();
  }

  async function toggleActive(id: string, current: boolean) {
    await fetch(`/api/admin/promo-codes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !current }),
    });
    setPromoCodes((prev) => prev.map((p) => (p.id === id ? { ...p, is_active: !current } : p)));
  }

  async function deleteCode(id: string, code: string) {
    if (!confirm(`Delete promo code "${code}"?`)) return;
    await fetch(`/api/admin/promo-codes/${id}`, { method: 'DELETE' });
    setPromoCodes((prev) => prev.filter((p) => p.id !== id));
  }

  function formatDiscount(p: PromoCode) {
    return p.discount_type === 'percentage'
      ? `${p.discount_value}% off`
      : `${p.discount_value} BHD off`;
  }

  function formatExpiry(expires_at: string | null) {
    if (!expires_at) return 'Never';
    const d = new Date(expires_at);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function isExpired(expires_at: string | null) {
    if (!expires_at) return false;
    return new Date(expires_at) < new Date();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Promo Codes</h2>
          <p className="text-gray-400 mt-1">{promoCodes.length} total codes</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setForm(emptyForm); setError(null); }}
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Add New Code
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-5">Add New Promo Code</h3>
          {error && (
            <p className="text-red-400 text-sm mb-4 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Code *</label>
              <input
                required
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-amber-500 uppercase"
                placeholder="WELCOME10"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Discount Type *</label>
              <select
                required
                value={form.discount_type}
                onChange={(e) => setForm({ ...form, discount_type: e.target.value as 'percentage' | 'fixed' })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount (BHD)</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Discount Value * {form.discount_type === 'percentage' ? '(%)' : '(BHD)'}
              </label>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={form.discount_value}
                onChange={(e) => setForm({ ...form, discount_value: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder={form.discount_type === 'percentage' ? '10' : '5.00'}
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Max Uses (leave blank for unlimited)</label>
              <input
                type="number"
                min="1"
                value={form.max_uses}
                onChange={(e) => setForm({ ...form, max_uses: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder="100"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Expires At (leave blank for no expiry)</label>
              <input
                type="date"
                value={form.expires_at}
                onChange={(e) => setForm({ ...form, expires_at: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Description (admin note)</label>
              <input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder="10% off for new customers"
              />
            </div>
            <div className="md:col-span-2 flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => { setShowForm(false); setError(null); }}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
              >
                {saving ? 'Creating...' : 'Create Code'}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading promo codes...</div>
      ) : promoCodes.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No promo codes created yet</div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Code</th>
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Discount</th>
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Uses</th>
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Expires</th>
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Description</th>
                  <th className="text-left text-gray-400 text-xs font-medium px-6 py-4 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {promoCodes.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-white font-mono font-semibold text-sm">{p.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-amber-500 font-medium text-sm">{formatDiscount(p)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-300 text-sm">
                        {p.uses_count}
                        {p.max_uses !== null ? (
                          <span className="text-gray-500"> / {p.max_uses}</span>
                        ) : (
                          <span className="text-gray-500"> / unlimited</span>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${isExpired(p.expires_at) ? 'text-red-400' : 'text-gray-300'}`}>
                        {formatExpiry(p.expires_at)}
                        {isExpired(p.expires_at) && (
                          <span className="ml-1.5 text-xs text-red-500">(expired)</span>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-400 text-sm">{p.description || '—'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleActive(p.id, p.is_active)}
                        className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                          p.is_active
                            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                            : 'bg-gray-700 text-gray-500 hover:bg-gray-600'
                        }`}
                      >
                        {p.is_active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteCode(p.id, p.code)}
                        className="text-sm text-red-500 hover:text-red-400 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
