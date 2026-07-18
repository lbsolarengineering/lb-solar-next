import { ArrowRight } from 'lucide-react';
import { company } from '@/lib/data';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroSlider from '@/components/sections/HeroSlider';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
      <div className="absolute inset-0 min-h-[92vh] md:min-h-screen">
        <HeroSlider />
      </div>

      <Container className="relative z-[1] flex min-h-[92vh] flex-col justify-center pt-28 pb-24 md:min-h-screen md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="heading-display text-[48px] leading-[1.08] sm:text-[56px] md:text-[64px] lg:text-[72px]">
            Engineering Solar Projects That Perform for{' '}
            <span className="text-gradient">Decades.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted md:text-[19px]">
            Independent solar design, detailed engineering and technical consultancy for EPC companies, developers,
            industries and project owners across India.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/services">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="outline">
              View Project Experience
            </Button>
          </div>
          <p className="mt-8 text-[16px] font-medium text-text/75">{company.tagline}</p>
        </div>
      </Container>
    </section>
  );
}
