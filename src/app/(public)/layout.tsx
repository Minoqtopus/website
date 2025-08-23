import PublicNav from "@/components/navigation/PublicNav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNav />
      <div className="relative">
        {children}
      </div>
    </>
  );
}