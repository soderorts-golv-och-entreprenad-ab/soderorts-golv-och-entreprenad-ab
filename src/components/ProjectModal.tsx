import { useEffect, useRef } from "react";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) return null;

  const story = project.story ?? [];
  const altText = `${project.title} – ${project.location}`;

  return (
    <dialog
      ref={dialogRef}
      className="sg-modal"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div className="sg-modal__panel">
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
    </dialog>
  );
}

export default ProjectModal;
