import { useEffect } from "react";
import type { Project } from "../types";
import useFocusTrap from "../hooks/useFocusTrap";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const containerRef = useFocusTrap<HTMLDivElement>(project !== null);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const story = project.story ?? [];
  const altText = `${project.title} – ${project.location}`;

  return (
    <div
      className="sg-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="sg-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="sg-modal__close"
          onClick={onClose}
          aria-label="Stäng"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        {project.photo && (
          <img
            className="sg-modal__photo"
            src={project.photo}
            alt={altText}
            loading="lazy"
          />
        )}

        <div className="sg-modal__body">
          <p className="sg-modal__meta">
            {project.location} · {project.year}
          </p>
          <h3 className="sg-modal__title">{project.title}</h3>
          <p className="sg-modal__desc">{project.description}</p>

          {story.length > 0 && (
            <div className="sg-modal__story">
              {story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
