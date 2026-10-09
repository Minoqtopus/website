import { NextResponse } from "next/server";

/**
 * Reports whether the server-side configuration this app needs is present.
 *
 * Deliberately returns only booleans and lengths — never a value, never a
 * prefix — so it is safe to call on a public deployment while diagnosing a
 * misconfigured environment.
 */
export async function GET() {
  const names = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
    "ADMIN_PASSWORD",
    "ADMIN_SESSION_SECRET",
    "NEXT_PUBLIC_SITE_URL",
  ] as const;

  const env = Object.fromEntries(
    names.map((name) => {
      const value = process.env[name];
      return [name, { set: Boolean(value), length: value?.length ?? 0 }];
    })
  );

  return NextResponse.json({ env, runtime: process.env.NEXT_RUNTIME ?? "nodejs" });
}
