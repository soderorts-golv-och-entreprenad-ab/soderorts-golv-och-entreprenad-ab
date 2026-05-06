import { aboutContent } from "../data";

function About() {
  return (
    <section id="om-oss" className="sg-band sg-band--paper sg-about">
      <div className="sg-band__inner sg-about__grid">
        <div className="sg-about__photo" aria-hidden="true" />
        <div className="sg-about__copy">
          <p className="sg-eyebrow">{aboutContent.eyebrow}</p>
          <h2 className="sg-section-head sg-section-head--ink">
            {aboutContent.headline}
          </h2>
          <p className="sg-about__quote">{aboutContent.quote}</p>
          <div className="sg-about__paragraphs">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
