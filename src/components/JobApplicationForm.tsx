"use client";
import RequiredMark from "@/components/ui/RequiredMark";

import { FormEvent, KeyboardEvent, useState } from "react";
import { Send, Upload } from "lucide-react";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200";

const labelClassName = "block text-sm font-medium text-stone-700 mb-2";

function sanitizeNonNegativeAmount(value: string) {
  const digitsOnly = value.replace(/\D/g, "");
  if (!digitsOnly) {
    return "";
  }

  const amount = Number(digitsOnly);
  return Number.isFinite(amount) && amount >= 0 ? String(amount) : "";
}

function blockNonAmountKeys(event: KeyboardEvent<HTMLInputElement>) {
  if (["-", "+", "e", "E", "."].includes(event.key)) {
    event.preventDefault();
  }
}

export default function JobApplicationForm({
  jobSlug,
  jobTitle,
}: {
  jobSlug: string;
  jobTitle: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [avgMonthlySales, setAvgMonthlySales] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setStatus("success");
      setResumeName("");
      setCurrentSalary("");
      setExpectedSalary("");
      setAvgMonthlySales("");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit application."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-200/80"
    >
      <input type="hidden" name="jobSlug" value={jobSlug} />

      <div className="mb-6">
        <label htmlFor="fullName" className={labelClassName}>
          Full Name
          <RequiredMark />
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className={inputClassName}
          placeholder="Your full name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className={labelClassName}>
          Email
          <RequiredMark />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClassName}
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="currentCompany" className={labelClassName}>
          Last / Current Company
          <RequiredMark />
        </label>
        <input
          type="text"
          id="currentCompany"
          name="currentCompany"
          required
          className={inputClassName}
          placeholder="Company name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="currentSalary" className={labelClassName}>
          Current Salary
          <RequiredMark />
        </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id="currentSalary"
            name="currentSalary"
            required
            value={currentSalary}
            onChange={(event) =>
              setCurrentSalary(sanitizeNonNegativeAmount(event.target.value))
            }
            onKeyDown={blockNonAmountKeys}
            onPaste={(event) => {
              event.preventDefault();
              setCurrentSalary(
                sanitizeNonNegativeAmount(event.clipboardData.getData("text"))
              );
            }}
            className={inputClassName}
            placeholder="100000"
          />
        </div>
        <div>
          <label htmlFor="expectedSalary" className={labelClassName}>
          Expected Salary
          <RequiredMark />
        </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id="expectedSalary"
            name="expectedSalary"
            required
            value={expectedSalary}
            onChange={(event) =>
              setExpectedSalary(sanitizeNonNegativeAmount(event.target.value))
            }
            onKeyDown={blockNonAmountKeys}
            onPaste={(event) => {
              event.preventDefault();
              setExpectedSalary(
                sanitizeNonNegativeAmount(event.clipboardData.getData("text"))
              );
            }}
            className={inputClassName}
            placeholder="100000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="avgMonthlySales" className={labelClassName}>
          Valid Avg. Monthly Sales (USD) - Last Company
          <RequiredMark />
        </label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          id="avgMonthlySales"
          name="avgMonthlySales"
          required
          value={avgMonthlySales}
          onChange={(event) =>
            setAvgMonthlySales(sanitizeNonNegativeAmount(event.target.value))
          }
          onKeyDown={blockNonAmountKeys}
          onPaste={(event) => {
            event.preventDefault();
            setAvgMonthlySales(
              sanitizeNonNegativeAmount(event.clipboardData.getData("text"))
            );
          }}
          className={inputClassName}
          placeholder="15000"
        />
      </div>

      <div className="mb-6">
        <span className={labelClassName}>Interested in</span>
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="flex items-center gap-3 px-4 py-3 bg-white border border-stone-200 rounded-xl cursor-pointer has-[:checked]:border-gold-600 has-[:checked]:ring-2 has-[:checked]:ring-gold-600/30">
            <input
              type="radio"
              name="employmentInterest"
              value="full-time"
              required
              className="accent-gold-600"
            />
            <span className="text-sm font-medium text-stone-800">Full-time</span>
          </label>
          <label className="flex items-center gap-3 px-4 py-3 bg-white border border-stone-200 rounded-xl cursor-pointer has-[:checked]:border-gold-600 has-[:checked]:ring-2 has-[:checked]:ring-gold-600/30">
            <input
              type="radio"
              name="employmentInterest"
              value="part-time"
              className="accent-gold-600"
            />
            <span className="text-sm font-medium text-stone-800">Part-time</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="qualificationReason" className={labelClassName}>
          Why you qualify, why you want to switch, and why Minoqtopus
          <RequiredMark />
        </label>
        <textarea
          id="qualificationReason"
          name="qualificationReason"
          rows={6}
          required
          className={`${inputClassName} resize-none`}
          placeholder={`Share why you are a strong fit for ${jobTitle}, what is motivating your switch, and why you want to join Minoqtopus.`}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="resume" className={labelClassName}>
          Resume
          <RequiredMark />
        </label>
        <label
          htmlFor="resume"
          className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-4 bg-white border border-dashed border-stone-300 rounded-xl cursor-pointer hover:border-gold-600/50 transition-colors"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-50 text-gold-700 shrink-0">
            <Upload className="w-4 h-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-stone-900">
              {resumeName || "Upload your resume"}
            </span>
            <span className="block text-xs text-stone-500 mt-0.5">
              PDF or Word · Max 5MB
            </span>
          </span>
          <input
            type="file"
            id="resume"
            name="resume"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];
              setResumeName(file?.name || "");
            }}
          />
        </label>
      </div>

      {status === "success" && (
        <p className="mb-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          Application received. We&apos;ll review it and get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Submit application"}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}
