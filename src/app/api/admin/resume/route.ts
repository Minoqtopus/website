import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getSupabaseAdmin, RESUMES_BUCKET } from "@/lib/supabase/server";

export async function GET(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json({ error: "Missing path." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.storage
      .from(RESUMES_BUCKET)
      .createSignedUrl(path, 60 * 5);

    if (error || !data?.signedUrl) {
      console.error("Signed URL error:", error);
      return NextResponse.json(
        { error: "Failed to create download link." },
        { status: 502 }
      );
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch (error) {
    console.error("Resume download error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
