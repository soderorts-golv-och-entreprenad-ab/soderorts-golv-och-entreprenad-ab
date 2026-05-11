import { Link, useLocation } from "react-router";
import {
  brandMonogram,
  companyName,
  companyShortName,
  companySubmark,
  contactInfo,
  navHref,
  navLinks,
  orgNumber,
} from "../data";

const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;

function Footer() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const year = new Date().getFullYear();

  return (
    <footer className="sg-footer">
      <div className="sg-footer__inner">
        <div className="sg-footer__col sg-footer__col--brand">
          <div className="sg-footer__brand">
            <span className="sg-footer__mark" aria-hidden="true">
              {brandMonogram}
            </span>
            <span className="sg-footer__wordmark">
              <span className="sg-footer__wordmark-name">
                {companyShortName}
              </span>
              <span className="sg-footer__wordmark-sub">{companySubmark}</span>
            </span>
          </div>
        </div>

        <div className="sg-footer__col">
          <h4 className="sg-footer__heading">Navigera</h4>
          <ul className="sg-footer__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={navHref(link.href, isLanding)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sg-footer__col">
          <h4 className="sg-footer__heading">Kontakt</h4>
          <ul className="sg-footer__list">
            <li>
              <a href={telHref}>{contactInfo.phone}</a>
            </li>
            <li>
              <a href={mailHref}>{contactInfo.email}</a>
            </li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="sg-footer__bar">
        <p className="sg-footer__legal">
          © {year} {companyName} · Org.nr {orgNumber}
        </p>
        <p className="sg-footer__legal">F-skatt · Försäkrad hos Trygg-Hansa</p>
      </div>
    </footer>
  );
}

export default Footer;
