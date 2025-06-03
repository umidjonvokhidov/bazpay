import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[90px]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
