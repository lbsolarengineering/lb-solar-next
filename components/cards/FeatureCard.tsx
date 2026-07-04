import GlassCard from '@/components/ui/GlassCard';

export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <GlassCard>
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </GlassCard>
  );
}
