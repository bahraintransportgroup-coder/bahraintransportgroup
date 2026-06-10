import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { isAdminRequest } from '@/lib/auth';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const isAdmin = isAdminRequest(req);

  let query = supabaseAdmin.from('testimonials').select('*').order('created_at', { ascending: false });

  if (!isAdmin) {
    query = query.eq('is_approved', true);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, rating, review, location } = body;

  if (!name || !rating || !review) {
    return NextResponse.json({ error: 'Name, rating, and review are required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from('testimonials')
    .insert([{ name, rating, review, location, is_approved: false }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
