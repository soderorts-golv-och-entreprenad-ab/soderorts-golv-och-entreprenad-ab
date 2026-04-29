import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { brandMonogram, companyShortName, navLinks } from "../data";

const SCROLL_THRESHOLD = 60;

function Header() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isLanding) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  const solid = !isLanding || scrolled;

  return (
    <header className={`sg-nav${solid ? " sg-nav--scrolled" : ""}`}>
      <div className="sg-nav__inner">
        <Link to="/#hem" className="sg-nav__brand">
          <span className="sg-nav__brand-mark">{brandMonogram}</span>
          <span className="sg-nav__brand-text">{companyShortName}</span>
        </Link>
        <nav className="sg-nav__links" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={isLanding ? link.href : `/${link.href}`}
              className="sg-nav__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to={isLanding ? "#kontakt" : "/#kontakt"}
          className="sg-btn sg-btn--outline-light sg-btn--small"
        >
          Kontakta oss
        </Link>
      </div>
    </header>
  );
}

export default Header;
