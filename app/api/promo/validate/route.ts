import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  if (!rateLimit(`promo-validate:${ip}`, 10, 60_000)) {
    return NextResponse.json({ valid: false, error: 'Too many requests' }, { status: 429 });
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code')?.trim().toUpperCase();

  if (!code) {
    return NextResponse.json({ valid: false, error: 'Code is required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('promo_codes')
    .select('*')
    .eq('code', code)
    .single();

  if (error || !data) {
    return NextResponse.json({ valid: false, error: 'Invalid promo code' });
  }

  if (!data.is_active) {
    return NextResponse.json({ valid: false, error: 'This promo code is no longer active' });
  }

  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return NextResponse.json({ valid: false, error: 'This promo code has expired' });
  }

  if (data.max_uses !== null && data.uses_count >= data.max_uses) {
    return NextResponse.json({ valid: false, error: 'This promo code has reached its usage limit' });
  }

  return NextResponse.json({
    valid: true,
    discount_type: data.discount_type,
    discount_value: data.discount_value,
    description: data.description,
  });
}
