import { useEffect, useState } from "react";
import {
  brandMonogram,
  companyShortName,
  companySubmark,
  navLinks,
} from "../data";
import useFocusTrap from "../hooks/useFocusTrap";

const SCROLL_THRESHOLD = 60;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useFocusTrap<HTMLDivElement>(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`sg-nav${scrolled ? " sg-nav--scrolled" : ""}${menuOpen ? " sg-nav--menu-open" : ""}`}
    >
      <div className="sg-nav__inner">
        <a
          href="#hem"
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
        </a>
        <nav className="sg-nav__links" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="sg-nav__link">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="sg-btn sg-btn--solid-light sg-btn--small sg-nav__cta"
        >
          Kontakta oss
        </a>
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
            <a
              key={link.href}
              href={link.href}
              className="sg-nav__drawer-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="sg-btn sg-btn--solid-light sg-nav__drawer-cta"
          onClick={closeMenu}
        >
          Kontakta oss
        </a>
      </div>
    </header>
  );
}

export default Header;
