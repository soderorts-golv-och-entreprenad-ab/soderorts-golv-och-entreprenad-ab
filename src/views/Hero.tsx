import type { CSSProperties } from "react";
import { Link } from "react-router";
import heroPhoto from "../assets/hero-lobby.avif";
import { heroContent } from "../data";

const photoStyle: CSSProperties = { backgroundImage: `url(${heroPhoto})` };

function Hero() {
  return (
    <section id="hem" className="sg-hero">
      <div className="sg-hero__photo" style={photoStyle} aria-hidden="true" />
      <div className="sg-hero__overlay" aria-hidden="true" />
      <div className="sg-hero__inner">
        <div className="sg-hero__copy">
          <h1 className="sg-hero__title">{heroContent.claim}</h1>
          <p className="sg-hero__lead">{heroContent.lead}</p>
          <div className="sg-hero__ctas">
            <Link
              to={heroContent.primaryCta.href}
              className="sg-btn sg-btn--outline-light"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              to={heroContent.secondaryCta.href}
              className="sg-btn sg-btn--solid-light"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
