import GlassCard from '@/components/ui/GlassCard';

export default function FeatureCard({
  title,
  description,
  icon,
  className = '',
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <GlassCard className={`h-full ${className}`}>
      {icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-sky text-blue">
          {icon}
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="body-md mt-3">{description}</p>
    </GlassCard>
  );
}
