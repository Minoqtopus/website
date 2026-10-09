import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/server";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  budget?: string;
  customBudget?: number;
  message: string;
}

const budgetLabels: Record<string, string> = {
  "500-2000": "$500 - $2,000",
  "2500-4000": "$2,500 - $4,000",
  "5000-10000": "$5,000 - $10,000",
  "15000-20000": "$15,000 - $20,000",
  "25-50k": "$25,000 - $50,000",
  "50-100k": "$50,000 - $100,000",
  "100-250k": "$100,000 - $250,000",
  "250k+": "$250,000+",
};

function formatBudget(budget?: string, customBudget?: number) {
  if (!budget) {
    return "Not provided";
  }

  if (budget === "custom") {
    if (!Number.isFinite(customBudget) || !customBudget || customBudget <= 0) {
      return null;
    }

    return `Custom: $${customBudget.toLocaleString("en-US")}`;
  }

  return budgetLabels[budget] || budget;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || null;
    const budget = formatBudget(body.budget?.trim(), body.customBudget);
    const message = body.message?.trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (budget === null) {
      return NextResponse.json(
        { error: "Please enter a custom budget greater than zero." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("contact_submissions").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      company,
      budget,
      message,
      status: "new",
    });

    if (error) {
      console.error("Contact insert error:", error);
      return NextResponse.json(
        { error: "Failed to save your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
