"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, nav } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="brand" aria-label="LB Solar home">
          <Image
            src={company.logo}
            alt="LB Solar Engineering & Consultancy"
            width={240}
            height={74}
            priority
          />
        </Link>
        <nav className="desktopNav">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/enquiry" className="button buttonPrimary headerCta">
          Send Enquiry
        </Link>
        <button
          className="menuButton"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobileNav">
          {nav.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="button buttonPrimary" href="/enquiry">
            Send Enquiry
          </Link>
        </nav>
      )}
    </header>
  );
}
