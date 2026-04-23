import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image" aria-hidden="true" />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__meta">
          {project.location} · {project.year}
        </p>
        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
