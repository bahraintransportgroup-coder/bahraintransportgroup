import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-me';

export function createAdminToken(): string {
  return jwt.sign(
    { admin: true, email: process.env.ADMIN_EMAIL },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyAdminToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET);
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
