import { ArrowRight, Play } from 'lucide-react';
import { company, stats, strengths } from '@/lib/data';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={company.heroFallback}
          className="h-full w-full object-cover opacity-30"
        >
          <source src={company.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      <Container className="relative flex min-h-screen flex-col justify-center pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{company.tagline}</p>
            <h1 className="heading-display mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering Solar Projects That Perform for{' '}
              <span className="text-gradient">Decades.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
              {company.name} helps homeowners, developers, EPC companies, industries and market leaders build
              high-performance solar projects through practical design and detailed engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/enquiry" variant="outline">
                Send Enquiry
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={company.heroFallback}
                className="h-full w-full object-cover"
              >
                <source src={company.heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-bg/20">
                <div className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-white">
                  <Play className="h-4 w-4 fill-emerald text-emerald" />
                  Watch Our Video
                </div>
              </div>
            </div>
            <GlassCard className="absolute -bottom-6 -left-4 max-w-xs md:-left-8" hover={false}>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald">Engineering-First Consultancy</p>
              <p className="mt-2 text-sm font-semibold text-white">
                Design Review • PV Layout • PVsyst • BOQ • Detailed Engineering
              </p>
              <p className="mt-1 text-xs text-muted">From kW rooftops to MW-scale solar plants.</p>
            </GlassCard>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <GlassCard key={label} className="text-center" hover={false}>
              <strong className="block text-2xl font-bold text-white md:text-3xl">{value}</strong>
              <span className="mt-1 block text-xs text-muted md:text-sm">{label}</span>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(([title, desc]) => (
            <GlassCard key={title}>
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
