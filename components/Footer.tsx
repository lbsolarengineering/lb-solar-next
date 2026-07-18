import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav } from "@/lib/data";

export default function Footer(){
  return <footer className="footer compactFooter">
    <div className="footerGrid compactFooterGrid">
      <div className="footerBrandBlock">
        <Image src={company.logo} alt="LB Solar" width={230} height={70}/>
        <p>Engineering-first solar consultancy for reliable, optimized and execution-ready projects.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <div className="footerLinksTwoCol">
          {nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}
        </div>
      </div>
      <div>
        <h3>Contact</h3>
        <a className="footerContact" href={`tel:${company.phone.replace(/\s/g,"")}`}><Phone size={17}/>{company.phone}</a>
        <a className="footerContact" href={`mailto:${company.email}`}><Mail size={17}/>{company.email}</a>
        <p className="footerContact"><MapPin size={17}/><span>{company.address}</span></p>
      </div>
    </div>
    <div className="footerBottom">
      <span>© 2026 {company.name}. {company.tagline}</span>
      <span><Link href="/technical-studies">Engineering Support</Link> · <Link href="/lb-solar-ai">LB Solar AI</Link></span>
    </div>
  </footer>
}
