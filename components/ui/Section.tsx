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
          <h2 className="heading-display mt-4 text-[40px] leading-tight md:text-[48px] lg:text-[52px]">{title}</h2>
          {description && <p className="body-lg mt-5">{description}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
