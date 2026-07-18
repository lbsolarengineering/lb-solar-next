import EngineeringPreview from '@/components/ui/EngineeringPreview';
import { projects } from '@/lib/data';

type Project = (typeof projects)[number];

type ProjectImageProps = {
  project: Project;
  className?: string;
};

export default function ProjectImage({ project, className = '' }: ProjectImageProps) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${className}`}
      />
    );
  }

  return (
    <EngineeringPreview
      label="Project photograph unavailable"
      className={`h-full w-full ${className}`}
    />
  );
}
