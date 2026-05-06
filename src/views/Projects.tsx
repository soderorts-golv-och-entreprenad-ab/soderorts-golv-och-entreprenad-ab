import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projekt" className="sg-band sg-band--mist sg-projects">
      <div className="sg-band__inner">
        <h2 className="sg-section-head sg-section-head--center sg-section-head--ink">
          Projekt
        </h2>
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}

export default Projects;
