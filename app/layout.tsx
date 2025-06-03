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
