"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, RotateCcw, AlertCircle } from "lucide-react";
import type { SubmissionStatus } from "@/lib/supabase/server";

interface StatusToggleProps {
  type: "contact" | "application";
  id: string;
  status: SubmissionStatus;
  /** `inline` is the compact form used inside table rows. */
  variant?: "inline" | "full";
}

/**
 * Flips a submission between new and reviewed.
 *
 * Failures are shown next to the control rather than only logged, so a status
 * change that silently did not happen cannot be mistaken for one that did.
 */
export default function StatusToggle({
  type,
  id,
  status,
  variant = "full",
}: StatusToggleProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isNew = status === "new";
  const next: SubmissionStatus = isNew ? "reviewed" : "new";

  async function toggle() {
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, id, status: next }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || `Update failed (${res.status}).`);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setPending(false);
    }
  }

  const Icon = isNew ? Check : RotateCcw;
  const label = pending
    ? "Saving…"
    : isNew
      ? "Mark reviewed"
      : "Mark as new";

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          disabled={pending}
          title={label}
          aria-label={label}
          className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:border-gold-600/40 hover:text-gold-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {pending ? "…" : isNew ? "Reviewed" : "Reopen"}
        </button>
        {error ? (
          <span className="text-xs text-danger" role="alert">
            {error}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1.5">
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${
          isNew
            ? "bg-gold-600 text-white hover:bg-gold-700"
            : "border border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950"
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      {error ? (
        <span
          className="inline-flex items-center gap-1 text-xs text-danger"
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </div>
  );
}
