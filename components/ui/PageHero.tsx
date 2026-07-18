import { ReactNode } from 'react';
import Container from './Container';
import Eyebrow from './Eyebrow';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-bg-sky/60 via-bg to-bg pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,248,253,0.9),transparent_55%)]" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="heading-display mt-4 max-w-4xl text-[40px] leading-tight md:text-[56px] lg:text-[64px]">
          {title}
        </h1>
        <p className="body-lg mt-6 max-w-2xl">{description}</p>
        {children}
      </Container>
    </section>
  );
}
