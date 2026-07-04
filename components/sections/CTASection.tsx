import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { company } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-emerald/20 bg-gradient-to-br from-emerald/10 via-bg-elevated to-bg p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">Planning a solar project?</p>
              <h2 className="heading-display mt-3 text-3xl md:text-4xl">
                Verify, design, optimize and execute your project with proper engineering.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/enquiry">
                Send Enquiry <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={`https://wa.me/${company.whatsapp}`} variant="outline" external>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
