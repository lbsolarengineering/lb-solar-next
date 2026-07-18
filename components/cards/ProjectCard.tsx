import { MapPin } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ProjectImage from '@/components/cards/ProjectImage';
import { projects } from '@/lib/data';

type Project = (typeof projects)[number];

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <GlassCard className="h-full overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
        <ProjectImage project={p} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-bg-elevated/95 px-3 py-1.5 text-[15px] font-medium text-muted shadow-sm">
          <MapPin className="h-4 w-4 text-emerald" />
          {p.location}
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="card-title">{p.title}</h3>
        <p className="mt-2 text-[16px] text-emerald">{p.type}</p>
        <p className="mt-5 body-md">{p.scope}</p>
      </div>
    </GlassCard>
  );
}
