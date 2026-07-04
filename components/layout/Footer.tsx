import Link from 'next/link';
import { company, nav, services } from '@/lib/data';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated/50">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <img src={company.logo} alt={company.short} className="h-10 w-10 rounded-xl object-contain" />
              <span className="text-sm font-bold text-white">{company.short}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {company.name} helps EPC companies, developers, industries and project owners build reliable solar
              projects through practical engineering and independent consultancy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Pages</h4>
            <div className="mt-4 flex flex-col gap-2">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-muted transition-colors hover:text-emerald">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Key Services</h4>
            <div className="mt-4 flex flex-col gap-2">
              {services.slice(0, 6).map(([title]) => (
                <span key={title} className="text-sm text-muted">
                  {title}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p>{company.phone}</p>
              <p>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-emerald">
                  {company.email}
                </a>
              </p>
              <p>{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. {company.tagline}</p>
          <div className="flex gap-4">
            <Link href="/industries" className="transition-colors hover:text-emerald">Industries</Link>
            <Link href="/knowledge" className="transition-colors hover:text-emerald">Knowledge</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
