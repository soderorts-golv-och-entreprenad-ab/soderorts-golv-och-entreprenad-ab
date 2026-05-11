import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data";
import type { Project } from "../types";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projekt" className="sg-band sg-band--paper sg-projects">
      <div className="sg-band__inner">
        <h2 className="sg-section-head sg-section-head--center sg-section-head--ink">
          Projekt
        </h2>
        <div className="sg-projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Projects;
