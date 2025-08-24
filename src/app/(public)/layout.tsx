
import { Header } from '@/components/navigation';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="relative">
        {children}
      </div>
    </>
  );
}