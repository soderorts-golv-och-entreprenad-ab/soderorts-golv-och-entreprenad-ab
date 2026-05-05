import { useState, type FormEvent } from "react";
import { contactInfo } from "../data";

const telHref = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${contactInfo.email}`;

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sg-kontakt__form sg-kontakt__form--sent">
        <p className="sg-kontakt__sent-eyebrow">Tack —</p>
        <p className="sg-kontakt__sent-msg">vi hör av oss inom ett dygn.</p>
      </div>
    );
  }

  return (
    <form className="sg-kontakt__form" onSubmit={handleSubmit} noValidate>
      <div className="sg-kontakt__form-row">
        <div className="sg-kontakt__field">
          <label htmlFor="kf-first">Förnamn</label>
          <input
            id="kf-first"
            name="first"
            type="text"
            autoComplete="given-name"
            placeholder="Förnamn"
            required
          />
        </div>
        <div className="sg-kontakt__field">
          <label htmlFor="kf-last">Efternamn</label>
          <input
            id="kf-last"
            name="last"
            type="text"
            autoComplete="family-name"
            placeholder="Efternamn"
            required
          />
        </div>
      </div>
      <div className="sg-kontakt__form-row">
        <div className="sg-kontakt__field">
          <label htmlFor="kf-email">E-post</label>
          <input
            id="kf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="namn@exempel.se"
            required
          />
        </div>
        <div className="sg-kontakt__field">
          <label htmlFor="kf-phone">Telefon</label>
          <input
            id="kf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+46 …"
          />
        </div>
      </div>
      <div className="sg-kontakt__field">
        <label htmlFor="kf-msg">Meddelande</label>
        <textarea
          id="kf-msg"
          name="message"
          rows={6}
          placeholder="Berätta kort om ditt projekt…"
          required
        />
      </div>
      <button
        type="submit"
        className="sg-btn sg-btn--filled-ochre sg-kontakt__submit"
      >
        Skicka
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      className="sg-band sg-band--navy sg-kontakt sg-kontakt--with-form"
    >
      <div className="sg-band__inner sg-kontakt__inner">
        <header className="sg-kontakt__head">
          <h2 className="sg-section-head sg-kontakt__title">
            {contactInfo.heading}
          </h2>
          <p className="sg-kontakt__sub">{contactInfo.sub}</p>
        </header>

        <div className="sg-kontakt__split">
          <div className="sg-kontakt__split-form">
            <ContactForm />
          </div>

          <aside className="sg-kontakt__info">
            <h3 className="sg-kontakt__info-head">Kontaktinformation</h3>
            <address className="sg-kontakt__info-block">
              {contactInfo.address}
            </address>
            <p className="sg-kontakt__info-block">
              Ring oss:{" "}
              <a className="sg-kontakt__info-link" href={telHref}>
                {contactInfo.phone}
              </a>
            </p>
            <p className="sg-kontakt__info-block">
              <a className="sg-kontakt__info-link" href={mailHref}>
                {contactInfo.email}
              </a>
            </p>
            <p className="sg-kontakt__info-block sg-kontakt__info-hours">
              Vi har öppet måndag – fredag
              <br />
              07:00 – 17:00
            </p>

            <h3 className="sg-kontakt__info-head sg-kontakt__info-head--social">
              Följ oss
            </h3>
            <ul className="sg-kontakt__social">
              <li>
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
