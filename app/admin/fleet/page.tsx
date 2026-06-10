'use client';

import { useEffect, useState } from 'react';
import type { FleetVehicle } from '@/lib/types';

const emptyForm = { name: '', type: '', capacity: 4, features: '', price_per_km: '', description: '' };

export default function FleetPage() {
  const [vehicles, setVehicles] = useState<FleetVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles() {
    setLoading(true);
    const res = await fetch('/api/fleet');
    const { data } = await res.json();
    setVehicles(data || []);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      ...form,
      capacity: Number(form.capacity),
      price_per_km: form.price_per_km ? Number(form.price_per_km) : null,
      features: form.features.split(',').map((f) => f.trim()).filter(Boolean),
    };

    if (editId) {
      await fetch(`/api/fleet/${editId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/fleet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    setForm(emptyForm);
    setShowForm(false);
    setEditId(null);
    setSaving(false);
    loadVehicles();
  }

  function startEdit(v: FleetVehicle) {
    setForm({
      name: v.name,
      type: v.type,
      capacity: v.capacity,
      features: v.features?.join(', ') || '',
      price_per_km: v.price_per_km?.toString() || '',
      description: v.description || '',
    });
    setEditId(v.id);
    setShowForm(true);
  }

  async function toggleAvailability(id: string, current: boolean) {
    await fetch(`/api/fleet/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_available: !current }),
    });
    setVehicles((prev) => prev.map((v) => (v.id === id ? { ...v, is_available: !current } : v)));
  }

  async function deleteVehicle(id: string) {
    if (!confirm('Delete this vehicle?')) return;
    await fetch(`/api/fleet/${id}`, { method: 'DELETE' });
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Fleet</h2>
          <p className="text-gray-400 mt-1">{vehicles.length} vehicles</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm(emptyForm); }}
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          + Add Vehicle
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-5">{editId ? 'Edit Vehicle' : 'Add New Vehicle'}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Vehicle Name *</label>
              <input
                required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder="Toyota Camry"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Type *</label>
              <select
                required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              >
                <option value="">Select type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Van">Van</option>
                <option value="Luxury">Luxury</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Capacity</label>
              <input
                type="number" min={1} value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Price per KM (BHD)</label>
              <input
                type="number" step="0.01" value={form.price_per_km} onChange={(e) => setForm({ ...form, price_per_km: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder="0.50"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-400 text-sm mb-1 block">Features (comma-separated)</label>
              <input
                value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500"
                placeholder="Air Conditioning, WiFi, USB Charging"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-400 text-sm mb-1 block">Description</label>
              <textarea
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={2}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500 resize-none"
                placeholder="Vehicle description..."
              />
            </div>
            <div className="md:col-span-2 flex gap-3 justify-end">
              <button
                type="button" onClick={() => { setShowForm(false); setEditId(null); }}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit" disabled={saving}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
              >
                {saving ? 'Saving...' : editId ? 'Update' : 'Add Vehicle'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Vehicle Grid */}
      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading fleet...</div>
      ) : vehicles.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No vehicles added yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {vehicles.map((v) => (
            <div key={v.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold">{v.name}</h3>
                  <p className="text-gray-500 text-sm">{v.type} · {v.capacity} passengers</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${v.is_available ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {v.is_available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              {v.price_per_km && (
                <p className="text-amber-500 text-sm font-medium mb-2">BHD {v.price_per_km}/km</p>
              )}
              {v.features && v.features.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {v.features.map((f) => (
                    <span key={f} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">{f}</span>
                  ))}
                </div>
              )}
              <div className="flex gap-2 pt-3 border-t border-gray-800">
                <button onClick={() => startEdit(v)} className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                  Edit
                </button>
                <button onClick={() => toggleAvailability(v.id, v.is_available)} className="text-sm text-gray-400 hover:text-white transition-colors ml-2">
                  {v.is_available ? 'Mark Unavailable' : 'Mark Available'}
                </button>
                <button onClick={() => deleteVehicle(v.id)} className="text-sm text-red-500 hover:text-red-400 transition-colors ml-auto">
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
