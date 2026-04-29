import { useEffect } from "react";
import { Link, useParams } from "react-router";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { projects } from "../data";

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <section className="sg-band sg-band--paper">
        <div className="sg-band__inner sg-pd-not-found">
          <h1 className="sg-pd-h1">Projektet hittades inte</h1>
          <Link to="/#projekt" className="sg-pd-back">
            ← Tillbaka till alla projekt
          </Link>
        </div>
      </section>
    );
  }

  const story = project.story ?? [project.description];
  const gallery = project.gallery ?? [];
  const others = projects.filter((p) => p.slug !== project.slug);
  const heroStyle = project.photo
    ? { backgroundImage: `url(${project.photo})` }
    : undefined;

  return (
    <>
      <div className="sg-pd-hero" style={heroStyle} aria-hidden="true" />

      <section className="sg-pd-title">
        <Link to="/#projekt" className="sg-pd-back">
          ← Tillbaka till alla projekt
        </Link>
        <h1 className="sg-pd-h1">{project.title}</h1>
        <p className="sg-pd-meta">
          {project.location} · {project.year}
        </p>
      </section>

      <section className="sg-pd-body">
        <div className="sg-pd-body__inner">
          {story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="sg-pd-gallery">
          <div className="sg-pd-gallery__grid">
            {gallery.slice(0, 4).map((src, i) => (
              <div
                key={i}
                className="sg-pd-gallery__item"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </section>
      )}

      <section className="sg-band sg-band--paper sg-projects sg-pd-more">
        <div className="sg-band__inner">
          <h2 className="sg-section-head sg-section-head--center sg-section-head--ink">
            Fler projekt
          </h2>
          <ProjectsCarousel projects={others} />
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
