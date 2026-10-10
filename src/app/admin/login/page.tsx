import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Login | Minoqtopus",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6 py-16">
      <AdminLoginForm />
    </div>
  );
}
