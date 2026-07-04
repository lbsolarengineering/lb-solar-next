import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import FounderSection from '@/components/sections/FounderSection';
import FeatureCard from '@/components/cards/FeatureCard';

export const metadata: Metadata = {
  title: 'About | LB Solar Engineering & Consultancy',
  description: 'Learn about LB Solar — built to bring real engineering into solar projects across India.',
};

const values = [
  ['Vision', 'To help homeowners, businesses, EPC companies and developers build technically reliable solar projects that reduce electricity dependency and contribute to a cleaner future.'],
  ['Mission', 'To deliver practical solar engineering, design optimization, technical review and consultancy support for projects from kW rooftops to MW-scale utility plants.'],
  ['Commitment', 'Honest technical guidance, protected client information, reliable documentation, execution-friendly design and long-term project performance.'],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About LB Solar"
        title="Built to bring real engineering into solar projects."
        description="LB Solar Engineering & Consultancy was founded to solve a practical gap in the solar industry: many projects are executed based on generalized assumptions instead of project-specific engineering."
      />

      <Section title="Company Story">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-muted">
            While working closely with solar EPC companies and project execution teams, we observed that many solar
            projects were being designed or installed using thumb rules, standard assumptions or incomplete technical
            understanding.
          </p>
          <p className="text-muted">
            Some projects were over-engineered, increasing cost unnecessarily, while others were under-engineered,
            affecting safety, durability and performance. LB Solar was founded to bring practical engineering,
            technical clarity and execution-focused consultancy into every stage of solar project development.
          </p>
        </div>
      </Section>

      <Section title="Vision, Mission & Commitment">
        <div className="grid-cards">
          {values.map(([title, desc]) => (
            <FeatureCard key={title} title={title} description={desc} />
          ))}
        </div>
      </Section>

      <FounderSection>
        <p>
          With more than 6.5 years of experience in solar design, engineering, project execution and consultancy, he
          has worked across residential, commercial, industrial and utility-scale solar projects.
        </p>
        <p>
          Software expertise: PVsyst, AutoCAD, SketchUp, Google Earth Pro, Solar Lab, SolidWorks, CATIA and Excel-based
          engineering tools.
        </p>
      </FounderSection>

      <CTASection />
    </>
  );
}
