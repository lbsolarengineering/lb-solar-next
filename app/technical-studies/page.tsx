import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import FeatureCard from '@/components/cards/FeatureCard';
import { technicalStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Technical Studies | LB Solar Engineering & Consultancy',
  description: 'Solar site investigation and engineering studies including topography, soil investigation, ERT, TRT and hydrology.',
};

export default function TechnicalStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Studies"
        title="Solar Site Investigation & Engineering Studies"
        description="Reliable solar engineering starts with reliable site data."
      />

      <Section title="Studies we support">
        <div className="grid-cards">
          {technicalStudies.map(([title, desc]) => (
            <FeatureCard key={title} title={title} description={desc} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
