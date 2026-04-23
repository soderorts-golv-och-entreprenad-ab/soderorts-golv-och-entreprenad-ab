import Section from "../components/Section";
import { aboutText } from "../data";

function About() {
  return (
    <Section id="om-oss" title="Om oss">
      <p className="about__text">{aboutText}</p>
    </Section>
  );
}

export default About;
