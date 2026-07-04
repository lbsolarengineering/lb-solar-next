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
    <section className="relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald/5 to-transparent" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="heading-display mt-4 max-w-4xl text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{description}</p>
        {children}
      </Container>
    </section>
  );
}
