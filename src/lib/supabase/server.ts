import { createClient, SupabaseClient } from "@supabase/supabase-js";

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (adminClient) {
    return adminClient;
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase is not configured.");
  }

  adminClient = createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return adminClient;
}

export type SubmissionStatus = "new" | "reviewed";

export interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  budget: string | null;
  message: string;
  status: SubmissionStatus;
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_slug: string;
  job_title: string;
  full_name: string;
  email: string;
  current_company: string;
  current_salary: string;
  expected_salary: string;
  avg_monthly_sales: string;
  employment_interest: "full-time" | "part-time";
  qualification_reason: string;
  resume_path: string;
  resume_filename: string;
  status: SubmissionStatus;
  created_at: string;
}

export const RESUMES_BUCKET = "resumes";
