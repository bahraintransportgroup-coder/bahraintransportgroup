import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { isAdminRequest } from '@/lib/auth';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('promo_codes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(req: Request) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { code, discount_type, discount_value, description, max_uses, expires_at } = body;

  if (!code || !discount_type || discount_value === undefined || discount_value === null) {
    return NextResponse.json({ error: 'code, discount_type, and discount_value are required' }, { status: 400 });
  }

  if (!['percentage', 'fixed'].includes(discount_type)) {
    return NextResponse.json({ error: 'discount_type must be "percentage" or "fixed"' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('promo_codes')
    .insert([{
      code: String(code).toUpperCase().trim(),
      discount_type,
      discount_value: Number(discount_value),
      description: description || null,
      max_uses: max_uses ? Number(max_uses) : null,
      expires_at: expires_at || null,
    }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
