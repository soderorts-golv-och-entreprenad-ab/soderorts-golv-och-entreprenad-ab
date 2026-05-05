import { Link, useLocation } from "react-router";
import {
  brandMonogram,
  companyBlurb,
  companyName,
  companyShortName,
  contactInfo,
  orgNumber,
} from "../data";

const footerNav = [
  { label: "Hem", href: "#hem" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;

function Footer() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const linkTo = (href: string) => (isLanding ? href : `/${href}`);
  const year = new Date().getFullYear();

  return (
    <footer className="sg-footer">
      <div className="sg-footer__inner">
        <div className="sg-footer__col sg-footer__col--brand">
          <div className="sg-footer__brand">
            <span className="sg-footer__mark">{brandMonogram}</span>
            <span className="sg-footer__wordmark">{companyShortName}</span>
          </div>
          <p className="sg-footer__blurb">{companyBlurb}</p>
        </div>

        <div className="sg-footer__col">
          <h4 className="sg-footer__heading">Navigera</h4>
          <ul className="sg-footer__list">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link to={linkTo(link.href)}>{link.label}</Link>
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
