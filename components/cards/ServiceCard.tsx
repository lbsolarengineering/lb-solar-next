import GlassCard from '@/components/ui/GlassCard';

export default function ServiceCard({ s, i }: { s: string[]; i: number }) {
  const [title, desc] = s;
  return (
    <GlassCard>
      <span className="text-sm font-bold text-emerald">{String(i + 1).padStart(2, '0')}</span>
      <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
    </GlassCard>
  );
}
