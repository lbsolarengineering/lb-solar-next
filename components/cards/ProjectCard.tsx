import { MapPin } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ProjectImage from '@/components/cards/ProjectImage';
import type { Project } from '@/lib/data';

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <GlassCard className="overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectImage project={p} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted">
          <MapPin className="h-3.5 w-3.5 text-emerald" />
          {p.location}
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <p className="mt-2 text-sm text-emerald">{p.meta}</p>
        <div className="mt-5 space-y-3 text-sm text-muted">
          <p>
            <span className="font-semibold text-white">Challenge:</span> {p.challenge}
          </p>
          <p>
            <span className="font-semibold text-white">Solution:</span> {p.solution}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
