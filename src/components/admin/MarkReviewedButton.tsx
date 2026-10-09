"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function MarkReviewedButton({
  type,
  id,
  status,
}: {
  type: "contact" | "application";
  id: string;
  status: "new" | "reviewed";
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const nextStatus = status === "new" ? "reviewed" : "new";

  async function handleClick() {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, id, status: nextStatus }),
      });
      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Failed to update status.");
      }
      router.refresh();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      variant={status === "new" ? "primary" : "outline"}
      size="sm"
      onClick={handleClick}
      disabled={loading}
    >
      {loading
        ? "Updating..."
        : status === "new"
          ? "Mark reviewed"
          : "Mark as new"}
    </Button>
  );
}
