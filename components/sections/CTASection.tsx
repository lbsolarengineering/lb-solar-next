import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { company } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="section-padding pt-8">
      <Container>
        <div className="surface-dark relative overflow-hidden rounded-[24px] p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-emerald-light">
                Planning a solar project?
              </p>
              <h2 className="heading-display mt-3 text-[36px] leading-tight text-white md:text-[44px]">
                Verify, design, optimize and execute your project with proper engineering.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/enquiry">
                Send Enquiry <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-on-dark"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
