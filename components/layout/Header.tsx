'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { company, nav } from '@/lib/data';
import Button from '@/components/ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 z-50 w-full border-b border-border/70 backdrop-blur-md transition-shadow ${
        scrolled ? 'is-scrolled' : ''
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between gap-4 md:h-[80px] lg:h-[84px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label={company.name}>
          <img
            src={company.logo}
            alt={company.name}
            className="logo-mark h-12 w-auto object-contain object-left sm:h-[52px] md:h-14 md:w-[190px] lg:w-[205px]"
            width={205}
            height={56}
          />
        </Link>

        <nav className="hidden items-center justify-center gap-0.5 2xl:gap-1 xl:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-2 py-2 text-[15px] font-medium text-muted transition-colors hover:bg-bg-soft hover:text-text 2xl:px-3 2xl:text-[16px]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block">
            <Button href="/enquiry">Send Enquiry</Button>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-bg-soft hover:text-text xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-elevated/95 backdrop-blur-md xl:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-bg-soft hover:text-text"
              >
                {label}
              </Link>
            ))}
            <Link href="/enquiry" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">
              Send Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
