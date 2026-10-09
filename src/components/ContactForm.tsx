"use client";
import RequiredMark from "@/components/ui/RequiredMark";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

const budgetOptions = [
  { value: "500-2000", label: "$500 - $2,000" },
  { value: "2500-4000", label: "$2,500 - $4,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "15000-20000", label: "$15,000 - $20,000" },
  { value: "25-50k", label: "$25,000 - $50,000" },
  { value: "50-100k", label: "$50,000 - $100,000" },
  { value: "100-250k", label: "$100,000 - $250,000" },
  { value: "250k+", label: "$250,000+" },
  { value: "custom", label: "Custom" },
];

function sanitizeCustomBudget(value: string) {
  const digitsOnly = value.replace(/\D/g, "");
  if (!digitsOnly) {
    return "";
  }

  const amount = Number(digitsOnly);
  return amount > 0 ? String(amount) : "";
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (budget === "custom") {
      const amount = Number(customBudget);
      if (!Number.isFinite(amount) || amount <= 0) {
        setStatus("error");
        setErrorMessage("Please enter a custom budget greater than zero.");
        return;
      }
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          company: formData.get("company"),
          budget,
          customBudget: budget === "custom" ? Number(customBudget) : undefined,
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setBudget("");
      setCustomBudget("");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-50 rounded-2xl p-8 md:p-10 border border-stone-200/80"
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
          First Name
          <RequiredMark />
        </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
          Last Name
          <RequiredMark />
        </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Work Email
          <RequiredMark />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200"
          placeholder="john@company.com"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200"
          placeholder="Your company name"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Project Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={budget}
          onChange={(event) => {
            setBudget(event.target.value);
            if (event.target.value !== "custom") {
              setCustomBudget("");
            }
          }}
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200 cursor-pointer"
        >
          <option value="" disabled>
            Select a range
          </option>
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {budget === "custom" && (
          <div className="mt-4">
            <label
              htmlFor="customBudget"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
          Custom budget amount (USD)
          <RequiredMark />
        </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="customBudget"
              name="customBudget"
              required
              value={customBudget}
              onChange={(event) =>
                setCustomBudget(sanitizeCustomBudget(event.target.value))
              }
              onKeyDown={(event) => {
                if (["-", "+", "e", "E", "."].includes(event.key)) {
                  event.preventDefault();
                }
              }}
              onPaste={(event) => {
                event.preventDefault();
                const pasted = event.clipboardData.getData("text");
                setCustomBudget(sanitizeCustomBudget(pasted));
              }}
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200"
              placeholder="Enter amount"
            />
          </div>
        )}
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Project Details
          <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600 transition-colors duration-200 resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {status === "success" && (
        <p className="mb-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      )}

      {status === "error" && (
        <p className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}
