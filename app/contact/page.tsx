import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/sections/CTASection';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact | LB Solar Engineering & Consultancy',
  description: 'Connect with LB Solar for solar design, engineering, consultancy and project support enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with LB Solar Engineering & Consultancy"
        description="For design, engineering, consultancy, verification and project support enquiries."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <GlassCard>
              <Phone className="h-5 w-5 text-emerald" />
              <h3 className="mt-4 text-lg font-bold text-white">Phone</h3>
              <p className="mt-2 text-muted">{company.phone}</p>
            </GlassCard>
            <GlassCard>
              <Mail className="h-5 w-5 text-emerald" />
              <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
              <p className="mt-2 text-muted">
                <a href={`mailto:${company.email}`} className="hover:text-emerald">
                  {company.email}
                </a>
              </p>
            </GlassCard>
            <GlassCard>
              <MapPin className="h-5 w-5 text-emerald" />
              <h3 className="mt-4 text-lg font-bold text-white">Address</h3>
              <p className="mt-2 text-muted">{company.address}</p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
