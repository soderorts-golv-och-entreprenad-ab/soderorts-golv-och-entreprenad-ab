import { useEffect, useRef, useState } from "react";
import {
  brandMonogram,
  companyShortName,
  companySubmark,
  navLinks,
} from "../data";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!dialog) return;
    if (menuOpen) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    if (dialog.open) dialog.close();
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sg-nav">
      <div className="sg-nav__inner">
        <a
          href="#hem"
          className="sg-nav__brand"
          aria-label={companyShortName}
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
          aria-label="Öppna meny"
          onClick={() => setMenuOpen(true)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={drawerRef}
        id="sg-mobile-menu"
        className="sg-nav__drawer"
        aria-label="Meny"
        onCancel={(e) => {
          e.preventDefault();
          setMenuOpen(false);
        }}
      >
        <button
          type="button"
          className="sg-nav__menu-btn sg-nav__menu-btn--close"
          onClick={closeMenu}
          aria-label="Stäng meny"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
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
      </dialog>
    </header>
  );
}

export default Header;
