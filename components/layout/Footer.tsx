import Link from 'next/link';
import { company, nav, services } from '@/lib/data';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="surface-dark">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block" aria-label={company.name}>
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto max-w-[190px] object-contain brightness-0 invert"
                width={190}
                height={48}
              />
            </Link>
            <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--theme-on-dark-muted)]">
              {company.name} helps EPC companies, developers, industries and project owners build reliable solar
              projects through practical engineering and independent consultancy.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] font-bold uppercase tracking-wider text-white">Pages</h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[16px] text-[color:var(--theme-on-dark-muted)] transition-colors hover:text-emerald-light"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-bold uppercase tracking-wider text-white">Key Services</h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {services.slice(0, 6).map((service) => (
                <span key={service.title} className="text-[16px] text-[color:var(--theme-on-dark-muted)]">
                  {service.title}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-bold uppercase tracking-wider text-white">Contact</h4>
            <div className="mt-4 space-y-2.5 text-[16px] text-[color:var(--theme-on-dark-muted)]">
              <p>{company.phone}</p>
              <p>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-emerald-light">
                  {company.email}
                </a>
              </p>
              <p className="leading-relaxed">{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-7 text-[16px] text-[color:var(--theme-on-dark-muted)] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. {company.tagline}
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/technical-studies" className="transition-colors hover:text-emerald-light">
              Engineering Support
            </Link>
            <Link href="/lb-solar-ai" className="transition-colors hover:text-emerald-light">
              LB Solar AI
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
