import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "LB Solar Engineering & Consultancy | Solar Design Consultant India",
  description: "Solar design, detailed engineering, site investigation, project verification and consultancy services for rooftop, C&I and utility-scale solar projects across India.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {return <html lang="en"><body><Header/>{children}<Footer/><a className="float-wa" href="https://wa.me/919352375118">✆</a></body></html>;}
