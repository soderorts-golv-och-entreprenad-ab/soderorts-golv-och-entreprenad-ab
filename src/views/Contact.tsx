import Section from "../components/Section";
import { contactInfo } from "../data";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

function Contact() {
  const items: ContactItem[] = [
    {
      label: "Telefon",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
    {
      label: "E-post",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    { label: "Adress", value: contactInfo.address },
    {
      label: "Instagram",
      value: contactInfo.instagramHandle,
      href: contactInfo.instagramUrl,
    },
  ];

  return (
    <Section id="kontakt" title="Kontakt" variant="muted">
      <ul className="contact-list">
        {items.map((item) => (
          <li key={item.label} className="contact-list__item">
            <span className="contact-list__label">{item.label}</span>
            {item.href ? (
              <a href={item.href} className="contact-list__value">
                {item.value}
              </a>
            ) : (
              <span className="contact-list__value">{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contact;
