import { partners } from "../data";

function Partners() {
  if (partners.length === 0) return null;

  return (
    <section id="partners" className="sg-band sg-partners">
      <div className="sg-band__inner">
        <p className="sg-eyebrow sg-partners__eyebrow">Våra partners</p>
        <ul className="sg-partners__grid">
          {partners.map((partner, i) => (
            <li className="sg-partners__cell" key={`${partner.name}-${i}`}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="sg-partners__logo"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
