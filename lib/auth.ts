import jwt from 'jsonwebtoken';
import { timingSafeEqual } from 'crypto';

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET environment variable is not set');
  return secret;
}

export function safeCompare(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  // Always run the comparison to avoid short-circuit timing leak
  if (ba.length !== bb.length) {
    timingSafeEqual(ba, ba);
    return false;
  }
  return timingSafeEqual(ba, bb);
}

export function createAdminToken(): string {
  return jwt.sign(
    { admin: true, email: process.env.ADMIN_EMAIL },
    getJwtSecret(),
    { expiresIn: '7d' }
  );
}

export function verifyAdminToken(token: string): boolean {
  try {
    jwt.verify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
}

export function getTokenFromRequest(req: Request): string | null {
  const cookie = req.headers.get('cookie') || '';
  const match = cookie.match(/admin_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function isAdminRequest(req: Request): boolean {
  const token = getTokenFromRequest(req);
  if (!token) return false;
  return verifyAdminToken(token);
}
