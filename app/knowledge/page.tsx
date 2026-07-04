import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import FeatureCard from '@/components/cards/FeatureCard';
import { knowledge } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Knowledge Centre | LB Solar Engineering & Consultancy',
  description: 'Solar engineering insights, articles and technical guides from LB Solar.',
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Solar engineering insights"
        description="Future articles for technical authority, SEO and customer education."
      />

      <Section title="Upcoming topics">
        <div className="grid-cards">
          {knowledge.map(([title, desc]) => (
            <FeatureCard key={title} title={title} description={desc} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
