import type { CSSProperties } from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const photoStyle: CSSProperties | undefined = project.photo
    ? { backgroundImage: `url(${project.photo})` }
    : undefined;

  return (
    <button
      type="button"
      className="sg-project"
      onClick={() => onOpen(project)}
    >
      <div
        className="sg-project__photo"
        style={photoStyle}
        aria-hidden="true"
      />
      <div className="sg-project__bar">
        <div className="sg-project__text">
          <span className="sg-project__title">{project.title}</span>
          <span className="sg-project__meta">
            {project.location} · {project.year}
          </span>
        </div>
        <span className="sg-project__arrow" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </button>
  );
}

export default ProjectCard;
