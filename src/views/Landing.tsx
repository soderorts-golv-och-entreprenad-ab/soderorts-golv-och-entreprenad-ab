import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Hero from "./Hero";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";
import Team from "./Team";

function Landing() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Team />
      <Partners />
      <Certificates />
      <Contact />
    </>
  );
}

export default Landing;
