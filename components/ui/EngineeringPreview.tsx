type EngineeringPreviewProps = {
  label?: string;
  className?: string;
};

export default function EngineeringPreview({ label = 'Engineering Preview', className = '' }: EngineeringPreviewProps) {
  return (
    <div className={`relative overflow-hidden bg-bg-soft ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-bg-sky via-bg-soft to-bg-elevated" />
      <div
        className="absolute inset-0 opacity-50 blur-[3px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,139,76,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,139,76,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-6 rounded-xl border border-emerald/20 bg-bg-elevated/50" />
      <div className="absolute left-10 top-10 h-16 w-24 rounded-lg border border-emerald/15 bg-emerald/5 blur-[2px]" />
      <div className="absolute right-12 top-16 h-20 w-32 rounded-lg border border-emerald/15 bg-emerald/5 blur-[2px]" />
      <div className="absolute bottom-14 left-14 right-14 h-24 rounded-lg border border-emerald/15 bg-emerald/5 blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 rounded-full border border-border bg-bg-elevated/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted shadow-sm">
        {label}
      </div>
    </div>
  );
}
