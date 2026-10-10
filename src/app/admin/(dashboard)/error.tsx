"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

/**
 * Catches failures in the admin pages — most likely the database being
 * unreachable — and shows something recoverable instead of a crashed page
 * with a raw error string.
 */
export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-stone-200 bg-white p-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-danger/10 text-danger mb-5">
          <AlertCircle className="h-6 w-6" aria-hidden="true" />
        </span>

        <h1 className="font-display text-xl font-bold text-stone-950">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-stone-600 leading-relaxed">
          This page could not load. The most common cause is the database being
          temporarily unreachable.
        </p>

        {error.digest ? (
          <p className="mt-3 font-mono text-xs text-stone-600">
            Reference: {error.digest}
          </p>
        ) : null}

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gold-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/admin"
            className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 hover:border-stone-950 hover:text-stone-950 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
