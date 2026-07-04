import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import FounderSection from '@/components/sections/FounderSection';
import ProcessTimeline, { StudyHighlight } from '@/components/sections/ProcessTimeline';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/cards/ServiceCard';
import ProjectCard from '@/components/cards/ProjectCard';
import FeatureCard from '@/components/cards/FeatureCard';
import { process, projects, services, whyItems } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Section eyebrow="About LB Solar" title="Engineering-first solar consultancy for every project stakeholder.">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-muted">
            At LB Solar, we believe a solar plant should not be executed only on thumb rules. Every project deserves
            proper technical assessment, practical engineering and execution-focused documentation.
          </p>
          <p className="text-muted">
            We work with EPC companies, developers, project owners, installers, vendors and end customers to help solar
            projects perform safely and reliably for decades.
          </p>
        </div>
      </Section>

      <Section eyebrow="Why LB Solar" title="Built for technical clarity, execution and long-term performance.">
        <div className="grid-cards">
          {whyItems.map(([title, desc]) => (
            <FeatureCard key={title} title={title} description={desc} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Solar engineering and consultancy services.">
        <div className="grid-services">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s[0]} s={s} i={i} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="From enquiry to performance review.">
        <ProcessTimeline steps={process} />
      </Section>

      <Section wide eyebrow="Projects" title="Featured project experience without exposing confidential drawings.">
        <div className="grid-projects">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      <StudyHighlight />

      <FounderSection>
        <p>
          Founded LB Solar Engineering & Consultancy with a belief that solar projects should be engineered for
          long-term performance, not executed only on standard assumptions.
        </p>
      </FounderSection>

      <CTASection />
    </>
  );
}
