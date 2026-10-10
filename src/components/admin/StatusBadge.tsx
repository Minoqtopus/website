import type { SubmissionStatus } from "@/lib/supabase/server";

/**
 * One definition of what each status looks like, so the dashboard, the lists
 * and the detail pages cannot drift apart.
 */
export default function StatusBadge({ status }: { status: SubmissionStatus }) {
  const isNew = status === "new";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        isNew
          ? "bg-gold-50 text-gold-800 ring-1 ring-gold-600/20"
          : "bg-stone-100 text-stone-600 ring-1 ring-stone-200"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          isNew ? "bg-gold-600" : "bg-stone-400"
        }`}
      />
      {isNew ? "New" : "Reviewed"}
    </span>
  );
}
