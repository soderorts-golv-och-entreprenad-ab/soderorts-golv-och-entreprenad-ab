import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  brandMonogram,
  companyShortName,
  companySubmark,
  navHref,
  navLinks,
} from "../data";
import useFocusTrap from "../hooks/useFocusTrap";

const SCROLL_THRESHOLD = 60;

function Header() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrolled || !isLanding;
  const drawerRef = useFocusTrap<HTMLDivElement>(menuOpen);

  useEffect(() => {
    if (!isLanding) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sg-nav${solid ? " sg-nav--scrolled" : ""}${menuOpen ? " sg-nav--menu-open" : ""}`}
    >
      <div className="sg-nav__inner">
        <Link
          to="/#hem"
          className="sg-nav__brand"
          aria-label={companyShortName}
          onClick={closeMenu}
        >
          <span className="sg-nav__brand-mark" aria-hidden="true">
            {brandMonogram}
          </span>
          <span className="sg-nav__brand-text">
            <span className="sg-nav__brand-name">{companyShortName}</span>
            <span className="sg-nav__brand-sub">{companySubmark}</span>
          </span>
        </Link>
        <nav className="sg-nav__links" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={navHref(link.href, isLanding)}
              className="sg-nav__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to={navHref("#kontakt", isLanding)}
          className="sg-btn sg-btn--solid-light sg-btn--small sg-nav__cta"
        >
          Kontakta oss
        </Link>
        <button
          type="button"
          className="sg-nav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="sg-mobile-menu"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        ref={drawerRef}
        id="sg-mobile-menu"
        className="sg-nav__drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Meny"
        hidden={!menuOpen}
      >
        <nav className="sg-nav__drawer-links" aria-label="Mobilnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={navHref(link.href, isLanding)}
              className="sg-nav__drawer-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to={navHref("#kontakt", isLanding)}
          className="sg-btn sg-btn--solid-light sg-nav__drawer-cta"
          onClick={closeMenu}
        >
          Kontakta oss
        </Link>
      </div>
    </header>
  );
}

export default Header;
