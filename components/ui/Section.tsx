import { ReactNode } from 'react';
import Container from './Container';
import Eyebrow from './Eyebrow';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  wide?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  wide = false,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`section-padding ${className}`}>
      <Container className={wide ? 'max-w-[1400px]' : ''}>
        <div className="mb-12 max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="heading-display mt-4 text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          {description && <p className="mt-4 text-lg text-muted">{description}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
