import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getJob } from "@/data/jobs";
import { getSupabaseAdmin, RESUMES_BUCKET } from "@/lib/supabase/server";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isNonNegativeAmount(value: string) {
  if (!/^\d+$/.test(value)) {
    return false;
  }

  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0;
}

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const jobSlug = getString(formData, "jobSlug");
    const fullName = getString(formData, "fullName");
    const email = getString(formData, "email");
    const currentCompany = getString(formData, "currentCompany");
    const currentSalary = getString(formData, "currentSalary");
    const expectedSalary = getString(formData, "expectedSalary");
    const avgMonthlySales = getString(formData, "avgMonthlySales");
    const employmentInterest = getString(formData, "employmentInterest");
    const qualificationReason = getString(formData, "qualificationReason");
    const resume = formData.get("resume");

    const job = getJob(jobSlug);

    if (!job) {
      return NextResponse.json(
        { error: "This job posting is no longer available." },
        { status: 404 }
      );
    }

    if (
      !fullName ||
      !email ||
      !currentCompany ||
      !currentSalary ||
      !expectedSalary ||
      !avgMonthlySales ||
      !employmentInterest ||
      !qualificationReason
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      !isNonNegativeAmount(currentSalary) ||
      !isNonNegativeAmount(expectedSalary) ||
      !isNonNegativeAmount(avgMonthlySales)
    ) {
      return NextResponse.json(
        { error: "Salary and sales amounts cannot be negative." },
        { status: 400 }
      );
    }

    if (
      employmentInterest !== "full-time" &&
      employmentInterest !== "part-time"
    ) {
      return NextResponse.json(
        { error: "Please select Full-time or Part-time." },
        { status: 400 }
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: "Please attach your resume." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 5MB or smaller." },
        { status: 400 }
      );
    }

    const resumeType = resume.type || "application/octet-stream";
    const resumeName = resume.name.toLowerCase();
    const hasAllowedExtension =
      resumeName.endsWith(".pdf") ||
      resumeName.endsWith(".doc") ||
      resumeName.endsWith(".docx");

    if (!ALLOWED_RESUME_TYPES.has(resumeType) && !hasAllowedExtension) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document." },
        { status: 400 }
      );
    }

    const safeName = sanitizeFilename(resume.name || "resume.pdf");
    const resumePath = `${job.slug}/${randomUUID()}-${safeName}`;
    const resumeBytes = Buffer.from(await resume.arrayBuffer());

    const supabase = getSupabaseAdmin();
    const { error: uploadError } = await supabase.storage
      .from(RESUMES_BUCKET)
      .upload(resumePath, resumeBytes, {
        contentType: resumeType,
        upsert: false,
      });

    if (uploadError) {
      console.error("Resume upload error:", uploadError);
      return NextResponse.json(
        { error: "Failed to upload resume. Please try again later." },
        { status: 502 }
      );
    }

    const { error: insertError } = await supabase.from("job_applications").insert({
      job_slug: job.slug,
      job_title: job.title,
      full_name: fullName,
      email,
      current_company: currentCompany,
      current_salary: currentSalary,
      expected_salary: expectedSalary,
      avg_monthly_sales: avgMonthlySales,
      employment_interest: employmentInterest,
      qualification_reason: qualificationReason,
      resume_path: resumePath,
      resume_filename: resume.name || safeName,
      status: "new",
    });

    if (insertError) {
      console.error("Application insert error:", insertError);
      await supabase.storage.from(RESUMES_BUCKET).remove([resumePath]);
      return NextResponse.json(
        { error: "Failed to save your application. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
