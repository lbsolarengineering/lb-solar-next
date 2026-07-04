type EngineeringPreviewProps = {
  label?: string;
  className?: string;
};

export default function EngineeringPreview({ label = 'Engineering Preview', className = '' }: EngineeringPreviewProps) {
  return (
    <div className={`relative overflow-hidden bg-bg-elevated ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-bg to-bg-elevated" />
      <div
        className="absolute inset-0 opacity-40 blur-[2px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,211,153,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,211,153,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-6 rounded-xl border border-emerald/20 bg-white/[0.03] backdrop-blur-md" />
      <div className="absolute left-10 top-10 h-16 w-24 rounded-lg border border-emerald/15 bg-emerald/5 blur-[1px]" />
      <div className="absolute right-12 top-16 h-20 w-32 rounded-lg border border-emerald/15 bg-emerald/5 blur-[1px]" />
      <div className="absolute bottom-14 left-14 right-14 h-24 rounded-lg border border-emerald/15 bg-emerald/5 blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20" />
      <div className="absolute bottom-4 left-4 rounded-full border border-border bg-bg/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted backdrop-blur-sm">
        {label}
      </div>
    </div>
  );
}
