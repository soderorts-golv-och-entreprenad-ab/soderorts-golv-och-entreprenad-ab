import { certificates } from "../data";

function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <section id="certifikat" className="sg-band sg-certs">
      <div className="sg-band__inner">
        <p className="sg-eyebrow sg-certs__eyebrow">Certifikat & medlemskap</p>
        <ul className="sg-certs__grid">
          {certificates.map((cert, i) => (
            <li className="sg-certs__cell" key={`${cert.name}-${i}`}>
              <img
                src={cert.logo}
                alt={cert.name}
                className="sg-certs__logo"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificates;
