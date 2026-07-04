import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFab from '@/components/layout/WhatsAppFab';
import { company } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LB Solar Engineering & Consultancy | Solar Design Consultant India',
  description:
    'Solar design, detailed engineering, site investigation, project verification and consultancy services for rooftop, C&I and utility-scale solar projects across India.',
  keywords: [
    'solar engineering consultancy India',
    'solar design consultant',
    'PVsyst consultant',
    'ground mount solar design',
    'rooftop solar engineering',
    'PM Kusum solar design',
  ],
  metadataBase: new URL(`https://${company.domain}`),
  openGraph: {
    title: company.name,
    description: company.tagline,
    url: `https://${company.domain}`,
    siteName: company.short,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
