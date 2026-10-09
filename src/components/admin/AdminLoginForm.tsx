"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-50 rounded-2xl p-8 border border-stone-200/80 w-full max-w-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 inline-flex items-center justify-center">
          <Lock className="w-4 h-4" />
        </span>
        <div>
          <h1 className="font-display text-xl font-bold text-stone-950">Admin login</h1>
          <p className="text-sm text-stone-500">Enter the shared admin password.</p>
        </div>
      </div>

      <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-2">
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 mb-4"
        placeholder="Admin password"
      />

      {error && (
        <p className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full justify-center" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
