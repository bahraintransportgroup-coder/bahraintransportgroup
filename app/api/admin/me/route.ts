import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/auth';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, email: process.env.ADMIN_EMAIL });
}
