import EngineeringPreview from '@/components/ui/EngineeringPreview';
import type { Project } from '@/lib/data';

type ProjectImageProps = {
  project: Project;
  className?: string;
};

export default function ProjectImage({ project, className = '' }: ProjectImageProps) {
  if (project.imageType === 'abstract' || !project.image) {
    return (
      <EngineeringPreview
        label="Confidential layout withheld"
        className={`h-full w-full ${className}`}
      />
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${className}`}
    />
  );
}
