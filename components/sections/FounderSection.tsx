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
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border glass p-6 md:grid-cols-[320px_1fr] md:gap-12 md:p-10">
          <FounderPortrait />
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="heading-display mt-3 text-3xl md:text-4xl">{company.founder}</h2>
            <p className="mt-2 text-sm font-medium text-emerald">{subtitle ?? company.founderTitle}</p>
            <div className="mt-5 space-y-4 text-muted">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
