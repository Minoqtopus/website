import { NextResponse } from "next/server";

/**
 * Reports whether the server-side configuration this app needs is present.
 *
 * Returns only names, booleans and lengths — never a value, never a prefix —
 * so it is safe to call on a public deployment while diagnosing a
 * misconfigured environment.
 */
export async function GET() {
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
    "ADMIN_PASSWORD",
    "ADMIN_SESSION_SECRET",
    "NEXT_PUBLIC_SITE_URL",
  ] as const;

  const env = Object.fromEntries(
    required.map((name) => {
      const value = process.env[name];
      return [name, { set: Boolean(value), length: value?.length ?? 0 }];
    })
  );

  // Names only. Shows what the deployment actually received, so a misspelled
  // key is visible without exposing anything it holds.
  const present = Object.keys(process.env)
    .filter((n) => /SUPA|ADMIN|SITE_URL|SERVICE_ROLE/i.test(n))
    .sort();

  return NextResponse.json({
    env,
    presentNames: present,
    totalEnvCount: Object.keys(process.env).length,
  });
}
