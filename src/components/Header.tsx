import { Link } from "react-router";
import { companyShortName, navLinks } from "../data";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-mark">SG</span>
          <span className="header__logo-text">{companyShortName}</span>
        </Link>
        <nav className="header__nav" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="header__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
