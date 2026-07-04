import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';

export default function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <GlassCard key={step}>
          <span className="text-sm font-bold text-emerald">{String(i + 1).padStart(2, '0')}</span>
          <p className="mt-3 text-sm font-medium text-white">{step}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export function StudyHighlight() {
  return (
    <section className="section-padding">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border glass p-8 md:p-12">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-emerald/10 blur-3xl" />
          <p className="eyebrow">Technical Studies</p>
          <h2 className="heading-display mt-4 max-w-2xl text-3xl md:text-4xl">
            Solar Site Investigation & Engineering Studies
          </h2>
          <p className="mt-5 max-w-3xl text-muted">
            For ground-mounted and large solar projects, we support the technical studies required before detailed
            design and execution, including topography and contour survey, soil investigation, soil testing reports,
            ERT, TRT, hydrology reports, drainage inputs and project-specific site engineering studies.
          </p>
        </div>
      </Container>
    </section>
  );
}
