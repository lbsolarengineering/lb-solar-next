import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Enquiry | LB Solar Engineering & Consultancy',
  description: 'Send your solar project requirement to LB Solar for engineering and consultancy support.',
};

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Enquiry"
        title="Send your solar project requirement"
        description="Share capacity, location, roof/land type and required design scope. We will respond with the next technical steps."
      />

      <section className="section-padding pt-0">
        <Container>
          <form className="mx-auto max-w-2xl space-y-4 rounded-3xl border border-border glass p-6 md:p-10">
            <input
              placeholder="Name / Company"
              className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-emerald/40"
            />
            <input
              placeholder="Phone / WhatsApp"
              className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-emerald/40"
            />
            <input
              placeholder="Email"
              type="email"
              className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-emerald/40"
            />
            <input
              placeholder="Project location"
              className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-emerald/40"
            />
            <select className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-muted outline-none transition-colors focus:border-emerald/40">
              <option>Required service</option>
              <option>Proposal design</option>
              <option>Detailed engineering</option>
              <option>Project verification</option>
              <option>Technical study</option>
            </select>
            <textarea
              placeholder="Project details"
              rows={6}
              className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-emerald/40"
            />
            <Button href={`mailto:${company.email}?subject=Solar Project Enquiry`} external className="w-full">
              Send enquiry by email
            </Button>
          </form>
        </Container>
      </section>
    </>
  );
}
