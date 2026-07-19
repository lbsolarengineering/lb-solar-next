import { Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';

/** Premium innovation band — no product roadmap or AI feature listing. */
export default function AIEngineerSection() {
  return (
    <section className="section-padding pt-4 md:pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-navy via-blue to-[#1a6b8a] p-8 text-white md:p-12 lg:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
              `,
              backgroundSize: '36px 36px',
            }}
          />
          <div className="relative max-w-3xl">
            <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-emerald-light">Innovation</p>
            <h2 className="heading-display mt-4 text-[36px] leading-tight text-white md:text-[44px]">
              Engineering Beyond Today
            </h2>
            <p className="mt-4 text-[17px] font-semibold leading-relaxed text-white/90 md:text-[18px]">
              Building advanced digital engineering solutions for the future of the solar industry.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              At LB Solar Engineering & Consultancy, we continuously invest in engineering innovation to simplify
              complex solar design workflows, improve technical accuracy and accelerate project delivery. Our focus is
              on developing next-generation digital solutions that support EPC companies, developers and project owners
              without compromising engineering quality.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/15 px-4 py-2 text-[13px] font-bold uppercase tracking-wider text-emerald-light">
              <Sparkles className="h-4 w-4" />
              Innovation in Progress
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
