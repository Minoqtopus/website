import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "minoqtopus_admin";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

function getSessionSecret() {
  const secret =
    process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET (or ADMIN_PASSWORD) must be set to sign admin sessions."
    );
  }

  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function createAdminSessionToken() {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = `admin:${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

function isValidAdminSessionToken(token: string | undefined | null) {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return false;
  }

  const [, expiresAtRaw] = payload.split(":");
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  return true;
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return false;
  }

  // Hash both sides to a fixed length so the comparison cannot leak the
  // expected password's length through an early return.
  const a = createHash("sha256").update(password).digest();
  const b = createHash("sha256").update(expected).digest();

  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return isValidAdminSessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}
