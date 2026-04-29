import { useState } from "react";
import type { Project } from "../types";
import Chevron from "./Chevron";
import ProjectCard from "./ProjectCard";

interface ProjectsCarouselProps {
  projects: Project[];
}

const VISIBLE = 3;

function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [start, setStart] = useState(0);
  const max = Math.max(0, projects.length - VISIBLE);
  const items = projects.slice(start, start + VISIBLE);

  return (
    <div className="sg-projects__rail">
      <button
        type="button"
        className="sg-arrow sg-arrow--left"
        onClick={() => setStart((s) => Math.max(0, s - 1))}
        disabled={start === 0}
        aria-label="Föregående projekt"
      >
        <Chevron />
      </button>
      <div className="sg-projects__grid">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <button
        type="button"
        className="sg-arrow sg-arrow--right"
        onClick={() => setStart((s) => Math.min(max, s + 1))}
        disabled={start >= max}
        aria-label="Nästa projekt"
      >
        <Chevron />
      </button>
    </div>
  );
}

export default ProjectsCarousel;
