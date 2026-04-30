import { contactInfo } from "../data";

const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;

function Contact() {
  return (
    <section id="kontakt" className="sg-band sg-band--navy sg-contact">
      <div className="sg-band__inner sg-contact__inner">
        <div className="sg-contact__intro">
          <span className="sg-eyebrow sg-eyebrow--light">Kontakt</span>
          <h2 className="sg-section-head">{contactInfo.heading}</h2>
          <p className="sg-contact__copy">{contactInfo.intro}</p>
          <div className="sg-contact__ctas">
            <a className="sg-btn sg-btn--filled-ochre" href={telHref}>
              Ring oss
            </a>
            <a className="sg-btn sg-btn--outline-light" href={mailHref}>
              Skicka e-post
            </a>
          </div>
        </div>

        <ul className="sg-contact__list">
          <li className="sg-contact__row">
            <span className="sg-contact__label">Telefon</span>
            <a className="sg-contact__value" href={telHref}>
              {contactInfo.phone}
            </a>
          </li>
          <li className="sg-contact__row">
            <span className="sg-contact__label">E-post</span>
            <a className="sg-contact__value" href={mailHref}>
              {contactInfo.email}
            </a>
          </li>
          <li className="sg-contact__row">
            <span className="sg-contact__label">Adress</span>
            <span className="sg-contact__value">{contactInfo.address}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
