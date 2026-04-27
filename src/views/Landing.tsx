import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToHash from "../components/ScrollToHash";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Team from "./Team";

function Landing() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
