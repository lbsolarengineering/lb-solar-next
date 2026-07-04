import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/cards/ServiceCard';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services | LB Solar Engineering & Consultancy',
  description: 'Solar engineering and consultancy services from pre-sales design to detailed engineering and project verification.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solar Engineering & Consultancy Services"
        description="From pre-sales design to detailed engineering, site investigation, procurement review, project inspection and performance support."
      />

      <Section title="Complete service portfolio" wide>
        <div className="grid-services">
          {services.map((s, i) => (
            <ServiceCard key={s[0]} s={s} i={i} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
