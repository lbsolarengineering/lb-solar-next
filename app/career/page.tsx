import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import GlassCard from '@/components/ui/GlassCard';
import { careers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Career | LB Solar Engineering & Consultancy',
  description: 'Build your solar engineering career with LB Solar — practical engineering-led consultancy across India.',
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build Solar Engineering Careers With LB Solar"
        description="Join a practical engineering-led solar consultancy working across rooftop and MW-scale projects."
      />

      <Section title="Open positions">
        <div className="grid-cards">
          {careers.map(([title, desc]) => (
            <GlassCard key={title}>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-muted">{desc}</p>
              <Link href="/contact" className="mt-4 inline-block text-sm font-bold text-emerald hover:text-emerald-light">
                Apply / Contact →
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
