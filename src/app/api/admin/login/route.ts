import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/admin/auth";

export async function POST(request: Request) {
  try {
    if (!process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Admin password is not configured." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as { password?: string };
    const password = body.password?.trim() || "";

    if (!verifyAdminPassword(password)) {
      return NextResponse.json(
        { error: "Incorrect password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, createAdminSessionToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
