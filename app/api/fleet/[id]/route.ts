import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { isAdminRequest } from '@/lib/auth';

export const runtime = 'nodejs';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { name, type, capacity, features, image_url, price_per_km, description, is_available } = body;
  const patch: Record<string, unknown> = {};
  if (name !== undefined) patch.name = name;
  if (type !== undefined) patch.type = type;
  if (capacity !== undefined) patch.capacity = capacity;
  if (features !== undefined) patch.features = features;
  if (image_url !== undefined) patch.image_url = image_url;
  if (price_per_km !== undefined) patch.price_per_km = price_per_km;
  if (description !== undefined) patch.description = description;
  if (is_available !== undefined) patch.is_available = is_available;

  const { data, error } = await supabaseAdmin
    .from('fleet_vehicles')
    .update(patch)
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabaseAdmin
    .from('fleet_vehicles')
    .delete()
    .eq('id', params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
