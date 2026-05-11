import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
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
  const galleryItems =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.photo
        ? [project.photo, project.photo, project.photo]
        : [];

  return (
    <div
      className="sg-modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      {createPortal(
        <button
          type="button"
          className="sg-modal__close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
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
        </button>,
        document.body,
      )}
      <div className="sg-modal__panel" onClick={(e) => e.stopPropagation()}>
        {project.photo && (
          <div
            className="sg-modal__photo"
            style={{ backgroundImage: `url(${project.photo})` }}
            aria-hidden="true"
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

          {galleryItems.length > 0 && (
            <div className="sg-modal__gallery">
              {galleryItems.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className={
                    i === 2
                      ? "sg-modal__gallery-item sg-modal__gallery-item--wide"
                      : "sg-modal__gallery-item"
                  }
                  style={{ backgroundImage: `url(${src})` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
