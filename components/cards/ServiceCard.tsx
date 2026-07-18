import GlassCard from '@/components/ui/GlassCard';
import { services } from '@/lib/data';

type Service = (typeof services)[number];

export default function ServiceCard({ s, i }: { s: Service; i: number }) {
  return (
    <GlassCard className="h-full">
      <span className="text-base font-bold text-emerald">{String(i + 1).padStart(2, '0')}</span>
      <h3 className="card-title mt-3">{s.title}</h3>
      <p className="body-md mt-3">{s.text}</p>
    </GlassCard>
  );
}
