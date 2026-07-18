import { stats } from '@/lib/data';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';

export default function StatsSection() {
  return (
    <section className="relative z-10 pb-6">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <GlassCard key={stat.title} className="text-center" hover={false}>
              <strong className="block text-3xl font-bold text-emerald md:text-4xl">{stat.value}</strong>
              <span className="mt-2 block text-[16px] font-semibold text-text">{stat.title}</span>
              <span className="mt-1 block text-[14px] text-muted">{stat.subtitle}</span>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
