import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import FeatureCard from '@/components/cards/FeatureCard';
import { industries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Industries | LB Solar Engineering & Consultancy',
  description: 'Solar engineering support for EPC companies, developers, industries, project owners and homeowners across India.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Supporting solar stakeholders across India"
        description="Engineering support for homeowners, EPC companies, developers, industries, installers, vendors and project owners."
      />

      <Section title="Who we serve">
        <div className="grid-cards">
          {industries.map(([title, desc]) => (
            <FeatureCard key={title} title={title} description={desc} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
