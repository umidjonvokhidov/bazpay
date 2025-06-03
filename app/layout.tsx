import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoFont = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${robotoFont.variable} bg-background2 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
