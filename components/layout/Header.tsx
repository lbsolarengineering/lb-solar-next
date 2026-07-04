'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { company, nav } from '@/lib/data';
import Button from '@/components/ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3">
          <img src={company.logo} alt={company.short} className="h-10 w-10 rounded-xl object-contain md:h-11 md:w-11" />
          <div className="leading-tight">
            <span className="block text-sm font-bold text-white md:text-base">{company.short}</span>
            <span className="hidden text-[10px] font-semibold tracking-[0.2em] text-muted sm:block">
              ENGINEERING & CONSULTANCY
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={`https://wa.me/${company.whatsapp}`} external>
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-white/[0.04] hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-xl lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              className="btn-primary mt-2 text-center"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
