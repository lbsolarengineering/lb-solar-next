import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import CTASection from '@/components/sections/CTASection';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | LB Solar Engineering & Consultancy',
  description: 'Project experience across rooftop, utility and proposal engineering for solar projects in India.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project Experience Across Rooftop, Utility and Proposal Engineering"
        description="Our project showcase highlights engineering capability while protecting client-sensitive details and confidential documentation."
      />

      <Section title="Case study portfolio" wide>
        <div className="grid-projects">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
