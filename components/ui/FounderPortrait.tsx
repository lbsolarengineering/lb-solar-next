import { company } from '@/lib/data';

export default function FounderPortrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-emerald/20">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated via-emerald/10 to-bg" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_45%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald/30 bg-emerald/10 shadow-lg shadow-emerald/10 backdrop-blur-sm md:h-32 md:w-32">
          <span className="heading-display text-4xl text-emerald md:text-5xl">{company.founderInitials}</span>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-emerald">Founder</p>
        <p className="mt-3 max-w-[220px] text-sm font-medium leading-relaxed text-white/90">
          {company.founderTitle}
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg/80 to-transparent" />
    </div>
  );
}
