import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data";

const colA = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

const colB = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Career", "/career"],
] as const;

export default function Footer() {
  return (
    <footer className="footer compactFooter">
      <div className="footerGrid compactFooterGrid">
        <div className="footerBrandBlock">
          <Image src={company.logo} alt="LB Solar" width={200} height={62} />
          <p>
            Engineering-first solar consultancy for reliable, optimized and execution-ready
            projects.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {colA.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          {colB.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a className="footerContact" href={`tel:${company.phone.replace(/\s/g, "")}`}>
            <Phone size={17} />
            <span>{company.phone}</span>
          </a>
          <a className="footerContact" href={`mailto:${company.email}`}>
            <Mail size={17} />
            <span>{company.email}</span>
          </a>
          <p className="footerContact">
            <MapPin size={17} />
            <span>{company.address}</span>
          </p>
        </div>
      </div>
      <div className="footerBottom">
        <span>
          © 2026 {company.name}. {company.tagline}
        </span>
        <span className="footerBottomLinks">
          <Link href="/blog">Blog</Link>
          <Link href="/enquiry">Enquiry</Link>
        </span>
      </div>
    </footer>
  );
}
