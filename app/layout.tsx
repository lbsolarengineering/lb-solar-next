import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
export const metadata: Metadata = {
  title: "LB Solar Engineering & Consultancy | Solar Design Consultant India",
  description: "Solar design, detailed engineering, site investigation, project verification and consultancy services for rooftop, C&I and utility-scale solar projects across India.",
  keywords: ["solar engineering consultancy India","solar design consultant","PVsyst consultant","ground mount solar design","rooftop solar engineering","PM Kusum solar design"],
  metadataBase: new URL(`https://${company.domain}`),
  openGraph: { title: company.name, description: company.tagline, url: `https://${company.domain}`, siteName: company.short, type: "website" },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="engineering"><body><Header/>{children}<Footer/><a className="float-wa" href={`https://wa.me/${company.whatsapp}`} aria-label="WhatsApp">☘</a></body></html>}
