import { Link } from "react-router";
import { heroContent } from "../data";

function Hero() {
  return (
    <section id="hem" className="sg-hero">
      <div className="sg-hero__photo" aria-hidden="true" />
      <div className="sg-hero__overlay" aria-hidden="true" />
      <div className="sg-hero__inner">
        <div className="sg-hero__copy">
          <h1 className="sg-hero__title">{heroContent.claim}</h1>
          <p className="sg-hero__lead">{heroContent.lead}</p>
          <Link
            to={heroContent.ctaHref}
            className="sg-btn sg-btn--outline-light"
          >
            {heroContent.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
