import type { Metadata } from 'next';
import AIEngineerSection from '@/components/sections/AIEngineerSection';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'LB Solar AI | LB Solar Engineering & Consultancy',
  description:
    'LB Solar AI Engineer — coming soon. An AI-assisted solar engineering platform for faster project concepts, engineering inputs and proposals.',
};

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="LB Solar AI"
        title="LB Solar AI Engineer"
        description="A coming-soon AI-assisted solar engineering platform for EPC companies and solar professionals."
      >
        <span className="mt-6 inline-flex rounded-full border border-emerald/30 bg-bg-soft px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-emerald">
          Coming Soon
        </span>
      </PageHero>
      <AIEngineerSection />
      <CTASection />
    </>
  );
}
