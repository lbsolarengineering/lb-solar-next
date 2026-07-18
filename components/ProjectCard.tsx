import Image from "next/image";

type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
  scope: string;
  badge: string;
  capacity?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projectCard">
      <div className="projectImage">
        <Image
          src={project.image}
          alt={`${project.title} engineering preview`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 640px"
          className="projectCardImg"
        />
        <div className="projectBadges">
          <span className="projectBadge category">{project.badge}</span>
          {project.capacity ? <span className="projectBadge capacity">{project.capacity}</span> : null}
        </div>
      </div>
      <div className="projectBody">
        <h3>{project.title}</h3>
        <span className="projectType">{project.type}</span>
      </div>
    </article>
  );
}
