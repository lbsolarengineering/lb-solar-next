import { company } from '@/lib/data';

export default function FounderPortrait() {
  if (company.founderImage) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-emerald/15 bg-bg-sky/40">
        <img
          src={company.founderImage}
          alt={company.founder}
          className="h-full w-full object-cover object-[center_20%]"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] border border-emerald/15 bg-bg-soft">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-sky/60 via-bg-soft to-bg-elevated" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald/25 bg-bg-elevated shadow-sm md:h-32 md:w-32">
          <span className="heading-display text-4xl text-emerald md:text-5xl">{company.founderInitials}</span>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-emerald">Founder</p>
        <p className="mt-3 max-w-[220px] text-sm font-medium leading-relaxed text-muted">{company.founderTitle}</p>
      </div>
    </div>
  );
}
