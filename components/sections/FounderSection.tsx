import Container from '@/components/ui/Container';
import FounderPortrait from '@/components/ui/FounderPortrait';
import { company } from '@/lib/data';

type FounderSectionProps = {
  subtitle?: string;
  children?: React.ReactNode;
};

export default function FounderSection({ subtitle, children }: FounderSectionProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-[24px] border border-emerald/15 bg-bg-soft p-6 md:grid-cols-[300px_1fr] md:gap-12 md:p-10 lg:grid-cols-[320px_1fr]">
          <FounderPortrait />
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="heading-display mt-3 text-[36px] leading-tight md:text-[44px]">{company.founder}</h2>
            <p className="mt-3 text-[16px] font-medium text-emerald md:text-[17px]">
              {subtitle ?? company.founderTitle}
            </p>
            <div className="mt-5 space-y-4 body-lg">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
