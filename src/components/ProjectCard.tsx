import type { CSSProperties } from "react";
import { Link } from "react-router";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const photoStyle: CSSProperties | undefined = project.photo
    ? { backgroundImage: `url(${project.photo})` }
    : undefined;

  return (
    <Link to={`/projekt/${project.slug}`} className="sg-project">
      <div
        className="sg-project__photo"
        style={photoStyle}
        aria-hidden="true"
      />
      <div className="sg-project__body">
        <p className="sg-project__meta">
          {project.location} · {project.year}
        </p>
        <h3 className="sg-project__title">{project.title}</h3>
        <p className="sg-project__desc">{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
