"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ResumeDownloadButton({
  path,
  filename,
}: {
  path: string;
  filename: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDownload() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/admin/resume?path=${encodeURIComponent(path)}`
      );
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || "Failed to get download link.");
      }
      window.open(data.url, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={handleDownload}
        disabled={loading}
      >
        <Download className="w-4 h-4" />
        {loading ? "Preparing..." : `Download ${filename}`}
      </Button>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}
