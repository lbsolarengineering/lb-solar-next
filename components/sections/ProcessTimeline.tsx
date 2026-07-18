import {
  FileText,
  MapPinned,
  Sun,
  Ruler,
  ClipboardList,
  ShieldCheck,
  HardHat,
  LineChart,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const processIcons = [FileText, MapPinned, Sun, Ruler, ClipboardList, ShieldCheck, HardHat, LineChart];

export default function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent lg:block" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = processIcons[i] ?? FileText;
          return (
            <article
              key={step}
              className="group relative flex h-full flex-col rounded-[20px] border border-border bg-bg-elevated p-6 shadow-[var(--theme-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald/25 hover:shadow-[var(--theme-shadow-hover)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-lg font-bold text-emerald">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-sky text-blue transition-colors group-hover:bg-bg-soft group-hover:text-emerald">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="body-md font-semibold text-text">{step}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function StudyHighlight() {
  return (
    <section className="section-padding section-sky">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] border border-border bg-bg-elevated p-8 md:p-12">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-bg-sky blur-3xl" />
          <p className="eyebrow">Site Investigation</p>
          <h2 className="heading-display mt-4 max-w-3xl text-[40px] leading-tight md:text-[48px]">
            Site Investigation & Engineering Study Coordination
          </h2>
          <p className="body-lg mt-5 max-w-3xl">
            LB Solar coordinates, reviews and integrates specialist study outputs into the overall solar engineering
            process — helping clients define scope, work with specialist agencies and apply findings to design.
          </p>
          <div className="mt-8">
            <Button href="/technical-studies">
              Explore Technical Studies <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
