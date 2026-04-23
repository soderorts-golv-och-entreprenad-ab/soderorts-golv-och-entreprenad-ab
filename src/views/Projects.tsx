import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../data";

function Projects() {
  return (
    <Section id="projekt" title="Våra projekt">
      <div className="grid grid--projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
