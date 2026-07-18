import Link from 'next/link';
import {
  Calculator,
  FileSpreadsheet,
  LayoutTemplate,
  LineChart,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const capabilities = [
  { title: 'Automated proposal preparation', icon: WandSparkles },
  { title: 'Preliminary system sizing', icon: Calculator },
  { title: 'Engineering calculators', icon: FileSpreadsheet },
  { title: 'Layout assistance', icon: LayoutTemplate },
  { title: 'Generation and financial insights', icon: LineChart },
  { title: 'Technical document generation', icon: Sparkles },
];

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
          <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-emerald/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-emerald-light">Platform</p>
              <span className="rounded-full border border-emerald/40 bg-emerald/15 px-3 py-1 text-[13px] font-bold uppercase tracking-wider text-emerald-light">
                Coming Soon
              </span>
            </div>
            <h2 className="heading-display mt-4 max-w-3xl text-[36px] leading-tight text-white md:text-[44px]">
              What LB Solar AI Engineer will unlock
            </h2>
            <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-white/80 md:text-[18px]">
              We are developing an AI-assisted solar engineering platform designed to help EPC companies and solar
              professionals prepare faster project concepts, engineering inputs and client proposals.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5 text-emerald-light" />
                  <p className="mt-3 text-[16px] font-semibold text-white">{title}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/enquiry?interest=ai-engineer-early-access" className="btn-primary">
                Join Early Access
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
