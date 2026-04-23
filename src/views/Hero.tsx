import { Link } from "react-router";
import { companyName, tagline } from "../data";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">{companyName}</h1>
        <p className="hero__tagline">{tagline}</p>
        <Link to="#kontakt" className="hero__cta">
          Kontakta oss
        </Link>
      </div>
    </section>
  );
}

export default Hero;
