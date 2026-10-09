import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export async function PATCH(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as {
      type?: "contact" | "application";
      id?: string;
      status?: "new" | "reviewed";
    };

    if (
      !body.id ||
      (body.type !== "contact" && body.type !== "application") ||
      (body.status !== "new" && body.status !== "reviewed")
    ) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const table =
      body.type === "contact" ? "contact_submissions" : "job_applications";
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from(table)
      .update({ status: body.status })
      .eq("id", body.id);

    if (error) {
      console.error("Status update error:", error);
      return NextResponse.json(
        { error: "Failed to update status." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin status error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
