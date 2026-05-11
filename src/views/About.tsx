import type { CSSProperties } from "react";
import aboutPhoto from "../assets/team-construction.jpg";
import { aboutContent } from "../data";

const photoStyle: CSSProperties = { backgroundImage: `url(${aboutPhoto})` };

function About() {
  return (
    <section id="om-oss" className="sg-band sg-about sg-about--dark">
      <div className="sg-about__split">
        <div className="sg-about__photo" style={photoStyle} aria-hidden="true" />
        <div className="sg-about__copy-col">
          <p className="sg-eyebrow sg-eyebrow--light sg-about__eyebrow">
            {aboutContent.eyebrow}
          </p>
          <h2 className="sg-about__head">{aboutContent.headline}</h2>
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
