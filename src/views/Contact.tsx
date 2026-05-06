import type { ReactNode } from "react";
import { contactInfo } from "../data";

const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function EmailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 4.5h3.5l1.6 4-2.1 1.4a12 12 0 0 0 6.1 6.1l1.4-2.1 4 1.6V19a1.5 1.5 0 0 1-1.5 1.5C10.7 20 4 13.3 4 5.9A1.5 1.5 0 0 1 5 4.5z" />
    </svg>
  );
}

function AddressIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s-7-7.2-7-12a7 7 0 1 1 14 0c0 4.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface RowProps {
  icon: ReactNode;
  prefix: string;
  value: string;
  href?: string;
}

function Row({ icon, prefix, value, href }: RowProps) {
  const text = (
    <span className="sg-kontakt__row-text">
      <span className="sg-kontakt__row-prefix">{prefix}</span>{" "}
      <span className="sg-kontakt__row-value">{value}</span>
    </span>
  );
  return (
    <li className="sg-kontakt__row">
      <span className="sg-kontakt__row-icon" aria-hidden="true">
        {icon}
      </span>
      {href ? (
        <a className="sg-kontakt__row-link" href={href}>
          {text}
        </a>
      ) : (
        text
      )}
    </li>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="sg-band sg-band--navy sg-kontakt">
      <div className="sg-band__inner sg-kontakt__inner">
        <header className="sg-kontakt__head">
          <p className="sg-eyebrow sg-eyebrow--light">{contactInfo.eyebrow}</p>
          <h2 className="sg-kontakt__title">{contactInfo.heading}</h2>
          <p className="sg-kontakt__sub">{contactInfo.sub}</p>
        </header>

        <div className="sg-kontakt__cols">
          <div className="sg-kontakt__col">
            <h3 className="sg-kontakt__col-head">Kontakta oss</h3>
            <ul className="sg-kontakt__list">
              <Row
                icon={<EmailIcon />}
                prefix="Maila oss:"
                value={contactInfo.email}
                href={mailHref}
              />
              <Row
                icon={<PhoneIcon />}
                prefix="Ring oss:"
                value={contactInfo.phone}
                href={telHref}
              />
              <Row
                icon={<AddressIcon />}
                prefix="Besök oss:"
                value={contactInfo.address}
              />
            </ul>
          </div>

          <div className="sg-kontakt__col">
            <h3 className="sg-kontakt__col-head">Följ oss</h3>
            <ul className="sg-kontakt__list">
              <Row
                icon={<InstagramIcon />}
                prefix="Vår instagram:"
                value={contactInfo.instagramHandle}
                href={contactInfo.instagramUrl}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
