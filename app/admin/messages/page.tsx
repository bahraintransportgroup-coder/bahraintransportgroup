'use client';

import { useEffect, useState } from 'react';
import type { ContactMessage } from '@/lib/types';

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    setLoading(true);
    const res = await fetch('/api/contact');
    const { data } = await res.json();
    setMessages(data || []);
    setLoading(false);
  }

  async function markAsRead(id: string) {
    await fetch(`/api/contact/${id}`, { method: 'PATCH' });
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, is_read: true } : m)));
  }

  async function deleteMessage(id: string) {
    if (!confirm('Delete this message?')) return;
    await fetch(`/api/contact/${id}`, { method: 'DELETE' });
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  function toggleExpand(id: string, isRead: boolean) {
    setExpanded((prev) => (prev === id ? null : id));
    if (!isRead) markAsRead(id);
  }

  const filtered = messages.filter((m) => {
    if (filter === 'unread') return !m.is_read;
    if (filter === 'read') return m.is_read;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Messages</h2>
          <p className="text-gray-400 mt-1">
            {messages.length} total · {unreadCount > 0 && <span className="text-amber-500">{unreadCount} unread</span>}
          </p>
        </div>
        <div className="flex gap-2">
          {(['all', 'unread', 'read'] as const).map((f) => (
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
        <div className="text-center text-gray-500 py-12">Loading messages...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No messages found</div>
      ) : (
        <div className="space-y-3">
          {filtered.map((m) => (
            <div
              key={m.id}
              className={`bg-gray-900 border rounded-2xl overflow-hidden transition-colors ${!m.is_read ? 'border-amber-500/30' : 'border-gray-800'}`}
            >
              <div
                className="flex items-start gap-4 px-6 py-4 cursor-pointer hover:bg-gray-800/30"
                onClick={() => toggleExpand(m.id, m.is_read)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {!m.is_read && <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />}
                    <p className="text-white font-medium text-sm">{m.name}</p>
                    <span className="text-gray-500 text-xs">·</span>
                    <p className="text-gray-500 text-xs">{m.email}</p>
                  </div>
                  <p className="text-amber-400 text-sm font-medium">{m.subject}</p>
                  {expanded !== m.id && (
                    <p className="text-gray-500 text-xs mt-1 truncate">{m.message}</p>
                  )}
                </div>
                <div className="text-gray-500 text-xs shrink-0">
                  {new Date(m.created_at).toLocaleDateString()}
                </div>
              </div>

              {expanded === m.id && (
                <div className="px-6 pb-5">
                  <div className="bg-gray-800 rounded-xl p-4 mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{m.message}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    {m.phone && <span>📞 {m.phone}</span>}
                    <span>✉️ {m.email}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${m.email}?subject=Re: ${m.subject}`}
                      className="text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors"
                    >
                      Reply via Email
                    </a>
                    <button
                      onClick={() => deleteMessage(m.id)}
                      className="text-sm text-red-500 hover:text-red-400 transition-colors ml-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
