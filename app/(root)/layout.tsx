import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'BazPay',
    template: '%s - BazPay',
  },
  description:
    'Simplify your money game with BazPay! A modern, secure, and user-friendly payment solution for all your financial needs.',
  twitter: {
    card: 'summary_large_image',
  },
};

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
