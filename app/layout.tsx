import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
export const metadata:Metadata={title:{default:`${company.name} | Solar Design & Engineering`,template:`%s | ${company.short}`},description:"Independent solar design, detailed engineering and technical consultancy for EPC companies, developers, industries and project owners across India.",metadataBase:new URL("https://lbsolarengineering.com"),openGraph:{title:company.name,description:company.tagline,type:"website",url:"https://lbsolarengineering.com"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><a className="whatsappFloat" href={`https://wa.me/${company.whatsapp}`} aria-label="WhatsApp">WA</a></body></html>}
